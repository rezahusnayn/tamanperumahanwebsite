(function () {
  'use strict';

  var S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* Ikon garis (gaya Lucide), dilukis sendiri supaya tiada kebergantungan. */
  var ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h5v-6h4v6h5V9.5"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    map: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    megaphone: '<path d="M3 11v3l15 5V6L3 11z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/><path d="M21 9v6"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    alert: '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
    building: '<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || 'icon') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[name] || '') + '</svg>';
  }
  function decorate(root) {
    $$('[data-icon]', root).forEach(function (el) {
      if (el.querySelector('svg')) return;
      el.insertAdjacentHTML('afterbegin', icon(el.getAttribute('data-icon')));
    });
  }

  // Beri setiap kad indeks (--i) supaya ia muncul satu demi satu (maks. 8 langkah)
  function stagger(root) {
    $$('.tile-grid > li, .card-grid > li, .news-grid > li, .result-list > li', root).forEach(function (li, i) {
      li.style.setProperty('--i', Math.min(i % 12, 8));
    });
  }

  var href = function (sec, page) { return '#/' + sec.slug + (page ? '/' + page.slug : ''); };

  /* ---------- Bina menu desktop, laci telefon dan footer daripada data ---------- */
  function buildMainNav() {
    var html = '<li><a class="nav-top" href="#/" data-route="">' + 'Utama</a></li>';
    S.sections.forEach(function (sec) {
      var id = 'dd-' + sec.slug;
      html += '<li class="has-dd" data-sec="' + sec.slug + '">' +
        '<button type="button" class="nav-top navbtn" aria-expanded="false" aria-controls="' + id + '">' +
        esc(sec.label) + icon('chevronDown', 'icon chev') + '</button>' +
        '<div class="dropdown" id="' + id + '" hidden>' +
        '<p class="dd-desc">' + esc(sec.desc) + '</p><ul>' +
        '<li><a href="' + href(sec) + '" data-route="' + sec.slug + '">Ringkasan ' + esc(sec.label) + '</a></li>' +
        sec.pages.map(function (p) {
          return '<li><a href="' + href(sec, p) + '" data-route="' + sec.slug + '/' + p.slug + '">' + esc(p.label) + '</a></li>';
        }).join('') + '</ul></div></li>';
    });
    $('#mainnav-list').innerHTML = html;
  }

  function buildDrawer() {
    var html = '<li><a class="drawer-link drawer-top" href="#/" data-route="">' + icon('home') + 'Utama</a></li>';
    S.sections.forEach(function (sec) {
      var id = 'acc-' + sec.slug;
      html += '<li class="acc" data-sec="' + sec.slug + '">' +
        '<button type="button" class="acc-btn" aria-expanded="false" aria-controls="' + id + '">' +
        icon(sec.icon) + '<span>' + esc(sec.label) + '</span>' + icon('chevronDown', 'icon chev') + '</button>' +
        '<ul class="acc-panel" id="' + id + '" hidden>' +
        '<li><a class="drawer-link" href="' + href(sec) + '" data-route="' + sec.slug + '">Ringkasan ' + esc(sec.label) + '</a></li>' +
        sec.pages.map(function (p) {
          return '<li><a class="drawer-link" href="' + href(sec, p) + '" data-route="' + sec.slug + '/' + p.slug + '">' + esc(p.label) + '</a></li>';
        }).join('') + '</ul></li>';
    });
    html += '<li class="drawer-extra"><a class="drawer-link" href="#/cari" data-route="cari">' + icon('search') + 'Cari dalam laman</a></li>' +
      '<li><a class="drawer-link" href="#/peta-laman" data-route="peta-laman">' + icon('map') + 'Peta Laman (semua halaman)</a></li>';
    $('#drawer-list').innerHTML = html;
  }

  function buildFooter() {
    var links = S.sections.map(function (sec) {
      return '<li><a href="' + href(sec) + '">' + esc(sec.label) + '</a></li>';
    }).join('');
    $('#site-footer').innerHTML =
      '<div class="wrap">' +
      '<div class="f-top">' +
      '<div class="f-about"><p class="f-name">' + esc(S.org) + '</p>' +
      '<p class="ph-inline">[Alamat surat-menyurat persatuan]</p>' +
      '<p class="ph-inline">[Emel rasmi] · [No. telefon rasmi]</p>' +
      '<p><a class="f-sos" href="#/hubungi/kecemasan">' + icon('phone') + 'Senarai nombor kecemasan</a></p></div>' +
      '<ul class="f-links">' + links + '</ul></div>' +
      '<div class="f-bottom"><ul class="f-legal">' +
      '<li><a href="#/peta-laman">Peta Laman</a></li><li><a href="#/privasi">Dasar Privasi &amp; Penafian</a></li><li><a href="#/cari">Cari</a></li></ul>' +
      '<p>© [Tahun] ' + esc(S.org) + ' · No. pendaftaran: [PPM-xxx-xx-xxxxxxxx] · Dikemas kini: [tarikh]</p></div>' +
      '</div>';
  }

  /* ---------- Komponen halaman ---------- */
  function crumbs(list) {
    return '<nav class="breadcrumb" aria-label="Laluan halaman"><ol>' +
      list.map(function (c, i) {
        var last = i === list.length - 1;
        return '<li>' + (last ? '<span aria-current="page">' + esc(c.label) + '</span>' : '<a href="' + c.href + '">' + esc(c.label) + '</a>') + '</li>';
      }).join('') + '</ol></nav>';
  }

  function needsBlock(needs, title) {
    return '<section class="ph-block" aria-labelledby="ph-title"><div class="ph-head"><span class="ph-tag">PLACEHOLDER</span>' +
      '<h2 id="ph-title">' + esc(title || 'Kandungan yang akan diletakkan di sini') + '</h2></div><ul class="ph-list">' +
      needs.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') +
      '</ul><p class="ph-note">Senarai ini ialah kandungan yang perlu diminta daripada pihak taman.</p></section>';
  }

  function phImage(label, ratio) {
    return '<div class="ph-img" style="aspect-ratio:' + (ratio || '16 / 9') + '" role="img" aria-label="Placeholder gambar: ' + esc(label) + '">' +
      icon('image') + '<span>[Gambar: ' + esc(label) + ']</span></div>';
  }

  function sectionCards(sec) {
    return '<ul class="card-grid">' + sec.pages.map(function (p) {
      return '<li><a class="nav-card" href="' + href(sec, p) + '"><span class="nav-card-title">' + esc(p.label) + '</span>' +
        '<span class="nav-card-desc">' + esc(p.desc) + '</span>' + icon('chevronRight', 'icon nav-card-arrow') + '</a></li>';
    }).join('') + '</ul>';
  }

  /* ---------- Halaman ---------- */
  function searchForm(id, value) {
    return '<form class="search-form" role="search" data-search><label for="' + id + '">Apa yang anda cari?</label>' +
      '<div class="search-row"><input id="' + id + '" type="search" autocomplete="off" placeholder="cth. yuran, dewan" value="' + esc(value || '') + '">' +
      '<button type="submit" class="btn" data-icon="search">Cari</button></div></form>';
  }

  function homeView() {
    var quick = S.quickLinks.map(function (q) {
      return '<li><a class="tile' + (q.tone === 'sos' ? ' tile-sos' : '') + '" href="' + q.href + '">' +
        '<span class="tile-icon">' + icon(q.icon) + '</span><span class="tile-label">' + esc(q.label) + '</span></a></li>';
    }).join('');
    var news = [1, 2].map(function (n) {
      return '<li class="news-card"><p class="news-date ph-inline">[Tarikh]</p><h3>[Tajuk pengumuman ' + n + ']</h3>' +
        '<p class="ph-inline">[Ringkasan 1–2 ayat]</p><a href="#/aktiviti/pengumuman">Baca pengumuman<span class="visually-hidden"> ' + n + '</span></a></li>';
    }).join('');
    return {
      title: 'Utama',
      html:
        '<section class="hero"><div class="wrap"><div class="hero-inner">' +
        '<p class="eyebrow">Laman rasmi ' + esc(S.org) + '</p>' +
        '<h1>Selamat datang ke ' + esc(S.name) + '</h1>' +
        searchForm('home-q') + '</div></div></section>' +
        '<div class="wrap page-pad">' +
        '<section aria-labelledby="h-quick"><h2 id="h-quick">Capaian Pantas</h2><ul class="tile-grid">' + quick + '</ul></section>' +
        '<section aria-labelledby="h-news" class="mt"><div class="sec-head"><h2 id="h-news">Pengumuman Terkini</h2>' +
        '<a class="more-link" href="#/aktiviti/pengumuman">Semua pengumuman' + icon('chevronRight') + '</a></div>' +
        '<ul class="news-grid">' + news + '</ul></section>' +
        '</div>'
    };
  }

  function sectionView(sec) {
    return {
      title: sec.label,
      html: '<div class="wrap page-pad">' + crumbs([{ label: 'Utama', href: '#/' }, { label: sec.label }]) +
        '<h1>' + esc(sec.label) + '</h1><p class="lead">' + esc(sec.desc) + '</p>' +
        '<h2 class="mt-s">Halaman dalam bahagian ini</h2>' + sectionCards(sec) + '</div>'
    };
  }

  function leafView(sec, page) {
    var local = '<nav class="localnav" aria-label="Halaman dalam ' + esc(sec.label) + '"><h2 class="localnav-title">' + esc(sec.label) + '</h2><ul>' +
      '<li><a href="' + href(sec) + '">Ringkasan ' + esc(sec.label) + '</a></li>' +
      sec.pages.map(function (p) {
        return '<li><a href="' + href(sec, p) + '"' + (p === page ? ' aria-current="page"' : '') + '>' + esc(p.label) + '</a></li>';
      }).join('') + '</ul></nav>';
    return {
      title: page.label,
      html: '<div class="wrap page-pad">' +
        crumbs([{ label: 'Utama', href: '#/' }, { label: sec.label, href: href(sec) }, { label: page.label }]) +
        '<div class="leaf"><div class="leaf-main"><h1>' + esc(page.label) + '</h1><p class="lead">' + esc(page.desc) + '</p>' +
        needsBlock(page.needs) +
        '<p class="updated ph-inline">Dikemas kini: [tarikh]</p></div>' +
        '<aside class="leaf-side">' + local + '</aside></div></div>'
    };
  }

  function allPages() {
    var list = [];
    S.sections.forEach(function (sec) {
      list.push({ label: sec.label, desc: sec.desc, href: href(sec), path: 'Utama › ' + sec.label, text: sec.label + ' ' + sec.desc });
      sec.pages.forEach(function (p) {
        list.push({ label: p.label, desc: p.desc, href: href(sec, p), path: 'Utama › ' + sec.label + ' › ' + p.label, text: [p.label, p.desc, sec.label].concat(p.needs).join(' ') });
      });
    });
    return list;
  }

  function searchView(query) {
    return {
      title: 'Cari',
      html: '<div class="wrap page-pad narrow">' + crumbs([{ label: 'Utama', href: '#/' }, { label: 'Cari' }]) +
        '<h1>Cari dalam laman</h1>' +
        searchForm('q', query) +
        '<p id="search-status" class="search-status" role="status" aria-live="polite"></p>' +
        '<ul class="result-list" id="results"></ul></div>',
      after: function () {
        var pages = allPages();
        var input = $('#q');
        function run() {
          var q = input.value.trim().toLowerCase();
          var res = q ? pages.filter(function (p) { return p.text.toLowerCase().indexOf(q) !== -1; }) : [];
          $('#results').innerHTML = res.map(function (r) {
            return '<li><a class="result" href="' + r.href + '"><span class="result-title">' + esc(r.label) + '</span>' +
              '<span class="result-path">' + esc(r.path) + '</span><span class="result-desc">' + esc(r.desc) + '</span></a></li>';
          }).join('');
          stagger($('#results'));
          $('#search-status').textContent = q ? (res.length ? res.length + ' halaman dijumpai.' : 'Tiada halaman dijumpai. Cuba perkataan lain, atau lihat Peta Laman.') : '';
        }
        input.addEventListener('input', run);
        run();
      }
    };
  }

  function sitemapView() {
    var html = S.sections.map(function (sec) {
      return '<li><a href="' + href(sec) + '">' + esc(sec.label) + '</a><ul>' +
        sec.pages.map(function (p) { return '<li><a href="' + href(sec, p) + '">' + esc(p.label) + '</a></li>'; }).join('') + '</ul></li>';
    }).join('');
    return {
      title: 'Peta Laman',
      html: '<div class="wrap page-pad narrow">' + crumbs([{ label: 'Utama', href: '#/' }, { label: 'Peta Laman' }]) +
        '<h1>Peta Laman</h1><p class="lead">Semua halaman dalam laman web ini.</p>' +
        '<ul class="sitemap"><li><a href="#/">Utama</a></li>' + html +
        '<li><a href="#/privasi">Dasar Privasi &amp; Penafian</a></li></ul></div>'
    };
  }

  function privacyView() {
    return {
      title: 'Dasar Privasi & Penafian',
      html: '<div class="wrap page-pad narrow">' + crumbs([{ label: 'Utama', href: '#/' }, { label: 'Dasar Privasi & Penafian' }]) +
        '<h1>Dasar Privasi &amp; Penafian</h1>' +
        needsBlock(['Siapa mengurus maklumat penduduk dan untuk tujuan apa', 'Kebenaran memaparkan nama, nombor dan gambar', 'Penafian: maklumat boleh berubah; rujuk jawatankuasa untuk pengesahan', 'Cara meminta maklumat dibuang']) +
        '</div>'
    };
  }

  function notFoundView() {
    return {
      title: 'Halaman tidak dijumpai',
      html: '<div class="wrap page-pad narrow"><h1>Halaman tidak dijumpai</h1><p class="lead">Maaf, halaman ini tiada atau telah dipindahkan.</p>' +
        '<p><a class="btn" href="#/">Kembali ke Laman Utama</a> <a class="btn btn-ghost" href="#/peta-laman">Lihat Peta Laman</a></p></div>'
    };
  }

  /* ---------- Penghala (hash) ---------- */
  var main = $('#kandungan');
  var first = true;

  function route() {
    var h = location.hash;
    if (h && h.indexOf('#/') !== 0) return null; // abaikan #kandungan dsb.
    var qs = h.split('?')[1] || '';
    var parts = h.split('?')[0].replace(/^#\/?/, '').split('/').filter(Boolean);
    var query = new URLSearchParams(qs).get('q') || '';
    var view;
    if (!parts.length) view = homeView();
    else if (parts[0] === 'cari') view = searchView(query);
    else if (parts[0] === 'peta-laman') view = sitemapView();
    else if (parts[0] === 'privasi') view = privacyView();
    else {
      var sec = S.sections.filter(function (s) { return s.slug === parts[0]; })[0];
      if (!sec) view = notFoundView();
      else if (parts.length === 1) view = sectionView(sec);
      else {
        var page = sec.pages.filter(function (p) { return p.slug === parts[1]; })[0];
        view = page ? leafView(sec, page) : notFoundView();
      }
    }
    return { parts: parts, view: view };
  }

  function render() {
    var r = route();
    if (!r) return;
    main.innerHTML = r.view.html;
    decorate(main);
    // Animasi masuk halaman: mula semula setiap kali halaman bertukar
    main.classList.remove('page-enter');
    void main.offsetWidth;
    main.classList.add('page-enter');
    stagger(main);
    document.title = r.view.title + ' — ' + S.name;
    markActive(r.parts.join('/'), r.parts[0] || '');
    // Laman Utama sudah ada bar carian besar, jadi carian di header disembunyikan di situ.
    document.body.classList.toggle('is-home', !r.parts.length);
    $('#hdr-q').value = '';
    closeDropdowns();
    closeDrawer(false);
    if (r.view.after) r.view.after();
    if (!first) {
      window.scrollTo(0, 0);
      var h1 = main.querySelector('h1');
      if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
    }
    first = false;
  }

  function markActive(path, sec) {
    $$('[data-route]').forEach(function (a) {
      if (a.getAttribute('data-route') === path) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    $$('.has-dd').forEach(function (li) { li.classList.toggle('is-active', li.getAttribute('data-sec') === sec); });
    $$('.acc').forEach(function (li) {
      var on = li.getAttribute('data-sec') === sec;
      li.classList.toggle('is-active', on);
      setAcc(li.querySelector('.acc-btn'), on);
    });
  }

  /* ---------- Dropdown desktop (klik, bukan hover) ---------- */
  function closeDropdowns(except) {
    $$('.navbtn[aria-expanded="true"]').forEach(function (b) {
      if (b === except) return;
      b.setAttribute('aria-expanded', 'false');
      document.getElementById(b.getAttribute('aria-controls')).hidden = true;
    });
  }
  var nav = $('#mainnav');
  nav.addEventListener('click', function (e) {
    var b = e.target.closest('.navbtn');
    if (!b) return;
    var open = b.getAttribute('aria-expanded') === 'true';
    closeDropdowns(b);
    b.setAttribute('aria-expanded', String(!open));
    document.getElementById(b.getAttribute('aria-controls')).hidden = open;
  });
  nav.addEventListener('focusout', function (e) {
    var li = e.target.closest('.has-dd');
    if (li && e.relatedTarget && !li.contains(e.relatedTarget)) {
      var b = li.querySelector('.navbtn');
      b.setAttribute('aria-expanded', 'false');
      document.getElementById(b.getAttribute('aria-controls')).hidden = true;
    }
  });
  nav.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowDown') return;
    var b = e.target.closest('.navbtn');
    if (!b) return;
    e.preventDefault();
    if (b.getAttribute('aria-expanded') !== 'true') b.click();
    var first = document.getElementById(b.getAttribute('aria-controls')).querySelector('a');
    if (first) first.focus();
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('#mainnav')) closeDropdowns(); });

  /* ---------- Laci telefon ---------- */
  var drawer = $('#drawer');
  var menuBtn = $('#menu-btn');
  var outside = ['#site-header', '#kandungan', '#site-footer', '.skip-link'];
  var drawerOpen = false;
  var closeTimer;

  function setAcc(btn, on) {
    btn.setAttribute('aria-expanded', String(on));
    document.getElementById(btn.getAttribute('aria-controls')).hidden = !on;
  }

  function openDrawer() {
    clearTimeout(closeTimer);
    drawerOpen = true;
    drawer.hidden = false;
    void drawer.offsetWidth; // paksa reflow supaya peralihan berjalan (lebih stabil daripada rAF)
    drawer.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    outside.forEach(function (s) { var el = $(s); if (el) el.inert = true; });
    document.body.classList.add('no-scroll');
    $('.drawer-head [data-close]').focus();
  }
  function closeDrawer(returnFocus) {
    if (!drawerOpen) return;
    drawerOpen = false;
    drawer.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    outside.forEach(function (s) { var el = $(s); if (el) el.inert = false; });
    document.body.classList.remove('no-scroll');
    closeTimer = setTimeout(function () { if (!drawerOpen) drawer.hidden = true; }, 260);
    if (returnFocus !== false) menuBtn.focus();
  }
  menuBtn.addEventListener('click', function () { drawerOpen ? closeDrawer() : openDrawer(); });
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) { closeDrawer(); return; }
    var b = e.target.closest('.acc-btn');
    if (b) setAcc(b, b.getAttribute('aria-expanded') !== 'true');
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', function (m) { if (m.matches) closeDrawer(false); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (drawerOpen) { closeDrawer(); return; }
    var openBtn = $('.navbtn[aria-expanded="true"]');
    if (openBtn) { closeDropdowns(); openBtn.focus(); }
  });

  /* ---------- Borang carian (header, laman utama, halaman Cari) ---------- */
  document.addEventListener('submit', function (e) {
    var f = e.target.closest('[data-search]');
    if (!f) return;
    e.preventDefault();
    var q = f.querySelector('input').value.trim();
    var target = '#/cari' + (q ? '?q=' + encodeURIComponent(q) : '');
    if (location.hash === target) { var inp = $('#q'); if (inp) inp.focus(); } else location.hash = target;
  });

  /* ---------- Bayang header ketika skrol ---------- */
  var header = $('#site-header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 4); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Pautan langkau ---------- */
  $('[data-skip]').addEventListener('click', function (e) { e.preventDefault(); main.focus(); main.scrollIntoView(); });

  /* ---------- Mula ---------- */
  buildMainNav();
  buildDrawer();
  buildFooter();
  decorate(document);
  window.addEventListener('hashchange', render);
  render();
})();

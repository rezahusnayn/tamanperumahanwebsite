// Jana KANDUNGAN-DIPERLUKAN.md daripada js/data.js (satu sumber data).
// Jalankan: node tools/buat-senarai-kandungan.js
'use strict';
const fs = require('fs');
const path = require('path');
const SITE = require('../js/data.js');

const L = [];
L.push('# Senarai Kandungan Diperlukan — Laman Web ' + SITE.name, '');
L.push('Kepada: Jawatankuasa ' + SITE.org, '');
L.push('Kami sedang membina laman web taman. Navigasi sudah siap; kami perlukan bahan di bawah untuk mengisi setiap halaman.');
L.push('Tandakan ✔ apabila dihantar. Item bertanda *(pilihan)* boleh ditangguhkan.', '');
L.push('**Cara hantar:** fail asal (PDF/Word/gambar resolusi penuh) melalui emel atau Google Drive. Elakkan gambar yang dihantar semula melalui WhatsApp kerana kualitinya rendah.', '');
L.push('**Kebenaran (PDPA):** dapatkan persetujuan sebelum menghantar nama, nombor telefon atau gambar individu, terutamanya kanak-kanak. Gunakan nombor/emel rasmi persatuan jika boleh.', '');
L.push('---', '');

let n = 0;
const block = (title, needs) => {
  L.push('### ' + title, '');
  needs.forEach((x) => { n++; L.push('- [ ] ' + x.replace(/\(pilihan[^)]*\)/i, '*$&*')); });
  L.push('');
};

L.push('## 1. Umum', '');
block(SITE.global.label, SITE.global.needs);
block('Laman Utama', SITE.home.needs);

SITE.sections.forEach((sec, i) => {
  L.push('## ' + (i + 2) + '. ' + sec.label, '');
  sec.pages.forEach((p) => block(p.label, p.needs));
});

L.push('## ' + (SITE.sections.length + 2) + '. Dasar Privasi & Penafian', '');
block('Dasar Privasi & Penafian', [
  'Siapa mengurus maklumat penduduk dan untuk tujuan apa',
  'Kebenaran memaparkan nama, nombor dan gambar',
  'Penafian: maklumat boleh berubah; rujuk jawatankuasa untuk pengesahan',
  'Cara meminta maklumat dibuang'
]);

L.push('---', '', 'Jumlah item: ' + n + '. Soalan? Hubungi sukarelawan pembina laman: [nama & nombor anda].', '');

const out = path.join(__dirname, '..', 'KANDUNGAN-DIPERLUKAN.md');
fs.writeFileSync(out, L.join('\n'), 'utf8');
console.log('Ditulis: ' + out + ' (' + n + ' item)');

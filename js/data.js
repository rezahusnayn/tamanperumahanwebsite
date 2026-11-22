/* Satu sumber data untuk navigasi, halaman placeholder dan senarai kandungan.
   Ubah di sini sahaja — menu desktop, laci telefon, footer, peta laman dan
   KANDUNGAN-DIPERLUKAN.md semuanya dijana daripada fail ini. */
(function (root) {
  'use strict';

  var SITE = {
    name: '[Nama Taman]',
    org: 'Persatuan Penduduk [Nama Taman]',

    home: {
      needs: [
        'Nama rasmi taman dan nama persatuan penduduk (seperti dalam pendaftaran)',
        'Ayat alu-aluan ringkas (1–2 ayat) untuk bahagian atas laman utama',
        '1 gambar utama taman (mendatar, resolusi tinggi, dengan kebenaran guna)',
        'Mesej ringkas daripada Pengerusi (pilihan, 50–100 patah perkataan)'
      ]
    },

    sections: [
      {
        slug: 'tentang', label: 'Tentang Taman', icon: 'info',
        desc: 'Kenali taman kita: latar belakang, peta, fasiliti dan peraturan.',
        pages: [
          {
            slug: 'profil', label: 'Profil Taman',
            desc: 'Latar belakang taman dan persatuan penduduk.',
            needs: [
              'Nama rasmi persatuan dan nombor pendaftaran (ROS / PBT), jika ada',
              'Latar belakang taman (2–3 perenggan): tahun dibuka, pemaju, sejarah ringkas',
              'Fakta ringkas: bilangan rumah/lot, bilangan fasa, nama jalan utama',
              'Visi dan misi persatuan',
              'Logo persatuan (fail asal PNG atau SVG, bukan tangkap layar)',
              '1–3 gambar suasana taman'
            ]
          },
          {
            slug: 'peta', label: 'Peta & Lokasi',
            desc: 'Alamat, arah ke taman dan pelan susun atur.',
            needs: [
              'Alamat penuh dan poskod taman',
              'Pautan Google Maps dan Waze ke pintu masuk utama',
              'Pelan susun atur taman (nama jalan, fasa, lokasi fasiliti) — PDF atau gambar',
              'Lokasi pintu masuk / pondok pengawal dan waktu operasinya',
              'Arah ke taman: jalan utama berdekatan, perhentian bas/stesen terdekat'
            ]
          },
          {
            slug: 'fasiliti', label: 'Fasiliti Taman',
            desc: 'Dewan, surau, taman permainan, gelanggang dan lain-lain.',
            needs: [
              'Senarai semua fasiliti (cth. dewan, surau, taman permainan, gelanggang, padang, tempat letak kereta)',
              'Bagi setiap fasiliti: lokasi, waktu dibuka, siapa boleh guna, 1 gambar',
              'Cara menempah dewan/gelanggang dan kadar sewa (jika ada)',
              'Peraturan penggunaan fasiliti',
              'Nama jawatan dan nombor rasmi untuk urusan tempahan'
            ]
          },
          {
            slug: 'peraturan', label: 'Peraturan & Garis Panduan',
            desc: 'Peraturan penduduk, keselamatan dan kutipan sampah.',
            needs: [
              'Peraturan am penduduk (sampah, letak kenderaan, ubah suai rumah, haiwan peliharaan)',
              'Garis panduan keselamatan (akses pengawal, pendaftaran pelawat)',
              'Jadual kutipan sampah domestik, sampah pukal dan kitar semula',
              'Perlembagaan / undang-undang kecil persatuan (PDF)'
            ]
          }
        ]
      },
      {
        slug: 'jawatankuasa', label: 'Jawatankuasa', icon: 'users',
        desc: 'Siapa yang menguruskan persatuan dan cara menjadi ahli.',
        pages: [
          {
            slug: 'carta', label: 'Carta Organisasi',
            desc: 'Struktur jawatankuasa bagi sesi semasa.',
            needs: [
              'Struktur jawatankuasa sesi semasa (Pengerusi, Timbalan, Setiausaha, Bendahari, AJK)',
              'Tempoh sesi (cth. 2025–2027)',
              'Nama yang dibenarkan dipaparkan — dapatkan persetujuan setiap ahli',
              'Gambar ahli jawatankuasa (pilihan, dengan kebenaran)'
            ]
          },
          {
            slug: 'biro', label: 'Biro & Tanggungjawab',
            desc: 'Biro atau unit kerja dan peranan masing-masing.',
            needs: [
              'Senarai biro/unit (cth. Keselamatan, Kebersihan, Kebajikan, Sukan & Rekreasi, Wanita, Belia)',
              'Ketua biro dan tanggungjawab ringkas setiap biro',
              'Saluran hubungan setiap biro (nombor/emel rasmi; nombor peribadi hanya jika dipersetujui)'
            ]
          },
          {
            slug: 'keahlian', label: 'Keahlian & Yuran',
            desc: 'Siapa layak, kadar yuran dan cara mendaftar.',
            needs: [
              'Syarat kelayakan menjadi ahli',
              'Kadar yuran keahlian / yuran bulanan (cth. yuran pengawal) dan kegunaannya',
              'Cara bayaran (nama akaun persatuan, bank) — mesti disahkan oleh Bendahari',
              'Borang keahlian (PDF)',
              'Manfaat menjadi ahli'
            ]
          }
        ]
      },
      {
        slug: 'aktiviti', label: 'Aktiviti & Berita', icon: 'calendar',
        desc: 'Pengumuman terkini, program akan datang dan galeri aktiviti.',
        pages: [
          {
            slug: 'pengumuman', label: 'Pengumuman',
            desc: 'Makluman dan berita terkini untuk penduduk.',
            needs: [
              '3–5 pengumuman terkini (tajuk, tarikh, isi ringkas, lampiran jika ada)',
              'Siapa yang meluluskan pengumuman sebelum disiarkan',
              'Kekerapan kemas kini (cth. setiap minggu)'
            ]
          },
          {
            slug: 'kalendar', label: 'Kalendar Aktiviti',
            desc: 'Tarikh aktiviti dan program akan datang.',
            needs: [
              'Senarai aktiviti tahunan (cth. gotong-royong, rumah terbuka, Hari Keluarga, AGM)',
              'Bagi setiap aktiviti: tarikh, masa, tempat dan orang untuk dihubungi',
              'Aktiviti berkala (cth. senaman pagi, kuliah, rondaan)'
            ]
          },
          {
            slug: 'program', label: 'Program & Laporan',
            desc: 'Program utama persatuan dan laporan aktiviti lepas.',
            needs: [
              'Penerangan program utama persatuan',
              'Laporan ringkas aktiviti lepas (apa, bila, berapa orang menyertai)',
              'Rakan kongsi / penaja (dengan kebenaran memaparkan logo)'
            ]
          },
          {
            slug: 'galeri', label: 'Galeri Gambar',
            desc: 'Gambar aktiviti mengikut acara.',
            needs: [
              'Gambar mengikut acara (nama acara dan tarikh bagi setiap album)',
              'Kebenaran menyiarkan gambar, terutamanya gambar kanak-kanak',
              'Kapsyen ringkas bagi gambar utama',
              'Fail gambar asal (bukan dimampatkan daripada WhatsApp, jika boleh)'
            ]
          }
        ]
      },
      {
        slug: 'dokumen', label: 'Dokumen', icon: 'file',
        desc: 'Arkib rasmi: laporan AGM, minit mesyuarat, kewangan dan borang.',
        pages: [
          {
            slug: 'agm', label: 'Laporan AGM',
            desc: 'Laporan Mesyuarat Agung Tahunan mengikut tahun.',
            needs: [
              'Laporan Mesyuarat Agung Tahunan (PDF) bagi setiap tahun yang ada',
              'Notis AGM akan datang (tarikh, tempat, agenda)',
              'Keputusan pemilihan jawatankuasa'
            ]
          },
          {
            slug: 'minit', label: 'Minit Mesyuarat',
            desc: 'Minit mesyuarat jawatankuasa yang dikongsi umum.',
            needs: [
              'Minit mesyuarat jawatankuasa yang boleh dikongsi umum (PDF)',
              'Ketetapan jawatankuasa: dokumen mana untuk umum dan mana untuk ahli sahaja'
            ]
          },
          {
            slug: 'kewangan', label: 'Penyata Kewangan',
            desc: 'Penyata kewangan tahunan persatuan.',
            needs: [
              'Penyata kewangan tahunan yang telah diaudit / disahkan (PDF)',
              'Ringkasan pendapatan dan perbelanjaan (pilihan)'
            ]
          },
          {
            slug: 'borang', label: 'Borang',
            desc: 'Borang untuk dimuat turun dan diisi.',
            needs: [
              'Borang yang berkaitan: keahlian, tempahan dewan, aduan, kebenaran ubah suai, pendaftaran kenderaan/pelawat',
              'Fail asal setiap borang (Word atau PDF)'
            ]
          },
          {
            slug: 'notis', label: 'Notis & Pekeliling',
            desc: 'Surat pekeliling dan notis rasmi kepada penduduk.',
            needs: [
              'Surat pekeliling kepada penduduk (PDF, dengan tarikh)',
              'Notis daripada PBT, polis atau agensi lain yang ingin dikongsi'
            ]
          }
        ]
      },
      {
        slug: 'hubungi', label: 'Hubungi', icon: 'phone',
        desc: 'Nombor penting, cara hubungi jawatankuasa dan saluran aduan.',
        pages: [
          {
            slug: 'kecemasan', label: 'Kontak Penting & Kecemasan',
            desc: 'Talian kecemasan, pengawal, polis, klinik dan PBT.',
            needs: [
              'Talian kecemasan umum (999, Bomba 994) — standard, sahkan sahaja',
              'Balai polis terdekat: nama, nombor telefon, alamat',
              'Pondok pengawal keselamatan: nombor dan waktu operasi',
              'Klinik kesihatan dan hospital terdekat',
              'Pihak Berkuasa Tempatan (majlis bandaraya / perbandaran) dan talian aduannya',
              'Utiliti: TNB, bekalan air, pembetungan, kontraktor kutipan sampah',
              'Rukun Tetangga / KRT (jika ada)',
              'Bagi setiap nombor: nama, fungsi dan waktu operasi'
            ]
          },
          {
            slug: 'jawatankuasa', label: 'Hubungi Jawatankuasa',
            desc: 'Alamat, emel dan nombor rasmi persatuan.',
            needs: [
              'Alamat surat-menyurat persatuan',
              'Emel rasmi dan nombor telefon / WhatsApp rasmi',
              'Waktu boleh dihubungi',
              'Pautan media sosial rasmi (Facebook, Telegram, Saluran WhatsApp)'
            ]
          },
          {
            slug: 'aduan', label: 'Aduan & Maklum Balas',
            desc: 'Cara membuat aduan dan menghantar cadangan.',
            needs: [
              'Jenis aduan yang diurus persatuan (cth. lampu jalan, sampah, keselamatan, kerosakan fasiliti)',
              'Saluran aduan (borang, WhatsApp, emel) dan tempoh jangkaan maklum balas',
              'Saluran rasmi PBT untuk aduan di luar bidang persatuan'
            ]
          },
          {
            slug: 'soalan', label: 'Soalan Lazim',
            desc: 'Jawapan kepada soalan yang kerap ditanya.',
            needs: [
              '8–10 soalan yang paling kerap ditanya penduduk, beserta jawapan'
            ]
          }
        ]
      }
    ],

    quickLinks: [
      { label: 'Nombor Kecemasan', href: '#/hubungi/kecemasan', icon: 'alert', tone: 'sos' },
      { label: 'Pengumuman', href: '#/aktiviti/pengumuman', icon: 'megaphone' },
      { label: 'Peta Taman', href: '#/tentang/peta', icon: 'map' },
      { label: 'Kalendar Aktiviti', href: '#/aktiviti/kalendar', icon: 'calendar' },
      { label: 'Buat Aduan', href: '#/hubungi/aduan', icon: 'message' },
      { label: 'Borang', href: '#/dokumen/borang', icon: 'file' },
      { label: 'Fasiliti', href: '#/tentang/fasiliti', icon: 'building' },
      { label: 'Yuran & Keahlian', href: '#/jawatankuasa/keahlian', icon: 'users' }
    ],

    global: {
      label: 'Seluruh laman (header & footer)',
      needs: [
        'Logo persatuan (fail asal)',
        'Nama berdaftar persatuan dan nombor pendaftaran',
        'Warna rasmi persatuan (jika ada)',
        'Siapa yang menyelenggara laman web dan siapa yang meluluskan kandungan',
        'Kenyataan privasi: siapa mengurus data penduduk dan cara menghubunginya (rujuk PDPA)'
      ]
    },

    extraPages: [
      { slug: 'cari', label: 'Cari' },
      { slug: 'peta-laman', label: 'Peta Laman' },
      { slug: 'privasi', label: 'Dasar Privasi & Penafian' }
    ]
  };

  root.SITE = SITE;
  if (typeof module !== 'undefined' && module.exports) module.exports = SITE;
})(typeof window !== 'undefined' ? window : globalThis);

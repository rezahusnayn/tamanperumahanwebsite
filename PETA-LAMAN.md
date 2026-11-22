# Peta Laman & Corak Navigasi — Laman Web [Nama Taman]

Prototaip navigasi sahaja. Semua kandungan ialah placeholder berlabel. Data menu ada dalam `js/data.js`: ubah fail itu sahaja, dan menu desktop, laci telefon, footer, Peta Laman serta `KANDUNGAN-DIPERLUKAN.md` akan dikemas kini sekali.

## 1. Peta laman

Menu utama ada **6 item**, iaitu Utama dan 5 bahagian. Setiap bahagian mempunyai 3–5 sub-halaman, jadi kedalaman maksimum hanya 2 klik dari Laman Utama.

```
Utama  (#/)
│   Capaian Pantas · Pengumuman Terkini · Terokai Laman
│
├── Tentang Taman  (#/tentang)
│   ├── Profil Taman
│   ├── Peta & Lokasi
│   ├── Fasiliti Taman
│   └── Peraturan & Garis Panduan
│
├── Jawatankuasa  (#/jawatankuasa)
│   ├── Carta Organisasi
│   ├── Biro & Tanggungjawab
│   └── Keahlian & Yuran
│
├── Aktiviti & Berita  (#/aktiviti)
│   ├── Pengumuman
│   ├── Kalendar Aktiviti
│   ├── Program & Laporan
│   └── Galeri Gambar
│
├── Dokumen  (#/dokumen)          ← arkib
│   ├── Laporan AGM
│   ├── Minit Mesyuarat
│   ├── Penyata Kewangan
│   ├── Borang
│   └── Notis & Pekeliling
│
└── Hubungi  (#/hubungi)
    ├── Kontak Penting & Kecemasan
    ├── Hubungi Jawatankuasa
    ├── Aduan & Maklum Balas
    └── Soalan Lazim

Utiliti (header/footer sahaja, bukan menu utama):
    Cari (#/cari) · Peta Laman (#/peta-laman) · Dasar Privasi & Penafian (#/privasi)
```

**Sebab susunan ini:**
- **Pengumuman diletakkan di bawah "Aktiviti & Berita"** dan bukan sebagai menu sendiri. Ini mengekalkan menu pada 6 item. Pengumuman terkini juga dipaparkan di Laman Utama dan dalam Capaian Pantas.
- **Peta dan Fasiliti diletakkan di bawah "Tentang Taman"** kerana kedua-duanya ialah maklumat tetap tentang taman.
- **Kontak Kecemasan diulang di 3 tempat:** jubin merah pertama dalam Capaian Pantas, menu Hubungi dan footer. Inilah maklumat yang paling penting untuk warga emas.
- **Label menggunakan perkataan harian** seperti "Dokumen" dan "Hubungi", bukan istilah teknikal seperti "Repositori" atau "Portal".

## 2. Corak navigasi

| Elemen | Telefon (< 1024px, diuji pada 375px) | Desktop (≥ 1024px) |
|---|---|---|
| Header | Logo + nama taman, butang **Cari** dan **Menu** (ikon + teks, 48px). Header melekat di atas ketika skrol | Logo + **bar carian besar** (60px) pada baris 1, menu utama pada baris 2 |
| Carian | Laman Utama ada bar carian besar (60px). Carian di header disembunyikan di Laman Utama supaya tidak berulang | Sama |
| Menu utama | Laci dari kanan, lebar penuh. Setiap bahagian ialah akordion. Bahagian semasa dibuka secara automatik dan halaman semasa diserlahkan | Dropdown yang dibuka dengan **klik** (bukan hover). Ada penerangan ringkas dan pautan "Ringkasan …" |
| Capaian pantas | Grid jubin 2 lajur di Laman Utama (6 jubin besar) | Grid 3 lajur |
| Breadcrumb | Ada pada semua halaman kecuali Utama, contohnya `Utama › Dokumen › Laporan AGM` | Sama |
| Navigasi bahagian | Tiada. Breadcrumb dan butang Menu sudah memadai, jadi halaman lebih pendek | Bar sisi yang melekat di sebelah kanan |
| Footer | Alamat dan kontak, pautan kecemasan, 5 pautan bahagian sahaja, Peta Laman, Privasi | Sama, dalam lajur |

**Laman Utama dipendekkan kepada 3 bahagian sahaja:** salam alu-aluan dengan carian, Capaian Pantas (6 jubin) dan 2 pengumuman terkini. Kad "Terokai Laman" dibuang kerana mengulang menu.

**Mengapa tiada menu mega:** setiap bahagian hanya ada 3–5 pautan, jadi dropdown biasa sudah memadai dan kurang mengelirukan. Menu mega hanya berbaloi jika satu bahagian mempunyai lebih 8 pautan.

**Mengapa tiada bar navigasi bawah (bottom nav):** butang Menu dengan teks yang jelas dan jubin Capaian Pantas sudah memadai. Jika ditambah bar bawah, akan ada dua corak navigasi utama, dan ini boleh mengelirukan pengguna.

## 3. Kebolehcapaian yang telah dibina

- Teks asas 18px. Pengguna masih boleh membesarkan teks menggunakan zum pelayar atau tetapan telefon.
- Semua sasaran sentuh sekurang-kurangnya 44×44px. Pautan menu dan akordion setinggi 48–52px.
- Fon Atkinson Hyperlegible, yang direka khas untuk pembaca dengan penglihatan rendah. Kontras teks ≥ 4.5:1.
- Pautan "Langkau ke kandungan utama", cincin fokus yang jelas, dan `aria-current` pada halaman semasa.
- Dropdown boleh dibuka dengan Enter atau Space, ↓ masuk ke senarai, dan Esc menutup serta memulangkan fokus.
- Ketika laci dibuka, fokus dikunci di dalam laci kerana kandungan lain ditetapkan `inert`. Esc menutup laci dan fokus kembali ke butang Menu.
- Setiap kali halaman bertukar, fokus dialihkan ke tajuk H1 supaya pembaca skrin tahu halaman sudah berubah.
- Animasi dimatikan jika pengguna memilih `prefers-reduced-motion`.

## 4. Hasil semakan pelayar (22 Nov 2026)

| Semakan | 375px | 1024px | 1280px |
|---|---|---|---|
| Ralat console | Tiada | Tiada | Tiada |
| Skrol ke tepi (semua halaman) | Tiada | Tiada | Tiada |
| Sasaran < 44px | Tiada | – | Tiada |
| Butang bertindih | Tiada | – | Tiada |
| Papan kekunci: dropdown, laci, Esc, pemulangan fokus | Lulus | – | Lulus |

Carian diuji dari Laman Utama dan header, dan ia membuka halaman Cari dengan keputusan.

## 5. Cara membuka prototaip

Dari folder `C:\Coding\Claude Business`:

```
python -m http.server 8140 --directory "Taman Perumahan Website"
```

Kemudian buka http://localhost:8140. Untuk menjana semula senarai kandungan selepas mengubah `js/data.js`, jalankan `node tools/buat-senarai-kandungan.js`.

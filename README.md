# 📝 Sistem Sumatif Harian Online - SMA Islam Darussalam

Aplikasi ujian berbasis web yang dirancang untuk pelaksanaan asesmen **Persamaan dan Pertidaksamaan Linear**. Proyek ini dioptimalkan untuk performa tinggi, keamanan ujian, dan kemudahan pengiriman data menggunakan Google Apps Script.

## 🚀 Fitur Utama
* **Keamanan Ketat**: Proteksi terhadap klik kanan, *screenshot*, dan deteksi pindah tab (*tab switching*).
* **Auto-Save**: Jawaban tersimpan otomatis di penyimpanan lokal (*local storage*) jika halaman tidak sengaja tertutup.
* **Upload Jawaban**: Mendukung unggah foto pengerjaan yang langsung dikompres sebelum dikirim untuk menghemat kuota.
* **Render Matematika**: Menggunakan **MathJax** untuk menampilkan persamaan matematika yang rapi dan profesional.
* **Watermark Dinamis**: Menampilkan nama siswa di latar belakang untuk mencegah kecurangan melalui foto layar.

## 🛠️ Teknologi yang Digunakan
* **Frontend**: HTML5, CSS3 (Custom Variables), Vanilla JavaScript.
* **Math Engine**: [MathJax](https://www.mathjax.org/)
* **Backend & Database**: [Google Apps Script](https://developers.google.com/apps-script) & Google Sheets.
* **Deployment**: [Vercel](https://vercel.com/)

## 📂 Struktur Folder
```text
├── css/
│   └── style.css       # Styling aplikasi dan layout responsif
├── js/
│   └── script.js      # Logika timer, proteksi, dan pengiriman data
├── index.html         # Struktur utama aplikasi
└── README.md          # Dokumentasi proyek

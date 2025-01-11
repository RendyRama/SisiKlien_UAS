# Aplikasi Kebencanaan Gunung Merapi

## Identitas Mahasiswa
- **Nama**: Muhammad Rendy Ramadhan
- **NIM**: A11.2022.14590
- **Mata Kuliah**: Pemrograman Sisi Klien

## Deskripsi Proyek
Aplikasi ini bertujuan untuk memonitor data kebencanaan gunung berapi, termasuk status aktivitas, rekomendasi, dan laporan terkait. Aplikasi ini dibangun menggunakan React.js sebagai front-end dan Node.js + MySQL sebagai back-end.

## Fitur Utama
- **Login dan Register**: Sistem autentikasi menggunakan JWT.
- **Dashboard**: Menampilkan informasi umum terkait kebencanaan.
- **Manajemen Data Bencana**: Tambah, edit, dan hapus data kebencanaan gunung berapi.
- **Proteksi Rute**: Menggunakan Redux untuk manajemen state dan proteksi akses rute.

## Cara Menjalankan Proyek

### 1. Clone Repository
Clone repository ini ke lokal:
```bash
git clone https://github.com/RendyRama/SisiKlien_UAS.git
```

### 2. Masuk ke Direktori Proyek
```bash
cd my-react-app
```

### 3. Install Dependencies
Jalankan perintah berikut untuk menginstal semua dependency yang diperlukan:
```bash
npm install
```

### 4. Konfigurasi Back-End
Pastikan API back-end sudah berjalan di port `5000`. Back-end menggunakan Node.js, MySQL, dan memiliki endpoint yang diatur dalam file `server.js`.

### 5. Menjalankan Aplikasi
Jalankan aplikasi React:
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:5173` secara default.

## Hosting dan Deploy
Aplikasi telah berhasil di-hosting menggunakan Netlify. Link aplikasi:
[https://fantastic-baklava-d9c3e8.netlify.app/](https://fantastic-baklava-d9c3e8.netlify.app/)

Namun, aplikasi ini saat ini hanya mendukung database lokal. Pastikan back-end dan database berjalan secara lokal untuk menggunakan semua fitur aplikasi.

## Catatan Penting
- Pastikan MySQL sudah terkonfigurasi dengan benar sesuai dengan pengaturan di `server.js`.
- Gunakan `npm install` setelah clone repository untuk memastikan semua dependency terpasang.

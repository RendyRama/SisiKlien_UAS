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
git clone https://github.com/username/repository-name.git
```

### 2. Masuk ke Direktori Proyek
```bash
cd repository-name
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
npm start
```
Aplikasi akan berjalan di `http://localhost:5173` secara default.

## Teknologi yang Digunakan
- **Front-End**: React.js, Redux Toolkit
- **Back-End**: Node.js, Express.js
- **Database**: MySQL
- **Dependency Tambahan**:
  - Axios
  - React Router Dom
  - SweetAlert2

## Catatan Penting
- Pastikan MySQL sudah terkonfigurasi dengan benar sesuai dengan pengaturan di `server.js`.
- Gunakan `npm install` setelah clone repository untuk memastikan semua dependency terpasang.


-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2025 at 05:48 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bencana`
--

-- --------------------------------------------------------

--
-- Table structure for table `bencana_gunung`
--

CREATE TABLE `bencana_gunung` (
  `id` int(11) NOT NULL,
  `nama_gunung` varchar(255) NOT NULL,
  `status_aktivitas` enum('Normal','Waspada','Siaga','Awas') NOT NULL,
  `rekomendasi` text NOT NULL,
  `laporan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bencana_gunung`
--

INSERT INTO `bencana_gunung` (`id`, `nama_gunung`, `status_aktivitas`, `rekomendasi`, `laporan`) VALUES
(1, 'Gunung Merapi', 'Siaga', 'Evakuasi warga dalam radius 5 km', 'Gunung Merapi menunjukkan aktivitas vulkanik tinggi.'),
(2, 'Gunung Semeru', 'Waspada', 'Hindari area sejauh 1 km dari puncak', 'Asap tebal terlihat keluar dari kawah.'),
(3, 'Gunung Bromo', 'Normal', 'Tetap waspada dan ikuti informasi terkini', 'Tidak ada aktivitas vulkanik signifikan.'),
(4, 'Gunung Kerinci', 'Siaga', 'Hindari aktivitas di sekitar puncak', 'Gempa vulkanik kecil terdeteksi.'),
(5, 'Gunung Rinjani', 'Awas', 'Segera evakuasi area dalam radius 10 km', 'Erupsi abu vulkanik mencapai 3 km.'),
(6, 'Gunung Tambora', 'Waspada', 'Batasi perjalanan ke area gunung', 'Peningkatan suhu kawah terdeteksi.'),
(7, 'Gunung Agung', 'Siaga', 'Evakuasi warga dalam radius 7 km', 'Letusan kecil terjadi, potensi erupsi besar.'),
(8, 'Gunung Sinabung', 'Awas', 'Segera evakuasi radius 12 km', 'Aktivitas vulkanik terus meningkat.'),
(9, 'Gunung Anak Krakatau', 'Normal', 'Pantau situasi secara berkala', 'Tidak ada aktivitas mencolok.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `created_at`) VALUES
(1, 'Admin123', '$2b$10$noNTamswyXXGnOWYoXULbuYdQrN/6UqdUOn0z6v9KdlfPO0nqnQ8e', 'admin123@gmail.com', '2025-01-02 12:24:53'),
(2, 'Admin12345', '$2b$10$VlhIhovTArYmfJ1uppPEsesIDI0rfsSfRSYq/Vpdt0xb3PUoJTgmu', 'admin12345@gmail.com', '2025-01-02 12:28:16'),
(6, 'Admin123456', '$2b$10$9wLUUDL/p4jksXUDop2sfuC4P7cXTBU7v8hExTATUnXmlc2rTJxhG', 'admin123456@gmail.com', '2025-01-02 12:34:54'),
(7, 'aduhgantenya1', '$2b$10$8cigYJF0Wd88xxas06KlBuMeGVfAhZcO3ZHtsNDc/veg5bUjCCMn2', 'ganteng1@gmail.com', '2025-01-02 12:35:55'),
(8, 'Nexa', '$2b$10$C4/54wWaEriaCK8QccxDPuWgph6ilgcc4yAFEbdeQ/MsGUSEF9Wp.', 'nexaaja@gmail.com', '2025-01-02 12:44:02'),
(9, 'adminwutwut', '$2b$10$Smf4blWREb2sM4O0QZYKvesavxSGSwN5ZOSR8DT4fg2VJfHAF6eMa', 'wutwut1@gmail.com', '2025-01-02 12:46:38'),
(10, 'rendyGanteng', '$2b$10$wNlMet/GfSvx81o9H9nS6u5nsYbP5PFgwLDwQ4b/v0vHxN6xocXqu', 'rendy123@gmail.com', '2025-01-11 11:37:05'),
(11, 'rendyWow', '$2b$10$iqSCBB8WTvectZ.8N2AZvOUTYa2chwkwm7uEh26xOxOM9fxW9DC0e', 'rendy321@gmail.com', '2025-01-11 12:22:32'),
(12, 'aldo aja', '$2b$10$tU8IxnYQJPAHHk/Do1GNpOnESqjLGi7bnsO5OhTlJ90gVCN7bAnn6', 'aldo@gmail.com', '2025-01-11 14:14:33'),
(13, 'Rendy', '$2b$10$l14V.j7XEteN5PrDA0hw0ez9gwa8bHmdgpx4LumnqU4AkBuBjk1BK', 'rendyramadhan042@gmail.com', '2025-01-11 14:57:48'),
(14, 'Rendy Ramadhan', '$2b$10$Crs8Ofuu.9cldE7pfpyDvOwTv6/mF/kkMH9cR9TSiLpwC.klNQxmq', 'rendyrama123@gmail.com', '2025-01-12 04:22:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bencana_gunung`
--
ALTER TABLE `bencana_gunung`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bencana_gunung`
--
ALTER TABLE `bencana_gunung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

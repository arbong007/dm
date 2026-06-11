<?php
include_once('connection.php');

$nama_anak = $_POST['nama_anak'];
$nama_ibu = $_POST['nama_ibu'];
$tempat_lahir = $_POST['tempat_lahir'];
$tanggal_lahir = $_POST['tanggal_lahir'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$alamat = $_POST['alamat'];

$statement = $conn->prepare('INSERT INTO t_anak (nama_anak, nama_ibu, tempat_lahir, tanggal_lahir, jenis_kelamin, alamat) VALUES (:nama_anak, :nama_ibu, :tempat_lahir, :tanggal_lahir, :jenis_kelamin, :alamat)');

$statement->execute([
    'nama_anak' => $nama_anak,
    'nama_ibu' => $nama_ibu,
    'tempat_lahir' => $tempat_lahir,
    'tanggal_lahir' => $tanggal_lahir,
    'jenis_kelamin' => $jenis_kelamin,
    'alamat' => $alamat
]);

header('location: data_anak.php');
?>
<?php
include_once('connection.php');

$id_anak = $_GET['id_anak']; // Gunakan id_anak dari URL

$nama_anak = $_POST['nama_anak'];
$nama_ibu = $_POST['nama_ibu'];
$tempat_lahir = $_POST['tempat_lahir'];
$tanggal_lahir = $_POST['tanggal_lahir'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$alamat = $_POST['alamat'];

$statement = $conn->prepare('UPDATE t_anak SET nama_anak=:nama_anak, nama_ibu=:nama_ibu, tempat_lahir=:tempat_lahir, tanggal_lahir=:tanggal_lahir, jenis_kelamin=:jenis_kelamin,  alamat=:alamat WHERE id_anak=:id_anak');
$statement->execute([
    'id_anak' => $id_anak,
    // Gunakan id_anak dari URL
    'nama_anak' => $nama_anak,
    'nama_ibu' => $nama_ibu,
    'tempat_lahir' => $tempat_lahir,
    'tanggal_lahir' => $tanggal_lahir,
    'jenis_kelamin' => $jenis_kelamin,
    'alamat' => $alamat
]);

header('location: data_anak.php');
?>
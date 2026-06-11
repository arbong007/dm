<?php

include_once('connection.php');

$id_anak = $_GET['id_anak'];

$statement = $conn->prepare('DELETE FROM t_anak WHERE id_anak=:id_anak');
$statement->execute([
    'id_anak' => $id_anak
]);

header('location: data_anak.php');
?>
<?php
// Konfigurasi database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbsipograf";

// Membuat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
  die("Koneksi gagal: " . $conn->connect_error);
}

// Memeriksa jika form login dikirimkan
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  // Melakukan query ke database untuk memeriksa pengguna
  $sql = "SELECT * FROM masuk WHERE username = '$username' AND password = '$password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // Login berhasil
    header("Location: data_anak.php"); // Mengarahkan ke halaman landing.php
    exit();
  } else {
    // Login gagal, atur pesan error
    $error_msg = "username / password salah.";
  }
}
// Menutup koneksi ke database
$conn->close();
?>
<!DOCTYPE html>
<html>

<head>
  <title>Form Login</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-image: url('Landing 3.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      padding: 20px;
      text-align: center;
      min-height: 100vh;
    }

    h2 {
      color: #333;
    }

    .login-box {
      position: relative;
      max-width: 300px;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      animation: frame-anim 1.5s infinite;
    }

    @keyframes frame-anim {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.02);
      }

      100% {
        transform: scale(1);
      }
    }

    label {
      display: block;
      text-align: left;
      margin-bottom: 10px;
      color: #666;
    }

    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    .login-box button {
      background-color: #2f557e;
      color: #fff;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    .login-box button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #03e9f4;
      border-radius: 5px;
      opacity: 0;
      transform: scale(0);
      transition: opacity 0.3s ease-out, transform 0.3s ease-out;
      animation: neon-anim 1s linear infinite;
    }

    .login-box button:hover::before {
      opacity: 1;
      transform: scale(1);
    }

    @keyframes neon-anim {
      0% {
        transform: scale(0) rotate(0deg);
      }

      100% {
        transform: scale(1) rotate(360deg);
      }
    }

    /* Style untuk blok notifikasi error */
    .error-msg {
      color: red;
      margin: 10px auto;
      margin-top: 10px;
      text-align: center;
      max-width: 300px;
      width: 190px;
      background-color: #ffe6e6;
      border: 1px solid #ff9999;
      padding: 8px;
      font-size: 14px;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      margin-top: 5px;
      margin-bottom: 20px;
    }
  </style>
</head>

<body>
  <h2>Form Login</h2>
  <div class="login-box">
    <form action="login.php" method="post">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <?php
      if (isset($error_msg)) {
        echo '<div class="error-msg">' . $error_msg . '</div>';
      }
      ?>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
  <!-- Blok notifikasi error -->
</body>

</html>
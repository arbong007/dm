<!DOCTYPE html>
<html>

<head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
    <canvas id="myChart" width="400" height="200"></canvas>

    <?php
    // Buat koneksi ke database
    $conn = mysqli_connect("localhost", "root", "", "dbgrafik");

    // Query data dari database
    $query = "SELECT label, nilai FROM data";
    $result = mysqli_query($conn, $query);

    // Olah data menjadi format yang sesuai untuk Chart.js
    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = ['label' => $row['label'], 'nilai' => $row['nilai']];
    }

    // Tutup koneksi ke database
    mysqli_close($conn);
    ?>

    <script>
        var data = <?php echo json_encode($data); ?>;
        var labels = data.map(item => item.label);
        var values = data.map(item => item.nilai);

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',  // Menggunakan jenis grafik line
            data: {
                labels: labels,
                datasets: [{
                    label: 'Grafik Data',
                    data: values,
                    fill: false,  // Menghapus area di bawah garis
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            }
        });
    </script>
</body>

</html>
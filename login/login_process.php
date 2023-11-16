<?php
include("../server/base.php");

session_start();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM $table WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $_SESSION["username"] = $username;
        header("Location: ../profile"); // Redirect to a dashboard page or home page after successful login
    } else {
        echo "<script>alert('Invalid username or password')</script>";
        // header("Location: ./");
    }
}

$conn->close();
?>

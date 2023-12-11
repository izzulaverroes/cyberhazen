<?php
include("../server/base.php");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $display_name = $_POST["display_name"];
    $email = $_POST["email"];
    $born = $_POST["born"];
    $gender = $_POST["gender"];
    // $image = $_POST["image"];
    $password = $_POST["password"];

    function sanitizeInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    if (empty($_POST["username"])) {
        $usernameErr = "Username is required";
    } else {
        $username = sanitizeInput($_POST["username"]);
        
        // Check if the username already exists in the database
        $checkUsernameQuery = "SELECT * FROM $table WHERE username = '$username'";
        $result = $conn->query($checkUsernameQuery);
    $sql = "INSERT INTO $table (username, password, display_name, email, born, gender, image) VALUES ('$username', '$password', '$display_name', '$email', '$born' ,'$gender', '$image')";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successful";
            header("Location: ./"); 
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }        
        if ($result->num_rows > 0) {
            $usernameErr = "Username already exists";
        }
    }

}

$conn->close();
?>

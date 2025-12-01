<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "stationery_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create users table if not exists
$tableSql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    department VARCHAR(50) NOT NULL,
    role VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
$conn->query($tableSql);

// Handle registration POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fullName = $conn->real_escape_string($_POST['regFullName'] ?? '');
    $email = $conn->real_escape_string($_POST['regEmail'] ?? '');
    $username = $conn->real_escape_string($_POST['regUsername'] ?? '');
    $password = $_POST['regPassword'] ?? '';
    $department = $conn->real_escape_string($_POST['regDepartment'] ?? '');
    $role = $conn->real_escape_string($_POST['role'] ?? '');

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data
    $sql = "INSERT INTO users (full_name, email, username, password, department, role) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $fullName, $email, $username, $hashedPassword, $department, $role);

    if ($stmt->execute()) {
        echo "<script>alert('Registration successful!'); window.location.href='login.html';</script>";
    } else {
        $errorMsg = $conn->error;
        echo "<script>alert('Error: Registration failed. $errorMsg'); window.history.back();</script>";
    }
    $stmt->close();
}

$conn->close();
?>

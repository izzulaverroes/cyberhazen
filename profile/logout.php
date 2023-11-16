<?php
session_start();
session_unset();
session_destroy();
header("Location: ../login/"); // Redirect to the login page after logout
?>

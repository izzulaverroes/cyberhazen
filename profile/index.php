<?php    
session_start();

include("../server/base.php")
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZ9WTKZ2');</script>
<!-- End Google Tag Manager -->
    <meta name="description" content="Introducing new evolution of technologies, CyberHazen™ leads the innovation.">
    <meta property="og:title" content="Empowering Tomorrow with Cutting-Edge Solutions">
    <meta charset="UTF-8">
    <meta name="p:domain_verify" content="e933e03629c9fdf7a9d96458a30b56a6"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"CyberHazen™ leads the innovation.","datePublished":"2023-11-19T15:30:08+07:00","image":["../img/favicon.png"],"author":{"@type":"Person","name":"Muhammad Ken Izzulhaq"},"publisher":{"@type":"Organization","name":"CyberHazen™","logo":{"@type":"ImageObject","url":"../img/favicon.png"}}}</script>
    <!--| Style -->
    <link rel="stylesheet" href="../css/style.css">
    <link rel="shortcut icon" href="../img/LogoHazen.svg" type="image/x-icon">
    <title id="pagetitle">CyberHazen™ | <?php echo $_SESSION["username"]; ?></title>
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZ9WTKZ2"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <!--? ==== NAVBAR ==== -->
    <header>
        <div class="container">
            <div class="nav">
                <div class="nav-logo">
                    <a href="../">
                        <h3>CyberHazen™</h3>
                    </a>
                </div>
                    <nav>
                        <ul>
                            <li><a href="../">Home</a></li>
                            <li><a href="../about">About</a></li>
                            <li><a href="../menu">Product</a></li>
                            <li><a href="../news">Contact</a></li>
                        </ul>
                            <div class="cart">
                                <div class="container">
                                    <a href="../login">
                                    <div class="login" id="encryptButtonLogin">
                                    <div class="relative z-10 flex items-center gap-2">
                                    <span id="textContentLogin"><?php echo $_SESSION["username"]; ?></span>
                                    </div>
                                    <span id="animationSpanLogin"
                                        class="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity"></span>
                                </div>
                            </div>
                        </a>
                        <div class="burger">
                            <input type="checkbox" id="burgerClick">
                            <span id="span1"></span>
                            <span id="span2"></span>
                            <span id="span3"></span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <!--! ==== NAVBAR END ==== -->
    <!--? ==== HERO ==== -->
    <section class="home" id="home">
        <div class="container h-100 al-c">
            <div class="title">
                <h1>Did you <br>have a Question</h1>
                <p>Ask us , We are standby 24 hours 7 days in a week</p>
            </div>
        </div>
    </section>
    <!--! ==== HERO END ==== -->
    <!--? ==== MENU  SECTION ==== -->
    <section class="menu" id="menu">
        <div class="container">
            <div class="tit">
                <h1><?php echo $_SESSION["username"] ?> Profile</h1>
            </div>

            <div class="m">
                <!-- <div class="profile-img"></div>

                <h2>Login Data</h2>
                <h6>Email : $email</h6>
                <h6>Username : <span id="loggedInUser"></span></h6>
                <h6>Display Name : <span id="loggedInDisplay"></span></h6>
                <h6>Gender : <span id="loggedInGender"></span></h6>
                <h6>Born : <span id="loggedInBorn"></span></h6><br>
                <h6>You was alive : <span id="totalDays"></span> Days</h6>
                <button onclick="logout()">Log Out</button> -->
                <?php
                if (isset($_SESSION["username"])) {

                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }
                    //$sql = 'SELECT * FROM users WHERE username='.$_SESSION['username'];
                    $loggedInUser = $_SESSION["username"];
                    $sql = "SELECT * FROM $table WHERE username='$loggedInUser'";
                    $result = $conn->query($sql);

                    if ($result->num_rows == 1) {
                        $userData = $result->fetch_assoc();

                        // Check if the keys exist before trying to access them

                        $username = isset($userData["username"]) ? $userData["username"] : "N/A";
                        $email = isset($userData["email"]) ? $userData["email"] : "N/A";
                        $displayName = isset($userData["display_name"]) ? $userData["display_name"] : "N/A";
                        $password = isset($userData["password"]) ? $userData["password"] : "N/A";
                        $image = isset($userData["image"]) ? $userData["image"] : "N/A";
                        $gender = isset($userData["gender"]) ? $userData["gender"] : "N/A";
                        $born = isset($userData["born"]) ? $userData["born"] : "N/A";

                        echo"<h2>Login Data</h2>";
                        echo"<h6>Email : $email</h6>";
                        echo"<h6>Username : $username </h6>";
                        echo"<h6>Display Name : $displayName</h6>";
                        echo"<h6>Gender : $gender </h6>";
                        echo"<h6>Born : $born </h6>";
                    } else {
                        echo "User not found in the database.";
                    }

                    $conn->close();
                } else {
                    // Redirect to the login page or handle the situation where the user is not authenticated
                    header("Location: ../login");
                    exit();
                }
            ?>
            <a href="logout.php"><button type="button" class="button">Log Out</button></a>
            </div><br>
        </div>
    </section>
    <!--! ==== MENU END ==== -->
    <!--? ==== FOOTER ==== -->
    <footer>
    </footer>
    <!--! ==== FOOTER END ==== -->
    <script type="module" src="../js/footer.js"></script>
    <script type="module" src="../js/index.js"></script>
    <!-- <script src="script.js"></script> -->
</body>

</html>
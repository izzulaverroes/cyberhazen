<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--| Style -->
    <link rel="stylesheet" href="../css/style.css">
    <link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon">
    <title>CyberHazen™ | Login</title>
</head>

<body>
    <section class="loginpage">
        <div class="container">
            <div class="form-wrapper">
                <div class="form">
                    <div class="tit">
                        <h1>Login</h1>
                    </div>
                    <form action="login_process.php" method="post">
                        <div class="input">
                            <label for="loginUsername">Username</label>
                            <input type="username" name="username" id="loginUsername" placeholder="Enter Your Username" autocomplete="current-username"
                            required >
                        </div>
                        <div class="input">
                            <label for="loginPassword">Password</label>
                            <input type="password" name="password" id="loginPassword" placeholder=" Input The Password" autocomplete="current-password"
                                required>
                        </div>
                        <button type="submit" id="submitButton">Login</button>
                        <div class="registertoggle">
                            <p>Dont have any account ?&nbsp;</p><a href="register.php"> Register here</a>
                        </div>
                    </form>
                </div>
                <div class="thirdparty">
                    <a
                        href="https://accounts.google.com/v3/signin/challenge/pwd?TL=AIBe4_IZodJlUANpRmYVY9YCPU6iVGqTE5X-3grqdQeAnj3-MmamC0kmsJU3leQ-&cid=2&continue=https%3A%2F%2Fmyaccount.google.com%2Frecovery%2Femail%3Fcontinue%3Dhttps%3A%2F%2Fmyaccount.google.com%2Femail&flowName=GlifWebSignIn&ifkv=AVQVeyx2E5BYoBLyOEB_Le_aaHGXB-k59jkNmm1XKrtGM8O9J02Ns_ec4tfDzlNmFKTtUgSV_zfaYA&rart=ANgoxccbzUJhs0Sa22VWGRdFNV3H9kmIazz8y8bUE9RXjEX6VwrmuYjDeKHz66BBNj-uaRJUaHxMt8pacDHfJqrA8B36N1k5TYO7f5GJrwTx-3TnUUlNR-M&rpbg=1&sarp=1&scc=1&service=accountsettings"><i
                            class="fa-brands fa-google"></i></a>
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i class="fa-brands fa-yahoo"></i></a>
                    <a href=""><i class="fa-brands fa-microsoft"></i></a>
                </div>
            </div>
        </div>
    </section>
    <script type="module" src="../js/index.js"></script>
    <script src="script.js"></script>
    <script>

    </script>
</body>

</html>
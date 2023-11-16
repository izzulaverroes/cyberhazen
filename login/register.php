<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--| Style -->
    <link rel="stylesheet" href="../css/style.css">
    <link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon">
    <title>CyberHazen™ | Register</title>
</head>

<body>
    <section class="loginpage">
        <div class="container">
            <div class="form-wrapper">
                <div class="form">
                    <div class="tit">
                        <h1>Register</h1>
                    </div>
                    <form action="register_process.php" method="post">
                        <div class="input">
                            <label for="registerEmail">Email</label>
                            <input type="email" name="email" id="registerEmail" placeholder="Enter your Email"
                                autocomplete="current-email" required>
                        </div>
                        <div class="input">
                            <label for="registerUsername">Username</label>
                            <input type="username" name="username" id="registerUsername"
                                placeholder="Create Your Username" autocomplete="current-username" required>
                        </div>
                        <div class="input">
                            <label for="registerDisplayName">Display Name</label>
                            <input type="username" name="display_name" id="registerDisplayName"
                                placeholder="Create Your Display Name" autocomplete="current-username" required>
                        </div>
                        <div class="input">
                            <label for="registerBorn">Your Born</label>
                            <input type="date" name="born" id="registerBorn" required>
                        </div>
                        <div class="input">
                            <label for="registerGender">Your Gender</label>
                            <select name="gender" id="registerGender">
                                <option value="">Select Your Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div class="input">
                            <label for="registerPassword">Password</label>
                            <input type="password" name="password" id="registerPassword"
                                placeholder="Make a strong Password" autocomplete="current-password" required>
                        </div>
                        <div class="input">
                            <label for="registerReEnterPassword">Repeat Password</label>
                            <input type="password" name="password" id="registerReEnterPassword"
                                placeholder="Re Enter Your Password" autocomplete="current-password" required>
                        </div>
                        <button type="submit" id="submitButton">Register</button>
                        <div class="registertoggle">
                            <p>Have an Account ?&nbsp;</p><a href="./"> Sign In here</a>
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
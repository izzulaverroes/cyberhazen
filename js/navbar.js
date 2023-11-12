const V = document.title;
let home = "";
let about = "";
let product = "";
let news = "";
let login = "";
let cartVisibility = "";
let logOut = "";
let profile = "";

if (V == "CyberHazen™ | Home") {
    home = "#";
    about = "about";
    product = "menu";
    news = "news";
    login = "login";
    cartVisibility = "disactive";
    profile = "profile";
}
else if (V == "CyberHazen™ | About") {
    home = "../";
    about = "#";
    product = "../menu/";
    news = "../news/";
    login = "../login";
    cartVisibility = "disactive";
    profile = "../profile";
} else if (V == "CyberHazen™ | Product") {
    home = "../";
    about = "../about";
    product = "#";
    news = "../news/";
    login = "../login";
    profile = "../profile";
} else if (V == "CyberHazen™ | Contact") {
    home = "../";
    about = "../about/";
    product = "../menu/";
    news = "../news";
    login = "../login";
    profile = "../profile";
    cartVisibility = "disactive";
} else if (V == "CyberHazen™ | Profile") {
    home = "../";
    about = "../about";
    product = "../menu";
    news = "../news";
    login = "../login";
    profile = "../profile";
    cartVisibility = "disactive";
}

let loginBtn = `
<a href="${login}">
    <div class="login" id="encryptButtonLogin">
        <div class="relative z-10 flex items-center gap-2">
            <span id="textContentLogin">Login</span>
        </div>
        <span id="animationSpanLogin"
            class="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity"></span>
    </div>
</a>`;

let currentUser = null;
function logout() {
    currentUser = null;
    alert('Logged out successfully.');
    localStorage.removeItem('loggedUsers');
    window.location.href = location.href;
}


var userData = localStorage.getItem('loggedUsers');
//
console.log(userData)
if (userData != null) {
    loginBtn = `
    <a href="${profile}">
    <div class="login">
    <div class="relative z-10 flex items-center gap-2">
    <span id="textContentLogin" class="fa-solid fa-user"></span>
    <span id="loggedInUsers" style=" text-transform: capitalize;"></span>
    </div>
    </div>
    </a>`;
} else {
    
}

const navbarBox = document.querySelector('header');
let navbar = document.createElement('div');
navbar.classList.add('container');
navbar.innerHTML =
    `<div class="nav">
                <div class="nav-logo">
                    <a href="${home}">
                        <h3>CyberHazen™</h3>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href="${home}">Home</a></li>
                        <li><a href="${about}">About</a></li>
                        <li><a href="${product}">Product</a></li>
                        <li><a href="${news}">Contact</a></li>
                        <li class="${cartVisibility}">
                            <i class="fa-solid fa-cart-shopping" style="font-size: 1.6rem; cursor: pointer;"
                                id="cartButton"><span>0</span></i>
                        </li>
                    </ul>
                    <div class="cart">
                        ${loginBtn}
                        <div class="burger">
                            <input type="checkbox" id="burgerClick">
                            <span id="span1"></span>
                            <span id="span2"></span>
                            <span id="span3"></span>
                        </div>
                    </div>
                </nav>
            </div>`;
navbarBox.appendChild(navbar);


if (userData) {
    // Parse the JSON string into an object
    userData = JSON.parse(userData);
    // Display the data in the HTML
    document.getElementById('loggedInUsers').innerHTML = userData.username;
}

// ? AVE HAMBURGER MENU //
const burgerButton = document.querySelector('#burgerClick');
const burgerBody = document.querySelector('nav ul');
const bur1 = document.querySelector('#span1');
const bur2 = document.querySelector('#span2');
const bur3 = document.querySelector('#span3');
let V = document.title;
const X1 = document.querySelector('nav ul li:nth-child(1) a');
const X2 = document.querySelector('nav ul li:nth-child(2) a');
const X3 = document.querySelector('nav ul li:nth-child(3) a');
const X4 = document.querySelector('nav ul li:nth-child(4) a');
const cartButtton = document.querySelector('#cartButton');
const cartPay = document.querySelector("cartPay")

if (V != "CyberHazen™ | Login") {
    // burger active
    burgerButton.addEventListener('click', function () {
        burgerBody.classList.toggle('active')
    })
    // burger animation active
    burgerButton.addEventListener('click', function () {
        bur1.classList.toggle('ac1');
        bur2.classList.toggle('ac2');
        bur3.classList.toggle('ac3');
    })
    // click even burgerBody and burgerButton
    document.addEventListener('click', function (e) {
        if (!burgerBody.contains(e.target) && !burgerButton.contains(e.target)) {
            burgerBody.classList.remove('active');
            bur1.classList.remove('ac1');
            bur2.classList.remove('ac2');
            bur3.classList.remove('ac3');
        }
    })
}

// navLink active
if (V == 'CyberHazen™ | Home') {
    X1.classList.add('l-active');
    window.addEventListener('blur', () => {
        document.title = "I am alone :("
    })
    window.addEventListener('focus', () => {
        document.title = "CyberHazen™ | Home"
    })
}
else if (V == 'CyberHazen™ | About') {
    X2.classList.add('l-active');
    document.querySelector('.home').style.background = "linear-gradient(0deg,rgba(255,255,255,1)0%,rgba(255,255,255,0.1)100%),var(--primary)"
    window.addEventListener('blur', () => {
        document.title = "I am alone :("
    })
    window.addEventListener('focus', () => {
        document.title = "CyberHazen™ | About"
    })
}
else if (V == 'CyberHazen™ | Product') {
    X3.classList.add('l-active');
    document.querySelector('.home').style.background = "linear-gradient(0deg,rgba(255,255,255,1)0%,rgba(255,255,255,0.1)50%),url(../img/2.svg)"
    window.addEventListener('blur', () => {
        document.title = "I am alone :("
    })
    window.addEventListener('focus', () => {
        document.title = "CyberHazen™ | Product"
    })
}
else if (V == 'CyberHazen™ | Contact') {
    X4.classList.add('l-active');
    document.querySelector('.home').style.background = "linear-gradient(0deg,rgba(255,255,255,1)0%,rgba(255,255,255,0.1)50%),url(../img/ggglitch.svg)"
    window.addEventListener('blur', () => {
        document.title = "I am alone :("
    })
    window.addEventListener('focus', () => {
        document.title = "CyberHazen™ | Profile"
    })
}
else if (V == 'CyberHazen™ | Login') {
    window.addEventListener('blur', () => {
        document.title = "I am alone :("
    })
    window.addEventListener('focus', () => {
        document.title = "CyberHazen™ | Login"
    })
}
else if (V == 'CyberHazen™ | Profile') {
    document.querySelector('.home').style.background = "linear-gradient(0deg,rgba(255,255,255,1)0%,rgba(255,255,255,0.1)50%),url(../img/ggglitch.svg)"
    window.addEventListener('blur', () => {
        document.title = "I am alone :("
    })
    window.addEventListener('focus', () => {
        document.title = "CyberHazen™ | Profile"
    })
};

if (V === 'CyberHazen™ | Product') {
    cartButtton.addEventListener('click', () => {
        document.querySelector('#main-menu').classList.toggle('main-disactive');
        document.querySelector('#main-menu').classList.toggle('main-active');
        document.querySelector('#main-cart').classList.toggle('main-disactive');
        document.querySelector('#main-cart').classList.toggle('main-active');
    })
} else {

};


// COUNT DOWN
let valueDisplays = document.querySelectorAll(".num");
let interval = 9000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

// SWIPER JS
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11.0.3/swiper-bundle.min.mjs'
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1120: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1120: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1120: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    },
});


const TARGET_TEXT = "About Us";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 100;

const CHARS = "!@#$%^&*()_/*";

const encryptButton = document.getElementById("encryptButton");
const lockIcon = document.getElementById("lockIcon");
const textContent = document.getElementById("textContent");
const animationSpan = document.getElementById("animationSpan");

let intervalRef = null;
let text = TARGET_TEXT;

const scramble = () => {
    let pos = 0;

    intervalRef = setInterval(() => {
        const scrambled = TARGET_TEXT.split("")
            .map((char, index) => {
                if (pos / CYCLES_PER_LETTER > index) {
                    return char;
                }

                const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                const randomChar = CHARS[randomCharIndex];

                return randomChar;
            })
            .join("");

        textContent.innerText = scrambled;
        pos++;

        if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
            stopScramble();
        }
    }, SHUFFLE_TIME);
};

const stopScramble = () => {
    clearInterval(intervalRef);
    textContent.innerText = TARGET_TEXT;
};
if (V === 'CyberHazen™ | Home') {
    encryptButton.addEventListener("mouseenter", scramble);
    encryptButton.addEventListener("mouseleave", stopScramble);
} else {

}


const TARGET_TEXT_ = "Login";

const encryptButtonLogin = document.getElementById("encryptButtonLogin");
const textContentLogin = document.getElementById("textContentLogin");
const animationSpanLogin = document.getElementById("animationSpanLogin");

let intervalRefLogin = null;
let textLogin = TARGET_TEXT_;

const scrambleLogin = () => {
    let posLogin = 0;

    intervalRef = setInterval(() => {
        const scrambledLogin = TARGET_TEXT_.split("")
            .map((char, index) => {
                if (posLogin / CYCLES_PER_LETTER > index) {
                    return char;
                }

                const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                const randomChar = CHARS[randomCharIndex];

                return randomChar;
            })
            .join("");

        textContentLogin.innerText = scrambledLogin;
        posLogin++;

        if (posLogin >= TARGET_TEXT_.length * CYCLES_PER_LETTER) {
            stopScrambleLogin();
        }
    }, SHUFFLE_TIME);
};

const stopScrambleLogin = () => {
    clearInterval(intervalRefLogin);
    textContentLogin.innerText = TARGET_TEXT_;
};
var userData = localStorage.getItem('loggedUsers');
if (userData = null) {
    encryptButtonLogin.addEventListener("mouseenter", scrambleLogin);
    encryptButtonLogin.addEventListener("mouseleave", stopScrambleLogin);
}



let listProductHTML = document.querySelector('#listProduct');
let products = [];

if (V == "CyberHazen™ | Home") {

    const addDataToHTML = () => {
        // remove datas default from HTML

        // add new datas
        if (products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('swiper-slide');
                newProduct.innerHTML =
                    `<div class="menu-item">
                        <img src="${product.image}" alt="${product.des}">
                        <div class="des">
                            <h3>${product.name}</h3>
                            <p>${product.des}</p>
                            <div class="price">
                                <p>$ ${product.price} USD</p>
                                <a href="menu/">
                                    <button class="buy">
                                        BUY
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }

    const initApp = () => {
        // get data product
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                products = data;
                addDataToHTML();
            })
    }
    initApp();
}

// import users from 'userdata.json'
// Sample array for storing usernames and passwords

const V = document.title;
let home = "";
let about = "";
let product = "";
let news = "";
let login = "";
console.log(V)
if(V == "CyberHazen™ | Home"){
    home = "#";
    about = "about";
    product = "menu";
    news = "news";
    login = "login";
}
else if (V == "CyberHazen™ | About") {
    home = "../";
    about = "#";
    product = "../menu/";
    news = "../news/";
    login = "../login";
}else if(V == "CyberHazen™ | Product"){
    home = "../";
    about = "../about";
    product = "#";
    news = "../news/";
    login = "../login";
}else{
    home = "../";
    about = "../about/";
    product = "../menu/";
    news = "#";
    login = "../login";
}

const footerBox = document.querySelector('footer');
let footer = document.createElement('div');
footer.classList.add('container');
footer.innerHTML = `
<p style="padding: 0 40px 30px 24px;">Hazen Technologies is a forward-thinking technology company committed
                to innovating and engineering
                cutting-edge solutions that shape the future. With a relentless dedication to excellence and a passion
                for pushing the boundaries of what's possible, Hazen Technologies is at the forefront of creating
                transformative products and services that drive progress in various industries.
                <br>
                Our Mission:
                To empower individuals, businesses, and communities through technology by delivering innovative,
                reliable, and sustainable solutions that enhance efficiency, convenience, and quality of life.
                <br>
                Our Vision:
                To be a global leader in technology, pioneering advancements that address real-world challenges and
                drive positive change. We aspire to inspire and empower the world with our technological innovations.
            </p>
            <hr style="border: 1.5px solid var(--quad);width: 96%; margin: auto;border-radius: 2px;">
            <div class="footer-grid">
                <div class="footer-item">
                    <div class="nav-logo">
                        <a href="${home}">
                            <h1>CyberHazen™</h1>
                        </a>
                    </div>
                    <p>We are a dynamic team of visionaries, engineers, and creatives who thrive on challenges. Our
                        passion lies in developing technology-intensive products and services that shape the future.</p>
                    <br>
                    <h1>Special Event</h1>
                    <a href="${about}" class="link">About</a>
                    <a href="#" class="link">Special Event</a>
                    <a href="#" class="link">Exclusive Event</a>
                    <a href="#" class="link">Monthly Event</a>
                    <a href="#" class="link">Yearly Event</a>
                    <br>
                    <h1>Home Electonics</h1>
                    <a href="${product}" class="link">Hazen SmartHome Hub</a>
                    <a href="${product}" class="link">Hazen E-Cars</a>
                    <a href="${product}" class="link">Hazen AI Assist</a><br>
                    <h1>Social Media</h1>
                    <div class="sosmed">
                        <a href="https://facebook.com"><i class="fa-brands fa-facebook-f link"></i></a>
                        <a href="https://instagram.com"><i class="fa-brands fa-instagram link"></i></a>
                        <a href="https://twitter.com"><i class="fa-brands fa-x-twitter link"></i></a>
                        <a href="https://pinterest.com"><i class="fa-brands fa-pinterest-p link"></i></a>
                        <a href="https://linkedin.com"><i class="fa-brands fa-linkedin-in link"></i></a>
                        <a href="https://dribble.com"><i class="fa-brands fa-dribbble link"></i></a>
                        <a href="https://fontawesome.com"><i class="fa-brands fa-font-awesome link"></i></a>
                        <a href="https://izzulaverroes.github.io/cyberhazen"><i
                                class="fa-brands fa-github link"></i></a>
                        <a href="https://npm.com"><i class="fa-brands fa-npm link"></i></a>
                        <a href="https://woi.com"><i class="fa-regular fa-globe link"></i></a><br>
                    </div>
                </div>
                <div class="footer-item">
                    <h1>Contact Us</h1>
                    <h4>Phone Number :</h4>
                    <p> +62 813 3644 6666</p>
                    <h4>Email :</h4>
                    <p> ceo@hazen.tech</p>
                    <h4>Company Address:</h4>
                    <p> Malang, East Java, Indonesia </p><br>
                    <h1>Handphones</h1>
                    <a href="${product}" class="link">Hazen Z-One</a>
                    <a href="${product}" class="link">Hazen Z-One Pro</a>
                    <a href="${product}" class="link">Hazen Z-One Photography</a>
                    <a href="${product}" class="link">Hazen G-One Titan</a>
                    <a href="${product}" class="link">Hazen X-One</a>
                    <a href="${product}" class="link">Hazen Flip-V</a><br>
                    <h1>Computers</h1>
                    <a href="${product}" class="link">Hazen Quantum Servers</a>
                    <a href="${product}" class="link">Hazen Desktop Pro</a>
                    <a href="${product}" class="link">Hazen Gaming Titan Pro</a>
                    <a href="${product}" class="link">Hazen X-Titan Max</a>
                    <a href="${product}" class="link">Hazen NovaX</a>
                    <a href="${product}" class="link">Hazen Classic Desktop</a>
                </div>
                <div class="footer-item">
                    <h1>Viewer Guides</h1>
                    <a href="${home}">Home</a>
                    <a href="${product}">Menu</a>
                    <a href="${about}">About</a>
                    <a href="${news}">Contact</a><br>
                    <h1>Laptops</h1>
                    <a href="${product}" class="link">Hazen Quantum Lite</a>
                    <a href="${product}" class="link">Hazen Gaming Titan</a>
                    <a href="${product}" class="link">Hazen Titan Servers</a>
                    <a href="${product}" class="link">Hazen X-Desktop</a>
                    <a href="${product}" class="link">Hazen Creator Pro</a>
                    <a href="${product}" class="link">Hazen Aero Slim</a>
                    <a href="${product}" class="link">Hazen EdgeBook</a>
                    <a href="${product}" class="link">Hazen EvoMax</a><br>
                    <h1>Sounds</h1>
                    <a href="${product}" class="link">Hazen VR Headset 3.0</a>
                    <a href="${product}" class="link">Hazen Buds Pro</a>
                    <a href="${product}" class="link">Hazen Pro Sounds </a>
                    <a href="${product}" class="link">Hazen Sounds Mixer</a>
                </div>
            </div>
            <hr style="border: 1.5px solid var(--quad); margin: auto;border-radius: 2px;">
            <div style="display: flex;justify-content: space-between;">
                <p style="text-align: left;padding: 10px 0;">Copyright © 2023 CyberHazen™ Technologies LTD &emsp;
                    Privacy Policy | Terms of Use | Sales and Refunds </p>
                <p style="padding: 10px 0;">Indonesia | United States</p>
            </div>
`;
footerBox.appendChild(footer);
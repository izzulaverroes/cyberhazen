// Load registered users from localStorage (if any)
let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
// Load user data from JSON file when the page loads.

let currentUser = null;

// Load login history from localStorage (if any)
let loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];
let logoutHistory = JSON.parse(localStorage.getItem('logoutHistory')) || [];
// logged users
let loggedUsers = JSON.parse(localStorage.getItem('loggedUsers')) || [];

// Function to register a new user
function register() {
    const email = document.getElementById('registerEmail').value;
    const username = document.getElementById('registerUsername').value;
    const displayName = document.getElementById('registerDisplayName').value;
    const born = document.getElementById('registerBorn').value;
    const gender = document.getElementById('registerGender').value;
    const password = document.getElementById('registerPassword').value;
    const reEnterPassword = document.getElementById('registerReEnterPassword').value;

    if (password != reEnterPassword) {
        alert('Re Enter Password must be same at Password');
    }else{
        if (email && username && displayName && born && gender && password) {
            if (registeredUsers.some(user => user.username === username)) {
                alert('Username is already taken. Please choose a different one.');
            }
            else if (registeredUsers.some(user => user.displayName === displayName)) {
                alert('Display Name is already taken. Please choose a different one.');
            }
            else {
                registeredUsers.push({ email, username, displayName, born, gender, password });
                localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
                alert('Registration successful!');
            }
        } else {
            alert('Please fill in All form fields.');
        }
    }
}

// Function to log in a user
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('Please provide both username and password.');
        return;
    }

    const user = registeredUsers.find(u => u.username === username && u.password === password);
    const loggedInUser = document.querySelector("#loggedInUser");
    const loggedInPass = document.querySelector("#loggedInPass");
    if (user) {
        // 
        currentUser = user;
        alert('Login successful!');
        // Record the login event in history
        loginHistory.push({ username, timestamp: new Date().toLocaleString() });
        localStorage.setItem('loginHistory', JSON.stringify(loginHistory));
        localStorage.setItem('loggedUsers', JSON.stringify(currentUser));

        window.location.href = location.href;
    } else {
        alert('Login failed. Please check your credentials.');
    }
}

var userData = localStorage.getItem('loggedUsers');
if (userData) {
    // Parse the JSON string into an object
    userData = JSON.parse(userData);
    // Display the data in the HTML
    document.getElementById('loggedInUser').innerHTML = userData.username;
    document.getElementById('loggedInDisplay').innerHTML = userData.displayName;
    document.getElementById('loggedInEmail').innerHTML = userData.email;
    document.getElementById('loggedInGender').innerHTML = userData.gender;
    document.getElementById('loggedInBorn').innerHTML = userData.born;

} else {
    document.getElementById('loggedInUser').innerHTML = 'No user data found in localStorage.';
}

// Function to log out the current user
function logout() {
    currentUser = null;
    alert('Logged out successfully.');
    localStorage.removeItem('loggedUsers');
    window.location.href = location.href;
}

// Function to display login history
function displayLoginHistory() {
    const historyText = loginHistory.map(event => `${event.username} logged in at ${event.timestamp}`).join('\n');
    const historyTextLogout = logoutHistory.map(event => `${event.username} logged out at ${event.timestamp}`).join('\n');
    alert('Login History:\n' + historyText);
    alert('Log Out History:\n' + historyTextLogout);
}

// Function to clear login history
function clearLoginHistory() {
    localStorage.removeItem('loginHistory');
    loginHistory = [];
    alert('Login history cleared.');
}
function clearUserData() {
    localStorage.removeItem('registeredUsers');
    localStorage.removeItem('loggedUsers');
    registeredUsers = [];
    alert('Login User Data cleared.');
    window.location.href = location
}

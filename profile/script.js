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
let currentUser = null;
function logout() {
    currentUser = null;
    alert('Logged out successfully.');
    localStorage.removeItem('loggedUsers');
    window.location.href = location.href;
}

function calculateTotalDaysLife(birthdate) {
    // Convert the birthdate string to a Date object
    const birthDateObject = new Date(birthdate);

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - birthDateObject;

    // Convert milliseconds to days
    const daysLife = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysLife;
}

document.querySelector('#totalDays').innerHTML = calculateTotalDaysLife(userData.born);

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

// const usersData = localStorage.getItem('')
const registeredUsers = localStorage.getItem('registeredUsers') || [];
console.table(userData)
function changePassword() {
    // Assuming you have functions to get values from the form
    var currentPassword = document.getElementById("currentPassword").value;
    var newPassword = document.getElementById("newPassword").value;

    // Verify the current password
    if (userData && userData.password === currentPassword) {
        // Update the password
        userData.password = newPassword;
        // Store the updated user data back in local storage
        localStorage.setItem("loggedUsers", JSON.stringify(userData));
        
        localStorage.setItem("registeredUsers", JSON.stringify(userData));
        window.location.href = location.href
        alert("Password changed successfully!");
    } 
    else {
        alert("Failed to change password. Please check your current password.");
    }
}

function uploadImg() {
    let Img = document.querySelector('#img').value
    
    console.log(Img)

}
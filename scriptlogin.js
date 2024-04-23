// Function to handle login
function handleLogin() {
    // Get username, password, and selected role
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
    var role = document.getElementById('roleSelect').value;

    // Show role-specific page based on the selected role
    if (role === 'attendee') {
        window.location.href = 'attendee.html'; // Redirect to attendee page
    } else if (role === 'organizer') {
        window.location.href = 'organizer.html'; // Redirect to organizer page
    } else if (role === 'participant') {
        window.location.href = 'participant.html'; // Redirect to participant page
    }
}

// Event listener for login button
document.getElementById('loginBtn').addEventListener('click', function() {
    handleLogin();
});

// Get the login button element
const loginButton = document.getElementById('loginButton');

// Add a click event listener to the login button
loginButton.addEventListener('click', function() {
  // Get the username and password input values
  const username = document.getElementById('usernameInput').value;
  const password = document.getElementById('passwordInput').value;

  // Perform validation (you can customize this based on your requirements)
  if (username === 'Jay Kumar' && password === 'Jayku@9250') {
    // If the username and password are correct, redirect the user to the dashboard
    window.location.href = 'thanks.html';
  } else {
    // If the username or password is incorrect, display an error message
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = 'Invalid username or password';
    errorContainer.style.display = 'block';
  }
});

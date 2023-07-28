const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const signupButton = document.getElementById("signupButton");

signupButton.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validate email and password (you can add your own validation logic here)

  if (email && password) {
    // Perform signup logic (e.g., send data to a server, save in a database)

    // Display success message or redirect to another page
    alert("Sign up successful!");
  } else {
    // Display error message or handle validation errors
    alert("Please enter a valid email and password.");
  }
});

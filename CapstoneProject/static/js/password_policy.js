// Define the regex patterns for password requirements
const requirements = [
  { regex: /.{8,}/, element: document.querySelector(".requirement-list li:nth-child(2)") }, // At least 8 characters
  { regex: /[0-9]/, element: document.querySelector(".requirement-list li:nth-child(1)") }, // At least 1 number
  { regex: /[a-z]/, element: document.querySelector(".requirement-list li:nth-child(3)") }, // At least 1 lowercase letter
  { regex: /[A-Z]/, element: document.querySelector(".requirement-list li:nth-child(4)") }, // At least 1 uppercase letter
  { regex: /[^A-Za-z0-9]/, element: document.querySelector(".requirement-list li:nth-child(5)") } // At least 1 special character
];

let passwordValid = false;

// Function to validate the password
function validatePassword() {
  let password = document.getElementById("new-password-field").value;
  passwordValid = true;
  
  requirements.forEach(req => {
      if (req.regex.test(password)) {
          req.element.classList.add("valid"); // Add 'valid' class to li
          req.element.querySelector("i").className = "bi bi-check-lg"; // Change to check icon
      } else {
          req.element.classList.remove("valid"); // Remove 'valid' class from li
          req.element.querySelector("i").className = "bi bi-circle"; // Revert to circle icon
          passwordValid = false;
      }
  });

  validateConfirmPassword(); // Validate confirm password after each password input
}

// Function to validate the confirm password
function validateConfirmPassword() {
  let password = document.getElementById("new-password-field").value;
  let confirmPassword = document.getElementById("con-password-field").value;
  let errorMsg = document.getElementById("password-error");

  // Clear error message when confirm password is empty
  if (confirmPassword === "") {
      errorMsg.innerHTML = ""; // Reset innerHTML to clear the message
      errorMsg.style.color = ""; // Reset the color
      return;
  }

  // If the password doesn't meet the policy requirements, show an error with the icon
  if (!passwordValid) {
      errorMsg.innerHTML = '<i class="bi bi-exclamation-circle" style="color: red;"></i> Enter valid password first!';
      errorMsg.style.color = "red";
      return;
  }

  // If passwords match, show success message
  if (password === confirmPassword) {
      errorMsg.innerHTML = '<i <i class="bi bi-check-circle" style="color: green;"></i> Password match!';
      errorMsg.style.color = "green";
  } else {
      // If passwords do not match, show error message
      errorMsg.innerHTML = '<i class="bi bi-exclamation-circle" style="color: red;"></i> Password do not match!';
      errorMsg.style.color = "red";
  }
}

// Event listener for password input
document.getElementById("new-password-field").addEventListener("input", validatePassword);

// Event listener for confirm password input
document.getElementById("con-password-field").addEventListener("input", validateConfirmPassword);

// Define the regex patterns for password requirements
const requirements = [
    { regex: /.{8,}/, element: document.querySelector(".requirement-list li:nth-child(2)") }, // At least 8 characters
    { regex: /[0-9]/, element: document.querySelector(".requirement-list li:nth-child(1)") }, // At least 1 number
    { regex: /[a-z]/, element: document.querySelector(".requirement-list li:nth-child(3)") }, // At least 1 lowercase letter
    { regex: /[A-Z]/, element: document.querySelector(".requirement-list li:nth-child(4)") }, // At least 1 uppercase letter
    { regex: /[^A-Za-z0-9]/, element: document.querySelector(".requirement-list li:nth-child(5)") } // At least 1 special character
];

// Event listener for password input
document.getElementById("new-password-field").addEventListener("input", function () {
  let value = this.value;
  requirements.forEach(req => {
    if (req.regex.test(value)) {
      req.element.classList.add("valid"); // Add 'valid' class to li
      req.element.querySelector("i").className = "bi bi-check-lg"; // Change to check icon
    } else {
      req.element.classList.remove("valid"); // Remove 'valid' class from li
      req.element.querySelector("i").className = "bi bi-circle"; // Revert to circle icon
    }
  });
});

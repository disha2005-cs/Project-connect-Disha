function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !email || !address) {
    alert(" Please fill in all fields.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert(" Please enter a valid email address.");
    return false;
  }

  alert(" Form submitted successfully!");
  document.getElementById("contactForm").reset();
  return false;
}

const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
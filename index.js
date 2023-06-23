// Function to toggle dark mode
function toggleDarkMode() {
    const html = document.querySelector("html");
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);
  }
  
  // Add event listener to the dark mode switch
  const darkSwitch = document.querySelector("#darkSwitch");
  darkSwitch.addEventListener("change", toggleDarkMode);
  
  // welcome modal
  document.addEventListener("DOMContentLoaded", function () {
    var welcomeModal = new bootstrap.Modal(
      document.getElementById("welcomeModal")
    );
    welcomeModal.show();
  });
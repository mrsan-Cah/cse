document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        window.location.href = "login.html"; // Redirect if not logged in
    } else {
        document.getElementById("username").textContent = user.username;
        document.getElementById("userEmail").textContent = user.email;
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

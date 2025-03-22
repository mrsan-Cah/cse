document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("registerForm")) {
        document.getElementById("registerForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const password = document.getElementById("password").value;

            if (localStorage.getItem(phone)) {
                alert("User already exists!");
            } else {
                localStorage.setItem(phone, JSON.stringify({ name, phone, password }));
                alert("Registration successful!");
                window.location.href = "login.html";
            }
        });
    }

    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const phone = document.getElementById("loginPhone").value;
            const password = document.getElementById("loginPassword").value;
            const userData = JSON.parse(localStorage.getItem(phone));

            if (userData && userData.password === password) {
                sessionStorage.setItem("loggedInUser", JSON.stringify(userData));
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid login credentials!");
            }
        });
    }

    if (document.getElementById("userName")) {
        const userData = JSON.parse(sessionStorage.getItem("loggedInUser"));
        if (!userData) {
            window.location.href = "login.html";
        } else {
            document.getElementById("userName").textContent = userData.name;
            document.getElementById("userPhone").textContent = userData.phone;
            document.getElementById("userPassword").textContent = userData.password;
        }
    }
});

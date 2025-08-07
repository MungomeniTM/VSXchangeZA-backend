document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save token if you're using JWT
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Login failed");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong.");
  }
});

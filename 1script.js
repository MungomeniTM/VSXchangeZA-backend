document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registration successful!");
      window.location.href = "dashboard.html"; // redirect to dashboard
    } else {
      alert(data.message || "Registration failed");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong.");
  }
});

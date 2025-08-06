document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = document.getElementById("locationInput").value;
  const skill = document.getElementById("skillInput").value;

  try {
    const res = await fetch(`/api/search?location=${location}&skill=${skill}`);
    const data = await res.json();

    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (data.length === 0) {
      resultsDiv.innerHTML = "<p>No skilled people found matching your search.</p>";
    } else {
      data.forEach((user) => {
        const el = document.createElement("div");
        el.classList.add("search-card");
        el.innerHTML = `
          <strong>${user.name}</strong> <br>
          Skill: ${user.skill} <br>
          Location: ${user.location} <br>
          <button onclick="window.location.href='/profile/${user._id}'">View Profile</button>
        `;
        resultsDiv.appendChild(el);
      });
    }
  } catch (err) {
    console.error(err);
    alert("Search failed, try again.");
  }
});

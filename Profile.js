const userId = new URLSearchParams(window.location.search).get("id");

fetch(`http://localhost:5000/api/users/${userId}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('profile-pic').src = data.profilePic || 'default.jpg';
    document.getElementById('username').innerText = data.username;
    document.getElementById('bio').innerText = data.bio;
    document.getElementById('skill').innerText = data.skill;
    document.getElementById('location').innerText = data.location;

    const postsContainer = document.getElementById('posts-container');
    data.posts.forEach(post => {
      const div = document.createElement('div');
      div.innerText = post.content || 'No content';
      postsContainer.appendChild(div);
    });
  });

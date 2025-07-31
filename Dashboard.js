async function sendCollaborateRequest(receiverId) {
  const senderId = localStorage.getItem('userId'); // Replace this logic with your auth logic

  try {
    const res = await fetch('/api/collaborate/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ senderId, receiverId })
    });

    const data = await res.json();
    document.getElementById('collab-message').innerText = data.message;
  } catch (err) {
    console.error(err);
    alert('Error sending collaboration request.');
  }
}

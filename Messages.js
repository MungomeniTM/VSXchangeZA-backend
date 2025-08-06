document.getElementById("sendMessageBtn").addEventListener("click", function () {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value.trim();
  if (message === "") return;

  const msgElement = document.createElement("div");
  msgElement.classList.add("message", "sent");
  msgElement.textContent = message;

  document.getElementById("chatMessages").appendChild(msgElement);
  messageInput.value = "";
  document.getElementById("chatMessages").scrollTop = document.getElementById("chatMessages").scrollHeight;
});

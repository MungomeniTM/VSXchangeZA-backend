// Save user role preference (client/skilled person)
document.getElementById('role').addEventListener('change', function () {
  const role = this.value;
  console.log('Selected role:', role);
  // Later: Send to backend via fetch('/api/role', { method: POST, body: JSON.stringify({ role }) })
});

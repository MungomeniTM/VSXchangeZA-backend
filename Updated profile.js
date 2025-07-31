// Replace this with real data later
document.getElementById("username").innerText = "Mulisa";
document.getElementById("skill").innerText = "Electrician";
document.getElementById("location").innerText = "Thohoyandou";

const gallery = document.getElementById("mediaGallery");

// Example of uploaded work (images/videos)
const workSamples = [
  { type: 'image', src: 'work1.jpg' },
  { type: 'video', src: 'work2.mp4' },
  { type: 'image', src: 'work3.jpg' }
];

workSamples.forEach(item => {
  const mediaElement = document.createElement(item.type);
  mediaElement.src = item.src;
  if (item.type === 'video') {
    mediaElement.controls = true;
  }
  gallery.appendChild(mediaElement);
});

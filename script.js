const text = document.querySelector(".reveal");
text.style.opacity = 0;

window.onload = () => {
  text.style.transition = "2s";
  text.style.opacity = 1;
};

function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

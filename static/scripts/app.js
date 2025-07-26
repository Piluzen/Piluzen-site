console.log("Piluzen site loaded");

const topBtn = document.getElementById("backToTopBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

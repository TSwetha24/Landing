function navigateTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('darkModeToggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 
  alert("Thanks for contacting us! We'll get back to you soon.");
});

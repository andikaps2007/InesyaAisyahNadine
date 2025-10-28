// Ambil semua tombol dan bagian halaman
const menuButtons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll("section");

// Fungsi berpindah halaman
menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");

    sections.forEach(sec => {
      if (sec.id === target) {
        sec.classList.remove("hidden-section");
        sec.style.opacity = 1;
      } else {
        sec.classList.add("hidden-section");
        sec.style.opacity = 0;
      }
    });
  });
});

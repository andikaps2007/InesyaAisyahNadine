/* =============================
   SCRIPT.JS - Navigasi Interaktif
   ============================= */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-btn");
  const sections = document.querySelectorAll("section");

  // Efek klik menu
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      sections.forEach(sec => {
        sec.classList.remove("active-section");
        sec.classList.add("fade");
      });

      const target = document.getElementById(btn.dataset.target);
      target.classList.add("active-section");
      target.classList.remove("fade");

      // Scroll ke atas dengan efek lembut
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

  // Efek parallax ringan saat scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    document.querySelectorAll(".fade, .active-section").forEach(el => {
      el.style.transform = `translateY(${scrolled * 0.05}px)`;
    });
  });

  // Aktifkan ikon lucide
  lucide.createIcons();
});

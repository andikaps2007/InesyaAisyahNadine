// Aktifkan ikon Lucide
lucide.createIcons();

// Scroll ke bagian
const buttons = document.querySelectorAll('.menu-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).scrollIntoView({ behavior: 'smooth' });
  });
});

// Efek animasi fade-in saat scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

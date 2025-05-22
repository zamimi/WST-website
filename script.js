// Toggle mobile menu
document.getElementById('menu-toggle')?.addEventListener('click', () => {
  document.getElementById('nav-links')?.classList.toggle('show');
});

// Contact form submission
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent!');
  this.reset();
});

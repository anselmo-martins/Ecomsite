const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

if (menuToggle && navbar) {
	menuToggle.addEventListener('click', () => {
		const isOpen = navbar.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
	});

	navbar.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			if (navbar.classList.contains('open')) {
				navbar.classList.remove('open');
				menuToggle.setAttribute('aria-expanded', 'false');
				menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
			}
		});
	});
}

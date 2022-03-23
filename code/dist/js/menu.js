((document) => {

	const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	const link = document.querySelectorAll('.nav-link');

	const mobileMenu = () => {
		hamburger.classList.toggle('active');
		menu.classList.toggle('active');
	}

	const closeMenu = () => {
		hamburger.classList.remove('active');
		menu.classList.remove('active');
	}

	hamburger.addEventListener('click', mobileMenu);
	link.forEach(n => n.addEventListener('click', closeMenu));

})(document);
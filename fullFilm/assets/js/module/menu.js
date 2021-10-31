const menuMobile = () => {
	const openedMenu = document.querySelector('.hamburger-mobile');
	const closedMenu = document.querySelector('.close-menu .icon');
	const navbarMenu = document.querySelector('.header-main-navbar');
	const overlay = document.querySelector('.overlay');
	const accountForm = document.querySelector(".account-form");

	openedMenu.addEventListener('click', ()=>{
		navbarMenu.classList.toggle("active");
		overlay.classList.toggle("active");
		accountForm.classList.remove("active");
		document.body.classList.toggle("scrolling");
	})
	closedMenu.addEventListener('click', ()=>{
		navbarMenu.classList.remove("active");
		overlay.classList.remove("active");
		document.body.classList.remove("scrolling");
	})
	overlay.addEventListener('click', ()=>{
		navbarMenu.classList.remove("active");
		overlay.classList.remove("active");
		document.body.classList.remove("scrolling");
	})

	navbarMenu.addEventListener('click', (event) => {
		if(event.target.hasAttribute('data-toggle') && window.innerWidth <= 1023) {
			event.preventDefault();
			const menuItemHasChildren = event.target.parentElement;
			if(menuItemHasChildren.classList.contains("active")) {
				navbarMenu.querySelector('.menu-item--has-child.active .sub-menu').removeAttribute('style');
				navbarMenu.querySelector('.menu-item--has-child.active').classList.remove("active");
			} else {
				if(navbarMenu.querySelector('.menu-item--has-child.active')) {
					navbarMenu.querySelector('.menu-item--has-child.active .sub-menu').removeAttribute('style');
					navbarMenu.querySelector('.menu-item--has-child.active').classList.remove("active");
				}
				menuItemHasChildren.classList.add("active");
				const subMenu = menuItemHasChildren.querySelector('.sub-menu');
				subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
			}
		}
	});
}
export default {menuMobile}
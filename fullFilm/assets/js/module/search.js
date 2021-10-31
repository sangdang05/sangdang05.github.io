const openSearch = () => {
	let btnIcon = document.querySelector('.icon-search-tb');
	let closeSearch = document.querySelector('.close-search');
	let formSearch = document.querySelector('.header-search');
	let overlay = document.querySelector('.overlay');
	btnIcon.addEventListener('click', () => {
		formSearch.classList.add("active");
		overlay.classList.add("active");
	});
	closeSearch.addEventListener('click', () => {
		formSearch.classList.remove("active");
		overlay.classList.remove("active");
	})
	overlay.addEventListener('click', () => {
		formSearch.classList.remove("active");
		overlay.classList.remove("active");
	})
}
export default {openSearch};
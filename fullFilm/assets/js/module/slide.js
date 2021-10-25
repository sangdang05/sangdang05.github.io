const slidebanner = new Swiper('.banner-wrap', {
	loop: true,
	effect: 'coverflow',
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
})
const filmNew = new Swiper('.new-update', {
	spaceBetween: 15,
	loop: true,
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 3,
		},
		950: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
})
const filmCinema = new Swiper('.film-cinema', {
	spaceBetween: 15,
	loop: true,
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 3,
		},
		950: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
})
const filmFull = new Swiper('.film-full', {
	spaceBetween: 15,
	loop: true,
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 3,
		},
		950: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
})
const filmOdd = new Swiper('.film-odd', {
	spaceBetween: 15,
	loop: true,
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 3,
		},
		950: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
})
const filmAnime = new Swiper('.film-anime', {
	spaceBetween: 15,
	loop: true,
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 3,
		},
		950: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
})

export default slidebanner;
export {filmNew, filmCinema, filmFull, filmOdd, filmAnime};
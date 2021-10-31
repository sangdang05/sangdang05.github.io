const slidebanner = new Swiper('.banner-wrap', {
	loop: true,
	navigation: {
		nextEl: '.btn-next-banner',
		prevEl: '.btn-prev-banner',
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
});
const filmNew = new Swiper('.new-update', {
	spaceBetween: 15,
	//loop: true,
	navigation: {
		nextEl: '.btn-next-new',
		prevEl: '.btn-prev-new',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
});
const filmCinema = new Swiper('.film-cinema', {
	spaceBetween: 15,
	navigation: {
		nextEl: '.btn-next-cinema',
		prevEl: '.btn-prev-cinema',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
});
const filmFull = new Swiper('.film-full', {
	spaceBetween: 15,
	navigation: {
		nextEl: '.btn-next-full',
		prevEl: '.btn-prev-full',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
});
const filmOdd = new Swiper('.film-odd', {
	spaceBetween: 15,
	navigation: {
		nextEl: '.btn-next-odd',
		prevEl: '.btn-prev-odd',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
});
const filmAnime = new Swiper('.film-anime', {
	spaceBetween: 15,
	navigation: {
		nextEl: '.btn-next-anime',
		prevEl: '.btn-prev-anime',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		480: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		}
	}
})

export default slidebanner;
export {filmNew, filmCinema, filmFull, filmOdd, filmAnime};
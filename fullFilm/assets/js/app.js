const swiper = new Swiper('.banner-wrap', {
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
const filmwrap = new Swiper('.film-wrap-content', {
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

const btnLink = document.querySelectorAll('.btn-link');
btnLink.forEach((item)=>{
    item.addEventListener("click", ()=>{
        let href = item.getAttribute("data-href");
        window.location.href = href;
    })
})

const openedMenu = document.querySelector('.hamburger-mobile');
const closedMenu = document.querySelector('.close-menu .icon');
const navbarMenu = document.querySelector('.header-main-navbar');
const menuOverlay = document.querySelector('.overlay');

openedMenu.addEventListener('click', ()=>{
    toggleMenu();
})
closedMenu.addEventListener('click', ()=>{
    closeMenu();
})
menuOverlay.addEventListener('click', ()=>{
    closeMenu();
})

toggleMenu = () => {
  navbarMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.classList.toggle('scrolling');
}
closeMenu = () => {
    navbarMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('scrolling');
}
navbarMenu.addEventListener('click', (event) => {
    if(event.target.hasAttribute('data-toggle') && window.innerWidth <= 1023) {
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        if(menuItemHasChildren.classList.contains('active')) {
            collapseSubMenu();
        } else {
            if(navbarMenu.querySelector('.menu-item--has-child.active')) {
                collapseSubMenu();
            }
            menuItemHasChildren.classList.add('active');
            const subMenu = menuItemHasChildren.querySelector('.sub-menu');
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
    }
});
collapseSubMenu = () => {
    navbarMenu.querySelector('.menu-item--has-child.active .sub-menu').removeAttribute('style');
    navbarMenu.querySelector('.menu-item--has-child.active').classList.remove('active');
}
resizeScreen = () => {
    if (navbarMenu.classList.contains('active')) {
        toggleMenu();
    }
    if (navbarMenu.querySelector('.menu-item--has-child.active')) {
        collapseSubMenu();
    }
}
window.addEventListener('resize', () => {
    if (this.innerWidth > 1023) {
        resizeScreen();
    }
});

import slidebanner, {filmNew, filmCinema, filmFull, filmOdd, filmAnime} from './module/slide.js';
import tabAccount  from './module/tabAccount.js';
import menuMobile from './module/menu.js';
tabAccount.showForm();
tabAccount.tab();
menuMobile.menuMobile();

const btnLink = document.querySelectorAll('.btn-link');
btnLink.forEach((item)=>{
    item.addEventListener("click", ()=>{
        let href = item.getAttribute("data-href");
        window.location.href = href;
    })
})




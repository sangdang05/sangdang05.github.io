const showForm = () => {
    const btnAccount = document.querySelector(".avatar-user");
    const accountForm = document.querySelector(".account-form");
    const overlay = document.querySelector('.overlay');
    const accountClose = document.querySelector('.account-close');
    const navbarMenu = document.querySelector('.header-main-navbar');
    btnAccount.addEventListener('click', ()=>{
        accountForm.classList.add("active");
        overlay.classList.add("active");
        navbarMenu.classList.remove("active");
    })
    overlay.addEventListener('click', ()=>{
        accountForm.classList.remove('active');
        overlay.classList.remove('active');
    })
    accountClose.addEventListener('click', ()=>{
        accountForm.classList.remove('active');
        overlay.classList.remove('active');
    })
}
const tab = () => {
    const tabAccount = document.querySelectorAll(".tab-link");
    const tabContent =document.querySelectorAll(".form-account");
    tabAccount.forEach((e) => {
        e.addEventListener('click', (e)=>{
            let btn = e.currentTarget; 
            let tab = btn.dataset.tab;
            tabContent.forEach((e) => {
                e.classList.remove("active");
            });
            tabAccount.forEach((e) => {
                e.classList.remove("active");
            });
            document.querySelector("#" + tab).classList.add("active");
            btn.classList.add("active");
        });
    })
}

export default {showForm, tab}
const nav = document.querySelector(".nav");
const mobileNav = document.querySelector(".mobile-nav");
const menus = document.querySelectorAll(".nav__items");
const arrows = document.querySelectorAll(".nav-arrow");
const subMenus = document.querySelectorAll(".nav-sub");
const mobileSubMenus = mobileNav.querySelectorAll(".mobile-nav-sub");
const subMenuCompany = nav.querySelector(".nav-sub_company");
const mobileSubMenuCompany = mobileNav.querySelector(".mobile-nav-sub_company");
const subMenuResources = nav.querySelector(".nav-sub_resources");
const mobileSubMenuResources = mobileNav.querySelector(".mobile-nav-sub_resources");
const mobileCompanyHeader = mobileNav.querySelector(".mobile-nav__link_company");
const mobileResourcesHeader = mobileNav.querySelector(".mobile-nav__link_resources");


let state = {
    nav: {
        activeItem: "",
        type: "classic",
    }
}


function redrawSubNav(submenuToShow) {
    subMenus.forEach((menu) => {
        menu.style.transform = `scaleY(0)`;
    })
    mobileSubMenus.forEach((menu) => {
        menu.style.maxHeight = `0`;
    })
    mobileCompanyHeader.style.borderBottom = `none`;
    mobileResourcesHeader.style.borderBottom = `none`;
    if (submenuToShow === "company") {
        subMenuCompany.style.transform = `scaleY(1)`;
        mobileSubMenuCompany.style.maxHeight = `500px`;
        mobileCompanyHeader.style.borderBottom = `3px solid #636363`;
    }
    if (submenuToShow === "resources") {
        subMenuResources.style.transform = `scaleY(1)`;
        mobileSubMenuResources.style.maxHeight = `1000px`;
        mobileResourcesHeader.style.borderBottom = `3px solid #636363`;
    }

}



function redrawNav(selected) {
    state.nav.activeItem = selected;
    arrows.forEach((el) => {
        if (selected === el.dataset.item || selected === el.parentNode.dataset.item) {
            el.style.transform = `rotate(225deg) scale(-1, -1)`;
        } else {
            el.style.transform = `rotate(225deg)`;
        }
    })
    redrawSubNav(selected);
    if (state.nav.type === 'sticky' ) {
        nav.parentNode.classList.add('sticky');
        subMenus.forEach(el => el.classList.add('sticky'));
        mobileNav.classList.add('sticky');
    } else {
        nav.parentNode.classList.remove('sticky'); 
        subMenus.forEach(el => el.classList.remove('sticky'));
        mobileNav.classList.remove('sticky');
    } 

}



menus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
        if (e.target.dataset.item) {
            e.target.dataset.item === state.nav.activeItem ? state.nav.activeItem = "" : state.nav.activeItem = e.target.dataset.item;
        } else {
            e.target.parentNode.dataset.item === state.nav.activeItem ? state.nav.activeItem = "" : state.nav.activeItem = e.target.parentNode.dataset.item;
        }
        redrawNav(state.nav.activeItem)
    })
})



function changeMenuType(newType) {
    if (state.nav.type !== newType) {
        state.nav.type = newType;
        redrawNav(state.nav.activeItem);
    }
}


document.addEventListener("scroll", (e) => {
    if (window.scrollY > 100) {
        changeMenuType('sticky');
    } 
    if (window.scrollY < 20) {
        changeMenuType('classic')
    }
})

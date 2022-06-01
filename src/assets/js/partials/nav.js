const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const mobileNav = document.querySelector(".mobile-nav");
const menus = document.querySelectorAll(".nav__items");
const arrows = document.querySelectorAll(".nav-arrow");
const subMenus = document.querySelectorAll(".nav-sub");
const mobileSubMenus = mobileNav.querySelectorAll(".mobile-nav-sub");

/*
const subMenuCompany = nav.querySelector(".nav-sub_company");
const subMenuResources = nav.querySelector(".nav-sub_resources");
const mobileSubMenuCompany = mobileNav.querySelector(".mobile-nav-sub_company");
const mobileSubMenuResources = mobileNav.querySelector(".mobile-nav-sub_resources");

const mobileCompanyHeader = mobileNav.querySelector(".mobile-nav__link_company");
const mobileResourcesHeader = mobileNav.querySelector(".mobile-nav__link_resources");
*/

let state = {
    nav: {
        activeSub: "",
        type: "classic",
    }
}
 

function redrawSubNav(submenuToShow) {
    
    subMenus.forEach((menu) => {
        if (menu === submenuToShow) {
            menu.classList.add('selected')
        } else {
            menu.classList.remove('selected')
        }
    })

    mobileSubMenus.forEach((submenu) => {
        if (submenu === submenuToShow) {
            submenu.classList.add('selected')
        } else {
            submenu.classList.remove('selected')
        }
    })


    /*
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
    if (submenuToShow) {
        header.classList.add("header_submenu");
    } else {
        header.classList.remove("header_submenu");
    }
    */

}



function redrawNav(selected, target) {
    state.nav.activeSub = selected;
    //console.log(state.nav.activeSub);
    arrows.forEach((el) => {
        if (selected === el.dataset.item || selected === el.parentNode.dataset.item) {
            el.style.transform = `rotate(225deg) scale(-1, -1)`;
        } else {
            el.style.transform = `rotate(225deg)`;
        }
    })
    state.nav.activeSub ? redrawSubNav(target) : redrawSubNav(null);
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
        if (e.target.querySelector('.nav-sub') || e.target.querySelector('.mobile-nav-sub')) {
            if (e.target.dataset.item) {
                e.target.dataset.item === state.nav.activeSub ? state.nav.activeSub = "" : state.nav.activeSub = e.target.dataset.item;
                e.target.querySelector('.nav-sub') ? redrawNav(state.nav.activeSub, e.target.querySelector('.nav-sub')) : redrawNav(state.nav.activeSub, e.target.querySelector('.mobile-nav-sub'));
            } 
        }
    })
})



function changeMenuType(newType) {
    if (state.nav.type !== newType) {
        state.nav.type = newType;
        redrawNav(state.nav.activeSub);
    }
}


document.addEventListener("scroll", (e) => {
    if (window.scrollY > 600) {
        changeMenuType('sticky');
    } 
    if (window.scrollY < 500) {
        changeMenuType('classic')
    }

})

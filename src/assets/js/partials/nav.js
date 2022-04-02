const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav__items");
const arrows = menu.querySelectorAll(".nav-arrow");
const subMenus = menu.querySelectorAll(".nav-sub");
const subMenuCompany = nav.querySelector(".nav-sub_company");
const subMenuResources = nav.querySelector(".nav-sub_resources");
let state = {
    nav: {
        activeItem: "",
        type: "classic",
    }
}


function redrawSubNav(submenuToShow) {
    subMenus.forEach(el => el.style.transform = `scaleY(0)`);
        if (submenuToShow === "company") {
            subMenuCompany.style.transform = `scaleY(1)`;
        }
        if (submenuToShow === "resources") {
            subMenuResources.style.transform = `scaleY(1)`;
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
        subMenus.forEach(el => el.classList.add('sticky'))
    } else {
        nav.parentNode.classList.remove('sticky'); 
        subMenus.forEach(el => el.classList.remove('sticky'))
    } 

}



menu.addEventListener("click", (e) => {
    if (e.target.dataset.item) {
        e.target.dataset.item === state.nav.activeItem ? state.nav.activeItem = "" : state.nav.activeItem = e.target.dataset.item;
    } else {
        e.target.parentNode.dataset.item === state.nav.activeItem ? state.nav.activeItem = "" : state.nav.activeItem = e.target.parentNode.dataset.item;
    }
    redrawNav(state.nav.activeItem)
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

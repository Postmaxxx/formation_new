const menu = document.querySelector(".resources__menu");
const menuItems = menu.querySelectorAll(".resources__menu__item");

let state = {
    resources: {
        menu: {
            activeItem: "",
            hoveredItem: ""
        }
    }
}


function changeMenuStyles() {
    console.log('active', state.resources.menu.activeItem, 'hovered', state.resources.menu.hoveredItem);
    menuItems.forEach((item) => {
        if (item.dataset.category === state.resources.menu.activeItem || (item.dataset.category === state.resources.menu.hoveredItem && state.resources.menu.activeItem === "")) {
            item.classList.add('resources__menu__item_selected')
        } else {
            item.classList.remove('resources__menu__item_selected')
        }
    })
}




menu.addEventListener('mouseover', (e) => {
    if (e.target.dataset.category) {
        state.resources.menu.hoveredItem = e.target.dataset.category;
    }
    if (e.target.parentNode.dataset.category) {
        state.resources.menu.hoveredItem = e.target.parentNode.dataset.category;
    }
    changeMenuStyles();
})


menu.addEventListener('mouseout', (e) => {
    //state.resources.menu.hoveredItem = ""
    changeMenuStyles();
})


menu.addEventListener('click', (e) => {
    if (e.target.dataset.category) {
        state.resources.menu.activeItem = e.target.dataset.category;
    }
    if (e.target.parentNode.dataset.category) {
        state.resources.menu.activeItem = e.target.parentNode.dataset.category;
    }
    changeMenuStyles();
})

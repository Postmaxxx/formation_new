const blog_nav = document.querySelector(".blog__nav__cont");

const blogHeaders = document.querySelector(".blog__content").querySelectorAll("h2");

blog_nav.innerHTML = '';


blogHeaders.forEach((header) => {
    blog_nav.innerHTML += `
           <a class="blog__nav__cont__item" onClick="window.scrollTo(0,${header.getBoundingClientRect().top - 150})">${header.innerHTML}</a>
       `
       
})


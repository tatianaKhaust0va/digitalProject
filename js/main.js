const hamburgerBlock = document.querySelector("#bur");
const hamburgerIcon = document.querySelector("#bur-icon");
const menu = document.querySelector('#menu');
const body = document.querySelector("body");
const header = document.querySelector("header");
const menuItems = document.querySelectorAll(".header-nav-menu__item");
const menuLinks = document.querySelectorAll(".header-nav-menu__link[data-scroll]");

// <================== Menu hamburger ==========>

hamburgerBlock.addEventListener('click', () => {
    if (hamburgerBlock) {
        hamburgerBlock.classList.toggle('active');
        hamburgerIcon.classList.toggle("fa-xmark");
        menu.classList.toggle("active");
        body.classList.toggle("locked");
    } else {
        removeClasses();
    }
});
const removeClasses = () => {
    hamburgerBlock.classList.remove('active');
    hamburgerIcon.classList.remove("fa-xmark");
    menu.classList.remove("active");
    body.classList.remove("locked");
}
menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", (e) => {
        removeClasses();
        e.preventDefault();
    });
});
// <================== Menu hamburger ==========>

// <================== fixed header ==========>

window.onscroll = (function headerFixed() {
   
   if (window.pageYOffset > 75) {
    header.classList.add("header--fixed");
} else {
       header.classList.remove("header--fixed");
   }
});

// <================== fixed header ==========>

// <================== smooth scrolling ==========>



const menuLinkClick = (e) => {
    const menuLink = e.target;
    if(menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
        const scrollToBlock = document.querySelector(menuLink.dataset.scroll);
        const scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + pageYOffset - header.offsetHeight;
        window.scrollTo({
            top: scrollToBlockValue,
            behavior: "smooth"
        })

        e.preventDefault()
    } else {
        // menuLink.classList.remove("active");
    }
    menuItems.forEach((item) => {
        if (menuItems) {
            item.addEventListener("click", (e) =>{
                item.classList.add("active");
            })
            
        } else {
            item.classList.remove("active");
        }

    })
}

if (menuLinks.length > 0) {
    for (const menuLink of menuLinks) {
        menuLink.addEventListener('click', menuLinkClick)
        
    }
}

// <================== smooth scrolling ==========>

// <================== open info ==========>

const info = document.querySelector(".map-content");
const infoItems = info.querySelectorAll('.map-content__item');


for (const item of infoItems) {
   item.onmouseover = () => {
    item.classList.add('hover');
   }
   item.onmouseleave = () => {
    item.classList.remove('hover');
   }
}

// <================== open info ==========>


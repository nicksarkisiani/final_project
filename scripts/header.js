const container = document.querySelector('.main')
const header = document.getElementsByClassName('header')[0]
const headerHover = document.getElementsByClassName('header__hover')[0]
const headerNav = document.getElementsByClassName('header__nav')[0]
const firstElem = document.getElementsByClassName('first__elem')[0]
const whitelogo = document.getElementsByClassName('whitelogo')[0]
const purplelogo = document.getElementsByClassName('purplelogo')[0]
let headerHeight = header.offsetHeight;

headerHover.onmouseenter = function (e) {
    if (document.body.offsetWidth < 850) {
        return;
    }
    e.preventDefault()
    setTimeout(() => {
        header.style.height = '87px'
        header.style.transition = "none"
        header.classList.add('header__black')
        setTimeout(() => {
            header.classList.remove('header__black')
            header.classList.add('header__active')
            header.style.position = 'fixed'
            if(whitelogo) whitelogo.classList.add("whitelogo_active")
            if(purplelogo) purplelogo.classList.add('purplelogo_active')
            headerNav.classList.add('header__nav_active');
            firstElem.style.paddingTop = `${headerHeight}px`
        }, 30)
    }, 150)

}

header.onmouseleave = function (e) {
    if (document.body.offsetWidth < 850) {
        return;
    }
    e.preventDefault()
    header.style.position = 'relative'
    header.style.height = `${headerHeight}px`
    firstElem.style.paddingTop = 0
    header.classList.remove('header__active')
    if(whitelogo) whitelogo.classList.remove("whitelogo_active")
    if(purplelogo) purplelogo.classList.remove('purplelogo_active')
    headerNav.classList.remove('header__nav_active');
    
}

const hamMenu = document.querySelector(".ham-menu");
const blurOverlay = document.querySelector("#blur-overlay");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    blurOverlay.classList.toggle('display__none')
    document.body.classList.toggle('scrolling');
    offScreenMenu.classList.toggle("active");
});

function removeScrolling() {
    if (document.body.offsetWidth > 850) {
        if (document.body.classList.contains('scrolling')) {
            document.body.classList.remove('scrolling');
        }
        if (!blurOverlay.classList.remove('display__none')) blurOverlay.classList.toggle('display__none')
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
    }
    header.style.maxWidth = `${container.offsetWidth}px`
    headerHover.style.maxWidth = `${container.offsetWidth}px`
}

blurOverlay.onclick = function (e) {
    e.preventDefault()
    blurOverlay.classList.toggle('display__none')
    hamMenu.classList.toggle('active')
    document.body.classList.toggle('scrolling');
    offScreenMenu.classList.toggle("active");
}

new ResizeObserver(removeScrolling).observe(document.body)
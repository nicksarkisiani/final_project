const elements = document.getElementsByClassName("for_animation");
const animation = document.getElementsByClassName('animation');
const mainContainer = document.getElementsByClassName('container')[0]
mainContainer.classList.add('hidden')

for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("display__none")
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("display__none")
        }
        animation[0].classList.add('animation__none')
        mainContainer.classList.remove('hidden')
    }, 7000);
});
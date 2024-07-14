const brandCard = document.getElementsByClassName('brands__card')
const cardInfo = document.getElementsByClassName('card__none')
const blurContent = document.getElementsByClassName('opacity')

for (let i = 0; i < brandCard.length; i++) {
    brandCard[i].onmouseover = function (e) {
        e.preventDefault()
        cardInfo[i].classList.add('brand__card_info')
        blurContent[i].classList.add('brand__card_blur')
    }

    brandCard[i].onmouseout = function (e) {
        e.preventDefault()
        cardInfo[i].classList.remove('brand__card_info')
        blurContent[i].classList.remove('brand__card_blur')
    }
}


const serviceBoxes = document.getElementsByClassName('service__box');
const serviceBtns = document.getElementsByClassName('service__btn');
const serviceUl = document.getElementsByClassName('service__box__ul')
const serviceSpanBtns = document.getElementsByClassName('service__btn__span')
const serviceSvgBtns = document.getElementsByClassName('service__btn__svg')

for (let i = 0; i < serviceBtns.length; i++) {
    serviceBtns[i].onclick = function (e) {
        e.preventDefault()
        serviceUl[i].classList.toggle('service__ul_active')
        serviceBoxes[i].classList.toggle("service__box_full")
        serviceBtns[i].classList.toggle('service__btn_active')
        serviceSpanBtns[i].classList.toggle('service__btn__span_active')
        serviceSvgBtns[i].classList.toggle('service__btn__svg_active')
    }
}

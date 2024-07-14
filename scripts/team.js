const cards = document.getElementsByClassName('team__item')
const cardInfo = document.getElementsByClassName('card__none')
const blurContent = document.getElementsByClassName('opacity')

for (let i = 0; i < cards.length; i++) {
    cards[i].onmouseover = function (e) {
        e.preventDefault()
        cardInfo[i].classList.add('team__card_info')
        blurContent[i].classList.add('team__card_blur')
    }

    cards[i].onmouseout = function (e) {
        e.preventDefault()
        cardInfo[i].classList.remove('team__card_info')
        blurContent[i].classList.remove('team__card_blur')
    }
}
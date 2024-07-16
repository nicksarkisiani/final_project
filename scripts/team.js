const cards = document.getElementsByClassName('team__item')
const cardInfo = document.getElementsByClassName('card__none')
const blurContent = document.getElementsByClassName('opacity')
const itemTypo = document.getElementsByClassName('team_item__typo')
const itemImgDiv = document.getElementsByClassName('team_item__img')

for (let i = 0; i < cards.length; i++) {
    cards[i].onmouseover = function (e) {
        e.preventDefault()
        cardInfo[i].classList.add('team__card_info')
        itemTypo[i].classList.add('team__none')
        itemImgDiv[i].classList.add('team_item__img_blur')
        blurContent[i].classList.add('team__card_blur')
    }

    cards[i].onmouseout = function (e) {
        e.preventDefault()
        cardInfo[i].classList.remove('team__card_info')
        itemTypo[i].classList.remove('team__none')
        blurContent[i].classList.remove('team__card_blur')
    }
}
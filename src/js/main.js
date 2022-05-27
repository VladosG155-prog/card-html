
// Counter
const minus = document.querySelectorAll('.minus')
const plus = document.querySelectorAll('.plus')
const counterInput = document.querySelectorAll('.counter-inp')

if(minus){
    minus.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            if(counterInput[index].value > 0){
                counterInput[index].value--
            }else{
                counterInput[index] = 0
            }
        })
    })
    plus.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            counterInput[index].value++
        })
    })
}
//HideShowBtn
const buyStart = document.querySelectorAll('.buy-start')
const buyCounter = document.querySelectorAll('.buy-counter')

if(buyStart){
    buyStart.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            buyStart[index].classList.add('active')
            buyCounter[index].classList.add('active')
        })
    })
}

// faqItem

const faqItemTop = document.querySelectorAll('.faq__item')
const faqItemOpen = document.querySelectorAll('.faq__item--open')

if(faqItemOpen){
    faqItemTop.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            item.classList.toggle('active')
        })
    })
}

// customSelect

const customSelect = document.querySelector('.select-input')
const customSelectOpen = document.querySelector('.custom-select-open')
const customSelectOpenItem = document.querySelectorAll('.selectedElem')
const elemAbs = document.querySelectorAll('.elem-abs')
const customSelectItemSelect = document.querySelectorAll('.custom-elem-select')
let activeElem = 0
if(customSelect){
    customSelect.addEventListener('click',()=>{
        customSelectOpen.classList.add('active')
    })
    customSelectItemSelect.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            elemAbs[activeElem].classList.remove('active')
            activeElem = index
            elemAbs[activeElem].classList.add('active')
            customSelect.value = item.querySelector('p').innerHTML
            customSelectOpen.classList.remove('active')
        })
    })
}

// mobileMenu

const mobileBurger = document.querySelector('.menu__burger')
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.querySelector('.body')

if(mobileBurger){
    mobileBurger.addEventListener('click',()=>{
        mobileBurger.classList.toggle('active')
        mobileMenu.classList.toggle('active')
        body.classList.toggle('hide')
    })
}

// modalCard

const modalCart = document.querySelector('.modal')
const modalCartTrig = document.querySelector('.header__cart')
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.close')
if(modalCartTrig){
    modalCartTrig.addEventListener('click',()=>{
        modalCart.classList.add('active')
        overlay.classList.add('active')
    })
    close.addEventListener('click',()=>{
        modalCart.classList.remove('active')
        overlay.classList.remove('active')
    })
    overlay.addEventListener('click',()=>{
        modalCart.classList.remove('active')
        overlay.classList.remove('active')
    })
}

//widget

const widgetOpen = document.querySelector('.widget__feedback--form')
const widgetTrig = document.querySelector('.widget__feedback--open')
const closeWidget = document.querySelector('.close-widget')
if(widgetOpen){
    widgetTrig.addEventListener('click',()=>{
        widgetTrig.classList.toggle('active')
        widgetOpen.classList.toggle('active')
    })
}
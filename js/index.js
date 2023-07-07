let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.menu')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active')
    
})


const scrollBtn = document.querySelector('.showBtn')
window.onscroll = () => {
    if(window.scrollY > 700){
        scrollBtn.classList.remove('showBtn_hide')
    } else if(window.scrollY < 700){
        scrollBtn.classList.add('showBtn_hide')
    }
}
scrollBtn.onclick = () => {
    window.scrollTo(0, 0)
}



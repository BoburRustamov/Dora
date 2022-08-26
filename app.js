const menuBtn = document.querySelector('.menu_bar');
const links = document.querySelector('.nav_title-right');

menuBtn.addEventListener('click', function() {
    if(links.classList.contains('nav_title-right-Active')){
        links.classList.remove('nav_title-right-Active')
    }else{
        links.classList.add('nav_title-right-Active')
    }
})
document.addEventListener('DOMContentLoaded', () =>{
    const navBurger = document.querySelector('.nav-burger');
    const navList = document.querySelector('.navlist');
    const closeMenu = document.querySelector('.closemenu');
    const food = document.getElementById('Food');
    const about = document.getElementById('About');

    navBurger.addEventListener('click',() =>{
        navList.classList.add('open');
    
    })

    closeMenu.addEventListener('click',() =>{
        navList.classList.remove('open');
    })

    food.addEventListener('click',() =>{
        navList.classList.remove('open');
    })
    about.addEventListener('click',() =>{
        navList.classList.remove('open');
    })
})
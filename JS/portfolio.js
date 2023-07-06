const hamburger = document.getElementsByClassName('hamburger-menu')[0]
const nav = document.getElementsByClassName('sidenav')[0]
const links = document.getElementsByClassName('nav_links')[0]
const html = document.getElementsByClassName('html')[0]

hamburger.addEventListener('click', () =>{
    nav.classList.toggle('active')
    html.classList.toggle('active')
    console.log('button clicked')
})

links.addEventListener('click', () => {
    nav.classList.toggle('active')
    hamburger.classList.toggle('active')
    html.classList.toggle('active')
    console.log('link clicked')
} )

const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
});
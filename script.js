const menuIcon = document.querSelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick=()=> {
    navLinks.classList.toggle('active');
}

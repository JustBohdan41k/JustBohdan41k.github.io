const menuBtn = document.querySelector('.menu-btn');
const navUl = document.querySelector('ul');

menuBtn.addEventListener('click', function() {
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
});
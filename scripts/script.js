document.getElementById('mobileNavBarClose').addEventListener('click', closeNavBar);
document.getElementById('mobileNavBarOpen').addEventListener('click', openNavBar);


function closeNavBar() {
    let mobileMenu = document.getElementsByClassName('nav-bar-mobile')[0];
    mobileMenu.style.display = 'none';
}

function openNavBar() {
    let mobileMenu = document.getElementsByClassName('nav-bar-mobile')[0];
    mobileMenu.style.display = 'block';
}

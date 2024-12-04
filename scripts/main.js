
const activateMenu = document.getElementById('nav-mobile-active');
const closeMenu = document.getElementById('nav-mobile-exit');
const mobileMenu = document.getElementById('nav-mobile'); // Fix: Changed from getElementsById to getElementById

// Event listener for activating the menu
activateMenu.addEventListener('click', function () {
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none'; // Fix: Use a single '=' for assignment
    } else {
        mobileMenu.style.display = 'flex'; // Fix: Use a single '=' for assignment
    }
});

closeMenu.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
});

mobileMenu.addEventListener('click', function (event) {
   if (event.target.classList.contains('mobile-menu-item')) { // Check if the clicked element is a child
       mobileMenu.style.display = 'none'; 
   }
});
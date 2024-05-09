window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Change the background color when scrolled
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
});
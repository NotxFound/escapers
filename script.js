document.addEventListener('DOMContentLoaded', function () {
    const navList = document.querySelector('nav ul');
    // Zamyka po kliknięciu w link
    navList.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            setTimeout(function () {
                document.getElementById('menu-toggle').checked = false;
            }, 500);
        }
    });
    // Zamyka po kliknięciu poza menu
    document.body.addEventListener('click', function (event) {
        if (!event.target.closest('nav') && !event.target.closest('ul')) {
            document.getElementById('menu-toggle').checked = false;
        }
    });
});
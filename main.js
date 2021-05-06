'use strict';

const menu = document.querySelector('#menu');
window.onscroll = function () {
    if (window.pageYOffset > 10) {
        menu.style.backgroundColor = '#fff';
        menu.style.transition = '0.3s';
        menu.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
    else {
        menu.style.backgroundColor = 'initial';
        menu.style.transition = '0.3s';
        menu.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0)';
    }
}
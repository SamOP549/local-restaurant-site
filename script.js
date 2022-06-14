'use strict';

const open_btn = document.querySelector('.open');
const close_btn = document.querySelector('.close');


open_btn.addEventListener('click', () => {
    document.querySelector('.open').style.display = 'none';
    document.querySelector('.close').style.display = 'inline';
    document.querySelector('.mobile__navigation').style.display = 'block';
    document.querySelector('body').style.backgroundImage =
        'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.5)';
});

close_btn.addEventListener('click', () => {
    document.querySelector('.open').style.display = 'inline';
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.mobile__navigation').style.display = 'none';
    document.querySelector('body').style.backgroundImage =
        'linear-gradient(rgba(253, 251, 251), rgba(255, 255, 255, 0.993)';
});
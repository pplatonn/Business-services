'use strict'

// styling header items

const header_menu_list = document.querySelector('.header_menu_list');
const header_menu = document.querySelector('.header_menu')
header_menu_btns.addEventListener('click', header_menu_function);

// asynchronus function because buttons must work anytime

function header_menu_function() {
    header_menu.style.width = '30vw';
    header_menu_list.style.display = 'flex';
    header_menu_list.style.justifyContent = 'space-between';
    
    // turning off the style after 10 seconds
    
    setTimeout(async() => {
        header_menu.style.width = '7vw';
        header_menu_list.style.display = 'none';

    }, 5000)
}


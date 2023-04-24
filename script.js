'use strict'

const icon_elem1 = document.querySelector('.i1');
const legordulo_elem1 = document.querySelector('.it1');

const icon_elem2 = document.querySelector('.i2');
const legordulo_elem2 = document.querySelector('.it2');

const icon_elem3 = document.querySelector('.i3');
const legordulo_elem3 = document.querySelector('.it3');

icon_elem1.addEventListener('click', function(){
    if (legordulo_elem1.classList == "it1 item open"){
        legordulo_elem1.classList.remove('open');
    }
    else if (legordulo_elem1.classList == "it1 item"){
        legordulo_elem1.classList.add('open');
    }
});

icon_elem2.addEventListener('click', function(){
    if (legordulo_elem2.classList == "it2 item open"){
        legordulo_elem2.classList.remove('open');
    }
    else if (legordulo_elem2.classList == "it2 item"){
        legordulo_elem2.classList.add('open');
    }
});

icon_elem3.addEventListener('click', function(){
    if (legordulo_elem3.classList == "it3 item open"){
        legordulo_elem3.classList.remove('open');
    }
    else if (legordulo_elem3.classList == "it3 item"){
        legordulo_elem3.classList.add('open');
    }
});
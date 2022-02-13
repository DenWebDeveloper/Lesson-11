"use strict";
// Переменные /

const mainBtn = document.querySelector('#btn');
const inputTypeText = document.querySelector('#text');
const square = document.querySelector('#square');
const eBtn = document.querySelector('#e_btn');
const inputTypeRange = document.querySelector('#range');

const rangeSpan = document.querySelector('#range-span');
let circle = document.querySelector('#circle');
let valueInputRange;

// При смене цвета в Input-text

mainBtn.addEventListener('click', function change (){

    let inputColorValue = inputTypeText.value; // значение цвета в инпуте.
    let bgColor =  square.style.backgroundColor.value;

    square.style.backgroundColor = inputColorValue;
    

    console.dir(inputColorValue);
    console.dir(bgColor);



});

eBtn.style.display = "none"; // Скрыл кнопку.

// Ползунком меняю ширину и высоту круга в процентах.
inputTypeRange.addEventListener('input', function(e){

    e.stopPropagation();
    valueInputRange = inputTypeRange.value;
    rangeSpan.textContent = valueInputRange + "%";
    circle.style.width = valueInputRange  + "%";
    circle.style.height = valueInputRange  + "%";

});







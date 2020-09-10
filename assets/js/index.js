'use strict'

var changeButton = function() {
    $('#content').css('background-color', 'blue');
    $('#content').css('color', 'white');
    $('#content').css('font-size', '1.8em');
    $('#content').css('width', '60%');
    document.getElementById('content').innerHTML = '<img src="assets/img/knight.jpg"><p>А это рыцарь и заполнение текста аааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа</p>';
    $('#content img').css('width', '25%');
    $('#content img').css('float', 'left');
    $('#content p').css('width', '60%');
    $('#content p').css('text-align', 'center');
}

content.addEventListener('click', changeButton);

let answere = prompt("Как вы там потомки?", "Все норм");
console.log(answere);
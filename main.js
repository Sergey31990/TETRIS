'use strict';
//Получаем елемент main
let main = document.querySelector('.main');
//Объявдляем переменную,создаем div и записываем его в эту переменную
let tetris = document.createElement('div');
//Присваеваем класс tetris
tetris.classList.add('tetris');
//Создаем 180 элементов,присваеваем класс excel,вставляем в tetris
for (let i = 1; i < 181; i++ ){
    let excel = document.createElement('div');
    excel.classList.add('excel');
    tetris.appendChild(excel);
}
//Вставляем в main tetris
main.appendChild(tetris);
//Получаем массив эл. excel и с помощью цикла присваваем уникальные координаты каждой ячейке
let excel = document.querySelectorAll('.excel');
let i = 0;
for(let y = 18; y > 0; y--){
    for(let x = 1; x < 11; x++){
        excel[i].setAttribute('posX', x);
        excel[i].setAttribute('posY', y);
        i++;
    }
}


// массив элементов
let mainArr = [
    //Палка
    [
        [0, 1],
        [0, 2],
        [0, 3],
    ],
    //Квадрат
    [
        [1, 0],
        [0, 1],
        [1, 1]
    ],
    //L
    [
        [1, 0],
        [0, 1],
        [0, 2]
    ],
    // L в др сторону
    [
        [1, 0],
        [1, 1],
        [1, 2]
    ],
    // Лего
    [
        [1, 0],
        [2, 0],
        [1, 1]
    ]
];

let currentFigure = 0;
let figureBody = 0;
let x = 5, y = 10;

function createEl(){
    // Создаем функцию рандомных чисел
    function getRandom(){
        return Math.round(Math.random()*(mainArr.length - 1));
    }
   // Результат записываем в переменную
    currentFigure = getRandom();
    
    // Создаем тело фигуры (получаем с помощью рандомного числа, фигуру в массиве mainArr. Каждому элементу добавляем класс figure)
    figureBody = [
        document.querySelector(`[posx = '${x}'][posy = '${y}']`),
        document.querySelector(`[posx = '${x + mainArr[currentFigure][0][0]}'][posy = '${y + mainArr[currentFigure][0][1]}']`),
        document.querySelector(`[posx = '${x + mainArr[currentFigure][1][0]}'][posy = '${y + mainArr[currentFigure][1][1]}']`),
        document.querySelector(`[posx = '${x + mainArr[currentFigure][2][0]}'][posy = '${y + mainArr[currentFigure][2][1]}']`)
    ];
    for (let  i = 0; i < figureBody.length; i++){
        figureBody[i].classList.add('figure');
    }
}
createEl();
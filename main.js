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
    // Палка
    [
        [0, 1],
        [0, 2],
        [0, 3],
        // Поворот на 90 градусов
        [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2],
        ],
        // Поворот на 180 градусов
        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2],
        ],
          // Поворот на 270 градусов
          [
            [-1, 1],
            [0, 0],
            [1, -1],
            [2, -2],
        ],
        // Поворот на 360 градусов
        [
            [1, -1],
            [0, 0],
            [-1, 1],
            [-2, 2],
        ]
    ],
    // Квадрат
    [
        [1, 0],
        [0, 1],
        [1, 1],
        // Поворот на 90 градусов
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
        // Поворот на 180 градусов
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
          // Поворот на 270 градусов
          [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
        // Поворот на 360 градусов
        [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
        ]
    ],
    // L
    [
        [1, 0],
        [0, 1],
        [0, 2],
        // Поворот на 90 градусов
        [
            [0, 0],
            [-1, 1],
            [1, 0],
            [2, -1],
        ],
        // Поворот на 180 градусов
        [
            [1, -1],
            [1, -1],
            [-1, 0],
            [-1, 0],
        ],
          // Поворот на 270 градусов
          [
            [-1, 0],
            [0, -1],
            [2, -2],
            [1, -1],
        ],
        // Поворот на 360 градусов
        [
            [0, -1],
            [0, -1],
            [-2, 0],
            [-2, 0],
        ]
    ],
    // L зеркало
    [
        [1, 0],
        [1, 1],
        [1, 2],
        // Поворот на 90 градусов
        [
            [0, 0],
            [0, 0],
            [1, -1],
            [-1, -1],
        ],
        // Поворот на 180 градусов
        [
            [0, -1],
            [-1, 0],
            [-2, 1],
            [1, 0],
        ],
          // Поворот на 270 градусов
          [
            [2, 0],
            [0, 0],
            [1, -1],
            [1, -1],
        ],
        // Поворот на 360 градусов
        [
            [-2, 0],
            [1, -1],
            [0, 0],
            [-1, 1],
        ]
    ],
    // Лего
    [
        [1, 0],
        [2, 0],
        [1, 1],
        // Поворот на 90 градусов
        [
            [1, -1],
            [0, 0],
            [0, 0],
            [0, 0],
        ],
        // Поворот на 180 градусов
        [
            [0, 0],
            [-1, 0],
            [-1, 0],
            [1, -1],
        ],
          // Поворот на 270 градусов
          [
            [1, -1],
            [1, -1],
            [1, -1],
            [0, 0],
        ],
        // Поворот на 360 градусов
        [
            [-2, 0],
            [0, -1],
            [0, -1],
            [-1, -1],
        ]
    ],
    // Молния вправо
    [
        [1, 0],
        [-1, 1],
        [0, 1],
        // Поворот на 90 градусов
        [
            [0, -1],
            [-1, 0],
            [2, -1],
            [1, 0],
        ],
        // Поворот на 180 градусов
        [
            [0, 0],
            [1, -1],
            [-2, 0],
            [-1, -1],
        ],
          // Поворот на 270 градусов
          [
            [0, -1],
            [-1, 0],
            [2, -1],
            [1, 0],
        ],
        // Поворот на 360 градусов
        [
            [0, 0],
            [1, -1],
            [-2, 0],
            [-1, -1],
        ]
    ],
    // Молния влево
    [
        [1, 0],
        [1, 1],
        [2, 1],
        // Поворот на 90 градусов
        [
            [2, -1],
            [0, 0],
            [1, -1],
            [-1, 0],
        ],
        // Поворот на 180 градусов
        [
            [-2, 0],
            [0, -1],
            [-1, 0],
            [1, -1],
        ],
          // Поворот на 270 градусов
          [
            [2, -1],
            [0, 0],
            [1, -1],
            [-1, 0],
        ],
        // Поворот на 360 градусов
        [
            [-2, 0],
            [0, -1],
            [-1, 0],
            [1, -1],
        ]
    ]
];

let currentFigure = 0;
let figureBody = 0;
let x = 5, y = 15;
let rotate = 1;

function createEl(){
    // Создаем функцию рандомных чисел
    function getRandom(){
        return Math.round(Math.random()*(mainArr.length - 1));
    }
    rotate = 1;
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

function move() {
    // Создаем флаг движения. Пока true фигура летит вниз
    let moveFlag = true;
    // Массив координат фигуры
    let coordinates = [
        [figureBody[0].getAttribute('posx'),figureBody[0].getAttribute('posy')],
        [figureBody[1].getAttribute('posx'),figureBody[1].getAttribute('posy')],
        [figureBody[2].getAttribute('posx'),figureBody[2].getAttribute('posy')],
        [figureBody[3].getAttribute('posx'),figureBody[3].getAttribute('posy')]
    ];
    // Перебираем координаты
    for (let i = 0; i < coordinates.length; i++){
        // Если координата Y нижнего элемента станет 1 - остановить движение; Если внизу есть элемент с классом set - остановить движение
        if(coordinates[i][1] == 1 || document.querySelector(`[posx = '${coordinates[i][0]}'][posy = '${coordinates[i][1]-1}']`).classList.contains('set')){
            moveFlag = false;
            break;
        }
    }
    // Если флаг true то у Y  -1, если false присвоить класс set
    if(moveFlag){
        for (let  i = 0; i < figureBody.length; i++){
            figureBody[i].classList.remove('figure');
        }
        figureBody = [
            document.querySelector(`[posx = '${coordinates[0][0]}'][posy = '${coordinates[0][1]-1}']`),
            document.querySelector(`[posx = '${coordinates[1][0]}'][posy = '${coordinates[1][1]-1}']`),
            document.querySelector(`[posx = '${coordinates[2][0]}'][posy = '${coordinates[2][1]-1}']`),
            document.querySelector(`[posx = '${coordinates[3][0]}'][posy = '${coordinates[3][1]-1}']`)
        ];
        for (let  i = 0; i < figureBody.length; i++){
            figureBody[i].classList.add('figure');
        }
    } else {
        for (let  i = 0; i < figureBody.length; i++){
            figureBody[i].classList.remove('figure');
            figureBody[i].classList.add('set');
        }
        // Снова создать элемент
        createEl();
    }
}
// Запуск функции с интервалом
let interval = setInterval(() => {
    move();
}, 300);


let flag = true;
// Событие нажатия кнопки
window.addEventListener('keydown', function(e){
    let coordinate1 = [figureBody[0].getAttribute('posx'),figureBody[0].getAttribute('posy')];
    let coordinate2 = [figureBody[1].getAttribute('posx'),figureBody[1].getAttribute('posy')];
    let coordinate3 = [figureBody[2].getAttribute('posx'),figureBody[2].getAttribute('posy')];
    let coordinate4 = [figureBody[3].getAttribute('posx'),figureBody[3].getAttribute('posy')];
    //Определить новое положение фигуры в пространстве
    function getNewState(a){
        flag = true;
        let figureNew = [
            document.querySelector(`[posx = '${+coordinate1[0] + a}'][posy = '${coordinate1[1]-1}']`),
            document.querySelector(`[posx = '${+coordinate2[0] + a}'][posy = '${coordinate2[1]-1}']`),
            document.querySelector(`[posx = '${+coordinate3[0] + a}'][posy = '${coordinate3[1]-1}']`),
            document.querySelector(`[posx = '${+coordinate4[0] + a}'][posy = '${coordinate4[1]-1}']`)
        ];
        
        for(let i = 0; i < figureNew.length; i++){
            // Если элемента не существует или он имеет класс set присвоить  flag false
            if(!figureNew[i] || figureNew[i].classList.contains('set')){
                flag = false;
            }
        }
        // Если все ок то перезаписать координаты
        if(flag == true){
            for (let  i = 0; i < figureBody.length; i++){
                figureBody[i].classList.remove('figure');
            }

            figureBody = figureNew;

            for (let  i = 0; i < figureBody.length; i++){
                figureBody[i].classList.add('figure');
            }
        }
    }
    if(e.keyCode == 37){
        getNewState(-1);
    }else if(e.keyCode == 39){
        getNewState(1);
    }else if(e.keyCode == 40){
        move();
    }else if(e.keyCode == 38){
        flag = true;
        let figureNew = [
            document.querySelector(`[posx = '${+coordinate1[0] + mainArr[currentFigure][rotate+2][0][0]}'][posy = '${+coordinate1[1] + mainArr[currentFigure][rotate+2][0][1]}']`),

            document.querySelector(`[posx = '${+coordinate2[0] + mainArr[currentFigure][rotate+2][1][0]}'][posy = '${+coordinate2[1] + mainArr[currentFigure][rotate+2][1][1]}']`),

            document.querySelector(`[posx = '${+coordinate3[0] + mainArr[currentFigure][rotate+2][2][0]}'][posy = '${+coordinate3[1] + mainArr[currentFigure][rotate+2][2][1]}']`),

            document.querySelector(`[posx = '${+coordinate4[0] + mainArr[currentFigure][rotate+2][3][0]}'][posy = '${+coordinate4[1] + mainArr[currentFigure][rotate+2][3][1]}']`)
        ];
        
        for(let i = 0; i < figureNew.length; i++){
            // Если элемента не существует или он имеет класс set присвоить  flag false
            if(!figureNew[i] || figureNew[i].classList.contains('set')){
                flag = false;
            }
        }
        // Если все ок то перезаписать координаты
        if(flag == true){
            for (let  i = 0; i < figureBody.length; i++){
                figureBody[i].classList.remove('figure');
            }

            figureBody = figureNew;

            for (let  i = 0; i < figureBody.length; i++){
                figureBody[i].classList.add('figure');
            }
            if(rotate < 4){
                rotate++;
            }else{
                rotate = 1;
            }
        }
    }
});
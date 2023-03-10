"use strict"

    var width; //количество строк или высота
    var height; // количество столбцов или ширина
    var bombs_count; //количество бомб

    var countSec = 0; //время игры в секундах

    function openModal() {
        document.getElementById('IMyModal').style.display='block';
        document.getElementById('endGame').style.top='-50%';
    }
    openModal()

    function closeModal() {
        const catalogElem=document.getElementById('LevelCh');
        const value=catalogElem.value;

        if (value == 1) { //параметры для простого уровня
            width = 8, 
            height = 8,
            bombs_count = 15;
        }

        if (value == 2) {//параметры для среднего уровня
            width = 14, 
            height = 14,
            bombs_count = 40;
        }

        if (value == 3) {//параметры для сложного уровня
            width = 20, 
            height = 20,
            bombs_count = 99;
        }

        document.getElementById('IMyModal').style.display='none';
        beginGame();
    }

    function beginGame() {

        startGame(width, height, bombs_count); 
        addTimer();//включаем таймер
    
        function startGame() {
            //создаем поле с кнопками
            const field = document.querySelector('.field');
            const cellsCount = width * height;
            field.innerHTML ='<button></button>'.repeat(cellsCount);
            field.style.cssText = 'grid-template-columns: repeat(' + height + ', 30px) ;'
            const cells = [...field.children];//массив всех кнопок
            let closedCount = cellsCount; //количество оставшихся бомб
        
            //создаем мины
            const bombs = [...Array(cellsCount).keys()] //получаем массив от 0 до 63
              .sort(() => Math.random()-0.5) //рандомно сортируем весь массив
              .slice(0, bombs_count); //оставляем только мины, тут их индексы
        
            //подписываемся на клик левой кнопкой
            field.addEventListener('click', (eo) => {
                eo=eo||window.event;
                if (eo.target.tagName !== 'BUTTON') { //если клик мимо поля
                    return;
                }
            
                const index = cells.indexOf(eo.target);//индекс кликнутой кнопки
                const column = index % width;//номер колонки
                const row = Math.floor(index / width)//номер строки
                openCell(row, column); //открываем
            });
        
            //подписываемся на клик правой кнопкой и ставим флажок
            field.addEventListener('contextmenu', (eo) => {
                eo=eo||window.event;
               eo.preventDefault();
                if (eo.target.tagName !== 'BUTTON') { //если клик мимо поля
                    return;
                }
        
                const index = cells.indexOf(eo.target);//индекс кликнутой кнопки
                const column = index % width;//номер колонки
                const row = Math.floor(index / width)//номер строки
                addFlag(row, column); //устанавливаем флажки по правому клику
            });
        
            function isValid(row, column) { //валидация поля 
                return row >= 0
                  && row < height
                  && column >= 0
                  && column < width;
            }
        
            function getMinesCount (row, column) { //узнаем количество бомб по соседству
                let count = 0;
                for (let x = -1; x <= 1; x++ ) {//для этого берем на одну больше и на одну меньше по ряду
                    for (let y = -1; y <= 1; y++ ) {//и по колонке
                        if (isBomb(row + x, column + y)) {
                            count++;
                        }
                    }
                }
                return count;
            }
        
            function openCell(row, column) { //открываем ячейку
        
                if ( !isValid(row, column) ) return; //если ячейка не валидна, ничего не делаем
        
                const index = row * width + column;
                const cell = cells[index];
        
                if ( cell.disabled === true ) return; //остановка рекурсии
        
                if ( isBomb(row, column) ) { 
                    cell.innerHTML = '💣'; //если бомба, ставим крестик
                    alert('Вы проиграли!');
                    endTimer();
                    looseFunc();
                    return; //startGame(width, height, bombs_count); //ошибка в консоли!!!
                }
                cell.disabled = true; //делаем, чтобы нельзя было дважды кликнуть по ячейке
        
                closedCount--;
        
                if (closedCount <= bombs_count) {
                    alert('Вы выиграли!');
                    endTimer();
                    wonFunc();
                    return; //startGame(width, height, bombs_count);
                }
        
                const count = getMinesCount(row, column);
        
                if (count !== 0) {
                    cell.innerHTML = count; //если не 0, пишем нормальное число
                    return ;
                }
                
                for (let x = -1; x <= 1; x++ ) {
                    for (let y = -1; y <= 1; y++ ) {
                        openCell(row + x, column + y);//если 0, открываем соседние ячейки
                    }
                }
            }
        
            function addFlag(row, column) { //установка флага
                const index = row * width + column;
                const cell = cells[index];
                cell.innerHTML = '🚩';
                }
        
            function isBomb(row, column) { //проверяем является ли бомбой
                if ( !isValid(row, column) ) 
                  return false;
        
                const index = row * width + column;
                return bombs.includes(index);
            }
          
        }
        
        //включаем таймер
        const gameTimer = document.getElementById('gameTimer');
        const clockTimer = document.getElementById('clockTimer');
        gameTimer.style.cssText = "display: block;";  
        const h1 = document.getElementsByTagName('h1')[0];
        var sec = 0;
        var min = 0;
        var hrs = 0;
        var t;
        
        //включаем таймер
        function addTimer() { 
        
            function tick() {
                countSec++;
                sec++;
                if (sec === 1) {
                    clockTimer.style.cssText = "font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48";
                }
                if (sec % 2 === 0) {
                    clockTimer.style.cssText = "font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48";
                }
                if (sec % 2 === 1) {
                    clockTimer.style.cssText = "font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48";
                }
                if (sec >= 60) {
                    sec = 0;
                    min++;
                    if (min >= 60) {
                        min = 0;
                        hrs++;
                    }
                }
                return countSec;
            }
      
            function add() {
        
                tick();
                h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
                       + ":" + (min > 9 ? min : "0" + min)
                          + ":" + (sec > 9 ? sec : "0" + sec);
                timer();
            }
      
            function timer() {
                t = setTimeout(add, 1000);
            }
            timer();
        }
        
        //обнуляем секундомер
        function endTimer() {
            clearTimeout(t);
        }

    }

    //константы для итогового блока
    const endGameElem = document.getElementById('endGame');
    const textElem=document.createElement('div');
    const buttonElem = document.createElement('input');
    const gameZoneElem = document.getElementById('gameZone');


    //создаем блок с текстом, если проигрыш

    function looseFunc() {

        const gameZoneWidth = gameZoneElem.offsetWidth;
        const gameZoneHeight = gameZoneElem.offsetHeight;
        
        endGameElem.style.width = gameZoneWidth + "px";
        endGameElem.style.height = gameZoneHeight + "px";
        endGameElem.style.top = "50%";

        textElem.innerHTML = '<h2>Вы проиграли :(</h2><span>Время игры: ' + countSec + ' ' + getNumWord(countSec,'секунда','секунды','секунд') + '</span><br>';

        buttonElem.type='submit';
        buttonElem.value='Попробовать еще раз';
        buttonElem.onclick= reload;
        buttonElem.style.marginTop = '10px';

        endGameElem.appendChild(textElem);
        endGameElem.appendChild(buttonElem);


        return;
    }

    //создаем блок с текстом, если выигрыш

    function wonFunc() {

        const gameZoneWidth = gameZoneElem.offsetWidth;
        const gameZoneHeight = gameZoneElem.offsetHeight;

        endGameElem.style.width = gameZoneWidth + "px";
        endGameElem.style.height = gameZoneHeight + "px";
        endGameElem.style.top = "50%";

        textElem.innerHTML = '<h2>Вы выиграли :)</h2><br><span>Время игры: ' + countSec + ' ' + getNumWord(countSec,'секунда','секунды','секунд') + '</span><br>';

        buttonElem.type='submit';
        buttonElem.value='Попробовать еще раз';
        buttonElem.onclick= reload ;

        endGameElem.appendChild(textElem);
        endGameElem.appendChild(buttonElem);


        return;
    }

    //функция окончаний

    function getNumWord(num,word1,word2,word5) {
        const dd=num%100;
        if ( (dd>=11) && (dd<=19) )
            return word5;
        const d=num%10;
        if ( d==1 )
            return word1;
        if ( (d>=2) && (d<=4) )
            return word2;
        return word5;
    }

    //функция обновления
    function reload() {
            window.location.reload();
    }












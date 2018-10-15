$('document').ready(function () {
    // console.log('test');
    var lastEnter = "O";
    var x = [];
    var o = [];
    var avilablePlaces = [];
    var xCounter = 0;
    var oCounter = 0;
    var gameType = 1;
    var gameDone = false;


    $('.box').on('click', function () {
        if ($(this).find("h1").text() == 'O' || $(this).find("h1").text() == 'X') {
            return;
        }
        if(x.length===0&&o.length===0)
        gameDone = false;
        if (lastEnter === 'O') {
            $(this).find("h1").text('X');
            x.push($(this)[0].id[3] + "" + $(this)[0].id[4]);
            lastEnter = 'X';
            checkIfWinCodeBlock()
            if (gameType === 1) {
                computerPlay(checkIfWinCodeBlock);
                lastEnter = 'O';
                return;
            }
        }
        else {
            $(this).find("h1").text('O');
            o.push($(this)[0].id[3] + "" + $(this)[0].id[4]);
            lastEnter = 'O';
            checkIfWinCodeBlock()
        }
    })

function checkIfWinCodeBlock()
{
    if(!checkIfWin(x)&&!checkIfWin(o))
    if (isGameEnded() === true) {
        showMessage('the game is ended, will restarted');
    }
}

function cl(text)
{
console.log(text);
}

    function showMessage(text) {
        window.setTimeout(function () {
            alert(text);
            restartGame();
        }, 200)
    }

    function checkIfWin(input) {
        var counterx1 = 0;
        var counterx2 = 0;
        var counterx3 = 0;
        var win = false;

        for (var a of input) {
            if (a[0] === '1')
                counterx1++;
            else if (a[0] === '2')
                counterx2++;
            else if (a[0] === '3')
                counterx3++;
        }

        if (counterx1 === 3 || counterx2 === 3 || counterx3 === 3) {
            win = true;
        }
        var countery1 = 0;
        var countery2 = 0;
        var countery3 = 0;
        for (var a of input) {
            if (a[1] === '1')
                countery1++;
            else if (a[1] === '2')
                countery2++;
            else if (a[1] === '3')
                countery3++;
        }
        if (countery1 === 3 || countery2 === 3 || countery3 === 3) {
            win = true;
        }
        // debugger;
        var counterCrosslr = 0;
        var counterCrossrl = 0;
        for (var a of input) {
            if (a === '11' || a === '22' || a === '33')
                counterCrosslr++;
            if (a === '13' || a === '22' || a === '31')
                counterCrossrl++;
        }
        if (counterCrosslr === 3 || counterCrossrl === 3) {
            win = true;
        }
        if (win === true) {
            if (input === x) {
                xCounter++;
                showMessage('x Win`s, game will restarted');
                lastEnter = "O";

            }
            else {
                oCounter++;
                showMessage('o Win`s, game will restarted');
                lastEnter = "X";

            }
            // debugger;   
            $('#xWins').text(xCounter);
            $('#oWins').text(oCounter);
            gameDone = true;
        }
        return win;
    }

    function isGameEnded() {

        for (var i of $('.box>h1')) {
            if ($(i).text() === '') {
                return false
            }
        }
        return true;
    }
    function restartGame() {
        for (var i of $('.box>h1')) {
            $(i).text('');
        }
        x = [];
        o = [];
        

    }
    $('input#one').on('click', function () {
        gameType = 1;
    })
    $('input#two').on('click', function () {
        gameType = 2;
    })
    function computerPlay(fn) {
        fillAvilablePlaces();
        var randNum = Math.floor(Math.random() * (avilablePlaces.length));
        window.setTimeout(function () {
            if (isGameEnded() || gameDone){
                return;
            }
            $('#' + avilablePlaces[randNum]).find('h1').text("O");
            o.push(''+avilablePlaces[randNum][3]+avilablePlaces[randNum][4]);
            // debugger;
            fn();
        }, 200)
    }
    function fillAvilablePlaces() {
        avilablePlaces = [];
        for (var i of $('.box')) {
            // debugger;
            if ($(i).find('h1').text() == "") {
                avilablePlaces.push("" + $(i).attr('id'));
            }
        }
        // debugger;
    }








})
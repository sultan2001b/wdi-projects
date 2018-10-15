$('document').ready(function () {
    // console.log('test');
    var lastEnter = "O"
    var x = [];
    var o = [];
    var avilablePlaces = [];
    var xCounter = 0;
    var oCounter = 0;
    var gameType = 1;
    var gameDone = false;


    $('.box').on('click', function () {
        if ($(this).find("h1").text() != '') {
            return;
        }
        if (x.length === 0 && o.length === 0) {
            gameDone = false;
        }
        if (lastEnter === "O") {
            $(this).find("h1").text('X')
            x.push($(this)[0].id[3] + "" + $(this)[0].id[4]);
            lastEnter = "X";
            if (checkIfWin(x)) {
                xCounter++;
                showMessage('x Win`s, game will restarted');
                $('#xWins').text(xCounter);
                gameDone = true;
                if (gameType === 1) {
                    lastEnter = "O"
                }
            }
            else {
                if (gameType === 1) {
                    fillAvilablePlaces();
                    var randNum = Math.floor(Math.random() * (avilablePlaces.length));
                    if (isGameFull() || gameDone) {
                        return;
                    }
                    $('#' + avilablePlaces[randNum]).find('h1').text("O")
                    o.push('' + avilablePlaces[randNum][3] + avilablePlaces[randNum][4]);
                    if (checkIfWin(o)) {
                        gameDone=true;
                        oCounter++;
                        showMessage('o Win`s, game will restarted');
                        $('#oWins').text(oCounter);
                    }
                    lastEnter = "O"
                }
            }
        }
        else {
            $(this).find("h1").text('O')
            o.push($(this)[0].id[3] + "" + $(this)[0].id[4]);
            lastEnter = "O"
            if (checkIfWin(o)) {
                gameDone=true;
                oCounter++;
                showMessage('o Win`s, game will restarted');
                $('#oWins').text(oCounter);
            }
        }
        if(isGameFull() && !gameDone)
        {
            showMessage('no one win, game will restarted')
        }
    })

    function cl(text) {
        console.log(text);
    }
    function showMessage(text) {
        window.setTimeout(function () {
            alert(text);
            restartGame();
        }, 50)
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

        return win;
    }

    function isGameFull() {

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

    function fillAvilablePlaces() {
        avilablePlaces = [];
        for (var i of $('.box')) {
            if ($(i).find('h1').text() == "") {
                avilablePlaces.push("" + $(i).attr('id'));
            }
        }
    }








})
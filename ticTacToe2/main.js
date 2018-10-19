var playPlaces = [11, 12, 13, 21, 22, 23, 31, 32, 33];
var generatedResult = [];
var generatedResultPart = [];
var seqNone = 0;
var xWixSeq = [];
var breaked = true;
var playsCount = 0;

function generatePosiblePlays() {
  // generatedResultPart.clear()
  // debugger;
  for (var g1 of playPlaces) {
    for (var g2 of playPlaces) {
      if (g1 === g2) continue;
      for (var g3 of playPlaces) {
        if (g1 === g3 || g2 === g3) continue;
        for (var g4 of playPlaces) {
          if (g1 === g4 || g2 === g4 || g3 === g4) continue;
          for (var g5 of playPlaces) {
            if (g1 === g5 || g2 === g5 || g3 === g5 || g4 === g5) continue;
            generatedResultPart = [];
            generatedResultPart.push(g1);
            generatedResultPart.push(g2);
            generatedResultPart.push(g3);
            generatedResultPart.push(g4);
            generatedResultPart.push(g5);
            generatedResult.push(generatedResultPart);
          }
        }
      }
    }
  }
  console.log("generatedResult Count = " + generatedResult.length);
}
$("document").ready(function() {
  generatePosiblePlays();
  // console.log('test');
  var lastEnter = "O";
  var x = [];
  var o = [];
  var avilablePlaces = [];
  var xCounter = 0;
  var oCounter = 0;
  var gameType = 1;
  var gameDone = false;
  var xWinArr = [];
  for (var f1 of generatedResult) {
    breaked = true;
    xWinArr = [];

    for (var f2 of f1) {
      if (!mainPlay(f2)) {
        restartGame();
        // breaked=true;
        break;
      }
    }
    playsCount++;

    if (!breaked) xWixSeq.push(xWinArr);
  }
  console.log("plays count = " + playsCount);

  function mainPlay(theID) {
    if (
      $("#box" + theID)
        .find("h1")
        .text() != ""
    ) {
      seqNone++;
      return false;
    }
    xWinArr.push(theID);
    // if (x.length === 0 && o.length === 0) {
    gameDone = false;
    // }
    if (lastEnter === "O") {
      $("#box" + theID)
        .find("h1")
        .text("X");
      x.push($("#box" + theID)[0].id[3] + "" + $("#box" + theID)[0].id[4]);
      lastEnter = "X";
      if (checkIfWin(x)) {
        xCounter++;
        showMessage();
        $("#xWins").text(xCounter);
        gameDone = true;
        if (gameType === 1) {
          lastEnter = "O";
        }
        breaked = false;
        return false;
      } else {
        if (gameType === 1) {
          if (!(isGameFull() || gameDone)) {
            computerPlay();
            if (checkIfWin(o)) {
              gameDone = true;
              oCounter++;
              showMessage();
              $("#oWins").text(oCounter);
              lastEnter = "O";
              // breaked = true;
              return false;
            }
            lastEnter = "O";
          }
        }
      }
    }

    if (isGameFull() && !gameDone) {
      showMessage();
      if (gameType === 1) {
        lastEnter = "O";
      }
      return false;
    }
    return true;
  }

  function partOfPlay4For(id, Num, xORo) {
    newidInside = id + Num;
    if (
      getBoxH1(newidInside).text() === "" &&
      getBoxH1(newidInside).length !== 0
    ) {
      getBoxH1(newidInside).text("O");
      o.push("" + newidInside);
      return true;
    }
    newidInside = id - Num;
    if (
      getBoxH1(newidInside).text() === "" &&
      getBoxH1(newidInside).length !== 0
    ) {
      getBoxH1(newidInside).text("O");
      o.push("" + newidInside);
      return true;
    }
    return false;
  }
  function play4For(xORo) {
    for (var a of $(".box h1")) {
      if ($(a).text() === xORo) {
        // debugger;
        var id = parseInt(
          $(a)
            .parent()
            .attr("id")
            .substring(3)
        );
        var arr2 = [2, 20, 22, 18];
        for (var aa of arr2) {
          if (partOfPlay4For(id, aa, xORo)) return true;
        }
      }
    }
    return false;
  }
  function play5SemiRandom() {
    var startPlay = [11, 13, 31, 33];
    for (var g of startPlay) {
      var randNum = g;
      if ($("#box" + randNum + " h1").text() === "") {
        $("#box" + randNum + " h1").text("O");
        o.push("" + randNum);
        return true;
      }
    }
    return false;
  }
  function computerPlay() {
    var randNum = 22; //startPlay[Math.round(Math.random() * 3)];
    if (o.length === 0) {
      if (getBoxH1(22).text() === "") {
        getBoxH1(22).text("O");
        o.push("" + 22);
      } else {
        play5SemiRandom();
      }
    } else {

      // 0: (5)[11, 23, 32, 31, 21]
      // 1: (5)[12, 31, 23, 13, 33]
      // 2: (5)[13, 21, 32, 33, 23]
      // 3: (5)[21, 13, 32, 33, 23]
      // 4: (5)[23, 11, 32, 31, 21]
      // 5: (5)[31, 12, 23, 13, 33]

      // 12,31,23 ==>13
      if (x.length == 2 && x[0] == 11 && x[1] == 23) {
        getBoxH1(13).text("O");
        o.push("" + 13);
      } else if (x.length == 3 && x[0] == 12 && x[1] == 31 && x[2] == 23) {
        getBoxH1(13).text("O");
        o.push("" + 13);
      }
      //13,21,32 ==>33
      else if (x.length == 3 && x[0] == 13 && x[1] == 21 && x[2] == 32) {
        getBoxH1(33).text("O");
        o.push("" + 33);
      }
      // 21, 13, 32 ==> 31
      else if (x.length == 3 && x[0] == 21 && x[1] == 13 && x[2] == 32) {
        getBoxH1(31).text("O");
        o.push("" + 31);
      }
      //23, 11, 32 ==> 31
      else if (x.length == 3 && x[0] == 23 && x[1] == 11 && x[2] == 32) {
        getBoxH1(31).text("O");
        o.push("" + 31);
      }
      //31, 12, 23 ==> 13
      else if (x.length == 3 && x[0] == 31 && x[1] == 12 && x[2] == 23) {
        getBoxH1(13).text("O");
        o.push("" + 13);
      } else {
        if (!playSmartFor("O")) {
          if (!playSuperSmartFor("O")) {
            if (!playSmartFor("X")) {
              if (!playSuperSmartFor("X")) {
                if (!playForSecondPlay()) {
                  if (!play4For("X")) {
                    if (!play5SemiRandom()) {
                      playRandom();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  function playForSecondPlay() {
    if (
      o.length === 1 &&
      getBoxH1(22).text() === "O" &&
      (getBoxH1(11).text() === "X" ||
        getBoxH1(31).text() === "X" ||
        getBoxH1(33).text() === "X" ||
        getBoxH1(13).text() === "X")
    ) {
      if (getBoxH1(12).text() === "" && getBoxH1(32).text() !== "X") {
        getBoxH1(12).text("O");
        o.push("" + 12);
        return true;
      } else if (getBoxH1(21).text() === "" && getBoxH1(23).text() !== "X") {
        getBoxH1(21).text("O");
        o.push("" + 21);
        return true;
      } else if (getBoxH1(32).text() === "" && getBoxH1(12).text() !== "X") {
        getBoxH1(32).text("O");
        o.push("" + 32);
        return true;
      } else if (getBoxH1(23).text() === "" && getBoxH1(32).text() !== "X") {
        getBoxH1(23).text("O");
        o.push("" + 23);
        return true;
      }
    } else {
      if (o.length === 1) {
        if (partPlayForSecondPlay(32, 23)) {
          getBoxH1(33).text("O");
          o.push("" + 33);
          return true;
        } else if (partPlayForSecondPlay(23, 12)) {
          getBoxH1(13).text("O");
          o.push("" + 13);
          return true;
        } else if (partPlayForSecondPlay(12, 21)) {
          getBoxH1(11).text("O");
          o.push("" + 11);
          return true;
        } else if (partPlayForSecondPlay(21, 32)) {
          getBoxH1(31).text("O");
          o.push("" + 31);
          return true;
        }
      }
    }
    return false;
  }
  function partPlayForSecondPlay(num1, num2) {
    if (getBoxH1Text(num1) === "X" && getBoxH1Text(num2) === "X") return true;
  }
  function getBoxH1Text(id) {
    return $("#box" + id + " h1").text();
  }

  function getBoxH1(id) {
    return $("#box" + id + " h1");
  }

  // function playOn(id, char) {
  //   if (char === "O") {
  //     // if (
  //     //   computerPlay === 1 &&
  //     //   x.length === 2 &&
  //     //   (id != 11 || id != 13 || id != 31 || id != 33)
  //     // ) {
  //     //   return false;
  //     // } else {
  //       getBoxH1(id).text("O");
  //       o.push(id);
  //       return true;
  //     // }
  //   } else if (char === "X") {
  //     getBoxH1(id).text("X");
  //     x.push(id);
  //     return true;
  //   } else {
  //     console.log("error in playOn function char != (O||X)");
  //     return false;
  //   }
  // }

  function partOfPlaySmartFor(id, Num, xORo) {
    var newidInside = id + Num * 2;
    if (getBoxH1(id + Num).text() === xORo) {
      if (
        getBoxH1(newidInside).text() === "" &&
        getBoxH1(newidInside).length !== 0
      ) {
        getBoxH1(newidInside).text("O");
        o.push("" + newidInside);
        return true;
      }
    }
    newidInside = id - Num * 2;
    if (getBoxH1(id - Num).text() === xORo) {
      if (
        getBoxH1(newidInside).text() === "" &&
        getBoxH1(newidInside).length !== 0
      ) {
        getBoxH1(newidInside).text("O");
        o.push("" + newidInside);
        return true;
      }
    }
    return false;
  }
  function playSmartFor(xORo) {
    for (var a of $(".box h1")) {
      if ($(a).text() === xORo) {
        // debugger;
        var id = parseInt(
          $(a)
            .parent()
            .attr("id")
            .substring(3)
        );

        var arr3 = [1, 10, 11, 9];
        for (var aa of arr3) {
          if (partOfPlaySmartFor(id, aa, xORo)) return true;
        }
      }
    }
    return false;
  }

  function partOfPlaySuperSmartFor(id, Num, xORo) {
    newidInside = id + Num;
    if (getBoxH1(id + Num * 2).text() === xORo) {
      if (
        getBoxH1(newidInside).text() === "" &&
        getBoxH1(newidInside).length !== 0
      ) {
        getBoxH1(newidInside).text("O");
        o.push("" + newidInside);
        return true;
      }
    }
    newidInside = id - Num;
    if (getBoxH1(id - Num * 2).text() === xORo) {
      if (
        getBoxH1(newidInside).text() === "" &&
        getBoxH1(newidInside).length !== 0
      ) {
        getBoxH1(newidInside).text("O");
        o.push("" + newidInside);
        return true;
      }
    }
    return false;
  }

  function playSuperSmartFor(xORo) {
    for (var a of $(".box h1")) {
      if ($(a).text() === xORo) {
        // debugger;
        var id = parseInt(
          $(a)
            .parent()
            .attr("id")
            .substring(3)
        );
        var arr2 = [1, 10, 11, 9];
        for (var aa of arr2) {
          if (partOfPlaySuperSmartFor(id, aa, xORo)) return true;
        }
      }
    }
    return false;
  }

  function partOfPlayRandom(id, num) {
    var newId = id - num;
    if (getBoxH1(newId).length != 0 && getBoxH1(newId).text() === "X") {
      getBoxH1(id).text("O");
      o.push("" + id);
      return true;
    }
    newId = id + num;
    if (getBoxH1(newId).length != 0 && getBoxH1(newId).text() === "X") {
      getBoxH1(id).text("O");
      o.push("" + id);
      return true;
    }
    return false;
  }

  function playRandom() {
    fillAvilablePlaces();
    for (var i of avilablePlaces) {
      var id = parseInt(i.substring(3));
      var arr = [1, 10, 9, 11];
      for (var a of arr) {
        if (partOfPlayRandom(id, a)) return true;
      }
    }
    var randNum = Math.floor(Math.random() * avilablePlaces.length);
    $("#" + avilablePlaces[randNum])
      .find("h1")
      .text("O");
    o.push("" + avilablePlaces[randNum][3] + avilablePlaces[randNum][4]);
  }

  function cl(text) {
    console.log(text);
  }
  function showMessage() {
    restartGame();
  }

  function checkIfWin(input) {
    var counterx1 = 0;
    var counterx2 = 0;
    var counterx3 = 0;
    var win = false;

    for (var a of input) {
      if (a[0] === "1") counterx1++;
      else if (a[0] === "2") counterx2++;
      else if (a[0] === "3") counterx3++;
    }

    if (counterx1 === 3 || counterx2 === 3 || counterx3 === 3) {
      win = true;
    }
    var countery1 = 0;
    var countery2 = 0;
    var countery3 = 0;
    for (var a of input) {
      if (a[1] === "1") countery1++;
      else if (a[1] === "2") countery2++;
      else if (a[1] === "3") countery3++;
    }
    if (countery1 === 3 || countery2 === 3 || countery3 === 3) {
      win = true;
    }
    var counterCrosslr = 0;
    var counterCrossrl = 0;
    for (var a of input) {
      if (a === "11" || a === "22" || a === "33") counterCrosslr++;
      if (a === "13" || a === "22" || a === "31") counterCrossrl++;
    }
    if (counterCrosslr === 3 || counterCrossrl === 3) {
      win = true;
    }

    return win;
  }

  function isGameFull() {
    for (var i of $(".box>h1")) {
      if ($(i).text() === "") {
        return false;
      }
    }
    return true;
  }
  function restartGame() {
    for (var i of $(".box>h1")) {
      $(i).text("");
    }
    x = [];
    o = [];
  }
  $("input#one").on("click", function() {
    gameType = 1;
  });
  $("input#two").on("click", function() {
    gameType = 2;
  });

  function fillAvilablePlaces() {
    avilablePlaces = [];
    for (var i of $(".box")) {
      if (
        $(i)
          .find("h1")
          .text() == ""
      ) {
        avilablePlaces.push("" + $(i).attr("id"));
      }
    }
    return avilablePlaces;
  }
});

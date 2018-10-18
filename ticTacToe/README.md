![](http://i.imgur.com/Udd4Hd1.png)

# Description of my game:

Main part on my game consist of main div with three rows on each one three divs
My game numbering system is

```
11     12     13
21     22     23
31     32     33
```

(x,y) ⇒ x for rows, y for columns

Main code part

```
function computerPlay() {
   var randNum = 22; //startPlay[Math.round(Math.random() * 3)];
   if (o.length === 0) {
     if (getBoxH1(22).text() === "") {
       getBoxH1(22).text("O");
       o.push("" + 22);
     } else {
       play5SemiRandom();
     }
   }
   else {
     // debugger;
     if (!playSmartFor("O")) {//XX''
       if (!playSuperSmartFor("O")) {// X' 'X
         if (!playSmartFor("X")) {
           if (!playSuperSmartFor("X")) {
               //if there are any X in corners
             if (!playForSecondPlay()) {
               if (!play4For("X")) {
                   //randon near X
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
```

My js code contains 440 line of code (with spaces :) ) ,,, but optimized code

For example
This is optimized code sample( 40 lines)

```
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
```

And this without optimization ( 80 lines)

```
function playSuperSmartFor(xORo) {
   for (var a of $(".box h1")) {
     if ($(a).text() === xORo) {
       // debugger;
       var id = parseInt($(a)
           .parent()
           .attr("id")
           .substring(3));

         newidInside = id + 1;
         if (getBoxH1(id + 1 * 2).text() === xORo) {
           if (getBoxH1(newidInside).text() === "" && getBoxH1(newidInside).length !== 0) {
             getBoxH1(newidInside).text("O");
             o.push("" + newidInside);
             return true;
           }
         }
         newidInside = id - 1;
         if (getBoxH1(id - 1 * 2).text() === xORo) {
           if (getBoxH1(newidInside).text() === "" && getBoxH1(newidInside).length !== 0) {
             getBoxH1(newidInside).text("O");
             o.push("" + newidInside);
             return true;
           }
         }
         newidInside = id + 10;
         if (getBoxH1(id + 10 * 2).text() === xORo) {
           if (getBoxH1(newidInside).text() === "" && getBoxH1(newidInside).length !== 0) {
             getBoxH1(newidInside).text("O");
             o.push("" + newidInside);
             return true;
           }
         }
         newidInside = id - 10;
         if (getBoxH1(id - 10 * 2).text() === xORo) {
           if (getBoxH1(newidInside).text() === "" && getBoxH1(newidInside).length !== 0) {
             getBoxH1(newidInside).text("O");
             o.push("" + newidInside);
             return true;
           }
         }
         newidInside = id + 11;
         if (getBoxH1(id + 11 * 2).text() === xORo) {
           if (getBoxH1(newidInside).text() === "" && getBoxH1(newidInside).length !== 0) {
             getBoxH1(newidInside).text("O");
             o.push("" + newidInside);
             return true;
           }
         }
         newidInside = id - 11;
         if (getBoxH1(id - 11 * 2).text() === xORo) {
           if (getBoxH1(newidInside).text() === "" && getBoxH1(newidInside).length !== 0) {
             getBoxH1(newidInside).text("O");
             o.push("" + newidInside);
             return true;
           }
         }
         newidInside = id + 9;
         if (getBoxH1(id + 9 * 2).text() === xORo) {
           if (getBoxH1(newidInside).text() === "" && getBoxH1(newidInside).length !== 0) {
             getBoxH1(newidInside).text("O");
             o.push("" + newidInside);
             return true;
           }
         }
         newidInside = id - 9;
         if (getBoxH1(id - 9 * 2).text() === xORo) {
           if (getBoxH1(newidInside).text() === "" && getBoxH1(newidInside).length !== 0) {
             getBoxH1(newidInside).text("O");
             o.push("" + newidInside);
             return true;
           }
         }
         return false;


     }
   }
   return false;
 }
}
```

Special thanks to

- Instructors
- Sami & Mansour (testers)
- Ali (tester)
- Everybody :)

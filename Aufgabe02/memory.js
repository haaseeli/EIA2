/*
Aufgabe: Aufgabe 2
Name: Elisabeth Haase
Matrikel: 256436
Datum: 15.04.2018

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
 Er wurde nicht kopiert und auch nicht diktiert.
 */
var MemoryGame;
(function (MemoryGame) {
    //Abfragen-Funktion f�r Spielerzahl und Paarzahl
    document.addEventListener("DOMContentLoaded", init);
    let spielerzahl;
    let paarzahl;
    let cardContent = [1, 2, 28, 10, 1995, 42, 1776, 37];
    ;
    let karten = [];
    function main() {
        //Abfragen-Funktion Spielerzahl und Paarzahl prompts:
        spielerzahl = parseInt(prompt("Spielerzahl:", ""), 4);
        spielerzahl > 4 ? spielerzahl = 4 : spielerzahl = spielerzahl;
        paarzahl = parseInt(prompt("Mit wie vielen Paaren wird gespielt? (5 bis 8 verf�gbar)", ""), 8);
        if (paarzahl < 5 || paarzahl > 8) {
            paarzahl = 8;
        }
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=memory.js.map
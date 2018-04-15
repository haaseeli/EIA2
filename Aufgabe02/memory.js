/*
Aufgabe: Aufgabe 13
Name: Elisabeth Haase
Matrikel: 256436
Datum: 21.06.17

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
 Er wurde nicht kopiert und auch nicht diktiert.
 */
var MemoryGame;
(function (MemoryGame) {
    document.addEventListener("DOMContentLoaded", init); //Abfragen-Funktion f�r Spielerzahl und Paarzahl
    let spielerzahl;
    let paarzahl;
    let cardContent = [1, 2, 28, 10, 1995, 42, 1776, 37];
    ;
    let karten = [];
    //Abfragen-Funktion Spielerzahl und Paarzahl prompts:
    spielerzahl = parseInt(prompt('Spielerzahl:'));
    paarzahl = parseInt(prompt('Mit wie vielen Paaren wird gespielt? (5 bis 8 verf�gbar)'));
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=memory.js.map
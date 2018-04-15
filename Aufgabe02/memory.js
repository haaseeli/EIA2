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
    let cardArray = [];
    let playerInfo;
    let cardField;
    ;
    let karten = [];
    function main() {
        //Abfragen-Funktion Spielerzahl und Paarzahl prompts:
        spielerzahl = parseInt(prompt("Spielerzahl:", ""), 4);
        spielerzahl > 4 ? spielerzahl = 4 : spielerzahl = spielerzahl;
        paarzahl = parseInt(prompt("Mit wie vielen Paaren wird gespielt? (5 bis 8 verfuegbar)", ""), 8);
        if (paarzahl < 5 || paarzahl > 8) {
            paarzahl = 8;
        }
    }
    //Karten werden erstellt
    function createCard(_cardContent, _status) {
        let card = document.createElement("div");
        card.innerText = _cardContent;
        card.setAttribute("class", "card " + _status);
        cardArray.push(card);
    }
    document.addEventListener("DOMContentLoaded", main);
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=memory.js.map
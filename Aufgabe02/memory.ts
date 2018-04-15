/*
Aufgabe: Aufgabe 2
Name: Elisabeth Haase
Matrikel: 256436
Datum: 15.04.2018

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
 Er wurde nicht kopiert und auch nicht diktiert.
 */

namespace MemoryGame {

    //Abfragen-Funktion für Spielerzahl und Paarzahl
    document.addEventListener("DOMContentLoaded", main);


    let spielerzahl: number;
    let paarzahl: number;
    let cardContent: number[] = [1, 2, 28, 10, 1995, 42, 1776, 37];
    let cardArray: HTMLElement[] = [];

    let playerInfo: HTMLElement;
    let cardField: HTMLElement;


    interface karte {
        cardContent: number,
        status: string
    };



    let karten: karte[] = [];



    function main(): void {


        //Abfragen-Funktion Spielerzahl und Paarzahl prompts:
        spielerzahl = parseInt(prompt("Spielerzahl:", ""), 4);
        spielerzahl > 4 ? spielerzahl = 4 : spielerzahl = spielerzahl;

        paarzahl = parseInt(prompt("Mit wie vielen Paaren wird gespielt? (5 bis 8 verfuegbar)", ""), 8);
        if (paarzahl < 5 || paarzahl > 8) {
            paarzahl = 8;
        }


        //math.random() weist den divs random zahlen zu. 
        //divs werden dann jeweils hidden, taken oder visible angezeigt (s. css)
        function randomState(): string {
            let randomState: number = Math.random();

            if (randomState <= .5) {

                return "hidden";

            } else if (randomState > .5 && randomState <= .75) {

                return "taken";
            } else if (randomState > .75) {

                return "visible";
            }
        }

        //Karten werden in die Seite eingefügt
        for (let i: number = 0; i < paarzahl; i++) {
            createCard(cardContent[i], randomState());
            createCard(cardContent[i], randomState());
        }

    }

    //Karten werden erstellt
    function createCard(_cardContent: number, _status: string): void {
        let card: HTMLElement = document.createElement("div");
        card.innerText = _cardContent.toString(); //_cardContent: number wird zu einem string umgwandelt ".toString()"
        card.setAttribute("class", "card" + _status);
        cardArray.push(card);
    }



}
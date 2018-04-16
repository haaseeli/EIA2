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
        spielerzahl = parseInt(prompt("Spieler (1 bis 4)", ""));
        spielerzahl > 4 ? spielerzahl = 4 : spielerzahl = spielerzahl;

        paarzahl = parseInt(prompt("Mit wie vielen Paaren wird gespielt? (5 bis 8 verfuegbar)", ""));
        if (paarzahl < 5 || paarzahl > 8) {
            paarzahl = 8;
        }

        //Hier kommt das Kind hin :)
        playerInfo = document.getElementById("playerinfo");
        cardField = document.getElementById("spielbrett");

        function randomMix(_array: any[]): any[] {
            for (let i: number = _array.length - 1; i > 0; i--) {
                const j: number = Math.floor(Math.random() * (i + 1));
                [_array[i], _array[j]] = [_array[j], _array[i]];
            }
            return _array;
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
    }





    //Karten werden in die Seite eingefügt
    for (let i: number = 0; i < paarzahl; i++) {
        createCard(cardContent[i], randomState());
        createCard(cardContent[i], randomState());
    }

    randomMix(cardArray);


    //Karten werden an HTML gehängt
    for (let i: number = 0; i < cardArray.length; i++) {
        cardField.appendChild(cardArray[i]);
    }

    for (let i: number = 0; i < spielerzahl; i++) {
        let player: Player = new Player("Spieler " + (i + 1));
        player.show();
    }

}


//Karten werden erstellt
function createCard(_cardContent: number, _status: string): void {
    let card: HTMLElement = document.createElement("div");

    if (_status == hidden) { //tu nichts? 
    } else {
        card.innerText = _cardContent.toString(); //_cardContent: number wird zu einem string umgwandelt ".toString()"
    }
    card.setAttribute("class", "card" + _status);
    cardArray.push(card);
}

// Dieser Part wurde von Melvin Busch übernommen, da wir nicht wissen, wie es anders gelöst werden kann
class Player {

    score: number;
    name: string;
    player: HTMLElement;

    constructor(_name: string) {
        this.name = _name;
        this.score = 0;
    }

    scoreUp(): number {
        this.score += 10;
        return this.score;
    }

    show(): void {
        this.player = document.createElement("div");
        this.player.innerHTML = `
              <span class="player-name">${this.name}</span>
              <span class="player-score">Punkte: ${this.score}</span>`;
        playerInfo.appendChild(this.player);
    }
}
    /*************** Part Ende *************/


}
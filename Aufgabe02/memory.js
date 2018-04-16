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
    document.addEventListener("DOMContentLoaded", main);
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
        //Hier kommt das Kind hin :)
        playerInfo = document.getElementById("playerinfo");
        cardField = document.getElementById("spielbrett");
        function randomMix(_array) {
            for (let i = _array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [_array[i], _array[j]] = [_array[j], _array[i]];
            }
            return _array;
        }
        //math.random() weist den divs random zahlen zu. 
        //divs werden dann jeweils hidden, taken oder visible angezeigt (s. css)
        function randomState() {
            let randomState = Math.random();
            if (randomState <= .5) {
                return "hidden";
            }
            else if (randomState > .5 && randomState <= .75) {
                return "taken";
            }
            else if (randomState > .75) {
                return "visible";
            }
        }
        //Karten werden in die Seite eingef�gt
        for (let i = 0; i < paarzahl; i++) {
            createCard(cardContent[i], randomState());
            createCard(cardContent[i], randomState());
        }
        randomMix(cardArray);
        //Karten werden an HTML geh�ngt
        for (let i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
        for (let i = 0; i < spielerzahl; i++) {
            let player = new Player("Spieler " + (i + 1));
            player.show();
        }
    }
    //Karten werden erstellt
    function createCard(_cardContent, _status) {
        let card = document.createElement("div");
        card.innerText = _cardContent.toString(); //_cardContent: number wird zu einem string umgwandelt ".toString()"
        card.setAttribute("class", "card" + _status);
        cardArray.push(card);
    }
    // Dieser Part wurde von Melvin Busch �bernommen, da wir nicht wissen, wie es anders gel�st werden kann
    class Player {
        constructor(_name) {
            this.name = _name;
            this.score = 0;
        }
        scoreUp() {
            this.score += 10;
            return this.score;
        }
        show() {
            this.player = document.createElement("div");
            this.player.innerHTML = `
              <span class="player-name">${this.name}</span>
              <span class="player-score">Punkte: ${this.score}</span>`;
            playerInfo.appendChild(this.player);
        }
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=memory.js.map
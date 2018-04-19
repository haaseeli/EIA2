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
    var spielerzahl;
    var paarzahl;
    var cardContent = [1, 2, 28, 10, 1995, 42, 1776, 37];
    var cardArray = [];
    var playerInfo;
    var cardField;
    ;
    var karten = [];
    function main() {
        //Abfragen-Funktion Spielerzahl und Paarzahl prompts:
        do {
            spielerzahl = parseInt(prompt("Spieler (1 bis 4)", ""), 4);
        } while (isNaN(spielerzahl) || spielerzahl <= 1 || spielerzahl > 4);
        do {
            paarzahl = parseInt(prompt("Mit wie vielen Paaren wird gespielt? (5 bis 8 verfuegbar)", ""), 8);
        } while (isNaN(paarzahl) || paarzahl <= 5 || paarzahl > 8);
        //Hier kommt das Kind hin :)
        playerInfo = document.getElementById("playerinfo");
        cardField = document.getElementById("spielbrett");
        function randomMix(_array) {
            for (var i = _array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                _a = [_array[j], _array[i]], _array[i] = _a[0], _array[j] = _a[1];
            }
            return _array;
            var _a;
        }
        //math.random() weist den divs random zahlen zu. 
        //divs werden dann jeweils random hidden, taken oder visible angezeigt (s. css)
        function randomState() {
            var randomState = Math.random();
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
    }
    //Karten werden in die Seite eingef�gt
    for (var i = 0; i < paarzahl; i++) {
        createCard(cardContent[i], randomState());
        createCard(cardContent[i], randomState());
    }
    randomMix(cardArray);
    //Karten werden an HTML geh�ngt
    for (var i = 0; i < cardArray.length; i++) {
        cardField.appendChild(cardArray[i]);
    }
    for (var i = 0; i < spielerzahl; i++) {
        var player = new Player("Spieler " + (i + 1));
        player.show();
    }
    show();
})(MemoryGame || (MemoryGame = {}));
//Karten werden erstellt
function createCard(_cardContent, _status) {
    var card = document.createElement("div");
    if (_status == hidden) {
    }
    else {
        card.innerText = _cardContent.toString(); //_cardContent: number wird zu einem string umgwandelt ".toString()"
    }
    card.setAttribute("class", "card" + _status);
    cardArray.push(card); //Array wird mit Karten bef�llt
}
// Dieser Part wurde von Melvin Busch �bernommen, da wir nicht wissen, wie es anders gel�st werden kann
var Player = (function () {
    function Player(_name) {
        this.name = _name;
        this.score = 0;
    }
    Player.prototype.scoreUp = function () {
        this.score += 10;
        return this.score;
    };
    Player.prototype.show = function () {
        this.player = document.createElement("div");
        this.player.innerHTML = "\n              <span class=\"player-name\">" + this.name + "</span>\n              <span class=\"player-score\">Punkte: " + this.score + "</span>";
        playerInfo.appendChild(this.player);
    };
    return Player;
}());
//# sourceMappingURL=memory.js.map

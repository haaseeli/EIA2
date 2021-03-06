interface Karte {
    farbe: string;
    zeichen: string;
    zahl: number;
}

let sK7: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 7,
}

let sK8: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 8,
}

let sK9: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 9,
}

let sK10: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 10,
}

let sKB: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 11,
}

let sKD: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 12,
}

let sKK: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 13,
}

let sKA: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♣",
    zahl: 14,
}

let sP7: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 7,
}

let sP8: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 8,
}

let sP9: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 9,
}

let sP10: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 10,
}

let sPB: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 11,
}

let sPD: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 12,
}

let sPK: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 13,
}

let sPA: Karte = {
    farbe: '<p class="schwarzeKarte">Schwarz</p>',
    zeichen: "♠",
    zahl: 14,
}

let rH7: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 7,
}

let rH8: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 8,
}

let rH9: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 9,
}

let rH10: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 10,
}

let rHB: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 11,
}

let rHD: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 12,
}

let rHK: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 13,
}

let rHA: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♥",
    zahl: 14,
}

let rK7: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 7,
}

let rK8: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 8,
}

let rK9: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 9,
}

let rK10: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 10,
}

let rKB: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 11,
}

let rKD: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 12,
}

let rKK: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 13,
}

let rKA: Karte = {
    farbe: '<p class="roteKarte">Rot</p>',
    zeichen: "♦",
    zahl: 14,
}

let deck: Karte[] = [sK7, sK8, sK9, sK10, sKB, sKD, sKK, sKA, sP7, sP8, sP9, sP10, sPB, sPD, sPK, sPA, rH7, rH8, rH9, rH10, rHB, rHD, rHK, rHA, rK7, rK8, rK9, rK10, rKB, rKD, rKK, rKA]
// Karten-Array

let handkarten: Karte[] = []
// Variable wird so global gespeichert

document.addEventListener("DOMContentLoaded", deckMischen);
// Event: wenn die Seite geladen ist wird die funktion deckMischen aufgerufen


function deckMischen() {
    let zähler = deck.length;
    while (zähler > 0) {
        let index: number = Math.floor(Math.random() * zähler);
        zähler--;
        let temp: Karte = deck[zähler];
        deck[zähler] = deck[index];
        deck[index] = temp;
    }
// math.random/math.floor interagiert je 1 mal mit jeder einzelnen Karte und ändert dessen Position im Array -> Karten werden gemischt

    console.log(deck);
    spielStart();
}


function spielStart() {
    let kartenanzahl = prompt("Wie viele Karten hättest du gerne? (1-5 Karten)");
    startKarten(kartenanzahl);
}
// Eingabe des Users wird an die Funktion startKarten weitergegeben
// Da es nur eine lokale Variable ist muss sie weitergegeben werden.


function startKarten(kartenanzahl: string) {

    let i: number = 0;

    switch (kartenanzahl) {
        case "1": {
            handkarten = deck.splice(0, 1);
            console.log(handkarten);
            writeHTML(handkarten[i], "handkarten");
        }
            break;

        case "2": {
            handkarten = deck.splice(0, 2);
            console.log(handkarten);
        }
        // deck.splice fängt bei Stelle 0/n im Array an und "entfernt" 2/n Elemente 
        // diese Elemente werden in handkarten zurückgegeben/angezeigt

            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarten");
                i++;
            }


            break;

        case "3": {
            handkarten = deck.splice(0, 3);
            console.log(handkarten);
        }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarten");
                i++;
            }
            break;

        case "4": {
            handkarten = deck.splice(0, 4);
            console.log(handkarten);
        }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarten");
                i++;
            }
            break;

        default:
        case "5": {
            handkarten = deck.splice(0, 5);
            console.log(handkarten);
        }
            while (handkarten.length > i) {
                writeHTML(handkarten[i], "handkarten");
                i++;
            }
            break;

    }
    console.log("Alles erfolgreich generiert.");
}


function karteZiehen(handkarten: Karte[]) {
    let i: number = 0;
    let ziehen = deck.pop();
    handkarten = handkarten.concat(ziehen);
    while (i == 0) {
        if (deck.length == 0) {
            console.log("Es kann keine Karte mehr gezogen werden");
        } else {
            handkarten;
            console.log("Gezogene Karte:", handkarten);
        }
        i++;
        console.log(handkarten);
    }
}
//

function writeHTML(handkarte: Karte, htmlID: string) {
    let prodElement = document.createElement('div');
    let elementstring =
        `
    <div id="handkarte">
        <p class="zeichen">${handkarte.zeichen}</p>
        <p class="zahl">${handkarte.zahl}</p>
        ${handkarte.farbe}
    </div>
    `
    prodElement.innerHTML = elementstring;
    document.getElementById(htmlID).appendChild(prodElement);
}

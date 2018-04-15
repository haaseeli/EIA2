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
    document.addEventListener("DOMContentLoaded", init); 
    
    
    let spielerzahl: number;
    let paarzahl: number;
    let cardContent: number[] = [1, 2, 28, 10, 1995, 42, 1776, 37];
    
    
    interface karte {
        cardContent: number;
        status: string; 
    };
    
    
    
    let karten: karte[] = []; 
    
   
    function main(): void {
    //Abfragen-Funktion Spielerzahl und Paarzahl prompts:
    spielerzahl = parseInt(prompt("Spielerzahl:", ""), 4);
    spielerzahl > 4 ? spielerzahl = 4 : spielerzahl = spielerzahl;
    
    paarzahl = parseInt(prompt("Mit wie vielen Paaren wird gespielt? (5 bis 8 verfügbar)", ""), 8);
    if (paarzahl < 5 || paarzahl > 8) {
        paarzahl = 8;
        }
    }
    
    //function createCard(_cardContent: string, _status: string): void {
        //let card: HTMLElement = document.createElement("div");
        //card.innerText = _cardContent;
        //card.setAttribute("class", "card " + _status);
       // cardArray.push(card);
      //}
    
    //header mit Spielerinfo
   

    
}
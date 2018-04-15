    /*
    Aufgabe: Aufgabe 13
    Name: Elisabeth Haase
    Matrikel: 256436
    Datum: 21.06.17

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
    
    
    //Abfragen-Funktion Spielerzahl und Paarzahl prompts:
    spielerzahl = parseInt(prompt('Spielerzahl:'));
    paarzahl = parseInt(prompt('Mit wie vielen Paaren wird gespielt? (5 bis 8 verfügbar)'));
    
    //header mit Spielerinfo
    function createHeader(): void {
        
        let info: HTMLElement = document.createElement("header");
            document.body.appendChild(info);
        
        
    
}
"use strict";
/*

        Aufgabe: (Aufgabe 07)
        Name: (Elisabeth Haase)
        Matrikel: (256436)
        Datum: (30.04.2019)
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
        Er wurde nicht kopiert und auch nicht diktiert.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // alles aus http wird als Typ Http importiert
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); // Konsole gibt "Starting server" aus.
    let port = Number(process.env.PORT); // Variable port wird der Typ number zugewiesen und versucht den PORT aus Umgebungsvariablen zu beziehen.
    if (!port) // Wenn der Port ungültig ist
        port = 8100; // wird ihm automatisch der Port 8100 zugewiesen.
    let server = Http.createServer(); // Variable server wird Typ Http.Server zugewiesen und Http.createServer erstellt eine neue Http.Server Instanz 
    server.addListener("request", handleRequest); // server wird ein Listener "request" gegeben, welcher die Funktion handleRequest ausführt
    server.addListener("listening", handleListen); // server wird ein Listener "listening" gegeben, welcher die Funktion handleListen ausführt
    server.listen(port); // server wird gestartet und hört dem deklarierten port zu
    function handleListen() {
        console.log("Listening"); // Konsole gibt "Listening" aus 
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsole gibt immer "I hear voices!" aus, wenn die Funktion ausgeführt wird
        _response.setHeader("content-type", "text/html; charset=utf-8"); // _response gibt dem Header den content-type die Eigenschaften "text/html; charset=utf-8" mit.
        _response.setHeader("Access-Control-Allow-Origin", "*"); // _response weist den Browser an, dass Code mit beliebigem Ursprung ausgeführt werden darf. 
        _response.write(_request.url); // _response gibt eingesendete (_request) Informationen in der URL wieder
        _response.end(); // _response ende :^) 
    }
})(L05_Server || (L05_Server = {}));
console.log(L05_Server);
//# sourceMappingURL=server.js.map
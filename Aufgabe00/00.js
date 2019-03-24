// Pop Up Eingabefeld
function Eingabefeld() {
    var eingabe = prompt("Name", ""); // Typ Annotiation var eingabe
    if (eingabe != null) {
        document.getElementById("Type").innerHTML =
            "Merci goku, " + eingabe + ".";
        console.log ( "Merci goku, " + eingabe + ".");
    } // if close
} // function close
//# sourceMappingURL=00.js.map

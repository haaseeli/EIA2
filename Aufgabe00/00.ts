
// Pop Up Eingabefeld
    function Eingabefeld() {
        var eingabe: string = prompt("Name", ""); // Typ Annotiation var eingabe
        if (eingabe != null) {
            document.getElementById("Type").innerHTML =
                "Merci goku, " + eingabe + ".";
        } // if close
    } // function close

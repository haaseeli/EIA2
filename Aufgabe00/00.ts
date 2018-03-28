
function Eingabefeld() {
  var eingabe = prompt("Name", "");
  if (eingabe != null) {
    document.getElementById("Type").innerHTML =
      "Merci goku, " + eingabe + ".";
  }
}
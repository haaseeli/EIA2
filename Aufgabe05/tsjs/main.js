var Aufgabe05;
(function (Aufgabe05) {
    window.addEventListener("load", init);
    let gesamtpreis = 0;
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        document.getElementById("button").addEventListener("click", pressedButton);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", eisBerechnen);
        }
        displayFlexiblesEis(Aufgabe05.eis);
    }
    function pressedButton(_event) {
        console.log("Hallo Eli");
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if (input.getAttribute("lieferdaten") == "true") {
                if (gesamtpreis == 0 || input.value == "") {
                    document.getElementById("buttonangaben").innerHTML = "Kein 🍦 für dich :(";
                }
                else {
                    document.getElementById("buttonangaben").innerHTML = "Du bist cool drauf 😎";
                }
            }
        }
    }
    function eisBerechnen(_event) {
        gesamtpreis = 0;
        let eispreis = 0;
        document.getElementById("overview").innerHTML = "";
        let inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            if (Number(inputs[i].value) && inputs[i].type == "number") {
                let kugelanzahl = Number(inputs[i].value);
                let kugelpreis = Number(inputs[i].alt);
                eispreis += +kugelanzahl * kugelpreis;
                let post = document.createElement("span");
                post.innerHTML = " | " + `${inputs[i].value} x  ${inputs[i].id}`;
                document.getElementById("overview").appendChild(post);
                continue;
            }
            if (inputs[i].checked == true) {
                let toppingpreis = Number(inputs[i].alt);
                eispreis = eispreis + toppingpreis;
                let post2 = document.createElement("span");
                post2.innerHTML = " | " + `${inputs[i].id}`;
                document.getElementById("overview").appendChild(post2);
            }
            gesamtpreis = eispreis;
        }
        preisAnzeigen(gesamtpreis);
    }
    function preisAnzeigen(_gesamtpreis) {
        let anzeigepreis = document.createElement("p");
        anzeigepreis.innerHTML = "Gesamtpreis ihrer Bestellung: " + _gesamtpreis.toFixed(2) + "€";
        document.getElementById("overview").appendChild(anzeigepreis);
    }
    function displayFlexiblesEis(_homogeneseisarray) {
        for (let eiskey in _homogeneseisarray) {
            let zwischenspeicher = _homogeneseisarray[eiskey];
            for (let i = 0; i < zwischenspeicher.length; i++) {
                eisGenerierung(zwischenspeicher[i]);
            }
        }
    }
    function eisGenerierung(_heteroPredefinedEis) {
        let counter = document.createElement("input");
        let label = document.createElement("label");
        label.setAttribute("for", _heteroPredefinedEis.eisname);
        label.innerText = " x " + _heteroPredefinedEis.eisname;
        counter.setAttribute("type", _heteroPredefinedEis.type);
        counter.setAttribute("name", _heteroPredefinedEis.name);
        counter.setAttribute("step", _heteroPredefinedEis.step);
        counter.setAttribute("min", _heteroPredefinedEis.min);
        counter.setAttribute("max", _heteroPredefinedEis.max);
        counter.setAttribute("id", _heteroPredefinedEis.eisname);
        counter.setAttribute("value", _heteroPredefinedEis.value.toString());
        counter.setAttribute("alt", _heteroPredefinedEis.preis.toString());
        document.getElementById("eis").appendChild(counter);
        document.getElementById("eis").appendChild(label);
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=main.js.map
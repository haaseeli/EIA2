namespace Aufgabe05 {

    interface PredefinedEis {
        type: string;
        name: string;
        step: string;
        min: string;
        max: string;
        value: number;
        eisname: string;
        preis: number;
    }

    export interface HomogenesEisArray {
        [eiskey: string]: PredefinedEis[];
    }

    window.addEventListener("load", init);

    let gesamtpreis: number = 0;

    function init(_event: Event): void {

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("button").addEventListener("click", pressedButton);
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", eisBerechnen);
        }
        displayFlexiblesEis(eis);
    }

    function pressedButton(_event: Event): void {
        console.log("Hallo Eli");
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < inputs.length; i++) {
            let input: HTMLInputElement = inputs[i];
            if (input.getAttribute("lieferdaten") == "true") {
                if (gesamtpreis == 0 || input.value == "") {
                    document.getElementById("buttonangaben").innerHTML = "Kein 🍦 für dich :(";
                } else {
                    document.getElementById("buttonangaben").innerHTML = "Du bist cool drauf 😎";
                }
            }
        }
    }

    function eisBerechnen(_event: Event): void {
        gesamtpreis = 0;
        let eispreis: number = 0;
        document.getElementById("overview").innerHTML = "";
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < inputs.length; i++) {
            if (Number(inputs[i].value) && inputs[i].type == "number") {
                let kugelanzahl: number = Number(inputs[i].value);
                let kugelpreis: number = Number(inputs[i].alt);
                eispreis += + kugelanzahl * kugelpreis;
                let post: HTMLSpanElement = document.createElement("span");
                post.innerHTML = " | " + `${inputs[i].value} x  ${inputs[i].id}`;
                document.getElementById("overview").appendChild(post);
                continue;
            }
            if (inputs[i].checked == true) {
                let toppingpreis: number = Number(inputs[i].alt);
                eispreis = eispreis + toppingpreis;
                let post2: HTMLSpanElement = document.createElement("span");
                post2.innerHTML = " | " + `${inputs[i].id}`;
                document.getElementById("overview").appendChild(post2);
            }
            gesamtpreis = eispreis;
        }
        preisAnzeigen(gesamtpreis);
    }

    function preisAnzeigen(_gesamtpreis: number): void {
        let anzeigepreis: HTMLParagraphElement = document.createElement("p");
        anzeigepreis.innerHTML = "Gesamtpreis ihrer Bestellung: " + _gesamtpreis.toFixed(2) + "€";
        document.getElementById("overview").appendChild(anzeigepreis);

    }

    function displayFlexiblesEis(_homogeneseisarray: HomogenesEisArray): void {
        for (let eiskey in _homogeneseisarray) {
            let zwischenspeicher: PredefinedEis[] = _homogeneseisarray[eiskey];
            for (let i: number = 0; i < zwischenspeicher.length; i++) {
                eisGenerierung(zwischenspeicher[i]);
            }
        }
    }

    function eisGenerierung(_heteroPredefinedEis: PredefinedEis): void {
        let counter: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
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
}
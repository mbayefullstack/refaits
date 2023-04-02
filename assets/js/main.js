const spanModule = document.getElementById("span-modules");
const spanEnseignant = document.getElementById("span-enseignant");
const spanClasse = document.getElementById("span-salle");
const spanSalle = document.getElementById("span-classe");
const select = document.getElementById("select");

const modules = ["Dev Web", "Hackeuse", "Ref Dig", "Dev Data", "AWS"];
const enseignants = ["Aly", "Wane","Mn", "Mbaye", "Seckouba"];
const salles = ["100","101","102","103","104","105","106"];
const classes = ["L1A","L1B","L2", "L3",]


function charger(chaine) {
    if(chaine === "modules") {
        chargerSelect(modules)
    } else if(chaine === "enseignants") {
        chargerSelect(enseignants);
    } else if(chaine === "salles") {
        chargerSelect(salles);
    } else {
        chargerSelect(classes);
        
    }
}

function chargerSelect(tableau) {
    select.innerHTML = "";
    // const opt = document.createElement("option");
    // opt.innerText = label;
    // select.appendChild(opt);
    tableau.forEach(element => {
        const opt = document.createElement("option");
        opt.innerText = element;
        select.appendChild(opt);
    });
}
spanModule.innerText = modules.length;
spanEnseignant.innerText = enseignants.length;
spanClasse.innerText = classes.length;
spanSalle.innerText = salles.length;
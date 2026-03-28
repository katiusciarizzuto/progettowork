  //INSERISCO LA FUNZIONE PER CALCOLO E RISULTATI
function calcola() 
{
  
document.getElementById("risultato").style.display = "block";

  let p = document.getElementById("probabilita").value;
  let d = document.getElementById("danno").value;
  let rischio = document.getElementById("tipo rischio").value;

    //avvertimento se non viene selezionato un dato//
    if (p == "" || d == "" || rischio == "") {
    alert("Occorre selezionare tutte le scelte");
    return;
  }

let immagine = document.getElementById("immagine-iniziale");
  if (immagine) {
  immagine.style.display = "none";
  }

  let r = p * d;
  let livello = "";
  let azioneGenerale = "";
  let classe = "";
  let specifica = "";
  

    // azioni generali
  if (r <=2) {
    livello ="BASSO";
    azioneGenerale= "Azioni migliorative da programmare non richiedenti un intervento immediato"
    classe = "basso"
  }
  else if (r <= 4) {
    livello = "MEDIO";
    azioneGenerale = "Azioni correttive e/o migliorative da programmare nel breve, medio termine";
    classe = "medio";
  } 
  else if (r <= 8) {
    livello = "GRAVE";
    azioneGenerale = "Azioni correttive necessarie da programmare con urgenza ";
    classe = "grave";
  } 
  else if (r <= 12) {
    livello = "GRAVISSIMO";
    azioneGenerale = "Azioni correttive indilazionabili";
    classe = "gravissimo";
  } 
  
  // azioni specifiche
  if (rischio == "caduta") {
        specifica = "Usare imbracature, parapetti, controllare i ponteggi. ";
  }

  if (rischio == "carichi") {
    specifica = "Usare mezzi di sollevamento per carichi pesanti, svolgere formazione ai lavoratori sulla corretta postura.";
  }

  if (rischio == "elettrico") {
    specifica = "Controllare gli impianti, isolare i cavi, usare attrezzature a norma.";
  }

  if (rischio == "rumore") {
    specifica = "Usare cuffie protettive.";
  }

  let box = document.getElementById("risultato");
  box.className = "card p-3 text-center " + classe;

  box.innerHTML =
    `<b>INDICE DI RISCHIO= ${r}<br><b>Livello:</b> ${livello}<br><b>Azione generale:</b> ${azioneGenerale}<br><b>Azione specifica:</b> ${specifica}`;
  

// tolgo evidenziazione precedente 
document.querySelectorAll("td").forEach(c => c.classList.remove("attivo"));

let idCella = "p" + p + "d" + d;
let cella = document.getElementById(idCella);

// seleziono la cella del risultato
if (cella) {
  cella.classList.add("attivo");
  }


  // mostro il pulsante reset solo dopo il calcolo
  let btnReset = document.getElementById("btn-reset");
  if (btnReset) {
    btnReset.style.display = "block";
  }
}
//resetto le selezioni

  function resetCalcolo() {

  document.getElementById("risultato").style.display = "none";
  
  document.getElementById("probabilita").value = "";
  document.getElementById("danno").value = "";
  document.getElementById("tipo rischio").value = "";

  // elimino il risultato
  let box = document.getElementById("risultato");
  box.innerHTML = "";
  box.className = "card p-3 mb-4 text-center";

  // mostro di nuovo l'immagine
  let immagine = document.getElementById("immagine-iniziale");
  if (immagine) {
    immagine.style.display = "block";
  }

  // tolgo evidenziazione matrice
  document.querySelectorAll("td").forEach(c => {
    c.classList.remove("attivo");
  });

  // nascondo di nuovo il bottone reset
  let btnReset = document.getElementById("btn-reset");
  if (btnReset) {
    btnReset.style.display = "none";
  }
}


// PDF
function stampa() {
  window.print();
}


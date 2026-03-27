  //INSERISCO LA FUNZIONE PER CALCOLO E RISULTATI
function calcola() 
{

  let p = document.getElementById("probabilita").value;
  let d = document.getElementById("danno").value;
  let rischio = document.getElementById("tipo rischio").value;

  if (p == "" || d == "" || rischio == "") {
    alert("Occorre selezionare tutte le scelte");
    return;
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
}

// PDF
function stampa() {
  window.print();
}

// QR
new QRCode(document.getElementById("qrcode"), {
    text: "https://1drv.ms/w/c/68ed88a88b1dc260/IQD1rS29veB6TIsI--CK1xRjAbyUJQ7O6lmoIqNkgfr3QKA?e=TpQyZe",
  width: 150,
  height: 150
});
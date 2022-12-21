// JQuery

$(document).ready(function(){
    $("#nastavak").hide();
    var parNepar = 0;
    $("#taster").click(function(e){
    e.preventDefault();

    if(parNepar % 2 == 0){
        $("#nastavak").fadeIn();
        $("#taster").html("Sakrij");
    }else{
        $("#nastavak").fadeOut();
        $("#taster").html("Saznaj više");
    }
    parNepar++;

    
})}); 


// JQuery kraj

// Navigacija

let objNavMeni = document.querySelector("#navitems");
objNavMeni.innerHTML = ``

let nizNavHrefAtt = ["#pocetak", "#staJeKriptografija", "#kvadratnaSifra", "#sifrovanje", "#kontakt"];
let nizNavImena = ["Početak", "Šta je kriptografija?", "Kvadratna šifra", "Šifrovanje i dešifrovanje", "Kontakt"]

for (let i = 0; i < nizNavImena.length; i++){
    objNavMeni.innerHTML += `<li class="nav-item">
                                <a class="nav-link tm-nav-link" href="${nizNavHrefAtt[i]}">${nizNavImena[i]}</a>
                            </li>`
}

objNavMeni.innerHTML += `</ul>`

// Navigacija kraj

// Kvadratna šifra šifrovanje i dešifrovanje


document.querySelector("#sifrovanje").addEventListener("click", sifrujDesifruj);

function sifrujDesifruj() {

    var tbInput = ``;
    tbInput += document.querySelector("#input").value;
    var tbOutput = document.querySelector("#output");

    //prvi niz - pravljenje niza od stringa

    var nizKaraktera = tbInput.split("");
    console.log(nizKaraktera);

    var dvodimenzioniNizIndeks = Math.floor(Math.sqrt(nizKaraktera.length));


    //drugi niz - pravljenje dvodimenzionalnog niza

    var dvodimenzionalniNiz = []
    while(nizKaraktera.length) dvodimenzionalniNiz.push(nizKaraktera.splice(0, dvodimenzioniNizIndeks));
    console.log(dvodimenzionalniNiz);

    //treci niz - pravljenje kvadratnog dvodimenzionalnog niza

    var kvadratniDvodimenzionalniNiz = napraviNiz(dvodimenzioniNizIndeks, dvodimenzioniNizIndeks);

    function napraviNiz(length) {
        var arr = new Array(length || 0),
            i = length;
        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = napraviNiz.apply(this, args);
        }
        return arr;
    }

    for (let i = 0; i < dvodimenzioniNizIndeks; i++){
        for (let j = 0; j < dvodimenzioniNizIndeks; j++){
            kvadratniDvodimenzionalniNiz[i][j] = dvodimenzionalniNiz[j][i];
        }
    }
    console.log(kvadratniDvodimenzionalniNiz);

    //cetvrti niz - vracanje u jednodimenzionalni niz

    var nizSifrovanihKaraktera = kvadratniDvodimenzionalniNiz.flat(1);
    console.log(nizSifrovanihKaraktera);

    //peti niz - spajanje niza u string

    var stringOutput = nizSifrovanihKaraktera.join("");
    console.log(stringOutput);

    console.log("****************************************************");

    dvodimenzionalniNiz = dvodimenzionalniNiz.flat(1);
    console.log(dvodimenzionalniNiz);
    kvadratniDvodimenzionalniNiz = kvadratniDvodimenzionalniNiz.flat(1);
    console.log(kvadratniDvodimenzionalniNiz);
    var razlika = dvodimenzionalniNiz.length - kvadratniDvodimenzionalniNiz.length;
    console.log(razlika);

    // ponavljanje ukoliko je potrebno

    while (razlika > 3){
        dvodimenzionalniNiz.splice(0, Math.pow(dvodimenzioniNizIndeks, 2));
        nizKaraktera = dvodimenzionalniNiz;
        console.log(nizKaraktera);
        dvodimenzioniNizIndeks = Math.floor(Math.sqrt(nizKaraktera.length));
        console.log(dvodimenzioniNizIndeks);
        dvodimenzionalniNiz = [];
        while(nizKaraktera.length) dvodimenzionalniNiz.push(nizKaraktera.splice(0, dvodimenzioniNizIndeks));
        console.log(dvodimenzionalniNiz);
        kvadratniDvodimenzionalniNiz = napraviNiz(dvodimenzioniNizIndeks, dvodimenzioniNizIndeks); 
        for (let i = 0; i < dvodimenzioniNizIndeks; i++){
            for (let j = 0; j < dvodimenzioniNizIndeks; j++){
                kvadratniDvodimenzionalniNiz[i][j] = dvodimenzionalniNiz[j][i];
            }
        }
        console.log(kvadratniDvodimenzionalniNiz);
        nizSifrovanihKaraktera = kvadratniDvodimenzionalniNiz.flat(1);
        console.log(nizSifrovanihKaraktera);
        stringOutput += nizSifrovanihKaraktera.join("");
        console.log(stringOutput);

        dvodimenzionalniNiz = dvodimenzionalniNiz.flat(1);
        console.log(dvodimenzionalniNiz);
        kvadratniDvodimenzionalniNiz = kvadratniDvodimenzionalniNiz.flat(1);
        console.log(kvadratniDvodimenzionalniNiz);
        var razlika = dvodimenzionalniNiz.length - kvadratniDvodimenzionalniNiz.length;
        console.log(razlika);
    }
    dvodimenzionalniNiz.splice(0, Math.pow(dvodimenzioniNizIndeks, 2));
    dvodimenzionalniNiz = dvodimenzionalniNiz.join("");
    stringOutput += dvodimenzionalniNiz;
    console.log(stringOutput);
    console.log(stringOutput.length);

    tbOutput.value = stringOutput;
    
}

// Kvadratna šifra šifrovanje i dešifrovanje kraj

// Forma

let objForma = document.querySelector("#formular");

let forma = document.querySelector("#formular");

let formaInputId = ["ime", "prezime", "email"];
let formaInputImena = ["name", "name", "email"];
let formaInputType = ["text", "text", "email"];
let formaInputPlaceholder = ["Vaše ime*", "Vaše prezime*", "Vaš e-mail*"];
let inputKlase = ["tm-input", "mb-1"];

let spanKlase = ["col-11", "upozorenje", "mb-3", "aj-sakrij"];
let spanTekst = ["Ime nije u dobrom formatu. Dozvoljena su dva imena. Primer: Aleksandar Radivoje", "Prezime nije u dobrom formatu. Dozvoljena su dva prezimena. Primer: Pavlović Jovanović", "Email nije u dobrom formatu. Primer: johndoe@email.com"];

let spanObavezno = document.createElement("span");
spanObavezno.setAttribute("id", "obavezno");
spanObavezno.classList.add("col-6");
spanObavezno.classList.add("obavezna");
spanObavezno.innerHTML = "*obavezna polja";

forma.appendChild(spanObavezno);

for (let i in formaInputId){
    let inputTag = document.createElement(`input`);
    inputTag.setAttribute(`id`, `${formaInputId[i]}`);
    inputTag.setAttribute(`name`, `${formaInputImena[i]}`);
    inputTag.setAttribute(`type`, `${formaInputType[i]}`);
    inputTag.setAttribute(`placeholder`, `${formaInputPlaceholder[i]}`);
    for (let i in inputKlase){
        inputTag.classList.add(`${inputKlase[i]}`);
    }
    inputTag.setAttribute(`required`, `required`);
    forma.appendChild(inputTag);
    let spanTag = document.createElement(`span`);
    for (let i in spanKlase){
        spanTag.classList.add(`${spanKlase[i]}`);
    }
    
    forma.appendChild(spanTag);
}

let textareaPitanja = document.createElement(`textarea`);
textareaPitanja.setAttribute(`id`, `pitanja`);
textareaPitanja.setAttribute(`name`, `pitanja`);
textareaPitanja.setAttribute(`rows`, `8`);
textareaPitanja.setAttribute(`placeholder`, `Pitanja?`);
textareaPitanja.classList.add(`tm-input`);
forma.appendChild(textareaPitanja);

let radioNaslov = document.createElement(`label`);
radioNaslov.classList.add(`col-12`);
radioNaslov.innerHTML = `Izaberite za šta se prijavljujete*:`;
forma.appendChild(radioNaslov);

let radioForIId = [`rdKurs`, `rdPred`];
let radioValue = [`K`, `P`];
let radioTekst = [`Kurs`, `Predavanje`];

let radioDiv = document.createElement(`div`);
forma.appendChild(radioDiv)

let spanVrstaPrijave = document.createElement(`span`);
spanVrstaPrijave.setAttribute(`id`, `vrstaPrijave`);
spanVrstaPrijave.classList.add(`coll-11`);
spanVrstaPrijave.classList.add(`aj-sakrij`);
spanVrstaPrijave.innerHTML = `Morate izabrati ili predavanje ili kurs!`
radioDiv.appendChild(spanVrstaPrijave);

for (let i in radioTekst){
    let prviDiv = document.createElement(`div`);
    let drugiDiv = document.createElement(`div`);
    drugiDiv.classList.add(`form-check-inline`);
    drugiDiv.classList.add(`mb-2`);
    prviDiv.appendChild(drugiDiv);
    let radioLabel = document.createElement(`label`);
    radioLabel.classList.add(`form-check-label`);
    radioLabel.setAttribute(`for`, `${radioForIId[i]}`);
    radioLabel.innerHTML = `${radioTekst[i]}`
    let radioInput = document.createElement(`input`);
    radioInput.setAttribute(`type`, `radio`);
    radioInput.setAttribute(`id`, `${radioForIId[i]}`);
    radioInput.setAttribute(`name`, `tipPrijave`);
    radioInput.setAttribute(`value`, `${radioValue[i]}`);
    radioInput.classList.add(`form-check-input`);
    radioInput.innerHTML = `${radioTekst[i]}`
    drugiDiv.appendChild(radioInput);
    drugiDiv.appendChild(radioLabel);
    radioDiv.appendChild(prviDiv);
}



let prviDiv = document.createElement(`div`);
prviDiv.classList.add(`form-check`);
let chkLabel = document.createElement(`label`);
chkLabel.classList.add(`form-check-label`);
chkLabel.setAttribute(`for`, `chbObavest`);
chkLabel.innerHTML = `Obeležiti ukoliko želite da primate obaveštenja o našim predavanjima i kursevima putem e-mail pošte (opciono).`;
let chkInput = document.createElement(`input`);
chkInput.setAttribute(`type`, `checkbox`);
chkInput.setAttribute(`id`, `chbObavest`);
chkInput.setAttribute(`value`, `Obavestenja`);
chkInput.classList.add(`form-check-input`);
prviDiv.appendChild(chkInput);
prviDiv.appendChild(chkLabel);
forma.appendChild(prviDiv);

let tasterPrijava = document.createElement(`button`);
tasterPrijava.setAttribute(`type`, `button`);
tasterPrijava.setAttribute(`id`, `prijava`);
let tasterPrijavaKlase = [`tm-intro-text`, `tm-btn-primary`, `mt-3`, `mb-5`, `col-6`];
for (let i in tasterPrijavaKlase){
    tasterPrijava.classList.add(`${tasterPrijavaKlase[i]}`);
}
tasterPrijava.innerHTML = `Prijavi se`;
forma.appendChild(tasterPrijava);

let prijavaButton = document.querySelector("#prijava");
prijavaButton.addEventListener("click", proveraForma);

var objIme = document.querySelector("#ime");
var objPrezime = document.querySelector("#prezime");
var objEmail = document.querySelector("#email");
var nizTipPrijave = document.getElementsByName("tipPrijave");

var regExImeIPrezime = /^([A-ZŠĐČĆŽ][a-zšđčćž]{2,19})(\s[A-ZŠĐČĆŽ][a-zšđčćž)]{2,19})?$/;
var regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

blurProvera(objIme, regExImeIPrezime, "Ime nije u dobrom formatu. Dozvoljena su dva imena. Primer: Aleksandar Radivoje");
blurProvera(objPrezime, regExImeIPrezime, "Prezime nije u dobrom formatu. Dozvoljena su dva prezimena. Primer: Pavlović Jovanović");
blurProvera(objEmail, regExEmail, "Email nije u dobrom formatu. Primer: johndoe@email.com");

function proveraForma() {

    proveraRegEx(regExImeIPrezime, objIme, "Ime nije u dobrom formatu. Dozvoljena su dva imena. Primer: Aleksandar Radivoje");
    proveraRegEx(regExImeIPrezime, objPrezime, "Prezime nije u dobrom formatu. Dozvoljena su dva prezimena. Primer: Pavlović Jovanović");
    proveraRegEx(regExEmail, objEmail, "Email nije u dobrom formatu. Primer: johndoe@email.com")

    let tipPrijave = "";
    for (let i = 0; i < nizTipPrijave.length; i++){
        if (nizTipPrijave[i].checked){
            tipPrijave = nizTipPrijave[i].value;
        }
    }

    if (tipPrijave == ""){
        nizTipPrijave[0].parentElement.parentElement.previousElementSibling.classList.remove("aj-sakrij");
        nizTipPrijave[0].parentElement.parentElement.parentElement.classList.add("aj-crveni-okvir");
    }

    if (tipPrijave != ""){
        nizTipPrijave[0].parentElement.parentElement.previousElementSibling.classList.add("aj-sakrij");
        nizTipPrijave[0].parentElement.parentElement.parentElement.classList.remove("aj-crveni-okvir");
    }
    
}

function blurProvera(obj, regEx, poruka) {
    obj.addEventListener("blur", function(){
        proveraRegEx(regEx, obj, poruka) 
    })
}

function proveraRegEx(re, objekat, poruka){
    if(!re.test(objekat.value)){
        objekat.nextElementSibling.classList.remove("aj-sakrij");
        objekat.nextElementSibling.innerHTML = poruka;
        objekat.classList.add("aj-crveni-okvir");
    }
    else{
        objekat.nextElementSibling.classList.add("aj-sakrij");
        objekat.nextElementSibling.innerHTML = "";
        objekat.classList.remove("aj-crveni-okvir");
    }
}


// Forma - kraj
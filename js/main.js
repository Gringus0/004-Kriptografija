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

    //prvi niz

    var niz1 = tbInput.split("");
    console.log(niz1);

    var dvodimenzioniNizIndeks = Math.floor(Math.sqrt(niz1.length));


    //drugi niz

    var niz2 = []
    while(niz1.length) niz2.push(niz1.splice(0, dvodimenzioniNizIndeks));
    console.log(niz2);

    //treci niz

    var niz3 = napraviNiz(dvodimenzioniNizIndeks, dvodimenzioniNizIndeks);

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
            niz3[i][j] = niz2[j][i];
        }
    }
    console.log(niz3);

    //cetvrti niz

    var niz4 = niz3.flat(1);
    console.log(niz4);

    //peti niz

    var niz5 = niz4.join("");
    console.log(niz5);

    console.log("****************************************************");

    niz2 = niz2.flat(1);
    console.log(niz2);
    niz3 = niz3.flat(1);
    console.log(niz3);
    var razlika = niz2.length - niz3.length;
    console.log(razlika);

    while (razlika > 3){
        niz2.splice(0, Math.pow(dvodimenzioniNizIndeks, 2));
        niz1 = niz2;
        console.log(niz1);
        dvodimenzioniNizIndeks = Math.floor(Math.sqrt(niz1.length));
        console.log(dvodimenzioniNizIndeks);
        niz2 = [];
        while(niz1.length) niz2.push(niz1.splice(0, dvodimenzioniNizIndeks));
        console.log(niz2);
        niz3 = napraviNiz(dvodimenzioniNizIndeks, dvodimenzioniNizIndeks); 
        for (let i = 0; i < dvodimenzioniNizIndeks; i++){
            for (let j = 0; j < dvodimenzioniNizIndeks; j++){
                niz3[i][j] = niz2[j][i];
            }
        }
        console.log(niz3);
        niz4 = niz3.flat(1);
        console.log(niz4);
        niz5 += niz4.join("");
        console.log(niz5);

        niz2 = niz2.flat(1);
        console.log(niz2);
        niz3 = niz3.flat(1);
        console.log(niz3);
        var razlika = niz2.length - niz3.length;
        console.log(razlika);
    }
    niz2.splice(0, Math.pow(dvodimenzioniNizIndeks, 2));
    niz5 += niz2;
    console.log(niz5);
    console.log(niz5.length);

    tbOutput.innerHTML = niz5;
    
}

// Kvadratna šifra šifrovanje i dešifrovanje kraj

// Forma

let objForma = document.querySelector("#formular");

let nizInputId = ["ime", "prezime", "email"];
let nizInputName = ["name", "name", "email"];
let nizInputType = ["text", "text", "email"];
let nizInputPlaceholder = ["Vaše ime*", "Vaše prezime*", "Vaš e-mail*"];


objForma.innerHTML = `<span id="obavezno" class="col-6 obavezna">*obavezna polja</span>`;

for (let i = 0; i < nizInputId.length; i++){
    objForma.innerHTML += `<input id="${nizInputId[i]}" name="${nizInputName[i]}" type="${nizInputType[i]}" placeholder="${nizInputPlaceholder[i]}" class="tm-input mb-1" required="required" />
                            <span class="aj-sakrij col-11 upozorenje mb-3"></span>`;
}

objForma.innerHTML += `<textarea id="pitanja" name="message" rows="8" placeholder="Pitanja?" class="tm-input"></textarea>`;

let nizRadioLabel = ["Kurs", "Predavanje"];
let nizRadioId = ["rdKurs", "rdPred"];
let nizRadioValue = ["K", "P"];

objForma.innerHTML += `<label class="col-12">Izaberite za šta se prijavljujete*:</label>`
for (let i = 0; i < nizRadioLabel.length; i++){
    objForma.innerHTML += `<div><div class="form-check-inline mb-2">
                                <label class="form-check-label" for="${nizRadioId[i]}">
                                <input type="radio" id="${nizRadioId[i]}" class="form-check-input" name="tipPrijave" value="${nizRadioValue[i]}">${nizRadioLabel[i]}
                                </label>
                            </div></div>`
}
objForma.innerHTML += `</div>`
objForma.innerHTML += `<span id="tipPrijave" class="aj-sakrij col-11"></span>
                        <div class="form-check">
                        <label class="form-check-label" for="chbObavest">
                            <input type="checkbox" id="chbObavest" class="form-check-input" value="Obavestenja">Obeležiti ukoliko želite da primate obaveštenja o našim predavanjima i kursevima putem e-mail pošte (opciono).
                        </label>
                        </div>
                        
                        <button type="button" id="prijava" class="btn tm-btn-submit mt-3">Prijavi se</button>`

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
        nizTipPrijave[0].parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove("aj-sakrij");
        nizTipPrijave[0].parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML = "Morate izabrati ili predavanje ili kurs.";
        nizTipPrijave[0].parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add("aj-crveni-okvir");
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
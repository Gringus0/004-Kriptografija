// Navigacija

let nizNav = ["Početak", "Šta je Kriptografija", "Kvadratna šifra", "Šifrovanje i dešifrovanje", "Kontakt"];
let nizNavLink = ["#početak", "#kriptografija", "#kvadratnaŠifra", "#šifrovanjeIDešifrovanje", "#kontakt"];

// Navigacija kraj

// Kvadratna šifra šifrovanje i dešifrovanje

document.querySelector("#sifrovanje").addEventListener("click", sifrujDesifruj)

function sifrujDesifruj() {

    let tbInput = document.querySelector("#input").value;
    let tbOutput = document.querySelector("#output");

        // prvi niz
    let niz1 = tbInput.split("");
    console.log(niz1);
    console.log(niz1.length);

    let dvodimenzioniNizIndex = Math.floor(Math.sqrt(niz1.length))
    console.log(dvodimenzioniNizIndex);

        // drugi niz - dvodimenzionalni
    let niz2 = [];
    while(niz1.length) niz2.push(niz1.splice(0, dvodimenzioniNizIndex));
    console.log(niz2);

        // funkcija za pravljenje dvodimenzionalnih nizova
    function napraviNiz(length) {
        var arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = napraviNiz.apply(this, args);
        }

        return arr;
    }

        // treci niz - dvodimenzionalni - izbacivanje viska iz niz2
    let niz3 = napraviNiz(dvodimenzioniNizIndex, dvodimenzioniNizIndex)
    for (let i = 0; i < dvodimenzioniNizIndex; i++) 
    {
        for (let j = 0; j < dvodimenzioniNizIndex; j++) 
        {
            niz3[i][j] = niz2[j][i]
        }
    }
    console.log(niz3);

        // cetvrti niz - vracanje u jednodimenzionalne nizove
    let niz4 = niz3.flat(1);
    console.log(niz4);

        // peti niz - pravljenje stringa
    let niz5 = niz4.join("");
    console.log(niz5);

        // resetovanje prvog niza
    niz1 = tbInput.split("");
    console.log(niz1);
    niz1.splice(0, Math.pow(dvodimenzioniNizIndex, 2))
    console.log(niz1);
    console.log(niz1.length);


    while (niz1.length > 3) 
    {
        dvodimenzioniNizIndex = Math.floor(Math.sqrt(niz1.length))
        console.log(dvodimenzioniNizIndex);
        niz2 = [];
        while(niz1.length) niz2.push(niz1.splice(0, dvodimenzioniNizIndex));
        console.log(niz2);
        niz3 = napraviNiz(dvodimenzioniNizIndex, dvodimenzioniNizIndex)
        for (let i = 0; i < dvodimenzioniNizIndex; i++) 
        {
            for (let j = 0; j < dvodimenzioniNizIndex; j++) 
            {
                niz3[i][j] = niz2[j][i]
            }
        }
        console.log(niz3);
        niz4 = niz3.flat(1);
        console.log(niz4);
        niz5 += niz4.join("");
        
        console.log(niz2);
        niz2.splice(0, niz3.length);
        console.log(niz2);
        niz2 = niz2.flat(1);
        niz2 = niz2.join("");
        console.log(niz2);

        console.log(niz1);
        console.log(niz1.length);
        niz1.splice(0, Math.pow(dvodimenzioniNizIndex, 2))
        console.log(niz1);
        console.log(niz1.length);
        
        if (niz2.length <= 3 && niz2.length > 0)
        {
            niz5 += niz2;
        }
        else
        {
            niz1 = niz2.split("");
        }
    }

    console.log(niz2[dvodimenzioniNizIndex]);
    if (niz2[dvodimenzioniNizIndex]) {
        let ostatak = [];
        for (let i = dvodimenzioniNizIndex, j = 0; i < niz2.length ; i++, j++) {
            ostatak[j] = niz2[i];
            console.log(ostatak);
        }
        console.log(ostatak.flat(1).join(""));
        niz5 += ostatak.flat(1).join("");
    }

    console.log(niz5);
    console.log(niz5.length);
    tbOutput.innerHTML = niz5

}


// Kvadratna šifra šifrovanje i dešifrovanje kraj
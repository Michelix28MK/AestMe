class stile {
    constructor(name, src, descrizione, componenti) {  //src=link immagine
    
        this.name = name;
        this.src = src;
        this.descrizione = descrizione;
        this.componenti = componenti;
    }
}






let Alt = new stile("Alt", "immagini/alt.jpg", "L'alt (da alternativo) è uno aesthetic che mostra un abbigliamento sui toni scuri o del nero che è reso particolare dai dettagli alternativi quali calze, sclada muscoli, catenelle, (etc.) e dalla sovrapposizione di diversi stili.",
    ["Calze a rete", "Maglia a maniche lunghe", "gonna corta"]);

let Artsy = new stile("Artsy","immagini/Artsy.jpg", "L'Artsy è un aesthetic che riprende temi artistici come maglie e jeans decorati a mano con pittura o ricami, uno stile semplice e leggero.",
    ["Mom jeans", "Vestiti personalizzati: ispirato alla natura", "Vestiti multicolore", "Scarpe Vans, Converse o vintage"]); //too check

let Boujee = new stile("Boujee", "immagini/classy.jpg", "Il Boujee è un aesthetic molto stravagante, chic, elegante e stiloso. É associato ad uno stile di vita altolocato, a comprare e indossare i vestiti o accessori degli ultimi trend.É caratterizzato da vestiti brillanti e da sera e gioielli sfarzosi.",
    ["Abiti da sera", "Abiti in velluto","Abiti brillanti", "Abiti lunghi con spacchi", "Orecchini lunghi o diamantati", "Tacchi medio-alti"]);

let CottageCore = new stile("CottageCore", "immagini/Cottagecore.jpg","Il Cottagecore è uno aestetic fashion che celebra e ricorda la vita rurale. Valorizza le capacità tradizionali e la nostalgica vita di campagna.",
    ["a", "b"]);

let DarkAcademia = new stile("DarkAcademia", "immagini/dark_Academia.jpg", "Il dark academia è uno aestetic che rappresenta uno stile accademico e scolastico con dei temi scuri ed autunnali come il nero ed il marrone.",
    ["a", "b"]);

let LightAcademia = new stile("LightAcademia", "immagini/light_academia.jpg", "Il dark academia è uno aestetic che rappresenta uno stile accademico e scolastico con dei temi chiari ed primaverili come il bianco o 'color panna' ed il marroncino.",
    ["a", "b"]);

let Indie = new stile("Indie", "immagini/indie.jpg", "L'alt (da alternativo - 'alternativ') è uno aestetic che mostra un abbigliamento sui toni scuri o del nero che è reso particolare dai dettagli alternativi quali calze, sclada muscoli, catenelle, (etc.) e dalla sovrapposizione di diversi stili.",
    ["a", "b"]);

let Skater = new stile("Skater", "immagini/skater.jpg", "skater, conosciuto anche come skatercore, è un aesthetic centrato sulla cultura dello skate, dove le persone indossano vestiti larghi e comodi con grafiche vintage o di musica elettronica, pop e hip-hop.",["Marchio Vans", "Baggy jeans", "Magliette larghe", "Scarpe a suola piatta", "Cappello da pescatore o da baseball"]); //too check

let Y2K = new stile("Y2K", "immagini/Y2K.jpeg", "Y2K è un aesthetich che era prevalente nella cultura popolare dagli anni dal 1995 al 2004,è una moda ritornata ed è caratterizzata da un distinto periodo stilistico, hardware design, molta musica hip-hop e pop, accessori luccicanti e il riutuilizzo delle vechie 'tecnologie'", ["minigonne: principalmente fatte in jeans si possono trovare anche in altri materiali.","Top: colorati e stravaganti con grafiche vintage.","Gioelli luccicanti","tute: colorate in velluto"]); //too check





let listaStili = [Y2K, Alt, Artsy, Boujee, CottageCore, DarkAcademia, LightAcademia, Indie, Skater];













function creaSezioni(stile, _posizione) {

    let parent = document.querySelector(_posizione);

    if (parent != null) {               

        let continer = document.createElement("article");
        continer.classList.add("aest_c");
        continer.id = stile.name;
        parent.appendChild(continer);

        let titolo = document.createElement("h3");
        continer.appendChild(titolo);

        let titoloText = document.createElement("span");
        titoloText.innerText = " " + stile.name;

        let immagine = document.createElement("img");
        immagine.src = stile.src;
        immagine.alt = "esempio " + stile.name;
        titolo.appendChild(titoloText);
        titolo.insertBefore(immagine, titoloText);


        let descrizione = document.createElement("p");
        descrizione.innerText = stile.descrizione;
        continer.appendChild(descrizione);

        let bottone = document.createElement("button");
        bottone.innerText = "Scopri di più..";
        bottone.setAttribute('onclick', 'yondu(' + stile.name+')');
        continer.appendChild(bottone);
        console.log(bottone.onclick);
    }
        
}

function creaSidebar(item) {

    let parent = document.querySelector("aside");

    if (parent != null) {
        
        let continer = document.createElement("ul");
        let listItem = document.createElement("li");
        parent.appendChild(continer);
        parent.appendChild(listItem);
        let linkList = document.createElement("a");
        
        linkList.innerText = item.name;
        listItem.appendChild(linkList);

        let chek = document.querySelector(".flex_list");

        if (chek != null) {
            linkList.href = "#" + item.name;
        } else {
            linkList.setAttribute('onclick', 'yondu(' + item.name + ')');
        }
    }
}

function evidenza(item) {

    let parent = document.getElementById("carosello");

    if (parent != null) {
        let continer = document.createElement("div");

        continer.style.backgroundImage = "url(" + item.src + ")";
        continer.classList.add("item");
        let titolo = document.createElement("h3");
        titolo.innerText = item.name;
        let descrizioane = document.createElement("p");
        descrizioane.innerText = item.descrizione;
        /*Crea carosello di 1 stili da mettere*/

        parent.appendChild(continer);
        continer.appendChild(titolo);
        continer.appendChild(descrizioane);
    }      
}

for (let item of listaStili) {
    /*
     * crea la lista degli stili in GridAestetic
     * e la side bar delle pagine che ne necessitano.
     * 
     * il ciclo non da errori anche se uno o tutti
     * gli elementi non sono presenti nella pagina
     * */

    creaSezioni(item, ".flex_list");
    creaSidebar(item);
}

for (i = 0; i < 4; i++) {
    /*
     * Crea il carosello scegliendo degli elementi a caso tra gli stili
     * presenti nella lista generale(qui sopra stante) in modo da mostrare
     * sempre degli stili differenti ad ogni accesso alla homepage
     * */
    let random = listaStili[Math.floor(Math.random() * listaStili.length)];
    evidenza(random);
}

function backword() {
    let luogo = document.getElementById("parente");
    luogo.innerHTML = "";
    let titolo = document.createElement("h1");
    let punto = document.createElement("div");
    punto.classList.add("flex_list");
    luogo.appendChild(titolo);
    luogo.appendChild(punto);

    for (let item of listaStili)
        creaSezioni(item, ".flex_list");

    let chek = document.querySelector("aside");
    chek.innerHTML = "";
    let titoloSide = document.createElement("h2");
    titoloSide.innerText = "Menù laterale";
    chek.appendChild(titoloSide);

    for (let item of listaStili)
        creaSidebar(item);
}

function yondu(item) {

    let main = document.getElementById("parente");
    main.innerHTML = "";
    
    let titolo = document.createElement("h1");
    titolo.innerText = item.name;

    let immagine = document.createElement("img");
    immagine.src = item.src;
    immagine.style.height = "400px";

    let sottoTitolo = document.createElement("h2");
    sottoTitolo.innerText = "Descrizione dello stile";

    let descrizione = document.createElement("p");
    descrizione.innerText = item.descrizione;

    let sottoTitolo2 = document.createElement("h2");
    sottoTitolo2.innerText = "Elementi caratteristici";
    let contenitoreLista = document.createElement("ul");

   for (let elemento of item.componenti) {
        let elementoLista = document.createElement("li");
        elementoLista.innerText = elemento;
        contenitoreLista.appendChild(elementoLista);
    }

    let bottoneRit = document.createElement("button");
    bottoneRit.innerText = "Ritorna alla lista";
    bottoneRit.setAttribute('onclick', 'backword()');
    
    let componenti = [titolo, immagine, sottoTitolo,
        descrizione, sottoTitolo2, contenitoreLista,
        bottoneRit];

    for (let i of componenti)
        main.appendChild(i);

    /*Le righe successive servono a cancellare la barra laterale e
     * riscriverla secondo il metodo utile a yondu() --> manda alla
     * scheda degli altri stili senza dover passare dalla lista completa*/
    let chek = document.querySelector("aside");
    chek.innerHTML = "";
    let titoloSide = document.createElement("h2");
    titoloSide.innerText = "Menù laterale";
    chek.appendChild(titoloSide);

    for (let item of listaStili)
        creaSidebar(item);
}
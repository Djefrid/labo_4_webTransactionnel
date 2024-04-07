var bd;

var requete = indexedDB.open("Publication", 1);

requete.onupgradeneeded = function (event) {
    var db = event.target.result;

    var options = {
        keyPath: "id",
        autoIncrement: true
    };

    var entrepot = db.createObjectStore("Publication", options);

    entrepot.createIndex("id", "id", { unique: true });
    entrepot.createIndex("Image", "Image", { unique: false });
    entrepot.createIndex("Titre", "Titre", { unique: false });
    entrepot.createIndex("Auteur", "Auteur", { unique: false });
    entrepot.createIndex("DateP", "DateP", { unique: false });
    entrepot.createIndex("Contenu", "Contenu", { unique: false });

    entrepot.transaction.oncomplete = function (event) {
        var trans = db.transaction(["Publication"], "readwrite");
        var store = trans.objectStore("Publication");
        store.add({
            Image: "images/paysage.jpg",
            Titre: "Les merveilles de la nature",
            Auteur: "John Doe",
            DateP: "2024-02-05",
            Contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec efficitur nulla. Donec imperdiet fringilla nibh sit amet fringilla. Duis vitae est non lorem placerat commodo."
        });
    };
}

requete.onerror = function (event) {
    console.log("Une erreur s'est produite lors de l'ouverture de la base de données.");
}

requete.onsuccess = function (event) {
    bd = event.target.result;
}

document.getElementById("envoyerPublication").addEventListener("click", function () {
    var trans = bd.transaction(["Publication"], "readwrite");
    var store = trans.objectStore("Publication");
    store.add({
        Image: document.getElementById("image").value,
        Titre: document.getElementById("titre").value,
        Auteur: document.getElementById("auteur").value,
        DateP: new Date().toISOString().slice(0, 10),
        Contenu: document.getElementById("contenu").value
    });
});


var db2

var requete2 = indexedDB.open("Commentaire", 1);

requete2.onupgradeneeded = function (event) {
    var db = event.target.result;
    var options = {
        keyPath: "id",
        autoIncrement: true
    };
    var entrepot = db.createObjectStore("Commentaire", options);
    entrepot.createIndex("id", "id", { unique: true });
    entrepot.createIndex("Publicationid", "Publicationid", { unique: false });
    entrepot.createIndex("DateC", "DateC", { unique: false });
    entrepot.createIndex("Contenu", "Contenu", { unique: false });

    entrepot.transaction.oncomplete = function (event) {
        var trans = db.transaction(["Commentaire"], "readwrite");
        var store = trans.objectStore("Commentaire");
        store.add({
            Publicationid: "1",
            DateC: "2024-02-06",
            Contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        });
    };
}

requete2.onerror = function (event) {
    console.log("Une erreur s'est produite lors de l'ouverture de la base de données.");
}

requete2.onsuccess = function (event) {
    db2 = event.target.result;
}

document.getElementById("envoyerCommentaire").addEventListener("click", function () {
    var trans = db2.transaction(["Commentaire"], "readwrite");
    var store = trans.objectStore("Commentaire");
    store.add({
        Publicationid: document.getElementById("publication").value,
        DateC: new Date().toISOString().slice(0, 10),
        Contenu: document.getElementById("commentaire").value
    });
});
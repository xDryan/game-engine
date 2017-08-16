var proprietesJS = new Array(3);
var tailleTextures = 128; // La taille des texutres du jeu
var nbLignes = 3; // Le nombre de lignes de la map
var nbColonnes = 3; // Le nombre de colonnes de la map
var adresseServeur = "http://localhost/game-engine/serveur"; // Adresse du dossier sur le serveur

// On va chercher les propriétés présentes dans le fichier json
ajaxGet(adresseServeur + '/proprietes.json', function (proprietesJSON) {
    proprietesJS = JSON.parse(proprietesJSON);
    tailleTextures = proprietesJS.tailleTextures;
    nbLignes = proprietesJS.nbLignes;
    nbColonnes = proprietesJS.nbColonnes;
});

var texturePath = 'textures/grass.png'; // Le chemin de la texture que l'on peut placer actuellement
var moteur = document.getElementById('moteur'); // Le div qui contient l'intégralité du moteur de jeu

// Permet d'afficher la fenêtre des propriétés
function ouvrirProprietes(e) {
    tailleTexturesElt.value = tailleTextures;
    nbLignesElt.value = nbLignes;
    nbColonnesElt.value = nbColonnes;
    moteur.appendChild(fenetreProprietesElt);

}

// Fonction appelée lorsque l'utilisateur souhaite sauvegarder les propriétés, elles sont placés dans le fichier proprietes.json
function sauvegarderProprietes(e) {
    proprietesJS.tailleTextures = tailleTexturesElt.value;
    proprietesJS.nbColonnes = nbColonnesElt.value;
    proprietesJS.nbLignes = nbLignesElt.value;
    var proprietesJSON = JSON.stringify(proprietesJS);
    ajaxPost(adresseServeur + '/save_proprietes.php', proprietesJSON, function () {
        window.location.reload();
    }, true);

    console.log('Modifications sauvegardées.');
}

// Fonction qui ferme la fenêtre des propriétés
function fermerProprietes(e) {
    moteur.removeChild(fenetreProprietesElt);
}

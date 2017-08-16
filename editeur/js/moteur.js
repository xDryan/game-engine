/*
        MENU
*/

var boutonEditeurMapElt = document.getElementById('editeurMap');
boutonEditeurMapElt.addEventListener('click', lancerEditeurMap);

var boutonProprietesElt = document.getElementById('proprietes');
boutonProprietesElt.addEventListener('click', ouvrirProprietes);

/* 
        FENETRE DES PROPRIETES
*/

var fenetreProprietesElt = document.getElementById('fenetreProprietes');

var tailleTexturesElt = document.getElementById('tailleTextures');
var nbLignesElt = document.getElementById('nbLignes');
var nbColonnesElt = document.getElementById('nbColonnes');

// Bouton qui permet de sauvegarder les propriétés
var boutonSauvegarderProprietesElt = document.getElementById('sauvegarderProprietes');
boutonSauvegarderProprietesElt.addEventListener('click', sauvegarderProprietes);

// Bouton qui permet de fermer la fenêtre des propriétés
var boutonFermerProprietesElt = document.getElementById('fermerProprietes');
boutonFermerProprietesElt.addEventListener('click', fermerProprietes);


// On suprrime la fenêtre qui pourra être affiché de nouveau quand il le faudra
moteur.removeChild(fenetreProprietesElt);


/* 
        FENETRE DE L'EDITEUR DE MAPS
*/
var fenetreEditeurMapElt = document.getElementById('fenetreEditeurMap');

var boutonSauvegardeElt = document.getElementById('boutonSauvegarde');
// On ajoute l'événement qui permet de sauvegarder une map grâce aux fichier save_map.php et save_map2.php
boutonSauvegardeElt.addEventListener('click', sauvegarderMap);

// Le bouton qui permet d'ouvrir une map déjà existante
var boutonOuvrirElt = document.getElementById('boutonOuvrir');
boutonOuvrirElt.addEventListener('click', ouvrirMap);

// L'input qui permettra d'entrer le nom de la map à ouvrir ou à sauvegarder
var nomMapElt = document.getElementById('nomMap');

// Bouton qui permet d'ajouter une texture
var boutonAjouterTextureElt = document.getElementById('boutonAjouterTexture');
boutonAjouterTextureElt.addEventListener('click', ouvrirFenetreAjouterTexture);

// Bouton qui permet de sauvegarder les textures actuelles dans le fichier textures.json du serveur
var boutonSauvegarderTexturesElt = document.getElementById('sauvegarderTextures');
boutonSauvegarderTexturesElt.addEventListener('click', sauvergarderTextures);

// Suppression de la fenêtre à l'affichage
moteur.removeChild(fenetreEditeurMapElt);

/*
        FENETRE D'AJOUT DE TEXTURE
*/
var fenetreAjouterTextureElt = document.getElementById('fenetreAjouterTexture');

// Bouton qui permet de valider l'ajout d'une texture
var validerTextureElt = document.getElementById('validerTexture');
validerTextureElt.addEventListener('click', ajouterTexture);

// Bouton qui permet de fermer la fenêtre d'ajout de texture
var fermerTextureElt = document.getElementById('fermerTexture');
fermerTextureElt.addEventListener('click', fermerTexture);

var nomTextureElt = document.getElementById('nomTexture');
var cheminTextureElt = document.getElementById('cheminTexture');

moteur.removeChild(fenetreAjouterTextureElt);

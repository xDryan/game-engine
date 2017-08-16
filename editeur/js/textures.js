var listeTextures = []; // Tableau qui contiendra toutes les textures des maps
// Le div qui contiendra l'ensemble des tiles
var tileSetElt = document.getElementById('tileSet');

function Texture(name, path) { // Constructeur de texture
    this.name = name;
    this.path = path;
    listeTextures.push(this); // On ajoute la texture à la liste
}

/* 
    MODULE DE TEXTURES POUR L'EDITEUR DE MAPS
*/

// On ajoute la liste des textures présentes sur le serveur
ajaxGet(adresseServeur + '/textures.json', function (texturesJSON) {
    var texturesJS = JSON.parse(texturesJSON);
    //console.log(texturesJS.length);
    for (var i = 0; i < texturesJS.length; i++) {
        listeTextures.push(texturesJS[i]);
        var texture = document.createElement('img');
        texture.src = listeTextures[i].path;
        texture.style.position = 'absolute';
        texture.style.width = '64px';
        texture.style.height = '64px';
        texture.style.top = (50 + 64 * i) + 'px';
        texture.style.right = 5 + 'px';
        texture.addEventListener('contextmenu', function (e) { // Annule le clic droit
            e.preventDefault();
        });
        texture.addEventListener('mousedown', function (e) { // Quand on clique sur une texture, elle devient celle qu'on peut désormais placer
            texturePath = e.target.src;
        });

        tileSetElt.appendChild(texture);
    }
});

// Ajoute la texture envoyée par le formulaire
function ajouterTexture(e) {
    var newTexture = new Texture(nomTextureElt.value, cheminTextureElt.value);
    var texture = document.createElement('img');
    var i = listeTextures.length - 1;
    texture.src = listeTextures[i].path;
    texture.style.width = '64px';
    texture.style.height = '64px';
    texture.style.position = 'absolute';
    texture.style.top = (50 + 64 * i) + 'px';
    texture.style.right = 5 + 'px';
    texture.addEventListener('contextmenu', function (e) { // Annule le clic droit
        e.preventDefault();
    });
    texture.addEventListener('mousedown', function (e) { // Quand on clique sur une texture, elle devient celle qu'on peut désormais placer
        texturePath = e.target.src;
    });

    tileSetElt.appendChild(texture);
}

// Ouvre la fenêtre d'ajout de texture
function ouvrirFenetreAjouterTexture(e) {
    moteur.appendChild(fenetreAjouterTextureElt);
}

// Ferme la fenêtre d'ajout de texture
function fermerTexture(e) {
    moteur.removeChild(fenetreAjouterTextureElt);
}

// Sauvegarde les textures présentes dans la liste sur le serveur
function sauvergarderTextures(e) {
    ajaxPost(adresseServeur + '/save_textures.php', JSON.stringify(listeTextures), function () {
        console.log('Textures sauvegardées.');
    }, true);
}

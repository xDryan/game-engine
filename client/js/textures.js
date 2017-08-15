var listeTextures = []; // Tableau qui contiendra toutes les textures des maps

function Texture(name, path) { // Constructeur de texture
    this.name = name;
    this.path = path;
    listeTextures.push(this); // On ajoute la texture à la liste
}

// Création de toutes les textures 
var grass = new Texture('grass', 'textures/grass.png');
var rock = new Texture('rock', 'textures/rock.png');
var sand = new Texture('sand', 'textures/sand.png');
var water = new Texture('water', 'textures/water.png');



/* 
    MODULE DE TEXTURES POUR L'EDITEUR DE MAPS
*/

// On récupére l'emplacement textures sur le document
var textures = document.getElementById('textures');

// On ajoute sur la page la liste des textures à l'éditeur de maps
for (var i = 0; i < listeTextures.length; i++) {
    var texture = document.createElement('img');
    texture.src = listeTextures[i].path;
    texture.style.position = 'absolute';
    texture.style.top = tailleTextures * i + 'px';
    texture.style.right = 0;
    texture.addEventListener('contextmenu', function (e) { // Annule le clic droit
        e.preventDefault();
    });
    texture.addEventListener('mousedown', function (e) { // Quand on clique sur une texture, elle devient celle qu'on peut désormais placer
        texturePath = e.target.src;
    });

    textures.appendChild(texture);
}

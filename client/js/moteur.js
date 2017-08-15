//var listeTextures = []; // Tableau qui contiendra toutes les textures des maps

//var nbLignes = 5; // Le nombre de lignes de la map
//var nbColonnes = 7; // Le nombre de colonnes de la map
//var texturePath = 'textures/grass.png'; // Le chemin de la texture que l'on peut placer actuellement

/* function Texture(name, path) { // Constructeur de texture
    this.name = name;
    this.path = path;
    listeTextures.push(this); // On ajoute la texture à la liste
} */

/* // Création de toutes les textures 
var grass = new Texture('grass', 'textures/grass.png');
var rock = new Texture('rock', 'textures/rock.png');
var sand = new Texture('sand', 'textures/sand.png');
var water = new Texture('water', 'textures/water.png'); */
/*
// On récupére l'emplacement textures sur le document
var textures = document.getElementById('textures');

// On ajoute sur la page la liste des textures à l'éditeur de maps
for (var i = 0; i < listeTextures.length; i++) {
    var texture = document.createElement('img');
    texture.src = listeTextures[i].path;
    texture.style.position = 'absolute';
    texture.style.top = 128 * i + 'px';
    texture.style.right = 0;
    texture.addEventListener('contextmenu', function (e) { // Annule le clic droit
        e.preventDefault();
    });
    texture.addEventListener('mousedown', function (e) { // Quand on clique sur une texture, elle devient celle qu'on peut désormais placer
        texturePath = e.target.src;
    });

    textures.appendChild(texture);
} */

/*
// On crée la map avec le bon nombre de cases
for (var i = 0; i < nbLignes; i++) {
    for (var j = 0; j < nbColonnes; j++) {
        var image = document.createElement('img');
        image.src = 'textures/empty.png'; // La map sera pleine de vide au début
        image.style.position = 'absolute'
        image.style.top = 128 * i + 'px';
        image.style.left = 128 * j + 'px';

        image.addEventListener('contextmenu', function (e) { // Annule le clic droit
            e.preventDefault();
        });

        image.addEventListener('mousedown', function (e) { // Remplacer la texture ou la copier
            console.log(e.button);
            if (e.button === 2) {
                texturePath = e.target.src;
            } else {
                e.target.src = texturePath;
            }

        });

        map.appendChild(image);
    }
} */

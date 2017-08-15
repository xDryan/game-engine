var id = 0; // Utile pour l'affichage d'une map sauvegardée
var listeTiles = []; // Contient la liste des tiles affichés et toutes leurs propriétes

// Constructeur des tiles de la map
function Tile(ligne, colonne, id, path) {
    this.ligne = ligne;
    this.colonne = colonne;
    this.path = path;
    this.texture = document.createElement('img');
    this.texture.style.width = tailleTextures + 'px';
    this.texture.style.height = tailleTextures + 'px';
    this.texture.id = id;
    this.texture.src = path; // La map sera pleine de vide au début
    this.texture.style.position = 'absolute'
    this.texture.style.top = (100 + tailleTextures * this.ligne) + 'px';
    this.texture.style.left = (10 + tailleTextures * this.colonne) + 'px';

    this.texture.addEventListener('contextmenu', function (e) { // Annule le clic droit
        e.preventDefault();
    });

    this.texture.addEventListener('mousedown', function (e) { // Remplacer la texture ou la copier
        if (e.button === 2) {
            texturePath = e.target.src;
        } else {
            e.target.src = texturePath;
            listeTiles[e.target.id].path = texturePath;
        }

    });

    fenetreEditeurMapElt.appendChild(this.texture);
}

// Fonction appelée par le moteur lorsque l'utilisateur souhaite ouvrir l'éditeur de maps, il affiche ce dernier
function lancerEditeurMap(e) {
    // Affichage d'une map vide
    for (var ligne = 0; ligne < nbLignes; ligne++) { // On crée la map
        for (var colonne = 0; colonne < nbColonnes; colonne++) {
            listeTiles.push(new Tile(ligne, colonne, id, 'textures/empty.png'));
            id++
        }
    }

    // Affichage de l'interface approprié
    moteur.appendChild(fenetreEditeurMapElt);
}

// Fonction appelée lorsque l'utilisateur souhaite sauvegardée la map actuellement dessinée
function sauvegarderMap(e) {
    var dataNom = nomMapElt.value;
    var data = JSON.stringify(listeTiles);
    ajaxPost(adresseServeur + '/save_map.php',
        data,
        function () {
            ajaxPost(adresseServeur + '/save_map2.php', dataNom, function () {
                console.log('Sauvegarde de la map : ' + nomMapElt.value);
            }, true);
        }, true);
}

// Fonction appelée lorsque l'utilisateur souhaite ouvrir une map déjà existante
function ouvrirMap(e) {
    ajaxGet(adresseServeur + '/maps/' + nomMapElt.value + '.json', function (mapJSON) {
        console.log('Ouverture de la map : ' + nomMapElt.value);
        var mapJS = JSON.parse(mapJSON);
        for (var idCase = 0; idCase < mapJS.length; idCase++) {
            listeTiles[idCase] = new Tile(mapJS[idCase].ligne, mapJS[idCase].colonne, idCase, mapJS[idCase].path);
        }
    });
}

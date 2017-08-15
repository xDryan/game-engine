var listeCases = new Array(nbLignes * nbColonnes - 1);
var id = 0;

function Case(ligne, colonne, id, path) { // Constructeur des cases de la map
    this.ligne = ligne;
    this.colonne = colonne;
    this.path = path;
    this.texture = document.createElement('img');
    this.texture.id = id;
    this.texture.src = path; // La map sera pleine de vide au début
    this.texture.style.position = 'absolute'
    this.texture.style.top = tailleTextures * this.ligne + 'px';
    this.texture.style.left = tailleTextures * this.colonne + 'px';

    this.texture.addEventListener('contextmenu', function (e) { // Annule le clic droit
        e.preventDefault();
    });

    this.texture.addEventListener('mousedown', function (e) { // Remplacer la texture ou la copier
        if (e.button === 2) {
            texturePath = e.target.src;
        } else {
            e.target.src = texturePath;
            listeCases[e.target.id].path = texturePath;
        }

    });

    map.appendChild(this.texture);
}

for (var ligne = 0; ligne < nbLignes; ligne++) { // On crée la map
    for (var colonne = 0; colonne < nbColonnes; colonne++) {
        listeCases[id] = new Case(ligne, colonne, id, 'textures/empty.png');
        id++
    }
}

// Création du bouton de sauvegarde
var boutonSauvegarde = document.createElement('button');

boutonSauvegarde.style.position = 'absolute';
boutonSauvegarde.style.top = '100px';
boutonSauvegarde.style.left = '900px';
boutonSauvegarde.textContent = 'Sauvegarder';

boutonSauvegarde.addEventListener('click', function (e) {
    var dataNom = nomMap.value;
    var data = JSON.stringify(listeCases);
    ajaxPost('http://localhost/moteur/save_map.php',
        data,
        function () {
            ajaxPost('http://localhost/moteur/save_map2.php', dataNom, function () {
                console.log('Map envoyé !');
            }, true);
        }, true);
});

document.getElementById('map').appendChild(boutonSauvegarde);

// Input qui contient le nom de la map à ouvrir
var nomMap = document.createElement('input');
nomMap.type = 'text';
nomMap.name = 'nomMap';
nomMap.value = 'map';
nomMap.style.position = 'absolute';
nomMap.style.top = '50px';
nomMap.style.left = '900px';

document.getElementById('map').appendChild(nomMap);

// Création du bouton d'ouverture de la map
var boutonOuvrir = document.createElement('button');

boutonOuvrir.style.position = 'absolute';
boutonOuvrir.style.top = '100px';
boutonOuvrir.style.left = '1000px';
boutonOuvrir.textContent = 'Ouvrir map';

boutonOuvrir.addEventListener('click', function (e) {
    ajaxGet('http://localhost/moteur/maps/map.json', function (mapJSON) {
        console.log(nomMap.value);
        var mapJS = JSON.parse(mapJSON);
        for (var idCase = 0; idCase < mapJS.length; idCase++) {
            listeCases[idCase] = new Case(mapJS[idCase].ligne, mapJS[idCase].colonne, idCase, mapJS[idCase].path);
        }
    });
});

document.getElementById('map').appendChild(boutonOuvrir);

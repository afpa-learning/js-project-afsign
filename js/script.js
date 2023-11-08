document.addEventListener("DOMContentLoaded", () => {

    // récupération de la session à partir du fichier "mock-data.js"
    let session = trainingSession;
    // récupération de tous les stagiaires
    let stagiaires = session.stagiaires;

    console.log("Stagiaires :");
    // boucle sur tous les stagaires
    for (let i = 0; i < stagiaires.length; i++) {
        console.log(stagiaires[i]);

        // ajouter ICI le code pour ajouter les div à la page
    }
});

/**
 * Compte les stagiaires absents.
 * 
 * @param {*} stagiaires un tableau de stagiaires
 * @returns le nombre de stagiaires absents
 */
function countAbsents(stagiaires) {
    // logique de comptage à ajouter ici

    return -1;
}

/**
 * Comptes
 * @param {*} stagiaires
 * @returns le nombre de stagiaires au status "NOT_SPECIFIED"
 */
function countNotSpecifiedStatus(stagiaires) {

}

/**
 * Retourne 
 * @param {*} stagaires 
 */
function findByFirstAndLastName(stagaires) {

}

// Exemple de code de création de div (à adatper) :
// // création de la "div"
// let nouvelleDiv = document.createElement('div');
// // ajout d'un id
// div.id = 'mettre ici un id';
// // ajout du contenu html de la div
// div.innerHTML = 'mettre ici le contenu html de la div. Tout est possible !';
// // ajout d'une ou plusieurs classes
// div.className = 'nom-classe-1 nom-classe-2 ...';

// // ajout de la div avec la méthode "appendChild" (pas forcément sur le "body" mais là où vous le souhaitez)
// document.body.appendChild(nouvelleDiv);

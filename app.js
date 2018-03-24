function nombreEnLettres(number) {
    // Fonction qui convertit un nombre en lettres
    if (isNaN(number) || number < 0 || number > 999) {
        return "Veuillez entrer un nombre entre 0 et 999";
    }

    /* On crée deux tableaux, un pour les unités et un pour les dizaines */
    var unitesEnLettres = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],
        dizainesEnLettres = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

    /* On calcule le nombre d'unités, de dizaines et de centaines à l'aide du modulo */
    var unites = number % 10,
        dizaines = (number % 100 - unites) / 10,
        centaines = (number % 1000 - number % 100) / 100;

    /* On crée les trois variables qui contiendront les unités, les dizaines et les centaines en toutes lettres */

    var unitesLettres, dizainesLettres, centainesLettres;

    if (number === 0) {
        return "zéro";
    } else {
        // Traitement des unités
        unitesLettres = (unites === 1 && dizaines > 0 && dizaines !== 8 ? "et-" : "") + unitesEnLettres[unites];


        // Traitement des dizaines
        if (dizaines === 1 && unites > 0) {
            dizainesLettres = unitesEnLettres[10 + unites];
            unitesLettres = "";
        } else if (dizaines === 7 || dizaines === 9) {
            dizainesLettres = dizainesEnLettres[dizaines] + '-' + (dizaines === 7 && unites === 1 ? 'et-' : '') + unitesEnLettres[10 + unites];
            unitesLettres = "";
        } else {
            dizainesLettres = dizainesEnLettres[dizaines];
        }

        dizainesLettres += (unites === 0 && dizaines === 8 ? "s" : "");

        // Traitement des centaines
        centainesLettres = (centaines > 1 ? unitesEnLettres[centaines] + "-" : "") + (centaines > 0 ? "cent" : "") + (centaines > 1 && dizaines == 0 && unites == 0 ? "s" : "");

        // Retour du total
        return centainesLettres + (centainesLettres && dizainesLettres ? "-" : "") + dizainesLettres + (centainesLettres && unitesLettres || dizainesLettres && unitesLettres ? "-" : "") + unitesLettres;
    }
}

var saisieUtilisateur; // Saisie entrée par l'utilisateur

while (saisieUtilisateur = prompt("Indiquez un nombre entre 0 et 999")) {

    /* On "parse" en base 10 la chaîne de caractères de l'utilisateur pour l'envoyer ensuite à notre fonction de conversion*/

    alert(nombreEnLettres(parseInt(saisieUtilisateur, 10)));
}

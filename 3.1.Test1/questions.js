let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let conact = texte1 + texte2
    return conact;
}
let afficherCar5 = (texte) => {
    let aff5 = texte.substr(4, 1)
    return aff5;
}
let afficher9Car = (texte) => {
    let aff9 = texte.substr(0, 9)
    return aff9
}
let majusculeString = (texte) => {
    let maj = texte.toUpperCase()
    return maj;

}
let minusculeString = (texte) => {
    let min = texte.toLowerCase()
    return min

}
let SupprEspaceString = (texte) => {
    let supp = texte.trim();
    return supp
}
let IsString = (texte) => {
    let typ = texte.includes(texte)
    return typ


}

let AfficherExtensionString = (texte) => {
    let ext = texte.split('.').pop()
    return ext

}
let NombreEspaceString = (texte) => {
    nbr = texte.split(' ').length - 1
    return nbr

}
let InverseString = (texte) => {
    let rev = texte.split("").reverse().join("")
    return rev
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {
    let pws = Math.pow(x, y)
    return pws

}
let valeurAbsolue = (nombre) => {
    let abs = Math.abs(nombre)
    return abs

}
let valeurAbsolueArray = (array) => {
    return array.map(absA => Math.abs(absA))

}
let sufaceCercle = (rayon) => {
    return Math.round(Math.PI * (rayon * rayon))

}
let hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac)
}
let calculIMC = (poids, taille) => {
    let IMC = poids / (taille * taille)
    return Math.round(IMC * 100) / 100

}
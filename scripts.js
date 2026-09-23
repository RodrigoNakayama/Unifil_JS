// let idade = prompt("Quantos anos tem brochacho")
// let ageClass = ""
// let name = "George W. Bush"
// let placeOfBirth = "USA, Georgia"
// let address = "Six feet under"
// let idadeEmDias = idade * 365

// console.log(`Tu tem ${idade} anos, isso em dias é igual a ${idadeEmDias}(sem contar anos bissexto)`)

// console.log(`Called ${name}, born in ${placeOfBirth}, I'm ${idade} or in days ${idadeEmDias}. I currently am ${address}`)

// =================================== ^^ Apresentação ruim ^^ ==================================================

// if (idade <= 12 ) {
//     ageClass = "Pré-Adolescente"
// } else if (idade <= 18) {
//     ageClass = "Adolescente"
// } else if (idade <= 28) {
//     ageClass = "Jovem Adulto"
// } else if (idade <= 43) {
//     ageClass = "Adulto"
// } else if (idade <= 58) {
//     ageClass = "Adulto Sênior"
// } else if (idade <= 99){
//     ageClass = "Terceira Idade 💀"
// } else {
//     ageClass = "Morto"
// }

// console.log(ageClass)

// ====================================== ^^ classificador de idade ^^ ===========================================

let dia = "Mon"
let diaTraduzido = ""

switch(dia) {
    case "Mon":
        diaTraduzido = "Segunda"
        break
    case "Tue":
        diaTraduzido = "Terça"
        break
    case "Wed":
        diaTraduzido = "Quarta"
        break
    case "Thu":
        diaTraduzido = "Quinta"
        break
    case "Fri":
        diaTraduzido = "Sexta"
        break
    case "Sat":
        diaTraduzido = "Sábado"
        break
    case "Sun":
        diaTraduzido = "Domingo"
        break
}

console.log(dia)
console.log(diaTraduzido)

// ======================================= ^^ Switch ^^ ============================================================
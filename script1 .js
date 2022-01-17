let name = "poze do rodo"
let age = "23"
const birthdayMonth = "janeiro"
const imHuman = true

if (age > 18) {
    console.log('Sua idade é maior que 18 anos')

}

if (age > 18 && imHuman) {
    console.log('Você atingiu a maior idade e é humano.')
}

if (birthdayMonth == 'janeiro' || birthdayMonth == 'dezembro') {
    console.log('seu aniversário é em: ' + birthdayMonth)
}
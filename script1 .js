let name = "poze do rodo"
let age = "23"
const birthdayMonth = "janeiro"
const imHuman = true

if (age >= 18) {
    console.log('Sua idade é maior que 18 anos')
} else {
    console.log('Sua idade é menor que 18 anos')
}
if (age >= 18 && imHuman) {
    console.log('Você atingiu a maior idade e é humano.')
} else {
    console.log('Você não possui a maior idade e não é humano.')
}
if (birthdayMonth == 'janeiro' || birthdayMonth == 'dezembro') {
    console.log('seu aniversário é em: ' + birthdayMonth)
} else {
    console.log('Seu aniversário é em:')
}
var diasDaSemana = [
    "Sunday",
    "Monday", 
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

var data = new Date('Juny 08, 2024 19:20:00')
console.log(diasDaSemana[diaDaSemana(data)])

function diaDaSemana(data) {
    return data.getDay()
}
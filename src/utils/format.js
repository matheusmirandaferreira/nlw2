const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação fisíca",
    "Fisíca",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado"
]

function getSubject(subject) {
    const arrayPosition = +subject - 1
    return subjects[arrayPosition]
}

function convertHoursToMinute(time) {
    const [hour, minutes] = time.split(':')
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinute
}
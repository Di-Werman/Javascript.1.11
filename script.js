var carName = 'Ford'
var carYear = 2018
var personYear = 1990

function calculateAge (year) {
    var currentYear = 2023
    var result = currentYear - year
    return result
}

function checkAndLogAge (year)  {
    if (calculateAge(year) < 10) {
        console.log('Возраст меньше 10 лет')
    } else {
        console.log('Возраст больше 10 лет')
    }
}

checkAndLogAge(carYear)
checkAndLogAge(personYear)


// if (calculateAge(carYear) < 10) {
//      console.log('Возраст меньше 10 лет')
//  } else {
//      console.log('Возраст больше 10 лет')
//  }

//   if (calculateAge(personYear) < 10) {
//      console.log('Возраст меньше 10 лет')
//  } else {
//      console.log('Возраст больше 10 лет')
//  }


// if ((2023 - carYear) < 10) {
//     console.log('Возраст меньше 10 лет')
// } else {
//     console.log('Возраст больше 10 лет')
// }

// if ((2023 - personYear) < 10) {
//     console.log('Возраст меньше 10 лет')
// } else {
//     console.log('Возраст больше 10 лет')
// } 
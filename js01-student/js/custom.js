let num = 6 + 4
let vcs = "labas"
let relationship = (vcs == num)

console.log(`${num}, ${vcs}, ${typeof(vcs)}, ${relationship}`)
console.log(`skaicius : ${num}`)

let vardas = "jonas"
let pavarde = "jonaitis"
let asmuo = `${vardas} ${ pavarde}`
console.log(asmuo)

let tekstas = "pirmas "

console.log(tekstas.length)
console.log(tekstas.toLocaleUpperCase())
console.log(tekstas.charAt(1))
console.log(tekstas.indexOf("m"))
tekstas = "cia gali buti jusu reklama"
console.log(tekstas.replace("gali buti", " yra "))
console.log(tekstas.toLocaleUpperCase())
console.log(tekstas.substring(4, 14))
console.log(tekstas.substring(14))
console.log(tekstas.substr(4, 9))

let x = 6.34
console.log(Math.round(x))
console.log(Math.ceil(x))
console.log(Math.floor(x))

let y = 5.8
let z = 9
console.log(Math.max(x, y, z))
console.log(Math.min(x, y, z))

//let i = Math.round(Math.random()* 30)
let i = Math.round(Math.random() * 50)
console.log(i)

// //  Math.random() * (max - min + 1 ) + min
// //  Sugeneruokite atsitiktini skaiciu nuo 10 iki 50 

// let a = Math.floor(Math.random() * (50 - 10 + 1) + 10)
// console.log(a)

// let num1 = 5
// let num2 = "5"

// if (num1 !== num2) {
//     console.log("Lygu")
// } else {
//     console.log("nelygu")
// }

let projektoBalas = 9

switch (projektoBalas) {
    case 10:
        console.log(`tobulas balas`)
        break
    case 9:
        console.log(`Labai gerai`)
        break

    case 8:
        console.log(`Geras darbas`)
        break
    default:
        console.log(`prastokai`)
}

let firstName = "Adomas"
let lastname = "Gan"
let gimMetai = 1984
let year = new Date().getFullYear()
console.log(`As esu ${firstName}${lastname}. Man yra ${year - gimMetai} metai.`)


let num11 = 5
let num22 = "5"

if (mum11 = num22) {
    console.log("Lygu")
} else {
    console.log("nelygu")
}

let numeris = 1
while (numeris <= 10) {
    console.log(numeris)
    numeris++
}

for (let i = 1; i <= 10; i++)
    console.log(i)

// 1,2,3,4,5 - kokia ju suma ?
let sum = 0
for (let i = 0; i <= 5; i++) {
    sum = sum + i
}
console.log(sum)

let skaiciai = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let sum1 = 0
for (let i = 0; i < skaiciai.length; i++) {
    sum1 += skaiciai[i]
}
console.log(sum1)

let number = 1
let niceNumber = 10
let bigNumber = 15
while (number < niceNumber) {
    console.log(`Skaiciai ${number} yra mazesni uz 10`)
    number++
}

for (number; number <= bigNumber; number++) {
    if (number == niceNumber) {
        console.log(`skaiciai ${number} yra mazesnis 10`)
    } 
    else {
        console.log(`Skaiciai ${number} yra didesni uz 10`)
    }
}


// alert("demesio1 jusu koompiuterije virusas");

// confirm ( " ar tikrai norite uzdaryti si puslpapi ");

// prompt ("koks tavo vardas")

// let turimVarda = false


// while (turimVarda == false) {
//     let userVardas = prompt("koks tavo vardas ")
//     if (userVardas) {
//         if (confirm(`Ar tikrai tavo vardas ${userVardas}?`)) {
//             alert(`labas, ${userVardas}`)
//             turimVarda = true
//         } else  {
//             alert("bandyk dar karrta .")
//         } 
//     }
//     else {
//         alert("Bandyk dar kart.")}

// }

// let studentai = ["lukas", " kestutis", "silvija", "laurynas", "ursule"]
// console.log(studentai)
// console.log(studentai[4])
// studentai[4] = " lukas"
// console.log(studentai[4])
// console.log(studentai.length)

// for (let i = 0; i < studentai.leng; i++) {
//     console.log(studentai[i])
// }

// studentai.pop()
// console.log(studentai)

// studentai.push("arturas")
// console.log(studentai)
// let pirmasMasyvas = ["sesi", 5, "zuvis", " trylika"]
// let antrasMasyvas = ["Raudonas", "Melynas", " geltonas", "zalias"]


// let masyvuMasyvas = [pirmasMasyvas, antrasMasyvas]

// console.log(masyvuMasyvas)
// console.log(masyvuMasyvas[0][0])










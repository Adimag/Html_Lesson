/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/
// let s = Math.round(Math.random() * 50)
// console.log(s)


/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

// let firstName = "Adomas"
// let lastname = "Gan"
// let gimMetai = 1984
// let year = new Date().getFullYear()
// console.log (`As esu ${firstName}${lastname}. Man yra ${year - gimMetai} metai.`)


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

// let n1 = Math.random() * 4;
// let n2 = Math.random() * 4;

// let larger1 = Math.max(n1, n2);
// let smaller1 = Math.min(n1, n2);

// let result = larger1 / smaller1;

// console.log(result.toFixed(2));
// console.log(Math.ceil(2))




/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

// let  w = Math.round(Math.random() * 25)
// let  c = Math.round(Math.random() * 25)
// let  s = Math.round(Math.random() * 25)
// console.log(`skaicia: ${w} ${c} ${s}`)

// let largest = Math.max( w,c,s)
// let smaller = Math.min( w,c,s)
// let middleNum


// if ( w !=  largest &&  w !=  smaller ){
//     middleNum = w
// }else if (c !=  largest &&  c !=  smaller){
//     middleNum = c
// }
// else if (s !=  largest &&  s !=  smaller){
//     middleNum = s
// } else {
//     middleNum = 'undertemined as 2 or more number were equal'
// }

// console.log(`The middle number is ${middleNum}`)





/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/



// // Generate random side lengths between 1 and 10
// const kr1 = Math.floor(Math.random() * 10) + 1;
// const kr2 = Math.floor(Math.random() * 10) + 1;
// const kr3 = Math.floor(Math.random() * 10) + 1;

// // Function to check if a triangle can be formed
// function canFormTriangle(side1, side2, side3) {
//   if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Check if a triangle can be formed
// if (canFormTriangle(kr1, kr2, kr3)) {
//   console.log("A triangle can be formed with side lengths:", kr1, kr2, kr3);
// } else {
//   console.log("A triangle cannot be formed with side lengths:", kr1, kr2, kr3);
// }





/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let kr1 = Math.floor(Math.random() * 3)
let kr2 = Math.floor(Math.random() * 3)
let kr3 = Math.floor(Math.random() * 3)
let kr4 = Math.floor(Math.random() * 3)
console.log(kr1, kr2, kr3, kr4)

let nuliai = 0
let vienetai = 0
let dvejetai = 0

if (kr1 === 0) {
    nuliai++;
} else if (kr1 === 1) {
    vienetai++;
} else if (kr1 === 2) {
    dvejetai++;
}

if (kr2 === 0) {
    nuliai++;
} else if (kr2 === 1) {
    vienetai++;
} else if (kr2 === 2) {
    dvejetai++;
}

if (kr3 === 0) {
    nuliai++;
} else if (kr3 === 1) {
    vienetai++;
} else if (kr3 === 2) {
    dvejetai++;
}

if (kr4 === 0) {
    nuliai++;
} else if (kr4 === 1) {
    vienetai++;
} else if (kr4 === 2) {
    dvejetai++;
}


console.log('Nulių kiekis:', nuliai);
console.log('Vienetų kiekis:', vienetai);
console.log('Dvejetų kiekis:', dvejetai);


/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/ // kodel spausdina iki +10 o nne iki 20


var skaicius1 = Math.random() * 21 - 10;
var skaicius2 = Math.random() * 21 - 10;
var skaicius3 = Math.random() * 21 - 10;
console.log(skaicius1, skaicius2, skaicius3)
if (skaicius1 < 0) {
    console.log("[" + skaicius1 + "]");
} else if (skaicius1 === 0) {
    console.log("(" + skaicius1 + ")");
} else {
    console.log("{" + skaicius1 + "}");
}

if (skaicius2 < 0) {
    console.log("[" + skaicius2 + "]");
} else if (skaicius2 === 0) {
    console.log("(" + skaicius2 + ")");
} else {
    console.log("{" + skaicius2 + "}");
}

if (skaicius3 < 0) {
    console.log("[" + skaicius3 + "]");
} else if (skaicius3 === 0) {
    console.log("(" + skaicius3 + ")");
} else {
    console.log("{" + skaicius3 + "}");
}



/* 07.
javascript metodas. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
//  Math.random() * (max - min + 1 ) + min
// //  Sugeneruokite atsitiktini skaiciu nuo 10 iki 50 

let zvakiuKiekis = Math.floor(Math.random() * (3000 - 5 + 1) + 5)
console.log(zvakiuKiekis)

let zvakiuKaina = zvakiuKiekis * 1
let nuolaida = 0

if (zvakiuKiekis > 1000 && zvakiuKiekis <= 2000) {
    zvakiuKaina = zvakiuKiekis
    nuolaida = zvakiuKaina * 0.03
} else if (zvakiuKiekis > 2000) {
    zvakiuKaina = zvakiuKiekis
    nuolaida = zvakiuKaina * 0.04
}

let galutineZvakiuKaina = zvakiuKaina - nuolaida

console.log(`perkamas kiekis ${zvakiuKiekis}  zvakes`)
console.log(`kaina galutine su nuolaida: ${galutineZvakiuKaina}  eur`)

/* 08.
JavaScript metodas. Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
var skaicius1 = Math.floor(Math.random() * 101);
var skaicius2 = Math.floor(Math.random() * 101);
var skaicius3 = Math.floor(Math.random() * 101);

// Apskaičiuojame vidurkį
var vidurkis = (skaicius1 + skaicius2 + skaicius3) / 3;

// Patikriname, ar reikšmė mažesnė nei 10 arba didesnė nei 90 ir atmetame ją
if (skaicius1 < 10 || skaicius1 > 90) {
    skaicius1 = 0;
}
if (skaicius2 < 10 || skaicius2 > 90) {
    skaicius2 = 0;
}
if (skaicius3 < 10 || skaicius3 > 90) {
    skaicius3 = 0;
}

// Apskaičiuojame vidurkį be atmestų reikšmių
var vidurkisBeAtmetamu = (skaicius1 + skaicius2 + skaicius3) / 3;

// Atspausdiname abu vidurkius (apvalintus iki sveiko skaičiaus)
console.log(Math.round(vidurkis));
console.log(Math.round(vidurkisBeAtmetamu));


/* 09.
JavaScript metodas. Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateClock() {
    // Padidiname sekundes
    seconds++;
}
// Jei pasiekėme 60 sekundžių, padidiname minutes ir nustatome sekundes iš naujo į 0
if (seconds >= 60) {
    minutes++;
    seconds = 0;
}

// Jei pasiekėme 60 minutes, padidiname valandas ir nustatome minutes iš naujo į 0
if (minutes >= 60) {
    hours++;
    minutes = 0;
}

// Atvaizduojame laikrodžio rodmenis
console.log("Laikas: " + hours + ":" + minutes + ":" + seconds);

// Paleidžiame funkciją kas sekundę
setInterval(updateClock, 1000);

// Sugeneruojame atsitiktinį skaičių nuo 0 iki 300
let additionalSeconds = Math.floor(Math.random() * 301);


// Pridedame papildomas sekundes
seconds += additionalSeconds;

// Atvaizduojame laikrodį prieš ir po papildomų sekundžių pridėjimo

console.log("Laikas prieš pridėjimą: " + hours + ":" + minutes + ":" + (seconds - additionalSeconds));
console.log("Pridėta sekundžių: " + additionalSeconds);
console.log("Naujas laikas: " + hours + ":" + minutes + ":" + seconds);


/* 10.
JavaScript metodas.Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let numbersString = '';

for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * 8999) + 1000;
  numbersString += randomNumber + ' ';
}

let numbersArray = numbersString.split(' ');
numbersArray.sort(function(a, b) {
  return b - a;
});

let sortedNumbersString = numbersArray.join(' ');
console.log(sortedNumbersString);
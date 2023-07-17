/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
let elementai = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
for(let i = 0 ; i < elementai.length; i++){
    console.log(`${i} Labas`)
}


/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
let elementai1 = [1,2,3,4,5,6,7,8,9,10]
let sum1 = 0
for(let i = 1 ; i < elementai.length; i++){
    console.log(`${i} `)
}
/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let augalai1 = ["kanape", "piene", "kaulazole", "kaulazole", "ginkmedis", "dobilas", "ramune", "Mažoji varnalėša", "kanape", "dilgele", ]
for(let i = augalai1.length ; i>=0; i--) {
    console.log(augalai1[i]);
}


// //nr.3 su while

/* 04. virsui padarytas
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
let augalai12 = ["kanape", "piene", "kaulazole", "kaulazole", "ginkmedis", "dobilas", "ramune", "Mažoji varnalėša", "kanape", "dilgele", ]
for(let i = augalai12.length ; i>=0; i--) {
    console.log(augalai12[i]);
}


/* 05.
Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

let augalai123 = ["kanape", "piene", "kaulazole", "kaulazole", "ginkmedis", "dobilas", "ramune", "Mažoji varnalėša", "kanape", "dilgele", ]
for(let i = augalai123.length ; i>=0; i--) {
    console.log(augalai123[i]);
}

/* 06.
javaSript metodas . Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);


*/

/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/

/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
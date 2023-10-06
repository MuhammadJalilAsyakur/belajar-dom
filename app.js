let digimon = [
    {
        name: "Koromon",
        img: "https://digimon.shadowsmith.com/img/koromon.jpg",
        level: "In Training"
    },
    {
        name: "Tsunomon",
        img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
        level: "In Training"
    },
    {
        name: "Yokomon",
        img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
        level: "In Training"
    },
    {
        name: "Motimon",
        img: "https://digimon.shadowsmith.com/img/motimon.jpg",
        level: "In Training"
    },
    {
        name: "Tanemon",
        img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
        level: "In Training"
    },
    {
        name: "Bukamon",
        img: "https://digimon.shadowsmith.com/img/bukamon.jpg",
        level: "In Training"
    },
    {
        name: "Tokomon",
        img: "https://digimon.shadowsmith.com/img/tokomon.jpg",
        level: "In Training"
    },
    {
        name: "Agumon",
        img: "https://digimon.shadowsmith.com/img/agumon.jpg",
        level: "Rookie"
    },
    {
        name: "Gabumon",
        img: "https://digimon.shadowsmith.com/img/gabumon.jpg",
        level: "Rookie"
    },
    {
        name: "Biyomon",
        img: "https://digimon.shadowsmith.com/img/biyomon.jpg",
        level: "Rookie"
    },
    {
        name: "Tentomon",
        img: "https://digimon.shadowsmith.com/img/tentomon.jpg",
        level: "Rookie"
    },
    {
        name: "Palmon",
        img: "https://digimon.shadowsmith.com/img/palmon.jpg",
        level: "Rookie"
    },
    {
        name: "Gomamon",
        img: "https://digimon.shadowsmith.com/img/gomamon.jpg",
        level: "Rookie"
    },
    {
        name: "Patamon",
        img: "https://digimon.shadowsmith.com/img/patamon.jpg",
        level: "Rookie"
    },
    {
        name: "Kuwagamon",
        img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
        level: "Champion"
    },
    {
        name: "Greymon",
        img: "https://digimon.shadowsmith.com/img/greymon.jpg",
        level: "Champion"
    },
    {
        name: "Shellmon",
        img: "https://digimon.shadowsmith.com/img/shellmon.jpg",
        level: "Champion"
    },
    {
        name: "Garurumon",
        img: "https://digimon.shadowsmith.com/img/garurumon.jpg",
        level: "Champion"
    },
    {
        name: "Seadramon",
        img: "https://digimon.shadowsmith.com/img/seadramon.jpg",
        level: "Champion"
    },
    {
        name: "Monochromon",
        img: "https://digimon.shadowsmith.com/img/monochromon.jpg",
        level: "Champion"
    },
    {
        name: "Birdramon",
        img: "https://digimon.shadowsmith.com/img/birdramon.jpg",
        level: "Champion"
    },
    {
        name: "Meramon",
        img: "https://digimon.shadowsmith.com/img/meramon.jpg",
        level: "Champion"
    },
    {
        name: "Kabuterimon",
        img: "https://digimon.shadowsmith.com/img/kabuterimon.jpg",
        level: "Champion"
    },
    {
        name: "Andromon",
        img: "https://digimon.shadowsmith.com/img/andromon.jpg",
        level: "Ultimate"
    },
    {
        name: "Togemon",
        img: "https://digimon.shadowsmith.com/img/togemon.jpg",
        level: "Champion"
    },
    {
        name: "Numemon",
        img: "https://digimon.shadowsmith.com/img/numemon.jpg",
        level: "Champion"
    },
    {
        name: "Monzaemon",
        img: "https://digimon.shadowsmith.com/img/monzaemon.jpg",
        level: "Ultimate"
    },
    {
        name: "Ikkakumon",
        img: "https://digimon.shadowsmith.com/img/ikkakumon.jpg",
        level: "Champion"
    },
]


// mandapatkan element html dengan id digimon
let listDigimon = document.getElementById("digimon");

// menggunakan reusable function map dan filter untuk mendapatkan array of object
const digiTrain = digimon.filter((digiTrain) => digiTrain.level === "Champion").map((digiTrain) => {
    let cardDigimon = `
    <div class="col">
            <div class="card h-100">
                <img src=${digiTrain.img} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${digiTrain.name}</h5>
                    <p class="card-text">${digiTrain.level}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>`;

    listDigimon.innerHTML += cardDigimon;
})

// menggunakan for loop untuk mendapatkan array of object

// for (let i = 0; i < digimon.length; i++) {
//     let cardDigimon = `
//         <div class="card">
//             <img src= ${digimon[i].img} />
//             <h4>${digimon[i].name}</h4>
//             <p>${digimon[i].level}</p>
//         </div>`;

//     listDigimon.innerHTML += cardDigimon;
// }
// function searchPokemonByName(name, digimons) {
//     return digimons.filter(digimon => digimon.name.toLowerCase().includes(name.toLowerCase()));
// }

// const searchResults = searchPokemonByName("Koromon", digimon);
// console.log(searchResults);


// mengembalikan nilai terkecil
// function minimal(a, b) {
//     if (a < b) {
//         return a;
//     } else if (b < a) {
//         return b;
//     } else {
//         return a;
//     }
// }


// mencari index
// function findIndex(array, number) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             return i;
//         }
//     }
//     return -1;
// }


// console.log(findIndex([1, 2, 3, 4, 5], 3))


// let newDigi = digimon.map((digis) => {
//     return 'digimon ' + digis.name;
// })

// console.log(newDigi)

// let findDigi = digimon.find(digis => digis.name === "Koromon").name;

// console.log(findDigi)

// let orang = ["Kimak", "Agus", "Koromon", "Varane"]

// let OrangWithA = orang.filter(orang => orang[0] === "A");
// console.log(OrangWithA)

// let matrix = [
//     ["kimak", 1],
//     ["koromon", 2],
//     ["varane", 3],
//     ["isMarried", 4],
//     [["michie", 9], ["licha", 5]]
// ]

// console.log(matrix[4][0][0]);


// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// let [satu, dua, , empat, lima, ...sisa] = angka;
// console.log(satu)
// console.log(dua)
// console.log(empat)
// console.log(lima)
// console.log(...sisa)
// let ganjil = angka.filter(number => number % 2 === 1);
// console.log(ganjil)
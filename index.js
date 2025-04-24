// an array of drug data set
const drugs = [

    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },

    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },

    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },

    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },

    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },

    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },

    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },

    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },

    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },

    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },

    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },

    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },

    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },

    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },

    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },

    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },

    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },

    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },

    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },

    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }

];


// QUESTION 1. Get all drugs that are antibiotics.
// SOLUTION

// const antibioticDrugs = drugs.map((eachdrug) =>
//     eachdrug.category.toLowerCase == "Antibiotic");

// console.log(antibioticDrugs)

const antibioticDrugs = drugs.filter((each) =>
    each.category == 'Antibiotic'                   // Didn't use the return keyword here because I ommited {} which explitly returns each object
)

// console.log(antibioticDrugs.length)                  //To count how many drugs that are antibiotics
console.log(antibioticDrugs)

// QUESTION 2: Return an array of drug names in lowercase.
// SOLUTION

const drugNames = drugs.map((each) => {
    return each.name.toLowerCase()
})

console.log(drugNames)

// QUESTION 3: Write a function that accepts a category and returns all drugs under that category.
// SOLUTION

function drugCategory(Category) {
    return drugs.filter((each) => {
        return each.category === Category
    })

}

//console.log(drugCategory('Supplement').length)         to count how many drugs of the input category exist
console.log(drugCategory('Supplement'))


// QUESTION 4: Log each drug’s name and its manufacturer.
// SOLUTION

const drugNameAndManufacturer = drugs.forEach((each) => {
    console.log(`The manufacturer of ${each.name} drug is ${each.manufacturer}`)
});

// QUESTION 5: Return all drugs that require a prescription.
// SOLUTION

const prescribedDrugs = drugs.filter((each) => {
    return each.isPrescriptionOnly == true
})

console.log(prescribedDrugs)

// QUESTION 6: Return a new array, each item should follow the format: "Drug: [name] - [dosageMg]mg".
// SOLUTION

const newDrugArray = drugs.map((each) => {
    return `Drug: ${each.name}: ${each.dosageMg}mg`
})
console.log(newDrugArray)

// QUESTION 7. Write a function that returns all drugs with a stock less than 50.
// SOLUTION

function getLowStockDrugs(medicationArray) {
    console.log("These are the drugs details from the array with a stock less than 50")
    return lowStock = medicationArray.filter((each) => {
        return each.stock < 50
    })

}

console.log(getLowStockDrugs(drugs))

// QUESTION 8: Return all drugs that are not prescription-only.
// SOLUTION
const unPrescribedDrugs = drugs.filter((each) => {
    return !each.isPrescriptionOnly
})
console.log(unPrescribedDrugs)


// QUESTION 9. Write a function that takes a manufacturer name and returns how many drugs are from that company.
// SOLUTION


function manufacturerDrugList(arrayName, companyName) {
    console.log("These are the number of drugs from the inputed manufacturer")
    const manufacturerDrug = arrayName.filter((each) => {
        return each.manufacturer === companyName
    })
    console.log(manufacturerDrug.length)
    return manufacturerDrug.length
}

manufacturerDrugList(drugs, 'Teva')


// QUESTION 10: Use forEach() to count how many drugs are Analgesics.
// SOLUTION

let count = 0
drugs.forEach((each) => {
    if (each.category = "Analgesic") {
        count++
    }
});
console.log(count)

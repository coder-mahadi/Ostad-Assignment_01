import {
    countries,
}
from './countries.js';


// Travers Full array
countries.map((list, i) => {
    console.log(`Listed country is ${list.name}`)
    console.log(`Listed country code is ${list.code}`)
})


// Country check and added
for (let item of countries) {
    let checkCountry = "Viatenam";
    if (item.name === checkCountry) {
        console.log(`Country is found`);
        break;
    } else {
        countries.push({
            name: checkCountry,
            "code": checkCountry.slice(0, 3).toUpperCase()
        })
        console.log(countries);
        break;
    }
}

// Sort Full Array Object
countries.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    } else if (a.name < b.name) {
        return -1
    } else {
        return 0
    }
})
console.log(countries)
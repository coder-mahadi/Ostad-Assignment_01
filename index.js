import {
    countries,
} from './countries.js';
countries.map((list, i) => {
    let checkCountry = "Bangladesh";
    if (list.name === checkCountry) {
        console.log(`Country is found`);

    } else {
        countries.push({
            name: checkCountry,
            "code": checkCountry.slice(0, 3).toUpperCase()
        })
        console.log(countries);
    }
})
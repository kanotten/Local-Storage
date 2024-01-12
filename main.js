const myVariable = "some text";
window.localStorage.setItem("variableOne", myVariable);

window.localStorage.setItem("name", "Hesham");

//save objects
//save arrays

let car = {
    make: "bmw",
    model: 1992,
    price: 2000
}

//must be turned to a string to convert/import/export

window.localStorage.setItem("myCar", JSON.stringify(car));

window.sessionStorage.setItem("fav", "bmw");

// tasks by using local storage

let ragu = ["carrots", "onion", "selleri"];

let barbera = {
    origin: "Italy",
    year: 2018,
    taste: "sweet"
}

let event = "Dinner";

window.localStorage.setItem("recipe",JSON.stringify (ragu));
window.localStorage.setItem("wine", JSON.stringify(barbera));
window.localStorage.setItem("plans", "Dinner");


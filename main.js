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
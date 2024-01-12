const myName = window.localStorage.getItem("name");
console.log(myName);

const myCar = window.localStorage.getItem("myCar");
console.log(myCar);

// parse is to convert back to javascript from string fromat

const myCarParsed = JSON.parse(myCar);
console.log(myCarParsed);
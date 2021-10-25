function sajatFuggveny(nev = "Némó") {
    return "Hello " + nev;
}

let sum = function (a, b) {
    return a + b;
}

let koszon2 = (a) => {
    return "Hello " + a;
}

let koszon = () => {
    return "Hello";
}


//alert(sajatFuggveny("Béla"));
//alert(sum(1, 2))
//alert(koszon());
var nev = prompt("Mi a neved", "Némó");
alert(koszon2(nev));
console.log("Ez itt egy log");
var fruits = ["Narancs", "Körte", "Szilva", "Cseresznye"];
fruits[10] = "Alma";
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("Törlés után");
//fruits.splice(0, 1);
fruits.sort().reverse();
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

var cars = [
    {tipus: "Volvo", ev: 2016},
    {tipus: "BMW", ev: 2018},
    {tipus: "Opel", ev: 2017}
]

function kocsikKiir() {
    for (i = 0; i < cars.length; i++) {
        console.log(cars[i].tipus + " " + cars[i].ev);
    }
}

function kocsikKiirEvNovekvo() {
    cars.sort((a, b) => {
        return a.ev - b.ev
    })
}

kocsikKiir();
kocsikKiirEvNovekvo();
kocsikKiir();
var kor = 15;
if (kor < 18) {
    console.log("Kiskorú");
} else {
    console.log("Nagykorú");
}

console.log(kor < 18 ? "Kiskorú" : "Nagykorú");

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Vasárnap";
        break;
    case 1:
        day = "Hétfő";
        break;
    case 2:
    case 3:
        day = "Fizetésnap";
        break;
    default:
        day = "Mindegy";
}
console.log(day);
for (var kocsi of cars) {
    for (var kulcs in kocsi) {
        console.log(kocsi[kulcs])
    }
}
var szemely = {
    fname: "John", lname: "Doe", age: 25, teljesnev: function () {
        return this.fname + " " + this.lname;
    }
};

console.log(szemely.teljesnev());

var szemely2 = new Object();
szemely2.firstName = "John";
delete szemely.age;
console.log(szemely);

function valtoztat(elem) {
    elem.innerHTML = "Upsz!";
}

function ujdoc() {
    window.location.assign("https://www.w3schools.com")
}

function vissza() {
    window.history.back();
}

var myObj = {nev:"Kiss Bela", kor:21, varos:"Rásonysápberencs"};
window.alert(JSON.stringify(myObj));
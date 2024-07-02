"use strict";
//function//
function sapa(nama) {
    console.log("hallo, aku" + nama);
}
sapa("yanto");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 8);
console.log("hasil penjumlahan " + hasil);
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("hasil dari perkalian: " + result);
let cube = (x) => {
    return x * x * x;
};
let result2 = cube(3);
console.log("hasil:" + result);
let cube1 = function (num) {
    return num ** 6;
};
console.log(cube1(6));
function greet(nama) {
    console.log("hallo, aku" + nama);
}
sapa("yanto");
//object 
let pers;
pers = {
    nama: "nanda ",
    age: 19,
    add: "tegal"
};
console.log(pers);

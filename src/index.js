"use strict";
let a = "nanda";
console.log(a);
//implisit
let x = 99;
var y = "pugin";
console.log(x, y);
//eksplisit
let k = 20;
let o = "web";
console.log(k, o);
//any
let kelas;
kelas = true;
console.log(kelas);
//uniaon
let mouse;
mouse = 20;
console.log(mouse);
let userID;
userID = 88;
console.log(userID);
//void 
function oke(nama) {
    console.log(`Hello, ${nama}!`);
}
oke("yasir");
//square,
let list;
list = [1, 2, 3, 4];
//generic array
let list1;
list1 = [1, 2, 3, 4];
console.log(list, list1);
//tuple
let person;
person = ['zulfan', 20];
console.log(person);
let person1;
person1 = {
    nama: "yasir",
    age: 29,
    addres: "tegal"
};
console.log(person1);
for (let i = 0; i < 5; i++) {
    console.log(`loop ke ${1 + 1}`);
}
//while loop
let counter = 0;
while (counter <= 5) {
    counter++;
    console.log(counter);
}
let nilai = 90;
if (nilai > 75) {
    console.log("lulus");
}
else {
    console.log("yidak lulus");
}
//switch case
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "senin";
        break;
    case 2:
        dayName = "selasa";
        break;
    case 3:
        dayName = "rabu";
        break;
    case 4:
        dayName = "kamis";
        break;
    case 5:
        dayName = "jumat";
        break;
    default:
        dayName = "hari lainnya";
}
console.log(`hari ini adalah${dayName}`);

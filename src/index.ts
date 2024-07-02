let a : string = "nanda"
console.log(a);

//implisit
let x: number = 99;
var y: string ="pugin"
console.log(x,y);

//eksplisit
let k = 20;
let o = "web"

console.log(k,o);
//any
let kelas: any;
kelas = true;
console.log(kelas);
//uniaon
let mouse : number;
mouse = 20
console.log(mouse);
//aliases
type ID = number;
let userID: ID;
userID = 88;
console.log(userID);
//void 
function oke(nama: string):void{
    console.log(`Hello, ${nama}!`);
    
}
oke("yasir");
//square,
let list: number[]
list =[1,2,3,4]
//generic array
let list1 : Array<number>;
list1 = [1,2,3,4]
console.log(list,list1);
//tuple
let person :[string, number]
person=['zulfan',20];
console.log(person);
let person1: {
    nama:string,
    age:number,
    addres:string
}
person1 = {
    nama :"yasir",
    age : 29,
    addres : "tegal"
}
console.log(person1);
for (let i =0; i<5; i++){
    console.log(`loop ke ${1+1}`);
    
}
//while loop
let counter : number=0;
while (counter<=5){
    counter++
    console.log(counter);
    
}
let nilai = 90
if (nilai>75){
    console.log("lulus");
} else{
    console.log("yidak lulus");
    
}
//switch case
let day: number =3;
let dayName: string;
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
        dayName = "hari lainnya"
}
console.log(`hari ini adalah${dayName}`);

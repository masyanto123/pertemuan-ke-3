//function//
function sapa(nama:string){
    console.log("hallo, aku" +nama);
}
sapa("yanto")
function calculate (a:number, b:number, c:number): number{
    return a+b+c
}
let hasil : number = calculate(3,5,8)
console.log("hasil penjumlahan "+ hasil);

let multiplication = (x: number, y:number) =>{
    return x * y
}
let result = multiplication(5,8)
console.log("hasil dari perkalian: "+ result);


let cube = (x: number) =>{
    return x*x*x;
}
let  result2 = cube(3)
console.log("hasil:"+result); 



let cube1 = function(num: number){
    return num ** 6
}
console.log(cube1(6));



function greet(nama:string){
    console.log("hallo, aku" +nama);
}
sapa("yanto")

//object 
let pers:{
    nama: string,
    age : number,
    add:string
}
pers= {
    nama:"nanda ",
    age: 19,
    add : "tegal"
}
console.log(pers);

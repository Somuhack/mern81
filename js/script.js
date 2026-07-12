// let / const
// let x ={}
// console.log(typeof x);
// Arithmetic Operator
// +,-,*,/,%
let a = 10;
let b = 20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// assign operaqtor
// +=,-=,/=,%=,*/
// let j=10;
// j=j+2
// j-=2
// console.log(j);
// increment and decrement operator
// let k=10;
// increment
// k=k+1
// k+=1
// console.log(++k);
// console.log(k);
// decremet
// console.log(k--);
// console.log(k);
// relational operator
// <,>,<=,<=,!=,==,===
// let p=10;
// let q="10";
// console.log(p<q);
// console.log(p>q);
// console.log(p<=q);
// console.log(p>=q);
// console.log(p!=q);
// console.log(p==q); // value and here type not matter
// console.log(p===q); //value + data Type
// logical operator
// and,or,not
let j;
j = 0;
let k = "Loging Pass";
// console.log( !j);
// bitwise operator()
// 421 421
// left shift,right shift,xor gate
let y = 5;
// console.log(y>>2);
// -----------------------Operator Done-------------------------
// 1. write a program swape tow number
let m = 20;
let n = 10;

// console.log("m: ",m);
// console.log("n: ",n);
// with third varible
// let temp=m;
// m=n
// n=temp
// Without thrd varible
// m=m+n
// n=m-n
// m=m-n
// using destructure
// [n,m]=[m,n]
// one line swape with out destructure
// m=(m+n) - (n=m);
// console.log("m: ",m);
// console.log("n: ",n);
// Logic build here
// const x=10;
// x=20
// x=30
// console.log(x);
// console.log(x);
// var x=10;
// console.log(x);
// let x=10;
// console.log(x);
// condition
// let age = 18;
// if (18 <= age) {
//   console.log("Eligible for voter");
// } else {
//   console.log("Not Eligible for voter");
// }
// let C = 100;
// let T = 200;
// let B = 300;
// if (T < C) {
//   if (B < C) {
//     console.log("Cpim is won The Vote");
//   } else {
//     console.log("Bjp is won The Vote");
//   }
// } else if (B < T) {
//   console.log("TMC is won The Vote");
// } else {
//   console.log("Bjp is won The Vote");
// }
// // leapear logic
// let year=1900; //2000
// if((year%400==0) || (year%4==0 && year%100!=0)){
//     console.log(`${year} is Leapear `);
// }else{
//      console.log(`${year} is not Leapear `);
// }
// odd even
// let day =7 ;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wenesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Wrong Input");
    
// }
// Entry Controll and exit controll loop
// Entry Controll loop(For,While)
// for(let x=0;x<10;x++){
//     console.log(x);   
// }
let x=10
while(x<10){
    console.log(x);
    x++
    
}
// Exist Controll loop
// let x=10
// do{
//   console.log(x);
//   x++
  
// }while(x<10)
// print a loop in rreverse order
/*
9
8
7
6
|
0
*/
for(let i=0;i<10;i++){
    if(i==5){
        continue
    }
    console.log(i);
    
}
// same out put by while loop
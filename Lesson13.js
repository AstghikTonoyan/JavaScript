"use strict";

 //1. Ամեն ֆունկցիայից ստեղծում եք 5 հատ (5 declaration, 5 expression, 5 arrow)
 //------------declaration----------5
 function n () {
    return ( `Say Hello`);
} 
console.log(n()); 


 function myName (name) {
    console.log( `Իմ անունն է ${name} `);
} 
myName("Աստղիկ");


function user1 (userName1) {
    if ( userName1 !== "Ani478"){
        console.log("Ձեր օգտանունը չի գտնվել");}
     else {
        console.log("Բարև Ձեզ հարգելի Անի");
    } }
user1("Ani478"); //Բարև Ձեզ հարգելի Անի


function userAge (age) {
    age <= 18 ? console.log ("Հարգելի հաճախորդ մեր կայքում կարող են գրանցվել միայն չափահաս քաղաքացիներ") :
                console.log("Կարող եք շարունկաել կայքում գրանցումը ");
} 
userAge(27);//Կարող եք շարունկաել կայքում գրանցումը 


function myProfession (profession) {
    console.log( `Մասնագիտությամբ   ${profession}  եմ`);
} 
myProfession("տնտեսագետ");

 //----------expression-------------5

 const a = function (c){
    return  `Հայաստանի մայրաքաղաքը ${c}-ն է `;
 };
 console.log(a("Երևան"));
 

 const whichIsBiger = function (d, f) {
    d > f ? 
    console.log("d biger than f") :
    console.log("f bigger than d") ;
 } ;
whichIsBiger(10, 30) ;


const p = function (mountin){
    return  `Ամենաբարձր լեռ ${mountin}-ն է `;
 };
 console.log(p("Էվերեստ")); //Ամենաբարձր լեռ Էվերեստ-ն է 


 const mat10 = function (t, m) {
    console.log(t * 100 / 58 - m);
 };
 mat10(52, 96);//-6.344



 //---------arrow-------------

 const arrow = () => console.log(typeof(arrow)) ;
 arrow(); // function


 const sum2 = k => k*2 ; 
 console.log (sum2(10)) ; //20

 const sum1 = () => console.log(10 + 5);
 sum1(); //15
  
 const h = (m, n) => {
 console.log(m+n/m); } ;
  h(85, 74) ; //85.8705

  const sum5 = () => console.log(5 + "Name");
  sum5(); //5Name


 //2.Ֆունկցիաները իրենց մեջ պետք է պարունակեն լոգիկաներ 
//----------------1----------------
function questionAns (name, lastName, country, language, gender) {
    console.log(`
    Բարև Ձեզ հարգելի  ${name} ${lastName} ,
    Դուք ներկայացնում եք   ${country} -ն,
    Ձեր մայրենի   լեզուն է ${language} -ը,
    Ձեր  սեռն է ${gender !== undefined ? gender : " "}
    `);
}

questionAns ("Alex", "Smith", "USA", "English", "male");
questionAns ("Աննա", "Հարությունյան", "Հայաստան", "հայերեն", "իգական");
questionAns ("Արամ", "Հովհաննիսյան", "Հայաստան", "հայերեն");

//------------------------2-----------
 const log1 = (g, h) => {
               g <= h ? 
               console.log("Hello") :
               console.log("Bye" ) ;

 };
   log1(15, 58) ; // Hello

//------------3----------------
  const  date5 = [1, 5, 8, 10, 11] ;
  const r = (y1) => {
    if(y1 !== date5.length) {
        return (10 + 5)/6 ;
    } else {
        return 10*5+25/5 ;
    }
  };
  console.log(r(5)) ; //55

//----------------4------------
  const  date6 = [11, 9, 24, 18, 61] ;
  const g = (y2) => {
    if( y2 != date6[1]) {
        return 2*2 ;
    } else {
        return 3*3 ;
    }
  };
  console.log(g("9")) ; // 9

 //3․ Ֆունկցիաներից մեկում պետք է օգտագործեք 3 հատ return 

 function mat1 (x, y) {
 if( x > y) {
    return ` ՄԵծ արժեքը ${x}-ն է ` ;
 } else if ( x < y) {
    return ` ՄԵծ արժեքը ${y}-ն է ` ;
 }   
    return `x-ը հավասար է y-ին ` ;
 } 

console.log(mat1(10, 20)) ;//  ՄԵծ արժեքը 20-ն է 
console.log(mat1(5, 5)) ;// x-ը հավասար է y-ին 


 //4․ ստեղծել առանձին ֆունկցիա date անունով, ու էդ ֆուկցիան կանչել mig
 //ֆունկցիայի մեջ ու էնպես անել որ 2 ֆունկցիաներն էլ աշխատեն

//---1-ին տարբերակ

function mig () {
    date("Alex8569", "147hngy", "alex@gmail.com");
    console.log("Շնորհավորում ենք դուք հաջողությամբ գրանցվել եք։") ;

}
function date (userName, password, email) {
        console.log (`Հարգելի օգտատեր Ձեր օգտանունը - ${userName} է,
                    գաղտնաբառը - ${password},
                    Էլեկտրոնային հասցեն - ${email},
    `);

}
mig(); /*Հարգելի օգտատեր Ձեր օգտանունը - Alex8569 է,
գաղտնաբառը - 147hngy,
Էլեկտրոնային հասցեն - alex@gmail.com,

Շնորհավորում ենք դուք հաջողությամբ գրանցվել եք։*/


console.log(NaN || null || !3 && undefined || 5);
console.log (!3);
" use strict ";

// Տնային

//1. Ստեղծում եք օբջեքթ, ու մեջը տարբեր փրոփերթիներ (ցանկացած) եք ստեղծում 5 հատ, ու
// if, else if, else-ով ստուգում եք, հետո նույնը թերնարի օպերատորով։ Գոնե 5 հատ
 const market = {
    applePrice  : 100 ,
    bananPrice  : 200 ,
    orangeprice : 400 ,
    lemonPrice  : 400 ,
    kiwiPrice   : 500 ,
    budget      : 8000 ,
    myMarket () {
 if(market.applePrice === market.bananPrice) {
    console.log("Խնձորի և բանանի գները հավասար են");   
   } else if (market.applePrice === market.orangeprice) {
    console.log("Խնձորի և Նարինջի գները հավասար են");
   } else if (market.applePrice === market.lemonPrice) {
    console.log("Խնձորի և լիմոնի գները հավասար են");
   } else if (market.applePrice === market.kiwiPrice) {
    console.log("Խնձորի և կիվի գները հավասար են");
   } else { console.log("Խնձորի գինը հավասար չէ ոչ մի մրգի գնին") ;} 
    },

   myBudget () {
    market.budget === 80*market.applePrice ? 
    console.log("80 կգ խնձոր  կարող ենք գնել") : console.log("80 կգ խնձոր  կարող չենք գնել");
    market.budget === 40*market.bananPrice ? 
    console.log("40 կգ բանան  կարող ենք գնել") : console.log("40 կգ բանան  չենք կարող  գնել");
    market.budget === 20*market.lemonPricePrice ? 
    console.log("20 կգ լիմոն  կարող ենք գնել") : console.log("20 կգ լիմոն  չենք կարող  գնել");
    market.budget === 20*market.orangepricePrice ?
     console.log("20 կգ նարինջ  կարող ենք գնել") : console.log("20 կգ նարինջ  չենք կարող  գնել");
    market.budget === 16*market.kiwiPrice ? 
    console.log("16 կգ կիվի  կարող ենք գնել") : console.log("16 կգ կիվի  չենք կարող գնել");
    
    }
};

    market.myMarket();
    market.myBudget();

 
//2. ստեղծում եք 4 հատ switch 2ը թվերի դեպքում, երկուսը սթրինգների
//-----------1-------------------
const num10 = 50;
switch ( num10 ) {
  case 10 :  console.log(`${num10} տոկոս case1`);  break;
  case 20 :  console.log(`${num10} տոկոս case2`);  break;
  case 30+5 :console.log(`${num10} տոկոս case3`);  break;
  case 30 :  console.log(`${num10} տոկոս case4`);  break;
  case 30+6: console.log(`${num10} տոկոս case5`);  break;
  case 40 :  console.log(`${num10} տոկոս case6`);  break;
  case 50 :  console.log(`${num10} տոկոս case7`);  break;
  case 60 :  console.log(`${num10} տոկոս case8`);  break;
  case 70 :  console.log(`${num10} տոկոս case9`);  break;
  case 80 :  console.log(`${num10} տոկոս case10`); break;
  case 50 :  console.log(`${num10} տոկոս case11`); break;
  default: console.log("Some Error");
} // 50 տոկոս case7
//--------------2--------------------------
const value10 = 20;
switch ( value10 ) {
  case 10 :  console.log(`${value10}  case1`);  break;
  case 20+5: console.log(`${value10}  case2`);  break;
  case 30 :  console.log(`${value10}  case3`);  break;
  case 30 :  console.log(`${value10}  case4`);  break;
  case 30 :  console.log(`${value10}  case5`);  break;
  case 40 :  console.log(`${value10}  case6`);  break;
  case 50 :  console.log(`${value10}  case7`);  break;
  case 60 :  console.log(`${value10}  case8`);  break;
  case 70 :  console.log(`${value10}  case9`);  break;
  case 80-60:console.log(`${value10} case10`);  break;
  case 50 :  console.log(`${value10} case11`);  break;
  default: console.log("Something is wrong");
} //20 case10
//--------------3--------------------------
const name10 = "Alex";
name10.toUpperCase;
switch ( name10 ) {
  case "AlEx" :  console.log(`${name10}  case1`);  break;
  case "ALEx" :  console.log(`${name10}  case2`);  break;
  case "AleX" :  console.log(`${name10}  case3`);  break;
  case "AleX" :  console.log(`${name10}  case4`);  break;
  case "Alex" :  console.log(`${name10}  case5`);  break;
  case "alex" :  console.log(`${name10}  case6`);  break;
  case "aLex" :  console.log(`${name10}  case7`);  break;
  case "Angel":  console.log(`${name10}  case8`);  break;
  case "ALEX" :  console.log(`${name10}  case9`);  break;
  case "ALEx" :  console.log(`${name10} case10`);  break;
  case "AleX" :  console.log(`${name10} case11`);  break;
  default: console.log("Something is wrong");
} // Alex case5
//--------------4--------------------------
const cityName = "Yerevan";
switch (cityName ) {
  case "Moscow"   : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case1`);  break;
  case "London"   : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case2`);  break;
  case "Paris"    : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case3`);  break;
  case "Madrid"   : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case4`);  break;
  case "Gyumri"   : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case5`);  break;
  case "Tbilisi"  : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case6`);  break;
  case "Dubai"    : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case7`);  break;
  case "YerevaN"  : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case8`);  break;
  case "Yerevan"  : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case9`);  break;
  case "Armenia"  : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case10`); break;
  case "Yerevan"  : console.log(`Հայաստանի մայաքաղաքը ${cityName} է case11`); break;
  default: console.log("I dont know.");
} // Հայաստանի մայաքաղաքը Yerevan է case9


//3. ստեղծում եք 1 switch որի մեջ օգտագործում եք համ if, else, համ ternary

const priceA = 10000;

switch (priceA)  {
  case 1000   : console.log (`Ապրանքի արժեքը ${priceA}  case1`); break;
  case 1000   : console.log (`Ապրանքի արժեքը ${priceA}  case2`); break;
  case 300    : console.log (`Ապրանքի արժեքը ${priceA}  case3`); break;
  case 400    : console.log (`Ապրանքի արժեքը ${priceA}  case4`); break;
  case 500    : console.log (`Ապրանքի արժեքը ${priceA}  case5`); break;
  case 600    : console.log (`Ապրանքի արժեքը ${priceA}  case6`); break;
  case 700    : console.log (`Ապրանքի արժեքը ${priceA}  case7`); break;
  default:           if(priceA === 2000) {
                        console.log("Ապրանքի արժեքը 2000 է");
                    } else if(priceA <= 9999 ){
                        console.log("Ապրանքի արժեքը 9999 է");
                    } else{ console.log("Ապրանքի արժեքը մեծ է 9999-ից");}
                     }

const valueA = "դրամ է";
switch (valueA)  {
case "եվրո է" : console.log (`Ապրանքի արժույթը  ${valueA} case1`); break;
case "ռուբլի" : console.log (`Ապրանքի արժույթը ${valueA} case2`); break;
case "ռուբլի" : console.log (`Ապրանքի արժույթը ${valueA} case3`); break;
case "դոլար է": console.log (`Ապրանքի արժույթը  ${valueA} case4`); break;
case "դոլար"  : console.log (`Ապրանքի արժույթը  ${valueA} case5`); break;
case "լարի"   : console.log (`Ապրանքի արժույթը  ${valueA} case6`); break;
  default: console.log(`${value10 === "դրամ է" ?  "Ապրանքի արժույթը դրամ է": "Ապրանքի արժույթը արտարժույթ է"}`); } 
                   
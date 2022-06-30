"use strict";
 
//Ստեղծում եք 3 հատ  առանձին nested loop, որոնց մեջ պետք ա լինի 1, 2, և 3 հատ loop` ըստ հերթականության, ստեղծում եք FOR-ով և WHILE-ով
 
//------------For-------1--2--3----

    let result1 = "";
    for (let i = 1; i <= 4; i++ ) {
      result1 += " "  ;
     
      for (let g = 2; g >= i, g-- ;){
       result1 += " " +"*" ;
    
      }
      result1 += "\n";
   }
    console.log(result1); 

   /*      **** ****
           **** ****
           **** ****
           **** ****   */

  let result1 = "";
    for (let i = 1; i <= 5; i++ ) {
      result1 +=  " " ;
      for (let g = -1; g <= i, g++ ;){
        result1 += " " + "#";
        for (let y = -3; y <= g; y++) {
          result1 += " " + "#";
        }
      }
      result1 += "\n";
   }
   console.log(result1); 
    /*    # # # # # #
          # # # # # #
          # # # # # #
          # # # # # #
          # # # # # #   */
 
let result5 = "";
for (let i = 1; i <= 5; i++) {
 for (let j = 5; j > i; j--) {
  result5 += "*";
 }
    for(let p = 0; p <= 0; p++){
        result5 +="*";
        for (let w = 0; w = 0; w++) {
          result5 += "*";

        }
    }
  
 result5 += "\n";
}

console.log(result5);

/*   *****
     ****
     ***
     **
     *       */


 //------While---1--2--3----------
let result = "";
let i = 1;
let g = 6;


while(i <= 5) {
   result += " " +"#" ;
   i++;
   while (g <= i ){
    result += " " +"#"+" " +"#"+" "+"#"+" "+"#";
    g++;
   }
   result += "\n";
};
console.log(result); 
/*   #
     #
     #
     #
     # # # # #  */

  result = "";
  i = 1;
  g = 0;
  let f = -1 ;
  while ( i <= 4) {
     i++;
     result +=  "*";
     
     while ( g < 3) {
      g++;
      result += " "+ "*";
      while (f <= 2) {
        f++;
        result += ""+ "*";
      }

     }
     result += "\n";
  }

console.log(result);



//ստեղծում եք function, որի մեջ switch-ով պետք ա ստեղծեք կալկուլյատոր + - / * % ի համար*/
    
const calculation = function (index1, index2, oper) {
      switch (oper){
        case "+" : console.log(index1 + index2); break;
        case "-" : console.log(index1 - index2); break;
        case "*" : console.log(index1 * index2); break;
        case "/" : console.log(index1 / index2); break;
        case "%" : console.log(index1 % index2); break;
        default : console.log("Տվյալ գործողությունը չենք կարող իրականացնել։");
      }
};
calculation(50, 8,  "+");  //58
calculation(90, 25, "-");  //65
calculation(10, 64, "*");  //640
calculation(35, 7,  "/");  //5
calculation(10, 20, "%");  //10
calculation(10, 20, "log");//Տվյալ գործողությունը չենք կարող իրականացնել։

 //-----------tonacar----

 /* let noStar = "";

for (let i = 1; i <= 5; i++) {
   
 for (let j = 5; j > i; j--) {
  noStar += " ";
 }
 for(let j = 1; j < i; j++){
        noStar +=" "+"*";
    }
 noStar += "\n";
}

console.log(noStar); */


let noStar = "";
for (let i = 0; i < 3; i++) {
   
 for (let j = 0; j < 5; j++) {
  j === 0 ? noStar += "*" :
  noStar += "#";
  j === 1 ? noStar += "#" :
  noStar += "*";
  j === 2 ? noStar = "*" :
  noStar += "#";
  j === 3 ? noStar = "*" :
  noStar += "#";

 }
 
 noStar += "\n";
}

console.log(noStar);
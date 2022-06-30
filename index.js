
  
" use strict ";

// Տնային

//


//1․ ստեղծում եք Object որը իր մեջ կունենա Method և property-ներ, Method-ը պետք ա
//ինչ-որ տվյալներ վերադարձնի կանսոլում որոնք վերցնելու ա property-ներից։

//-------1-ին տարբերակ------------
const date = {
  num1:  10,
  num2:  20,
  num3:  30,
  SomeAnswer () {
    console.log((date.num1+date.num2)*date.num3);
  }
};
date.SomeAnswer();

//-------2-րդ տարբերակ------------

const story ={
  nameStory: "Բրենդան Այկի",
  dateStory: 1995,
  programStory: "Java Script-ի",
  SomeStory () {
   console.log( `Այս պատմությունը  ${story.programStory}  մասին է, որը ստեղծվել է 
   ${story.nameStory} կողմից ${story.dateStory} թվականին`);
  }
};
story.SomeStory();



//2․ ստեղծում եք 10 հատ if, else if, else հրամաններով, օգտագործել այդ երեքը 
//----------------------------------------1
if (18>50) {

  console.log("18>50");

}  else if (18===50) {

  console.log("18===50");

} else {

  console.log("18-ը փոքր է 50-ից");
} 
//---------------------------------------------2

if (100==="100") {

  console.log('100==="100"');

}  else if (100=="100") {

  console.log('100=="100"');

} else {

  console.log("Hi");
} 
//----------------------------------------3
if (typeof(true)==="String") {

  console.log("true-ն տեքտ է");

}  else if (typeof(true)==="Number") {

  console.log("true-ն թիվ է ");

} else {

  console.log("true-ն չգիտենք ինչ է)");
}
//------------------------------------4
if (typeof(false)==="boolean") {

  console.log("false-ը boolean է");

}  else if (typeof(false)==="Number") {

  console.log("false-ը թիվ է ");

} else {

  console.log("false-ը չգիտենք ինչ է)");
}

//--------------------------------5
if (undefined===null) {

  console.log("undefined===null");

}  else if (undefined==null) {

  console.log("undefined==null");

} else {

  console.log("Error");
} 
//--------------------------------6
if (5===+"5") {

  console.log('+"5" թիվ է');

}  else if (5==+"5") {

  console.log('+"5" թիվ չէ');

} else {

  console.log("Some Error");
} 
//--------------------------------7
if (100<=1000) {

  console.log("100<=1000");

}  else if (100>=10) {

  console.log("100>=10");

} else {

  console.log("100-ը մեծ է 1000-ից ");
} 
//--------------------------------8
if (10>5 | 5>=6 & 100 < 500) {

  console.log("10>5 | 5>=6 & 100<500");

}  else if (10>5 | 5<=6 & 100 < 500) {

  console.log("10>5 | 5<=6 & 100 < 500");

} else {

  console.log("10>5 | 5<=6 & 100 < 500 արտահայտությունը սխալ է");
} 
//--------------------------------9
if (18 < 50 & 50 >20 ) {

  console.log("18 < 50 & 50 >20");

}  else if (18 < 50 & 50 < 20) {

  console.log("18 < 50 & 50 < 20");

} else {

  console.log("Error");
} 
//--------------------------------10
if (100==="100") {

  console.log('100==="100"');

}  else if (100!=="100") {

  console.log('100!=="100"');

} else {

  console.log("Some Error");
} 

//3․ ստեղծում եք 1 հատ if, else և ապահովում եք ճյուղավորում
 if (1<20 & 20<10 ) { 

  console.log("20 միանիշ թիվ է");

    if (20<1000 & 20>100) {

      console.log("20 եռանիշ թիվ է");
      
    } else if(20>1000 & 20<10000){

      console.log("20-ը քառանիշ թիվ է");

    }   else {console.log("20 եռանիշ թիվ չէ");}
 } else { 

  if(10<20 & 20 < 100) {

    console.log("20-ը երկնիշ թիվ է");

  } else if(10<20 ){

    console.log("20-ը միանշ թիվ չէ");
  }
    else{ console.log("Some error");}
 }





//4․ ստեղծում ենք 10 հատ ternary օպերատորով ստուգումներ, որոնցից 2ը պետք ա լինի սթրինգի մեջ

const age1 = 20;   //1
age1 >= 18 ? console.log("Չափահաս") : console.log("Անչափահաս");

const age2 =  15;    //2
age2 >=18 ?  console.log("Չափահաս") : console.log("Անչափահաս");

const priceValue1 = 200;  //3
 priceValue1 < 500? console.log("Էժան") : console.log("թանկ");

const priceValue2 = 1000;  //4
 priceValue2 < 500? console.log("Էժան") : console.log("թանկ");

 const user1 = "registred" ;  //5
 user1!=="registred"? console.log("Գրանցված չէ") : console.log("Գրանցված է");

 const user2 = "not registred" ;   //6
 user2!=="registred"? console.log("Գրանցված չէ") : console.log("Գրանցված է");

 const genderOne="female";  //7
 genderOne === "female" ? console.log("աղջիկ") : console.log("տղա");

 const genderTwo="Male";  //8
 genderTwo !=="female" ? console.log("տղա") : console.log("աղջիկ"); 

               // Stringi-ի մեջ
  const Ligte = 1;  //9
  console.log(`${Ligte==true ?  "լույս  է": "Մութ է"}`);

  const Dark = 0;  //10
  console.log(`${Dark==false ? 
  "լույս  է":
  "Մութ է"}`);
  */


 
"use strict";

const app = {
	restaurantDetails: [
		{address: "Երևան, Թումանյան 14"},
		{telNumber: "015 12-23-45"},
		{mail: "info@template.am"},
		{facebook: "http://facebook.com/"},
		{instagram: "http://instagram.com/"},
		{type: "Ռեստորան"},
		{isDelivery: true},
		{isOpen: true}
	],
	restaurantStaff: [
		{security: "Էդգար Գեվորգյան"},
        {security: "Արսեն Ավագյան"},
        {waiter: "Մելքոն Դանիելյան"},
        {waiter: "Ալիսա Պողոսյան"},
        {waiter: "Նելլի Դավթյան"},
        {waiter: "Քրիստինե Արսենյան"},
        {barman: "Տիգրան Ռուբենյան"},
        {barman: "Անի Առուստամյան"},
        {cook: "Կարինե Տոնոյան"},
        {cook: "Արտակ Ադամյան"},
        {administrator: "Լիկա Ավագյանց"},
        {courier: "Սամսոն Խաչատրյան"},
        {hostess: "Ալիսա Սուրենյանց"},
        {customer: "Մանե Սարգսյան"}
	],
	restaurantMenu: [
		{
			type: "Տաք ուտեստներ",
            item1: "Խոզի Խորոված",
            item2: "Հավի Խորոված",
            item3: "Ճտի Տապակա ֆրիով",
            item4: "Ձկան Խորոված",
            item5: "Թփով Տոլմա",
            item6: "Կաղամբով Տոլմա",
            item7: "Քյուֆթա"
		},
		{
            type: "Աղցաններ",
            item1: "Մայրաքաղաքային",
            item2: "Հունական",
            item3: "Ամառյին",
            item4: "Ցեզար",
            item5: "Վինեգրեդ",
            item6: "Խեցգետնով",
            item7: "Բազուկով"
        },
		{
            type: "Ալկոհոլային Խմիչքներ",
            item1: "Օղի",
            item2: "Գինի",
            item3: "Կոնյակ",
            item4: "Վիսկի",
            item5: "Լիկյոր",
            item6: "Տեկիլա",
            item7: "Ռոմ"
        },
		{
            type: "Հյութեր և Զովացուցիչ Ըմպելիքներ",
            item1: "Տնական Կոմպոտ",
            item2: "Կոկա-Կոլա",
            item3: "Ֆանտա",
            item4: "Սփրայթ",
            item5: "Սեվըն Ափ",
            item6: "Թան",
            item7: "Լիմոնադ"
        },
		{
            type: "Խմորեղեններ",
            item1: "Միկադո",
            item2: "Սնիկերս",
            item3: "Տղամարդու Իդեալ",
            item4: "Տիրամիսու",
            item5: "Շոկոլադե",
            item6: "Մրգային",
            item7: "Բրաունի"
        }
	],
	callCenter(address, telNumber, isDelivery, isOpen, type){
        if (app.restaurantDetails[7].isOpen === true)
        {
            return `
            Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[13].customer}ը
            Ոչ, կներեք մենք փակ ենք: Մեր աշխատանքային ժամերն են 9։00 մինչը 24։00 ։` ;
            
     }
        else {
        
		return `
			Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[13].customer}ը
            Այո, ներկա պահին բաց ենք
			${
				address = app.restaurantDetails[0].address !== undefined ? 
				"Մեր հասցեն է" : 
				"Կներեք, մենք հասցե չունենք"
			}
			${
				telNumber = app.restaurantDetails[1].telNumber !== undefined ? 
				"Մեր հեռախոսահամարն է " + app.restaurantDetails[1].telNumber : 
				"Կներեք, մենք չունենք հեռախոսահամար"
			}
			${
				isDelivery = app.restaurantDetails[6].isDelivery === true ? 
				"Այո, կարող ենք իրականացնել Ձեր պատվերը" :
				"Կներեք, բայց մեր առաքիչը զբաղված է, պետք է դուք մոտենաք"
			}
			`;
              }
	},
    
   
	isOpened(start, end) {
		start >=end ? 
		app.restaurantDetails[7].isOpen = true : 
		app.restaurantDetails[7].isOpen = false;
    } ,
    //----------3-------------------------------------------------------------------
    customerOne(){
        if ( app.restaurantStaff[9].cook === "Արտակ Ադամյան" )
        {
            console.log ( 
                "Այո, այսօր մեր խոհարարը Արտակ Ադամյանն է, կարող եք պատվեր կատարել։" );
        } else {
            console.log("Ոչ, այսօր Արտակ Ադամյանը չի աշխատում");
        }
        
    } 
   
    };
app.isOpened(59, 24);

const client = app.callCenter();

console.log(client);

app.customerOne();


//-----------4-------------------------------------------------


const custmerTwo = {
    order : "գարեջուր",
    customerOrder () {
       console.log(` Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[2].waiter}ը 
          ${custmerTwo.order === "գարեջուր"  ?
             `Ոչ կներեք մենք գարեջուր չունենք, կարող եք պատվիրել  ${app.restaurantMenu[2].item1},
             ${app.restaurantMenu[2].item2}, ${app.restaurantMenu[2].item3}, ${app.restaurantMenu[2].item4} ,
             ${app.restaurantMenu[2].item5}, ${app.restaurantMenu[2].item6} կամ ${app.restaurantMenu[2].item7}։`:
             "Շատ լավ Ձեր պատվերն ընդունված է:" } `); 
    }
};
 custmerTwo.customerOrder();



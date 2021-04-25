//1
// let multiplicateur =5;
// for (let i = 0; i <= 9; i++) {
//     console.log(multiplicateur+ " " + "* "+ i+ " : "+ multiplicateur * i);
//  }
//2
// let multiplicateur =5;
// for (let i = 0; i <= 9; i=i+2) {
//     console.log( multiplicateur+ " " + "* "+ i+ " : "+ multiplicateur * i);

// }
//3
// for (let i = 20; i >= 0; i=i-2) {
//     console.log(i);

// }
//4
// let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
// let longPrenoms =[];
// eleves.forEach(element => {
//     if (element.length >5){
//         longPrenoms.push(element);
//         console.log(longPrenoms);
//     }
// });
//5
// let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
// let grossesSommes = [];
// for (let i = 0; i< sommes.length; i++) {
//     if (sommes[i] > 60) {
//         grossesSommes.push(sommes[i])
//         sommes.splice(i , 1)
//         i--
//     } 
// }
// console.log(grossesSommes);
// console.log(sommes);
//6
// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let typeNumber = [];
// let typeString= [];
// let  typeObject = [];
// let typeAutre=[];
// console.log(donnees);
// for (let i = 0; i < donnees.length; i++) {
//     switch (typeof donnees[i]) {
//         case "string":
//             typeString.push(donnees[i])
//             donnees.splice(i, 1)
//             i--;
//             break;
//         case "number":
//             typeNumber.push(donnees[i])
//             donnees.splice(i, 1)
//             i--;
//             break;    
//         case "object":
//             typeObject.push(donnees[i])
//             donnees.splice(i, 1)
//             i--;
//             break;
//         case "boolean":
//             typeAutre.push(donnees[i])
//             donnees.splice(i, 1)
//             i--;
//             break;
//         default:
//             break;
//     }
// }
// console.log(typeString);
// console.log(typeNumber);
// console.log(typeAutre);
// console.log(typeObject);
// console.log(donnees);
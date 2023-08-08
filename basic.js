// 1st problem

// function cubeNumber(number) {
//     if (typeof number === 'number') {
//         return number ** 3;
//     } else {
//         return ;
//     }
// }

// var test = 3;
// var outout = cubeNumber(test);
// console.log(outout); 






// // 2nd problem


// function matchFinder(string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         return "দুঃখিত, স্ট্রিং নয়"
//     }

//     if (string1.includes(string2)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var test1 = "John Doe";
// var test2 = "ohn";
// var output = matchFinder(test1, test2);
// console.log(output);


// // // 3rd problem


// function sortMaker(arr) {
//     if (!Array.isArray(arr) || arr.length !== 2) {
//         return "Invalid Input";
//     }

//     let [num1, num2] = arr;
    
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return "Invalid Input";
//     }

//     if (num1 === num2) {
//         return "equal";
        
//     } else if(num1 <0 || num2 <0){
//         return "Invalid Input";
//     }
//     else if (num1 < num2) {
//         return [num2, num1];
//     } 
//     else {
//         return [num1, num2];
//     }
// }

// var test = [2, 3];
// var output = sortMaker(test);
// console.log(output); 




// 4th problem

// function findAddress(obj) {
//     if (typeof obj === 'object' && obj !== null) {
//        const street = obj.street || '__';
//        const house = obj.house || '__';
//        const society = obj.society || '__';
        
//         return `${street},${house},${society}`;
//     } 
// }

// var test = {
//     street: 10,
//      house: "15A",
//     society: "Earth Perfect"
// };
// var output = findAddress(test);
// console.log(output);


// // 5th problem

// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray) || changeArray.length === 0) {
//         return ;
//     }

//     let totalCash = changeArray.reduce((sum, value) => sum + value, 0);
    
//     if (totalCash >= totalDue) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var poisha = [1, 5, 5];
// var chipsPrice = 10;
// var output = canPay(poisha, chipsPrice);
// console.log(output);  
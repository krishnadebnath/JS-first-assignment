// problem-1

function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "this is not valid input";
    } else{
        let cube = Math.pow(number , 3);
    return cube;
}
}


var outout = cubeNumber(10);
console.log(outout); 






// problem-2


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "please give me number type data"
    }

    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

var test1 = "John Doe";
var test2 = "ohn";
var output = matchFinder(test1, test2);
console.log(output);

// problem-3


function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "Invalid Input";
    }

    let [num1, num2] = arr;
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Invalid Input";
    }

    if (num1 === num2) {
        return "equal";
        
    } else if(num1 <0 || num2 <0){
        return "Invalid Input";
    }
    else if (num1 < num2) {
        return [num2, num1];
    } 
    else {
        return [num1, num2];
    }
}

var test = [2, 3];
var output = sortMaker(test);
console.log(output); 


// problem-4

function findAddress(obj) {
    if (typeof obj === 'object' && obj !== null) {
       const street = obj.street || '__';
       const house = obj.house || '__';
       const society = obj.society || '__';
        
        return street +","+house +"," +society;
    } 
}

var test = {
    street: 10,
     house: "15A",
    society: "Earth Perfect"
};
var output = findAddress(test);
console.log(output);




// problem-5
function canPay(changeArray, totalDue) {
    if(changeArray.length == 0){

        return "this array is empty"
    }

    else{
        let sum = 0;
        for(let i = 0;i<changeArray.length;i++){
           let element = changeArray[i];
           sum = sum + element;
       }
     if(sum >= totalDue){
        return true;
     }

     else{
        return false;
     }
    }


}

var poisha = [5,5,1];
var chipsPrice = 10;
var output = canPay(poisha, chipsPrice);
console.log(output);  
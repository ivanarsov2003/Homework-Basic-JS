let sum = 0;
let numbers= [6,8,10,20,30];
function sumOfNumbers(array){
    for(let i=0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
sumOfNumbers(numbers);
let array1 = ["Hello", " there", " students", " of", " SEDC", " !"];
let string1;
function string(array){
    for(let i=0;i<array.length;i++){
        string1 = array.join("");
    }
    console.log(string1);
}
string(array1);
// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number.

function multiply(a , b ,c){
    return a * b * c ;
}
const convertToSeconds = function(minutes)
{
    return minutes * 60;
}
function fahrenheitToCelsius(farenheit){
    return (farenheit-32) * 5 / 9;
}
function reverseString(str){
    return str.split(``).reverse().join(``);
}
function countVowels(str){

    let count= 0;
    let lower = str.toLowerCase();
    for (let i = 0 ; i < lower.length; i ++)
        {

        if(lower[i] === 'a' || lower[i] === 'i' || lower[i] === 'e' || lower[i] === 'o' || lower[i] === 'u') 
             count++;{
            }
        }        
        return count;
}    

function isPrime(num) {

    if (num <= 1) {
        return false;
    }
for (let i=2; i<num; i++){
    if (num % i === 0){
        return false;
    }
}
return true;
}
console.log(multiply(5,6,7));
console.log(convertToSeconds(5));
console.log(fahrenheitToCelsius(100));
console.log(reverseString("hello"));
console.log(countVowels('Javascript'));
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(13));
console.log(isPrime(6));



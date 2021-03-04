function myFunction(){
    let words=document.getElementById("myinput").value;

    /*
    let factorialNumb = factorial(words).toString();
    let reverseNumb = reverseStr(factorialNumb).toString();
    let summOfZero = findZer(reverseNumb);
    */
    alert(findZer(words)); 
}

function reverseStr(str) {
    return str.split("").reverse().join("");
}

function findZer(n){
    
    let result = n.match(/0/g);
    alert(result.length);
}
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

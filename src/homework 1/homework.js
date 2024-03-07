const getMulAndSum = () => {
    firstNumber = Number( prompt( "Enter first number" ) );
    secondNumber = Number( prompt( "Enter second number" ) );
    console.log( `Mul of ${firstNumber} and ${secondNumber} is ${ firstNumber * secondNumber };` );
    console.log( `Sum of ${firstNumber} and ${secondNumber} is ${ firstNumber + secondNumber };` );
}

const getSummaryLenght = ( ) => {
    firstString  = prompt( "Enter first string"  );
    secondString = prompt( "Enter second string" );
    console.log( `Summary lenght of '${firstString}' and \'${secondString}\' is ${firstString.length + secondString.length };` );
};

const getDigitSum = () => {
    let number = Number( prompt("Enter your number") );
    let result = 0;
    let tmp = number;
    while( tmp > 0 ){
        result += tmp % 10;
        tmp = Math.floor( tmp / 10 );
    }

    console.log( `Sum of digits of number ${number} is ${result};` );
}

module.exports = { getMulAndSum, getSummaryLenght, getDigitSum };
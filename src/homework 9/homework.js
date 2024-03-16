const isRightTriangle = ( a , b, c ) => { 
    let sides = [a, b, c];
    sides = sides.sort();
    return Math.pow(sides[0], 2) + Math.pow(sides[1], 2) == Math.pow(sides[2], 2);
}

const getAreaAndCircumference = () => {
    let R = Number( prompt('Enter radius') );
    let area = Math.PI*Math.pow( R, 2 );
    let circumference = 2 * Math.PI * R;
    console.log( area );
    console.log( circumference );
}

const solveQuadraticEquation = () => {
    let a = Number( prompt('Enter a') );
    let b = Number( prompt('Enter b') );
    let c = Number( prompt('Enter c') );
    
    let d = Math.sqrt( Math.pow(b, 2) - 4*a*c );
    console.log( ((-1)*b + d) / (2 * a ) );
    console.log( ((-1)*b - d) / (2 * a ) );
}

module.exports = { isRightTriangle, getAreaAndCircumference, solveQuadraticEquation };
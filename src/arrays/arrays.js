const sum = ( arr ) => {
    return arr.reduce( (accumulator, value) => accumulator + value, 0 );
}

//module.exports = sum;

const doubleArrayValues = ( arr ) => {
    return arr.map( el => 2*el );
}

const findMaxMin = () => {
    /* */
}

module.exports = { sum, doubleArrayValues, findMaxMin };
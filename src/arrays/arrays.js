const sum = ( arr ) => {
    return arr.reduce( (accumulator, value) => accumulator + value, 0 );
}

const doubleArrayValues = ( arr ) => {
    return arr.map( el => 2*el );
}

const findMaxMin = function( nums ) {
    let result = {
        max : undefined,
        min : undefined,
    }

    if( nums.length == 0 ){
        return result;
    }

    result.max = nums[0];
    result.min = nums[0];

    // Можно сделать сортировку и взять элементы по краям. Удобно, но медленее, чем так, как ниже, потому что сложность сортировки в лучше случае O(n*log(n)) а у кода ниже сложность линейная O(n).
    for( let el of nums )
    {
      if( el < result.min ) {
        result.min = el;
      }
      if( el > result.max ) {
        result.max = el;
      }
    }
    return result;
 }

module.exports = { sum, doubleArrayValues, findMaxMin };
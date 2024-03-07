const sum = ( arr ) => {
  return arr.reduce( ( accumulator, value ) => accumulator + value, 0 );
};

const doubleArrayValues = ( arr ) => {
  return arr.map( ( el ) => 2 * el );
};

const findMaxMin = function( nums ) {
  const result = {
    max: undefined,
    min: undefined,
  };

  if( nums.length === 0 ) {
    return result;
  }

  result.max = nums[0];
  result.min = nums[0];

  // Можно сделать сортировку и взять элементы по краям. Это удобно, но медленее, чем так, как ниже,
  // потому что сложность сортировки в среднем O(n*log(n)) а у кода ниже сложность линейная O(n).
  for( const el of nums ) {
    if( el < result.min ) {
      result.min = el;
    }
    if( el > result.max ) {
      result.max = el;
    }
  }
  return result;
};

module.exports = { sum, doubleArrayValues, findMaxMin };

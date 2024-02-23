sum = require('./arrays.js');

describe("Checking typical cases", () => {
    it("sum of array of three elements", () => {
        expect( sum( [1+2+3] ) ).toBe( 6 );
    })
} )

describe("Checking edge cases", () => {
    it("Sum of empty array is 0", () => {
        expect( sum( [] ) ).toBe( 0 );
    })
    
    it("Sum of array of lenght 1 is value of this single element", () => {
        expect( sum( [7] ) ).toBe( 7 );
    })
} )
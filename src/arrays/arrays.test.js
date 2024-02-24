sum = require('./arrays.js');

// ДЗ №5, задача №1.
describe("Testing array sum function", () => {
    describe("Checking typical cases", () => {
        it("sum of array of three elements", () => {
            console.log( sum( [1, 2, 3] ) );
            expect( sum( [1, 2, 3] ) ).toBe( 6 );
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
})

doubleArrayValues = require('./arrays.js');

// ДЗ №5, задача №2.
describe("Testing array values doubling", () => {
    // Можно перенести сюда doubleArrayValues = require('./arrays.js');.
    describe("Checking typical case", () => {
        expect( doubleArrayValues( [1, 2, 3] ) ).toBe( [2, 4, 6] );
    } )

    describe("Checking edge cases", () => {
        it("Empty array 0", () => {
            expect( sum( [] ) ).toBe( [] );
        })
    } )
})
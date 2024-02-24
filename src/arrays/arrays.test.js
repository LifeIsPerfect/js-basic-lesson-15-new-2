const { sum, doubleArrayValues, findMaxMin } = require('./arrays.js');

describe("Homework #5, task #1", () => {
    describe("Typical cases", () => {
        it("Case #1", () => {
            console.log( sum( [1, 2, 3] ) );
            expect( sum( [1, 2, 3] ) ).toBe( 6 );
        })
    } )

    describe("Edge cases", () => {
        it("Case #1. Empty array", () => {
            expect( sum( [] ) ).toBe( 0 );
        })
        
        it("Case #2. Single element array", () => {
            expect( sum( [7] ) ).toBe( 7 );
        })
    } )
})

//doubleArrayValues = require('./arrays.js');

describe("Homework #5, task #2", () => {
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


findMaxMin = require('./arrays.js');

describe( "Homework #5, task #3", () => {
    // Можно перенести сюда doubleArrayValues = require('./arrays.js');.
    describe( "Typical cases", () => {
        it( "Case #1", () => {
            expect(findMaxMin([1, 2, 3, 4])).toBe( {
                max: 4,
                min: 1,
            } );
        })

        it( "Case #2", () => {
            expect(findMaxMin([4, 3, 2, 1])).toBe( {
                max: 4,
                min: 1,
            } );
        })

        it( "Case #3", () => {
            expect(findMaxMin([4, -3, 7, 1])).toBe( {
                max: -3,
                min: 7,
            } );
        })

        it( "Case #4", () => {
            expect(findMaxMin([-4, -3, -7, -1])).toBe( {
                max: -1,
                min: -7,
            } );
        })
    })


    describe( "Edge cases", () => {
        it("Case #1. Empty array", () => {
            expect( findMaxMin( [] ) ).toBe( { 
                max : undefined,
                min : undefined,
            } );
        })

        it("Case #2. Single element array", () => {
            expect( findMaxMin( [7] ) ).toBe( { 
                max : 7,
                min : 7,
            } );
        })

        it("Case #3. Same array elements", () => {
            expect( findMaxMin( [5, 5, 5, 5] ) ).toBe( { 
                max : 5,
                min : 5,
            } );
        })
    } )
})
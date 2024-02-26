const { diff, isWord, pow } = require( './functions' );


/* describe( 'Homework #6, task #1', () => {
    describe( 'Typical cases', () => {
        it( 'Case #1', () => {
            expect( ).toBe( );
        } );
    } );

    describe( 'Edge cases', () => {
        it( 'Case #1. Empty array', () => {
          expect( ).toBe( );
        } );
    } );
} ); */

describe( 'Homework #6, task #1', () => {
    describe( 'Typical cases', () => {
        it( 'Case #1', () => {
            expect(  diff(3, 7) ).toBe( 4 );
        } );

        it( 'Case #2', () => {
            expect(  diff(-3, -7) ).toBe( 4 );
        } );

        it( 'Case #3', () => {
            expect(  diff(-0.5, 0.5) ).toBe( 1 );
        } );

        it( 'Case #3', () => {
            expect(  diff(2.5, 1.5) ).toBe( 1 );
        } );
    } );

    describe( 'Edge cases', () => {
        it( 'Case #1. Same numbers', () => {
          expect( diff( 4, 4 ) ).toBe( 0 );
        } );
    } );
} );

describe( 'Homework #6, task #2', () => {
    describe( 'Typical cases', () => {
        it( 'Case #1', () => {
            expect( isWord( "word" ) ).toBe( true );
        } );

        it( 'Case #2', () => {
            expect( isWord( "a few words" ) ).toBe( false );
        } );

        it( 'Case #3', () => {
            expect( isWord( "wordwithnumbers123" ) ).toBe( false );
        } );

        it( 'Case #4', () => {
            expect( isWord( "!wordwithspecialcharacter%" ) ).toBe( false );
        } );

        it( 'Case #5', () => {
            expect( isWord( "wordWithCapitalLetters" ) ).toBe( true );
        } );
    } );

    describe( 'Edge cases', () => {
        it( 'Case #1. Empty string', () => {
          expect( isWord( "" ) ).toBe( false );
        } );
    } );
} );

describe( 'Homework #6, task #3', () => {
    describe( 'Typical cases', () => {
        it( 'Case #1', () => {
            expect( pow(2, 3) ).toBe( 8 );
        } );
    } );

    describe( 'Edge cases', () => {
        it( 'Case #1. Power is 0', () => {
          expect( ).toBe( );
        } );

        it( 'Case #2. Base is 0', () => {
            expect( ).toBe( );
          } );

        it( 'Case #3. Power is 1', () => {
            expect( ).toBe( );
        } );

        it( 'Case #4. Base is 1', () => {
            expect( ).toBe( );
        } );

        it( 'Case #5. Base is negative', () => {
            expect( ).toBe( );
        } );

        it( 'Case #6. Power is negative', () => {
            expect( ).toBe( );
        } );
    } );
} );
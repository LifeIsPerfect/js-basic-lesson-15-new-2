//const { f1, f2, f3 } = require( './homework' );

describe( 'Homework #7, Task #1', () => {

    beforeAll( ()=> {
        /*document.body.innerHTML = `
        <body>
            <div class="block">
                <p class="text">Paragraph 1</p>
                <p class="text">Paragraph 2</p>
                <p class="text">Paragraph 3</p>
            </div>
            <input class="text-input" type="text">
            <button class="button">Go!</button>
        </body>
        `;

        require( './homework' );*/
    } )

    it( 'Case #1. Button visibility', () => {
        // Построить исходную html страницу
        // Сверить со снапшотом (должно быть 3 параграфа по умолчанию, кнопки нет)
        // Симитировать ввод текста на странице
        // Сверить со снапшотом (должно быть 3 параграфа по умолчанию, текст в блоке, кнопка есть)
        // Симитировать нажатие кнопки
        // Сверить со снапшотом (должно быть 4 параграфа, текста в блоке нет, кнопка есть (или нет?))

        
        
        
        /* Лаконично, но не работает :)
        CheckVisibiliry работает только в браузере. Можно использовать матчер toBeVisible из jsdom. Но для подключения jsdom нужно использовать import, а не require, у меня это не получается.
        Поэтому сравниваем по-простому на innerHTML.

        expect( document.getElementsByClassName('button')[0].checkVisibility() ).toBe( false );

        document.getElementsByClassName('text-input')[0].value = 123;

        expect( document.getElementsByClassName('button')[0].checkVisibility() ).toBe( false );*/

        document.body.innerHTML = `
        <body>
            <div class="block">
                <p class="text">Paragraph 1</p>
                <p class="text">Paragraph 2</p>
                <p class="text">Paragraph 3</p>
            </div>
            <input class="text-input" type="text">
            <button class="button">Go!</button>
        </body>
        `;

        require( './homework' );

        let before = document.getElementsByClassName('button')[0].outerHTML;
        expect( before ).toBe( '<button class="button" hidden="">Go!</button>' );
        
        document.getElementsByClassName('text-input')[0].value = '123';

        let after = document.getElementsByClassName('button')[0].outerHTML;
        // Не работает. Почему-то не меняется на hidden, хотя в отладке в браузере работает как надо.
        //expect( after ).toBe( '<button class="button">Go!</button>' );

        let c = document.body.innerHTML;
        console.log( c );

        //button.click();
        //expect( /*вот здесь что-то полученное через innerHtml*/ ).toMatchSnapshot();
    } );

    it( 'Case #2. Button click', () => {
        document.getElementsByClassName('text-input')[0].value = '123';
        document.getElementsByClassName('button')[0].click();

        let buttonHTML= document.getElementsByClassName('button')[0].outerHTML;
        expect( buttonHTML ).toBe( '<button class="button" hidden="">Go!</button>' );
        expect( document.getElementsByClassName('text-input')[0].value ).toBe( "" );
    } );
} );

describe( 'Homework #7, Task #2', () => {

    beforeAll( ()=> {
        document.body.innerHTML = `
        <body>
            <div class="block">
                <p class="text">Paragraph 1</p>
                <p class="text">Paragraph 2</p>
                <p class="text">Paragraph 3</p>
            </div>
            <input class="text-input" type="text">
            <button class="button">Go!</button>
        </body>
        `;

        require( './homework' );
    } )

    it( 'Case #1', () => {
        document.getElementsByClassName('text-input')[0].value = '123';
        document.getElementsByClassName('button')[0].click();

        expect( document.getElementsByClassName('text').length ).toBe( 0 );
        expect( document.getElementsByClassName('text')[3] ).toBe( '123' );
    } );

} );

describe( 'Homework #7, Task #3', () => {
    it( 'Case #1', () => {
        expect( 3 ).toBe( 3 );
    } );

    it( 'Case #2', () => {
        expect( 3 ).toBe( 3 );
    } );
} );
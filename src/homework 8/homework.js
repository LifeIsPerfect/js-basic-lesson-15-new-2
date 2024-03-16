const getDayOfWeek = () => { 
    let [day, month, year] = prompt( 'Enter your date' ).split('.');
    let date = new Date( year, month-1, day );
    console.log( date.getDay() );
}

const getMinutesSinceDayStart  = () => {
    let currentDate = new Date();
    console.log( currentDate.getHours()*60 + currentDate.getMinutes() );
}

let createDateFromString = ( date ) => {
    let [day, month, year] = date.split('.');
    return new Date( year, month-1, day );
}

const findYoungest = ( first, second ) => {
    let d1 = createDateFromString( first );
    let d2 = createDateFromString( second );

    return d1 > d2 ? first : second ;
}

module.exports = { getDayOfWeek, getMinutesSinceDayStart, findYoungest };
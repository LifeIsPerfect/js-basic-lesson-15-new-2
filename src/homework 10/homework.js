const validateDate = () => { 
    let str = prompt( 'Enter your date (DD/MM/YYYY)' );
    
    if( !/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test( str ) ) {
        return false;
    }

    let [ dayStr, monthStr, yearStr] = str.split('/');
    let day = Number( dayStr );
    let month = Number( monthStr );
    let year = Number( yearStr );

    if( month > 12 || month < 1 ) {
        return false;
    }

    daysInMonth = new Date( year, month, 0).getDate();
    if( day > daysInMonth || day < 1 ) {
        return false;
    }

    return true;
}

const validateEmail = () => {
    let str = prompt( 'Enter your email' );
    
    if( !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z]+\.[a-z]+$/.test( str ) ) {
        return false;
    }

    if( /^\..*@.*$/.test( str ) ) {
        return false;
    }

    if( /^.*\.@.*$/.test( str ) ) {
        return false;
    }

    if( /^.*\.\..*@.*$/.test( str ) ) {
        return false;
    }

    return true;
}

const validatePhoneNumber = () => {
    let str = prompt( 'Enter your phone number' );
    return /^89[0-9]{9}$/.test(str);
}

module.exports = { validateDate, validateEmail, validatePhoneNumber };
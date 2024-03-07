const getUser = () => { 
    let obj = { name: 'John' };
    obj.age = Number( prompt('Enter user age') );
    return obj;
}

const getAdmin = ( user ) => {
    let admin = Object.assign( {}, user );
    admin.role = 'admin';
    return admin;
}

const destructivelyAssign = ( user ) => {
    let {name, age, role} = user;
    console.log( name );
    console.log( age );
    console.log( role );
}

module.exports = { getUser, getAdmin, destructivelyAssign };
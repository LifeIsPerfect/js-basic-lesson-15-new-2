/*let handler = function(){
    let textInput = document.querySelector(".text-input");
    let list = document.querySelector(".list");
    let newElement = document.createElement("p");
    newElement.innerText = textInput.value;
    list.append(newElement);
}


let switchTextHide = function() {
    let textElement = document.querySelector(".text");
    textElement.hidden = !textElement.hidden;
};*/

const addParagraph = () => {
    let block = document.querySelector(".block");
    let newParagraph = document.createElement("p");
    let textInput = document.querySelector(".text-input");

    newParagraph.classList.add("text");
    newParagraph.innerText = textInput.value;
    
    textInput.value = null;
    buttonHideFunction();

    block.append(newParagraph);
    
    if( block.childElementCount > 5 )
    {
        block.removeChild(block.firstElementChild);
    }
};


const setHideButtonFlag = (flag) => {
    let buttonElement = document.querySelector(".button");
    buttonElement.hidden = flag;
}

const buttonHideFunction = () => {
    let textInput = document.querySelector(".text-input");
    if( textInput.value ) {
        setHideButtonFlag( false );
    }
    else {
        setHideButtonFlag( true );
    }
}

/*let f = function()
{
    let el = document.querySelector(".text-input");
    if( el.value ) alert( "Non empty!") ;
}*/

setHideButtonFlag(true);

document.addEventListener("change", buttonHideFunction);

let buttonElement = document.querySelector(".button");
buttonElement.addEventListener("click", addParagraph);



/*
const f1 = () => { 
    /* *
}

const f2 = () => {
    /* *
}

const f3 = () => {
    /* *
}

module.exports = { f1, f2, f3 };*/
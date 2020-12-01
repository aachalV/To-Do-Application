import { createCustomError } from "./createCustomError.js";

// export const isNotEmpty = (taskValue) => {
//     let status = 1;
//         if (taskValue == "") {
//             status = 0;
//             createCustomError("Empty String !!", "Please enter a task and then submit");
//             return false;
//         }
//         else {
//             return true;
//         }
    
// };
export const isNotTag = (taskValue) => {
    if (taskValue.includes('<')) {
        createCustomError("Html Tags !!", "Please enter a valid task and then submit");
        return false;
    }
    else {
        return true;
    }
};
export const isNotJustSpecialCharacters = (taskValue) => {
    //let specialCharacters = /[^a-zA-Z0-9]+/;
    //let emptyString = /^\s*$/;
    let specialCharacters = /[^\w]/;
    let splittedCharactersArray = taskValue.split("");
     const checkIfOnlySpecialCharacters = () => {
         return splittedCharactersArray.every((character) => {
             return specialCharacters.test(character);
         });
     };    

    if (checkIfOnlySpecialCharacters()) {
        createCustomError("Invalid Task !!", "Please enter a valid task and then submit");
        return false;
    }
    else{
        return true;
    }
};
export const isJustInteger = (taskValue) => {
    if (/^\d+$/.test(taskValue)){
        createCustomError("ONLY Integers Entered", "Please enter a valid task and then submit");
        return false ;         
    }
    else {
        return true ;
    }
};

export const isInputValid = (taskValue) => {

    //const notEmpty = isNotEmpty(taskValue); 
    const notTag = isNotTag(taskValue);
    const notJustSpecialCharactersOrEmpty = isNotJustSpecialCharacters(taskValue);
    const notJustInteger = isJustInteger(taskValue);
    
    const validationArray = [ notTag, notJustSpecialCharactersOrEmpty, notJustInteger ];
    return validationArray.every((check) => {
        return check;
    });

};
    

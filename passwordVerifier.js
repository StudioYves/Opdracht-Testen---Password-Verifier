// Utility functions
const isNotNull = (str) => str !== null;

const hasRightLength = (str) => isNotNull(str) && str.length <= 8;

const hasUpperCaseCharacter = (str) => isNotNull(str) && (/[A-Z]/.test(str));

const hasLowerCaseCharacter = (str) => isNotNull(str) && (/[a-z]/.test(str));

const hasDigit = (str) => /\d/.test(str);


//****Function minimumConditionsReached****************************************** 


const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};


// "Outer" function ***********************************
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

//******** Module exports**************************************** 


module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};
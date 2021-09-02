const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
} = require("./passwordVerifier.js");

//******TEST isNotNull**************************************

test("isNotNull, null ingevoerd", function () {
    expect(isNotNull(null)).toBe(false)
});

test("isNotNull, geen nul ingevoerd", function () {
    expect(isNotNull("x")).toBe(true)
});

//**********TEST hasRightLength**********************************

test("hasRightLength, te lang", function () {
    expect(hasRightLength("123456789")).toBe(false);
});

test("hasRightLength, juiste lengte", function () {
    expect(hasRightLength("12345678")).toBe(true);
});

test("hasRightLength, leeg", function () {
    expect(hasRightLength("")).toBe(true);
});

test("hasRightLength, null", function () {
    expect(hasRightLength(null)).toBe(false);
});

//********TEST hasUpperCaseCharacter************************************


test("hasupperCaseCharacter, wel", function () {
    expect(hasUpperCaseCharacter("Abcdef")).toBe(true);
});

test("hasupperCaseCharacter, meerdere", function () {
    expect(hasUpperCaseCharacter("ABCdef")).toBe(true);
});

test("hasupperCaseCharacter, niet", function () {
    expect(hasUpperCaseCharacter("abcdef")).toBe(false);
});

test("hasupperCaseCharacter, cijfers + uppercase", function () {
    expect(hasUpperCaseCharacter("123ABC")).toBe(true);
});

test("hasupperCaseCharacter, cijfers met lowercase", function () {
    expect(hasUpperCaseCharacter("123abc")).toBe(false);
});

test("hasupperCaseCharacter, alleen speciale tekens", function () {
    expect(hasUpperCaseCharacter("$%#")).toBe(false);
});

test("hasupperCaseCharacter, uppercase + speciale tekens", function () {
    expect(hasUpperCaseCharacter("$%^ABC")).toBe(true);
});

test("hasupperCaseCharacter, null", function () {
    expect(hasUpperCaseCharacter(null)).toBe(false);
});

//*****TEST hasLowerCaseCharacter***************************************

test("hasLowerCaseCharacter, wel", function () {
    expect(hasLowerCaseCharacter("aBCDEF")).toBe(true);
});

test("hasLowerCaseCharacter, meerdere", function () {
    expect(hasLowerCaseCharacter("abcDEF")).toBe(true);
});

test("hasLowerCaseCharacter, niet", function () {
    expect(hasLowerCaseCharacter("ABCDEF")).toBe(false);
});

test("hasLowerCaseCharacter, cijfers + uppercase", function () {
    expect(hasLowerCaseCharacter("123ABC")).toBe(false);
});

test("hasLowerCaseCharacter, cijfers met lowercase", function () {
    expect(hasLowerCaseCharacter("123abc")).toBe(true);
});

test("hasLowerCaseCharacter, alleen speciale tekens", function () {
    expect(hasLowerCaseCharacter("$%#")).toBe(false);
});

test("hasLowerCaseCharacter, lowercase + speciale tekens", function () {
    expect(hasLowerCaseCharacter("$%^abc")).toBe(true);
});

test("hasLowerCaseCharacter, null", function () {
    expect(hasLowerCaseCharacter(null)).toBe(false);
});

//******TEST hasDigit****************************

test("hasDigit, ja", function () {
    expect(hasDigit("ab4")).toBe(true);
});

test("hasDigit, nee", function () {
    expect(hasDigit("abCD$%")).toBe(false);
});

test("hasDigit, meerdere cijfers", function () {
    expect(hasDigit("123abc")).toBe(true);
});

test("hasDigit, null", function () {
    expect(hasDigit(null)).toBe(false);
});

//********TEST minimumConditionsReached***************************** 

test("minimumConditionsReached, 2xTrue", function () {
    const conditions = [true, true, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
});

test("minimumConditionsReached, 3xTrue", function () {
    const conditions = [true, true, true, false, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
});

test("minimumConditionsReached, 4xTrue", function () {
    const conditions = [true, true, true, true, false];
    expect(minimumConditionsReached(conditions)).toBe(true);
});

test("minimumConditionsReached, all false", function () {
    const conditions = [false, false, false, false, false];
    expect(minimumConditionsReached(conditions)).toBe(false);
});


//********TEST verifyPassword***************************** 

test("verifyPassword, henkie1", function () {
    const password = "henkie1";
    expect(verifyPassword(password)).toBe(true);
});

test("verifyPassword, 1234a", function () {
    const password = "1234a";
    expect(verifyPassword(password)).toBe(true);
});

test("verifyPassword, z", function () {
    const password = "z";
    expect(verifyPassword(password)).toBe(true);
});

test("verifyPassword, henkie1234", function () {
    const password = "henkie1234";
    expect(verifyPassword(password)).toBe(true);
});

test("verifyPassword, HENKhenk", function () {
    const password = "HENKhenk";
    expect(verifyPassword(password)).toBe(true);
});

test("verifyPassword, HENK33$", function () {
    const password = "HENK33$";
    expect(verifyPassword(password)).toBe(false);
});

test("verifyPassword, 1234", function () {
    const password = "1234";
    expect(verifyPassword(password)).toBe(false);
});

test("verifyPassword, leeg", function () {
    const password = "";
    expect(verifyPassword(password)).toBe(false);
});

test("verifyPassword, null", function () {
    const password = null;
    expect(verifyPassword(password)).toBe(false);
});
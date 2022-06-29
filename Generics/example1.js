"use strict";
const strings = ["This is an array of string", "other string", "let's try another one"];
const numbers = [1, 2, 3, 4, 5];
const readString = (stringToRead) => {
    stringToRead.forEach((string) => {
        console.log(string);
    });
};
const readNumber = (numberToRead) => {
    numberToRead.forEach((number) => {
        console.log(number);
    });
};
const readGenerics = (anythingToRead) => {
    anythingToRead.forEach((anything) => {
        console.log(anything);
    });
};
readString(strings);
readNumber(numbers);
console.log("===============================");
readGenerics(strings);
readGenerics(numbers);

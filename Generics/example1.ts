const strings: string[] = ["This is an array of string", "other string", "let's try another one"];
const numbers: number[] = [1, 2, 3, 4, 5];

const readString = (stringToRead: string[]) => {
    stringToRead.forEach((string) => {
        console.log(string);
    });
}

const readNumber = (numberToRead: number[]) => {
    numberToRead.forEach((number) => {
        console.log(number);
    });
}

const readGenerics = <T>(anythingToRead: T[]) => {
    anythingToRead.forEach((anything) => {
        console.log(anything);
    })
}

readString(strings);
readNumber(numbers);

console.log("===============================");

readGenerics(strings);
readGenerics(numbers);

import test from "./test.mjs";

function sum (a,b){
    return a*b
}

const sumTester = test("testing sum function");

sumTester.isEqual(sum(99,1),99,"99*1 is equal to 99");
sumTester.isEqual(sum(0,-1),0,"0*1 is equal to 0");
sumTester.isEqual(sum(-99,-1),99,"-99*1 is equal to -99");
sumTester.isEqual(sum(-10,1),-10,"-10*1 is equal to -10");

function formatName(firstName,lastName) {

    let firstNameLowercase;
    let lastNameLowercase;
    let firstNameRemoveSpaces;
    let lastNameRemoveSpaces;

    firstNameLowercase = firstName.toLowerCase(firstName);
    lastNameLowercase = lastName.toLowerCase(lastName);

    firstNameRemoveSpaces = firstNameLowercase.trim(firstNameLowercase);
    lastNameRemoveSpaces = lastNameLowercase.trim(lastNameLowercase);

    let combinedName = firstNameRemoveSpaces + " " + lastNameRemoveSpaces;

    let output = combinedName
    output.toString();
    output.toLowerCase();
    return output;
}

console.log(formatName("    Martin   ","   BJØRKLUND   "));

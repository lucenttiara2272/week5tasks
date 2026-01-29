import test from "./test.mjs";

function sum (a,b){
    return a*b
}

const sumTester = test("testing sum function");

sumTester.isEqual(sum(99,1),99,"99*1 is equal to 99");
sumTester.isEqual(sum(0,-1),0,"0*1 is equal to 0");
sumTester.isEqual(sum(-99,-1),99,"-99*1 is equal to -99");
sumTester.isEqual(sum(-10,1),-10,"-10*1 is equal to -10");
//LAB 1

//Fortune Teller
let a = "Programmer";
let b = "Toronto";
let c = "75000";
let d = "Google";
console.log("You will be a " + a + " in " + b + " making $" + c + " for " + d);
//Fortune Teller - List Output
let eleFortuneTeller = document.querySelector(`#item1`);
eleFortuneTeller.textContent = "You will be a " + a + " in " + b + " making $" + c + " for " + d;

//Age Calculator
let currentyear = 2020;
let birthyear = 1956;
console.log(`This person is ${currentyear - birthyear}`);
//Age Calculator - List Output
let eleAgeCalculator = document.querySelector(`#item2`);
eleAgeCalculator.textContent = `This person is ${currentyear - birthyear}`;

//Lifetime Supply Calculator
let currentAge = 31;
let maximumAge = 100;
let dailyNumber = 3;
console.log(`You would need ${(maximumAge - currentAge) * dailyNumber * 365} widgets to last you till the ripe old age of ` + maximumAge);
//LifetimeSupplyCalculator - List Outuput
let eleSupplyCalculator = document.querySelector(`#item3`);
eleSupplyCalculator.textContent = `You would need ${(maximumAge - currentAge) * dailyNumber * 365} widgets to last you till the ripe old age of ` + maximumAge;


//Geometrizer
let radius = 25;
console.log(`The circumference is ${radius * 2} and the area is ${Math.pow(radius, 2) * Math.PI}`);
//Geometrizer - List Output
let eleGeometrizer = document.querySelector(`#item4`);
eleGeometrizer.textContent = `The circumference is ${radius * 2} and the area is ${Math.pow(radius, 2) * Math.PI}`;


//Temp Converter
let tempf = 82;
let tempc = 31;
console.log(tempc + ` celcius is ${(tempc * 9/5) + 32} farenheit`);
console.log(tempf + ` farenheit is ${(tempf - 32) * 5/9} celcius`);
//Temp Converter - List Output
let eleTempConverter = document.querySelector(`#item5`);
eleTempConverter.innerHTML = tempc + ` degrees celcius is ${(tempc * 9/5) + 32} degrees farenheit <br> ` + tempf + ` degrees farenheit is ${(tempf - 32) * 5/9} degrees celcius`;


//LAB 2

//Exercise 1 - Square Number + List Output
function squareNumber(numberSq) {
    let sqNum = Math.pow(numberSq, 2);
    let eleSquareNumber = document.querySelector(`#item6`);
    eleSquareNumber.textContent = `The result of squaring the number ${numberSq} is ${sqNum}`;
    return sqNum;
}
squareNumber(9);


//Exercise 2 - Half Number + List Output
function halfNumber(numberHf) {
    let halfNum = numberHf/2;
    let eleHalfNumber = document.querySelector(`#item7`);
    eleHalfNumber.textContent = `Half of ${numberHf} is ${halfNum}`;
    console.log(`Half of ${numberHf} is ${halfNum}`);
    return halfNum;
}
halfNumber(12);


//Exercise 3 - Percentage + List Output
function percentOf(number1, number2) {
    let percentNum = (number1 / number2) * 100;
    let elePercentNum = document.querySelector(`#item8`);
    elePercentNum.textContent = `${number1} is ${percentNum}% of ${number2}`;
    console.log(`${number1} is ${percentNum}% of ${number2}`);
    return percentNum;
}
percentOf(25,130);


//Exercise 4 - Area of Circle + List Output
function areaOfCircle (radius) {
    let area = (Math.pow(radius, 2) * Math.PI).toFixed(2);
    let eleAreaOfCircle = document.querySelector(`#item9`)
    eleAreaOfCircle.textContent = `The area of a circle with a radius of ${radius} is ${area}`;
    console.log(`The area of a circle with the raidus ${radius} is ${area}`);
    return area;
}
areaOfCircle(32);


//Exercise 5 - RunAll + List Output
function runAll (number) {
    let halfNum = number/2;
    let squareNum = Math.pow(number, 2);
    let areaNum = (Math.pow(squareNum, 2) * Math.PI);
    let percentNum = (areaNum / squareNum) * 100;
    let eleRunAll = document.querySelector(`#item10`);
    eleRunAll.innerHTML = `Half of ${number} is ${halfNum} <br> ${number} squared is ${squareNum} <br> The area of a circle with the radius of ${number} is ${areaNum} <br> ${areaNum} is ${percentNum} of ${squareNum}`
    console.log(`Half of ${number} is ${halfNum}`)
    console.log(`${number} squared is ${squareNum}`)
    console.log(`The area of a circle with the radius of ${number} is ${areaNum}`)
    console.log(`${areaNum} is ${percentNum} of ${squareNum}`)
    return halfNum
}
runAll (12);
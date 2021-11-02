let salaryMyFriend = 1000
let mySalary = "2999"
let mySalaryCorrect = Number(mySalary);

console.log(salaryMyFriend + mySalaryCorrect);

console.log(
    typeof(salaryMyFriend),
    salaryMyFriend
);

console.log(
    typeof(mySalary),
    mySalary
);

console.log(
    isNaN(mySalary)
);

let myString = 'Hello World!'
let myOtherString = "Hello World 2!"
let myStringWithVariables = `
    ${myString} - ${myOtherString} AE!
`

console.log(myStringWithVariables);

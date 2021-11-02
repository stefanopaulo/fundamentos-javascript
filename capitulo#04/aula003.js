const dateBirthday = new Date(2020, 0, 20)
console.log(dateBirthday);

const firstDateOfJS = new Date(0)
console.log(firstDateOfJS);

const today = new Date()
console.log(today.toString());
console.log(today.toLocaleString());
console.log(today.toISOString());

console.log(
    `
    Day: ${today.getDate()}
    Month: ${today.getMonth() + 1}
    Year: ${today.getFullYear()}
    Hour: ${today.getHours()}
    Minute: ${today.getMinutes()}
    Seconds: ${today.getSeconds()}
    Miliseconds: ${today.getMilliseconds()}  
    `
);

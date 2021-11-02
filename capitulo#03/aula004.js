const hero = {
    name: 'Flash',
    age: 100,
    gender: 'Masculine'
}

console.log('Name: ' + hero.name);
console.log('Age: ' + hero['age']);
console.log('Gender: ' + hero.gender);

hero.id = 001

console.log(hero);
console.log(Object.keys(hero));
console.log(Object.values(hero));

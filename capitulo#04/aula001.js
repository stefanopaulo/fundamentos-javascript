const person = {
    _name: '',
    _age: 16,

    get name() {
        return this._name
    },

    set name(n) {
        this._name = n.toUpperCase()
    },

    get canDrive() {
        return this._age >= 18
    }
}

person.name = 'maria do céu'

console.log(person.name)
console.log(person.canDrive)

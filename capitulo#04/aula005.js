class Hero {
    attack() {
        console.log('atacou!!!')
    }

    defend() {
        console.log('defendeu!!!')
    }
}

const hero = new Hero()
hero.attack()
hero.defend()

// usando construtor!!

class Hero2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    attack() {
        console.log(`O ${this.name} atacou!!!`)
    }
}

const hero2 = new Hero2(
    'Flash',
    100
)
hero2.attack()

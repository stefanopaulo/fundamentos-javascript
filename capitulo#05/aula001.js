let fruitExistsInTheMarket = false
let haveCpuEnough = true

//

let typeClient = "premium"
let balance = 20

if (balance < 9) {
    typeClient = "basic"
} else if (balance > 15) {
    typeClient = "gold"
}

console.log(typeClient)

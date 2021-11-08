let pause = true
let count = 0

while(pause) {
    pause = count < 10
    if (count % 2 === 0) {
        console.log('Número par: ', count);
    }
    count++
}

do {
    console.log('Só uma vez!!!');
} while(pause)

while(pause) {
    console.log('Não vai aparecer!!!');
}

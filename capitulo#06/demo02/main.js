window.onload = () => {
    const btnCalc = document.getElementById('btnCalc')
    btnCalc.onclick = click

    function getInputValue(id) {
        const item = document.getElementById(id)
        return item.value
    }

    function click() {
        const typeOperation = getInputValue('typeOperation')
        const value1 = getInputValue('value1')
        const value2 = getInputValue('value2')
        const res = Mathematics[typeOperation](value1, value2)
        document.getElementById('result')
            .innerText = `Resultado: ${res}`
    }
}

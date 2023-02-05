export function GenId(countOfSymbols: number): string {
    let start = 0
    let curentNumber = 0
    let generatedValue = ''
    while (curentNumber < countOfSymbols) {
        start++;
        curentNumber++;
        generatedValue += start.toString();
    }
    return generatedValue;
}
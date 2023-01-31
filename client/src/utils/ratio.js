const ratioPrice = (num1, num2, isGiveBtc = false, isTakeBtc = false) => {
    let division = num1 / num2
    if (isGiveBtc) {
        division = (num1 / num2)
    }
    if (isTakeBtc) {
        division = (num2 / num1)
    }
    if (String(Math.floor(division)).length > 3) return division.toFixed(1)
    if (division < 0.009) return division.toFixed(5)
    if (division < 1) return division.toFixed(4)
    return division.toFixed(3)
}

export default ratioPrice
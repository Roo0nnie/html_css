const convertToWords = () => {
    let words = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let inputNumber = document.getElementById('inputNumber').value;
    return inputNumber;
}
document.getElementById('inputNumber').innerHTML = convertToWords;
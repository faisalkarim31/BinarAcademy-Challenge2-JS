function checkTypeNumber(givenNumber) {
    if (typeof givenNumber == 'number') {
        if (givenNumber % 2 == 0) {
            return givenNumber = 'Genap';
        } else if (givenNumber % 1 == 0) {
            return givenNumber = 'Ganjil';
        }
    } else if (typeof givenNumber === 'undefined') {
        return 'Error: Bro where is the parameter';
    } else {
        return 'Error: Invalid data type';
    }

}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber('3'));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
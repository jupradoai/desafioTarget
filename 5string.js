function inverterString(str) {
    let invertedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    return invertedStr;
}


const stringTeste = "Target!";
console.log("String original:", stringTeste);
console.log("String invertida:", inverterString(stringTeste));


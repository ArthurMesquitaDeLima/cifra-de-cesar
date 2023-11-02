let mes = prompt('Digite algo que será criptografado pela cifra de cesar:').toLowerCase();

let mesOriginalEl = document.querySelector('#mesOriginal span');
let mesEncryptedlEl = document.querySelector('#mesEncrypted span');

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let cripto = '';
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
for (let index = 0; index < mes.length; index++) {
    const char = mes[index];

    console.log(char, typeof(char), isNaN(parseInt(char)));

    if (char === ' ') {
        cripto += char;
        continue;
    } 

    let position = alfabeto.indexOf(char);

    if(char === undefined || isNaN(parseInt(char)) === false) {
        cripto = 'Error, caracteres não suportados.' // 
        break;
    }

    if (position + 3 > alfabeto.length - 1) {
        position = position - alfabeto.length;
    }
    
    const charCripto = alfabeto[position + 3];
    cripto += charCripto;  
}

mesOriginalEl.innerHTML += mes;
mesEncryptedlEl.innerHTML += cripto;
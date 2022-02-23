const matematika = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
};

let pirmas = document.querySelector('#first_number');
let antras = document.querySelector('#second_number');
let veiksmas = document.querySelector('#action');
let mygtukas = document.querySelector('button');
let pasirinkimas = document.querySelector('option');
console.log(mygtukas.value);

mygtukas.addEventListener("click", () => {
    console.log(pirmas.value, veiksmas.value, antras.value);
    if (pirmas.value === '' || antras.value === ''){
        document.querySelector('.result').innerHTML = `Neirasytas skaicius.`;
    }
    else if (veiksmas.value === '+'){
        let rezultatas = Number(pirmas.value) + Number(antras.value);
        document.querySelector('.result').innerHTML = `${pirmas.value} ${veiksmas.value} ${antras.value} = ${rezultatas}`;
    }
    else if (veiksmas.value === '-'){
        let rezultatas = Number(pirmas.value) - Number(antras.value);
        document.querySelector('.result').innerHTML = `${pirmas.value} ${veiksmas.value} ${antras.value} = ${rezultatas}`;
    }
    else if (veiksmas.value === '/'){
        let rezultatas = Number(pirmas.value) / Number(antras.value);
        document.querySelector('.result').innerHTML = `${pirmas.value} ${veiksmas.value} ${antras.value} = ${rezultatas}`;
    }
    else if (veiksmas.value === '*'){
        let rezultatas = Number(pirmas.value) * Number(antras.value);
        document.querySelector('.result').innerHTML = `${pirmas.value} ${veiksmas.value} ${antras.value} = ${rezultatas}`;
    }
    
});


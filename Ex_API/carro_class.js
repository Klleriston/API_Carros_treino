class Carro {
    constructor(marca, modelo, categoria, ano, quilometragem, valor) {
        this.marca = marca;
        this.modelo = modelo;
        this.categoria = categoria;
        this.ano = ano;
        this.quilometragem = quilometragem;
        this.valor = valor;
    }
}

function Get() {
    return fetch('https://apigenerator.dronahq.com/api/az0XP0WJ/carro').then((response) => response.json()).then((data) => console.log(data));
}

async function postData(url = 'https://apigenerator.dronahq.com/api/az0XP0WJ/carro/2', data = {   }) {

    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

 const lancer = new Carro("Mitsubishi", "Lancer Evolution", "Esportivo", 2022, 0, 80000);

// postData('https://apigenerator.dronahq.com/api/az0XP0WJ/carro',lancer)
//     .then((data) => {
//         console.log(data);
//     });

 const m3 =  new Carro('BMW', 'M3', 'Esportivo', 2022, 5000, 90000);

// postData('https://apigenerator.dronahq.com/api/az0XP0WJ/carro',m3)
//     .then((data) => {
//         console.log(data);
//     });


    async function deleteData(url = 'https://apigenerator.dronahq.com/api/az0XP0WJ/carro/2') {

    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',

    });
    return response.json();
}


// deleteData('https://apigenerator.dronahq.com/api/az0XP0WJ/carro/28')
//     .then((data) => {
//         console.log(data);
//     });
// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",
            "cidade": "Belo Horizonte",
            "categoria": "Nutricionista",
            "email": "Sincere@april.biz",
            "telefone": "1-770-736-8031"
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "cidade": "Betim",
            "categoria": "Treinador",
            "email": "Shanna@melissa.tv",
            "telefone": "010-692-6593"
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "cidade": "Rio de Janeiro",
            "categoria": "Nutricionista",
            "email": "Nathan@yesenia.net",
            "telefone": "1-463-123-4447"
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "cidade": "Betim",
            "categoria": "Nutricionista",
            "email": "Julianne.OConner@kory.org",
            "telefone": "493-170-9623 x156"
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "cidade": "São Paulo",
            "categoria": "Treinador",
            "email": "Lucio_Hettinger@annie.ca",
            "telefone": "(254)954-1289"
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "cidade": "Rio de Janeiro",
            "categoria": "Treinador",
            "email": "Karley_Dach@jasper.info",
            "telefone": "1-477-935-8478"
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "cidade": "Belo Horizonte",
            "categoria": "Nutricionista",
            "email": "Telly.Hoeger@billy.biz",
            "telefone": "210.067.6132"
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "cidade": "Belo Horizonte",
            "categoria": "Treinador",
            "email": "Sherwood@rosamond.me",
            "telefone": "586.493.6943"
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "cidade": "Betim",
            "categoria": "Treinador",
            "email": "Chaim_McDermott@dana.io",
            "telefone": "(775)976-6794"
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "cidade": "São Paulo",
            "categoria": "Nutricionista",
            "email": "Rey.Padberg@karina.biz",
            "telefone": "024-648-3804"
        },
        {
            "id": 11,
            "nome": "Guilherme Santos",
            "cidade": "Belo Horizonte",
            "categoria": "Treinador",
            "email": "guisantos@gmail.com",
            "telefone": "3456772345"
        },
        {
            "id": 12,
            "nome": "Beatriz Demetrio",
            "cidade": "São Paulo",
            "categoria": "Nutricionista",
            "email": "bdp@gmail.com",
            "telefone": "657995326"
        },
        {
            "id": 13,
            "nome": "Gabriela Peixoto",
            "cidade": "São Paulo",
            "categoria": "Treinador",
            "email": "gabip@gmail.com",
            "telefone": "908435786"
        },
        {
            "id": 14,
            "nome": "Jenifer Lopes",
            "cidade": "Betim",
            "categoria": "Nutricionista",
            "email": "Jelopes@gmail.com",
            "telefone": "234958761"
        },
        {
            "id": 15,
            "nome": "Rubens Berrichelo",
            "cidade": "Rio de Janeiro",
            "categoria": "Treinador",
            "email": "rb1@gmail.com",
            "telefone": "723649426"
        },
        {
            "id": 16,
            "nome": "Luis Amilton",
            "cidade": "Rio de Janeiro",
            "categoria": "Nutricionista",
            "email": "lh44@gmail.com",
            "telefone": "384752923"
        },
        {
            "id": 17,
            "nome": "Lucas Dias",
            "cidade": "Belo Horizonte",
            "categoria": "Treinador",
            "email": "luquinhas@gmail.com",
            "telefone": "934785087"
        },
        {
            "id": 18,
            "nome": "Alice Gomes",
            "cidade": "São Paulo",
            "categoria": "Nutricionista",
            "email": "lilig@gmail.com",
            "telefone": "123182745"
        },
        {
            "id": 19,
            "nome": "Stella Padrão",
            "cidade": "Betim",
            "categoria": "Nutricionista",
            "email": "tetela@gmail.com",
            "telefone": "782364256"
        },
        {
            "id": 20,
            "nome": "Bernardo Arantes",
            "cidade": "Rio de Janeiro",
            "categoria": "Treinador",
            "email": "bearantes@gmail.com",
            "telefone": "38495762"
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

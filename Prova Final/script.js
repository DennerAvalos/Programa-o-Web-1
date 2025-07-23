document.addEventListener('DOMContentLoaded', () => {
    const livros = [
          {
            codigo: "LIV001",
            titulo: "O Senhor dos Anéis: A Sociedade do Anel",
            autor: "J.R.R. Tolkien",
            genero: "Fantasia",
            descricao: "Uma jornada épica para destruir um anel de poder e salvar a Terra-média da escuridão, começando a jornada de Frodo Bolseiro.",
            imagem: "imagens/senhorDosAneis.jpg"
        },
        {
            codigo: "LIV002",
            titulo: "O Senhor dos Anéis: As Duas Torres",
            autor: "J.R.R. Tolkien",
            descricao: "O segundo volume narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron.",
            imagem: "imagens/senhorDosAneis2.jpg"
        },
        {
            codigo: "LIV003",
            titulo: "Mitologia Nórdica",
            autor: "Neil Gaiman",
            descricao: "Neil Gaiman apresenta os contos dos deuses nórdicos, desde a gênese do mundo ao crepúsculo dos deuses (Ragnarök).",
            imagem: "imagens/Mitologia.jpg"
        },
        {
            codigo: "LIV004",
            titulo: "O Meu Pé de Laranja Lima",
            autor: "José Mauro de Vasconcelos",
            descricao: "A história de Zezé, um menino de seis anos que se refugia em sua imaginação para escapar de uma dura realidade.",
            imagem: "imagens/PéLaranja.jpg"
        },
        {
            codigo: "LIV005",
            titulo: "Watchmen",
            autor: "Alan Moore e Dave Gibbons",
            descricao: "Em um mundo alternativo, um grupo de heróis investiga um assassinato que os leva a uma conspiração que pode mudar o mundo.",
            imagem: "imagens/Watchmen.jpg"
        },
        {
            codigo: "LIV006",
            titulo: "Reino do Amanhã",
            autor: "Mark Waid e Alex Ross",
            descricao: "Em um futuro com super-heróis irresponsáveis, um Superman aposentado é forçado a voltar para restaurar a ordem.",
            imagem: "imagens/reinoAmanha.jpg"
        },
        {
            codigo: "LIV007",
            titulo: "Batman: A Piada Mortal",
            autor: "Alan Moore e Brian Bolland",
            descricao: "Uma história sobre a origem do Coringa e seu plano para provar que um dia ruim é o suficiente para enlouquecer qualquer um.",
            imagem: "imagens/PiadaMortal.jpg"
        },
        {
            codigo: "LIV008",
            titulo: "Batman: Silêncio",
            autor: "Jeph Loeb e Jim Lee",
            descricao: "Um misterioso vilão chamado Silêncio manipula a galeria de vilões de Gotham para destruir o Batman física e psicologicamente.",
            imagem: "imagens/BatSilencio.jpg"
        },
        {
            codigo: "LIV009",
            titulo: "Batman Terra Um (Omnibus)",
            autor: "Geoff Johns e Gary Frank",
            descricao: "Uma reinterpretação moderna e mais realista da origem do Batman, focando em um Bruce Wayne mais falho e em sua vingança.",
            imagem: "imagens/BatTerra.jpg"
        },
        {
            codigo: "LIV010",
            titulo: "Spawn: Origens Vol. 1",
            autor: "Todd McFarlane",
            descricao: "O início da saga de Al Simmons, um agente morto que retorna como um Hellspawn para rever sua esposa, mas se torna o protetor dos becos.",
            imagem: "imagens/Spawn1.jpg"
        },
        {
            codigo: "LIV011",
            titulo: "Spawn: Origens Vol. 2",
            autor: "Todd McFarlane, Alan Moore, Neil Gaiman",
            descricao: "Traz histórias de grandes autores convidados, explorando o passado de outros Spawns e introduzindo a caçadora de Spawns, Angela.",
            imagem: "imagens/Spawn2.jpg"
        },
        {
            codigo: "LIV012",
            titulo: "Spawn: Origens Vol. 3",
            autor: "Todd McFarlane, Grant Morrison, Greg Capullo",
            descricao: "Spawn enfrenta novos desafios e descobre mais sobre a conspiração entre o Céu e o Inferno, com a introdução do Anti-Spawn.",
            imagem: "imagens/Spawn3.jpg"
        },
        {
            codigo: "LIV013",
            titulo: "Spawn: Origens Vol. 4",
            autor: "Todd McFarlane, Greg Capullo, Marc Silvestri",
              genero: "Fantasia",
            descricao: "A guerra de gangues se intensifica com o retorno do ciborgue Chacina, forçando Spawn a proteger Terry Fitzgerald e sua família.",
            imagem: "imagens/Spawn4.jpg"
        },
        {
            codigo: "LIV014",
            titulo: "Spawn: Origens Vol. 5",
            autor: "Todd McFarlane, Greg Capullo",
            genero: "Ação",
            descricao: "Spawn enfrenta o fanático religioso Maldição e lida com as consequências de sua aparência monstruosa ao tentar se aproximar de Wanda.",
            imagem: "imagens/Spawn5.jpg"
        },
        {
            codigo: "LIV015",
            titulo: "Spawn: Origens Vol. 6",
            autor: "Todd McFarlane, Grant Morrison, Greg Capullo",
            genero: "Ação",
            descricao: "O Violador retorna para atormentar Spawn, enquanto a trama política envolvendo Jason Wynn e Terry Fitzgerald se aprofunda.",
            imagem: "imagens/Spawn6.jpg"
        },
        {
            codigo: "LIV016",
            titulo: "Spawn: Origens Vol. 7",
            autor: "Todd McFarlane, Greg Capullo",
              genero: "Ação",
            descricao: "Spawn é capturado pelo Maldição e perde seu traje. Ao mesmo tempo, a monstruosa criação cibernética Cy-Gor escapa.",
            imagem: "imagens/Spawn7.jpg"
        }
    ];

    // REFERÊNCIAS AOS ELEMENTOS DO HTML (DOM)
    const bookCollectionContainer = document.getElementById('book-collection');
    const searchInput = document.getElementById('searchInput');
    const filterByNameOnlyCheckbox = document.getElementById('filterByNameOnly');
   

    //FUNÇÃO PARA RENDERIZAR OS LIVROS NA TELA 
    function renderBooks(booksToRender) {
        bookCollectionContainer.innerHTML = '';
        if (booksToRender.length === 0) {
            bookCollectionContainer.innerHTML = '<p>Nenhum livro encontrado com este critério.</p>';
            return;
        }
        booksToRender.forEach(livro => {
            const card = `
                <div class="book-card">
                    <img src="${livro.imagem}" alt="Capa do livro ${livro.titulo}" class="book-cover">
                    <h2 class="book-title">${livro.titulo}</h2>
                    <p class="book-author">${livro.autor}</p>
                    <p class="book-description">${livro.descricao}</p>
                    <span class="book-code">Código: ${livro.codigo}</span>
                </div>
            `;
            bookCollectionContainer.innerHTML += card;
        });
    }

    // FUNÇÃO PARA FILTRAR OS LIVROS 
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const isNameOnly = filterByNameOnlyCheckbox.checked;
        const filteredBooks = livros.filter(livro => {
            if (isNameOnly) {
                return livro.titulo.toLowerCase().includes(searchTerm);
            } else {
                const fullText = `${livro.titulo} ${livro.autor} ${livro.descricao} ${livro.codigo}`.toLowerCase();
                return fullText.includes(searchTerm);
            }
        });
        renderBooks(filteredBooks);
    }

    //  EVENT LISTENERS 
    searchInput.addEventListener('input', filterBooks);
    filterByNameOnlyCheckbox.addEventListener('change', filterBooks);

    // RENDERIZAÇÃO INICIAL
    renderBooks(livros);
});
// ===============================
// B.1 - Definição dos dados JSON
// ===============================

const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["Ficção científica", "Drama", "Aventura"],
        personagens: ["Cooper", "Murph", "Brand"],
        nota: 9.6,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "série",
        ano: 2008,
        generos: ["Drama", "Crime"],
        personagens: ["Walter White", "Jesse Pinkman", "Skyler"],
        nota: 9.8,
        assistido: true
    },
    {
        id: 3,
        titulo: "Naruto",
        tipo: "anime",
        ano: 2002,
        generos: ["Ação", "Aventura", "Fantasia"],
        personagens: ["Naruto", "Sasuke", "Sakura"],
        nota: 8.7,
        assistido: true
    },
    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "série",
        ano: 2016,
        generos: ["Suspense", "Ficção científica"],
        personagens: ["Eleven", "Mike", "Dustin"],
        nota: 8.5,
        assistido: true
    },
    {
        id: 5,
        titulo: "Oppenheimer",
        tipo: "filme",
        ano: 2023,
        generos: ["Biografia", "Drama", "História"],
        personagens: ["Oppenheimer", "Kitty", "Leslie"],
        nota: 9.1,
        assistido: false
    },
    {
        id: 6,
        titulo: "One Piece",
        tipo: "anime",
        ano: 1999,
        generos: ["Aventura", "Ação", "Comédia"],
        personagens: ["Luffy", "Zoro", "Nami"],
        nota: 9.4,
        assistido: false
    }
];

// ===============================
// B.2 - Acesso e leitura dos dados
// ===============================

console.log("Catálogo completo:");
console.log(catalogo);

console.log("Título do primeiro item:");
console.log(catalogo[0].titulo);

console.log("Ano do último item:");
console.log(catalogo[catalogo.length - 1].ano);

console.log("Segundo gênero do terceiro item:");
console.log(catalogo[2].generos[1]);

// ===============================
// B.3 - Iterações com iteradores
// ===============================

// A) Listagem com forEach
console.log("A) Listagem dos títulos:");

catalogo.forEach((item) => {
    console.log(`[${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B) Transformação com map
console.log("B) Títulos em maiúsculo:");

const titulosMaiusculos = catalogo.map((item) => {
    return item.titulo.toUpperCase();
});

console.log(titulosMaiusculos);

// C) Seleção com filter
console.log("C) Itens assistidos com nota maior ou igual a 8:");

const notaAssistidos = catalogo.filter((item) => {
    return item.assistido === true && item.nota >= 8;
});

console.log(notaAssistidos);

// D) Busca com find
console.log("D) Primeiro item com nota maior que 9:");

const itemNotaAlta = catalogo.find((item) => {
    return item.nota > 9;
});

if (itemNotaAlta) {
    console.log(itemNotaAlta);
} else {
    console.log("Nenhum item encontrado com nota maior que 9.");
}

// E) Agregação com reduce
console.log("E) Agregações com reduce:");

const somaNotas = catalogo.reduce((soma, item) => {
    return soma + item.nota;
}, 0);

const mediaNotas = somaNotas / catalogo.length;

console.log("Média das notas do catálogo:");
console.log(mediaNotas.toFixed(2));

const assistidos = catalogo.filter((item) => {
    return item.assistido === true;
});

const somaNotasAssistidos = assistidos.reduce((soma, item) => {
    return soma + item.nota;
}, 0);

const mediaNotasAssistidos = somaNotasAssistidos / assistidos.length;

console.log("Média das notas dos itens assistidos:");
console.log(mediaNotasAssistidos.toFixed(2));

const totalPersonagens = catalogo.reduce((total, item) => {
    return total + item.personagens.length;
}, 0);

console.log("Total de personagens cadastrados:");
console.log(totalPersonagens);

// F) Checagens com some e every
console.log("F) Checagens com some e every:");

const existeItemNovo = catalogo.some((item) => {
    return item.ano > 2000;
});

console.log("Existe algum item com ano maior que 2000?");
console.log(existeItemNovo);

const todosTemGenero = catalogo.every((item) => {
    return item.generos.length > 0;
});

console.log("Todos os itens têm pelo menos um gênero?");
console.log(todosTemGenero);

// ===============================
// B.4 - Saída na tela DOM simples
// ===============================

const output = document.getElementById("output");

const totalItens = catalogo.length;

const quantidadeFilmes = catalogo.filter((item) => {
    return item.tipo === "filme";
}).length;

const quantidadeNaoAssistidos = catalogo.filter((item) => {
    return item.assistido === false;
}).length;

const ranking = [...catalogo]
    .sort((a, b) => {
        return b.nota - a.nota;
    })
    .slice(0, 3);

const rankingHTML = ranking.map((item) => {
    return `<li>${item.titulo} - Nota: ${item.nota}</li>`;
}).join("");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${totalItens}</p>
    <p><strong>Quantidade de filmes:</strong> ${quantidadeFilmes}</p>
    <p><strong>Quantidade de não assistidos:</strong> ${quantidadeNaoAssistidos}</p>
    <p><strong>Média geral das notas:</strong> ${mediaNotas.toFixed(2)}</p>

    <h3>Top 3 maiores notas</h3>
    <ol>
        ${rankingHTML}
    </ol>
`;
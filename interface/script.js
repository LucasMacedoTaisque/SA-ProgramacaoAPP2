// ==========================================
// NOVATECH DELIVERY - SCRIPT.JS
// Arquivo responsável pelo funcionamento do site
// ==========================================


// ---------- DADOS DOS RESTAURANTES ----------

// Lista dos possíveis status de um pedido
const STATUS = ["Em preparação", "A caminho", "Entregue"];

// Armazena os restaurantes, horários, descrições,
// fotos e produtos disponíveis em cada estabelecimento
const restaurantes = {

    // Primeiro restaurante
    "Pizzaria Napoli": {
        abre: 18, // Horário de abertura
        fecha: 23, // Horário de fechamento
        descricao: "Pizzas deliciosas preparadas na hora!",
        foto: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",

        // Produtos disponíveis na pizzaria
        itens: [
            { nome: "Margherita", preco: 40, foto: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600" },
            { nome: "Calabresa", preco: 42, foto: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600" },
            { nome: "Frango com Catupiry", preco: 48, foto: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600" },
            { nome: "Quatro Queijos", preco: 50, foto: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600" },
            { nome: "Portuguesa", preco: 46, foto: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600" },
            { nome: "Pizza de Chocolate", preco: 45, foto: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600" }
        ]
    },

    // Segundo restaurante
    "Burger Z": {
        abre: 11,
        fecha: 22,
        descricao: "Hambúrgueres artesanais e muito saborosos!",
        foto: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",

        // Produtos disponíveis na hamburgueria
        itens: [
            { nome: "X-Burger", preco: 25, foto: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" },
            { nome: "X-Bacon", preco: 30, foto: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=600" },
            { nome: "X-Salada", preco: 28, foto: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600" },
            { nome: "X-Tudo", preco: 35, foto: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600" },
            { nome: "Batata Frita", preco: 15, foto: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600" },
            { nome: "Onion Rings", preco: 18, foto: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600" }
        ]
    },

    // Terceiro restaurante
    "Padaria Central": {
        abre: 6,
        fecha: 12,
        descricao: "Pães fresquinhos, cafés e lanches para começar o dia!",
        foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",

        // Produtos disponíveis na padaria
        itens: [
            { nome: "Pão Francês", preco: 1.50, foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600" },
            { nome: "Pão de Queijo", preco: 5, foto: "https://images.unsplash.com/photo-1608198093002-ad4e005484f7?w=600" },
            { nome: "Coxinha", preco: 8, foto: "https://images.unsplash.com/photo-1627054248943-2c2c7e7e7e7e?w=600" },
            { nome: "Misto Quente", preco: 12, foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600" },
            { nome: "Café", preco: 5, foto: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" },
            { nome: "Suco Natural", preco: 8, foto: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600" }
        ]
    },

    // Quarto restaurante
    "Sushi House": {
        abre: 18,
        fecha: 23,
        descricao: "A culinária japonesa com muito sabor e qualidade!",
        foto: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",

        // Produtos disponíveis no restaurante japonês
        itens: [
            { nome: "Combo Sushi 10 peças", preco: 35, foto: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600" },
            { nome: "Combo Sushi 20 peças", preco: 60, foto: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600" },
            { nome: "Hot Roll", preco: 28, foto: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600" },
            { nome: "Temaki de Salmão", preco: 32, foto: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600" },
            { nome: "Yakisoba", preco: 38, foto: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600" },
            { nome: "Guioza", preco: 18, foto: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600" }
        ]
    },

    // Quinto restaurante
    "Cantina Bella": {
        abre: 11,
        fecha: 15,
        descricao: "Massas italianas preparadas com receitas especiais!",
        foto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",

        // Produtos disponíveis na cantina
        itens: [
            { nome: "Macarrão à Bolonhesa", preco: 32, foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600" },
            { nome: "Lasanha de Queijo", preco: 35, foto: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600" },
            { nome: "Lasanha à Bolonhesa", preco: 38, foto: "https://images.unsplash.com/photo-1619895092538-128341789043?w=600" },
            { nome: "Nhoque ao Sugo", preco: 34, foto: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600" },
            { nome: "Ravioli de Queijo", preco: 36, foto: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=600" },
            { nome: "Frango à Parmegiana", preco: 42, foto: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600" }
        ]
    },

    // Sexto restaurante
    "Açaí Tropical": {
        abre: 12,
        fecha: 22,
        descricao: "Açaís, frutas e sobremesas para refrescar seu dia!",
        foto: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800",

        // Produtos disponíveis na loja de açaí
        itens: [
            { nome: "Açaí 300ml", preco: 15, foto: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600" },
            { nome: "Açaí 500ml", preco: 22, foto: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600" },
            { nome: "Açaí 700ml", preco: 29, foto: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600" },
            { nome: "Açaí com Morango", preco: 25, foto: "https://images.unsplash.com/photo- Strawberry?w=600" },
            { nome: "Açaí com Nutella", preco: 28, foto: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600" },
            { nome: "Milk-shake de Chocolate", preco: 18, foto: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600" }
        ]
    }
};


// ---------- DADOS DOS USUÁRIOS E PEDIDOS ----------

// Guarda os nomes dos usuários e seus endereços
const contas = {};

// Guarda todos os pedidos realizados
const pedidos = {};

// Número utilizado para identificar cada pedido
let codigo = 1;

// Guarda o nome do usuário que está conectado
let nome = "";

// Guarda o restaurante selecionado
let restAtual = "";

// Guarda o produto escolhido pelo cliente
let itemAtual = null;

// Identifica se o endereço está sendo cadastrado
// para um pedido ou apenas editado
let modoEndereco = "pedido";


// ---------- FUNÇÕES AUXILIARES ----------

// Atalho para encontrar elementos HTML pelo ID
const $ = (id) => document.getElementById(id);


// Mostra uma tela e esconde as outras
function mostrar(id) {
    document.querySelectorAll("main section").forEach((secao) => {
        secao.hidden = secao.id !== id;
    });
}


// Cria elementos HTML pelo JavaScript
function criar(tag, texto, classe) {
    const elemento = document.createElement(tag);

    // Coloca o texto dentro do elemento
    elemento.textContent = texto;

    // Adiciona uma classe CSS, caso ela seja informada
    if (classe) {
        elemento.className = classe;
    }

    // Retorna o elemento criado
    return elemento;
}


// Formata os valores para o padrão de moeda brasileira
function preco(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}


// Verifica se o restaurante está aberto no horário atual
function estaAberto(restaurante) {
    const hora = new Date().getHours();

    // Compara a hora atual com o horário de funcionamento
    return hora >= restaurante.abre &&
           hora < restaurante.fecha;
}


// Cria imagens pelo JavaScript
function criarImagem(url, descricao, classe) {
    const imagem = document.createElement("img");

    // Define o endereço da imagem
    imagem.src = url;

    // Define um texto alternativo para acessibilidade
    imagem.alt = descricao;

    // Adiciona a classe CSS da imagem
    imagem.className = classe;

    // Carrega a imagem somente quando necessário
    imagem.loading = "lazy";

    // Esconde a imagem caso o endereço esteja quebrado
    imagem.onerror = () => {
        imagem.style.display = "none";
    };

    return imagem;
}


// ---------- RELÓGIO ----------

// Atualiza o relógio que aparece no cabeçalho
function atualizarRelogio() {
    $("relogio").textContent =
        new Date().toLocaleTimeString("pt-BR");
}

// Mostra o horário assim que o site é iniciado
atualizarRelogio();

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);


// ---------- CRIAR CONTA ----------

// Cadastra o usuário usando o nome informado
function criarConta() {
    // Pega o nome e remove espaços extras
    const valor = $("nome").value.trim();

    // Verifica se foram digitadas somente letras e espaços
    if (!/^[A-Za-zÀ-ÿ ]+$/.test(valor)) {
        $("erroNome").textContent = "Utilize apenas letras.";
        return;
    }

    // Limpa a mensagem de erro
    $("erroNome").textContent = "";

    // Guarda o nome do usuário
    nome = valor;

    // Cria uma conta caso ela ainda não exista
    if (!(nome in contas)) {
        contas[nome] = "";
    }

    // Mostra o menu de navegação
    $("menu").hidden = false;

    // Se já existe um produto escolhido,
    // continua o processo de fazer o pedido
    if (itemAtual && restAtual) {
        abrirTelaEndereco("pedido");
    } else {
        listarRestaurantes();
    }
}


// Desconecta o usuário da conta
function sair() {
    nome = "";
    itemAtual = null;

    // Limpa o campo de nome
    $("nome").value = "";

    // Esconde o menu
    $("menu").hidden = true;

    // Volta para a tela de cadastro
    mostrar("conta");
}


// ---------- RESTAURANTES ----------

// Exibe a lista de restaurantes
function listarRestaurantes() {
    // Limpa possíveis mensagens de aviso
    $("avisoRest").textContent = "";

    // Limpa o campo de pesquisa
    $("busca").value = "";

    // Mostra todos os restaurantes
    renderizarRestaurantes("");

    // Abre a tela de restaurantes
    mostrar("restaurantes");
}


// Cria os cartões dos restaurantes na página
function renderizarRestaurantes(pesquisa) {
    const lista = $("listaRest");

    // Limpa os cartões anteriores
    lista.innerHTML = "";

    // Percorre todos os restaurantes cadastrados
    for (const [nomeRest, restaurante] of Object.entries(restaurantes)) {

        // Verifica se o nome do restaurante combina com a pesquisa
        const combinaNome = nomeRest.toLowerCase().includes(pesquisa);

        // Verifica se algum produto combina com a pesquisa
        const combinaItem = restaurante.itens.some((item) =>
            item.nome.toLowerCase().includes(pesquisa)
        );

        // Pula o restaurante se não houver correspondência
        if (!combinaNome && !combinaItem) {
            continue;
        }

        // Verifica se o restaurante está aberto
        const aberto = estaAberto(restaurante);

        // Cria o botão que representa o restaurante
        const botao = document.createElement("button");
        botao.className = "cartao cartao-restaurante";
        botao.type = "button";

        // Cria a imagem do restaurante
        const imagem = criarImagem(
            restaurante.foto,
            "Foto de " + nomeRest,
            "imagem-cartao-restaurante"
        );

        // Cria a área que contém as informações
        const informacoes = document.createElement("div");
        informacoes.className = "informacoes-cartao";

        // Adiciona nome, situação e horário de funcionamento
        informacoes.append(
            criar("span", nomeRest, "cartao-nome"),
            criar(
                "span",
                aberto ? "ABERTO" : "FECHADO",
                aberto ? "selo aberto" : "selo fechado"
            ),
            criar(
                "small",
                `Funcionamento: ${restaurante.abre}h às ${restaurante.fecha}h`
            )
        );

        // Coloca a imagem e as informações dentro do botão
        botao.append(imagem, informacoes);

        // Abre o cardápio quando o cartão é clicado
        botao.onclick = () => abrirCardapio(nomeRest);

        // Adiciona o cartão à lista
        lista.append(botao);
    }

    // Mostra uma mensagem caso nenhum resultado seja encontrado
    if (!lista.children.length) {
        lista.append(
            criar("p", "Nenhum restaurante ou comida encontrado.", "vazio")
        );
    }
}


// ---------- CARDÁPIO ----------

// Prepara a foto e a descrição do restaurante selecionado
function prepararCabecalhoCardapio(restaurante) {
    const cabecalho = document.querySelector(".cabecalho-cardapio");

    // Encerra a função se o cabeçalho não existir
    if (!cabecalho) return;

    // Procura a imagem do restaurante pelo ID
    let imagem = $("imagemRestaurante");

    // Cria a imagem caso ela ainda não exista no HTML
    if (!imagem) {
        imagem = document.createElement("img");
        imagem.id = "imagemRestaurante";
        imagem.className = "imagem-restaurante";
        cabecalho.prepend(imagem);
    }

    // Define a foto e o texto alternativo
    imagem.src = restaurante.foto;
    imagem.alt = "Foto do restaurante " + restAtual;

    // Esconde a imagem caso ela não carregue
    imagem.onerror = () => {
        imagem.style.display = "none";
    };

    // Procura o campo de descrição
    let descricao = $("descricaoCardapio");

    // Tenta encontrar um parágrafo caso o ID não exista
    if (!descricao) {
        descricao = cabecalho.querySelector("p");

        if (descricao) {
            descricao.id = "descricaoCardapio";
        }
    }

    // Atualiza a descrição do restaurante
    if (descricao) {
        descricao.textContent = restaurante.descricao;
    }
}


// Abre o cardápio do restaurante selecionado
function abrirCardapio(nomeRest) {
    // Busca os dados do restaurante pelo nome
    const restaurante = restaurantes[nomeRest];

    // Encerra se o restaurante não existir
    if (!restaurante) return;

    // Guarda o restaurante selecionado
    restAtual = nomeRest;

    // Atualiza o título do cardápio
    $("tituloCardapio").textContent = nomeRest;

    // Atualiza a foto e a descrição do cabeçalho
    prepararCabecalhoCardapio(restaurante);

    // Encontra a lista de produtos
    const lista = $("listaItens");

    // Limpa os produtos anteriores
    lista.innerHTML = "";

    // Verifica se o restaurante está aberto
    const aberto = estaAberto(restaurante);

    // Mostra um aviso caso esteja fechado
    if (!aberto) {
        lista.append(
            criar(
                "p",
                `Restaurante fechado. Funcionamento: ${restaurante.abre}h às ${restaurante.fecha}h.`,
                "aviso-fechado"
            )
        );
    }

    // Percorre e mostra somente os produtos deste restaurante
    restaurante.itens.forEach((item) => {

        // Cria um botão para cada produto
        const botao = document.createElement("button");

        botao.className = "cartao cartao-comida";
        botao.type = "button";

        // Cria a imagem do produto
        const imagem = criarImagem(
            item.foto,
            "Foto de " + item.nome,
            "imagem-comida"
        );

        // Cria a área das informações do produto
        const informacoes = document.createElement("div");
        informacoes.className = "informacoes-cartao";

        // Adiciona nome e preço do produto
        informacoes.append(
            criar("span", item.nome, "cartao-nome"),
            criar("span", preco(item.preco), "preco")
        );

        // Coloca a imagem e as informações no botão
        botao.append(imagem, informacoes);

        // Desativa a compra se o restaurante estiver fechado
        if (!aberto) {
            botao.disabled = true;
        } else {
            // Seleciona o produto quando o botão é clicado
            botao.onclick = () => escolherItem(item);
        }

        // Adiciona o produto ao cardápio
        lista.append(botao);
    });

    // Abre a tela do cardápio
    mostrar("cardapio");
}


// ---------- ENDEREÇO ----------

// Abre a tela para cadastrar ou editar o endereço
function abrirTelaEndereco(modo) {
    // Guarda o tipo de operação
    modoEndereco = modo;

    // Limpa os campos do endereço
    ["rua", "numero", "bairro"].forEach((campo) => {
        $(campo).value = "";
    });

    // Limpa mensagens de erro anteriores
    $("erroEndereco").textContent = "";

    // Configura a tela quando o objetivo é fazer um pedido
    if (modo === "pedido") {
        $("itemEscolhido").textContent =
            `${itemAtual.nome} (${restAtual}) - ${preco(itemAtual.preco)}`;

        $("btnEndereco").textContent = "Fazer pedido";

    } else {
        // Configura a tela quando o objetivo é editar o endereço
        $("itemEscolhido").textContent = "";
        $("btnEndereco").textContent = "Salvar endereço";
    }

    // Mostra a tela de endereço
    mostrar("endereco");
}


// Guarda o produto escolhido pelo cliente
function escolherItem(item) {
    itemAtual = item;

    // Se não houver usuário conectado, pede o cadastro
    if (!nome) {
        mostrar("conta");
        return;
    }

    // Abre a tela para informar o endereço
    abrirTelaEndereco("pedido");
}


// Abre a tela para editar o endereço cadastrado
function editarEndereco() {
    abrirTelaEndereco("editar");
}


// Confirma o endereço e cria o pedido
function confirmarEndereco() {

    // Pega os valores digitados pelo cliente
    const rua = $("rua").value.trim();
    const numero = $("numero").value.trim();
    const bairro = $("bairro").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (!rua || !numero || !bairro) {
        $("erroEndereco").textContent =
            "Preencha rua, número e bairro.";
        return;
    }

    // Verifica se o número possui somente algarismos
    if (!/^\d+$/.test(numero)) {
        $("erroEndereco").textContent =
            "Utilize apenas números no campo número.";
        return;
    }

    // Salva o endereço na conta do usuário
    contas[nome] = `${rua}, ${numero} - ${bairro}`;

    // Se for apenas uma edição, volta para os pedidos
    if (modoEndereco === "editar") {
        abrirPedidos();
        return;
    }

    // Cria um novo pedido com os dados do cliente
    pedidos[codigo] = {
        cliente: nome,
        item: itemAtual.nome,
        rest: restAtual,
        preco: itemAtual.preco,
        endereco: contas[nome],
        status: STATUS[0]
    };

    // Encontra a área do resumo do pedido
    const caixa = $("textoResumo");

    // Limpa o resumo anterior
    caixa.innerHTML = "";

    // Mostra as informações do pedido criado
    caixa.append(
        criar("p", `Código: #${codigo}`, "codigo"),
        criar("p", `Restaurante: ${restAtual}`),
        criar("p", `Comida: ${itemAtual.nome}`),
        criar("p", `Valor: ${preco(itemAtual.preco)}`),
        criar("p", `Entregar em: ${contas[nome]}`),
        criar("p", `Status: ${STATUS[0]}`)
    );

    // Aumenta o código para o próximo pedido
    codigo++;

    // Mostra a tela de resumo
    mostrar("resumo");
}


// ---------- PEDIDOS ----------

// Mostra os pedidos realizados pelo usuário conectado
function abrirPedidos() {

    // Verifica se existe um usuário conectado
    if (!nome) {
        mostrar("conta");
        return;
    }

    // Mostra o nome do usuário
    $("contaNome").textContent = `Nome: ${nome}`;

    // Mostra o endereço cadastrado
    $("contaEndereco").textContent =
        `Endereço: ${contas[nome] || "Nenhum ainda"}`;

    // Encontra a área onde os pedidos serão exibidos
    const lista = $("listaPedidos");

    // Limpa a lista anterior
    lista.innerHTML = "";

    // Controla se o usuário possui algum pedido
    let achou = false;

    // Percorre todos os pedidos cadastrados
    for (const [cod, pedido] of Object.entries(pedidos)) {

        // Ignora pedidos que pertencem a outros usuários
        if (pedido.cliente !== nome) continue;

        achou = true;

        // Cria a caixa que representa o pedido
        const linha = document.createElement("div");
        linha.className = "cartao fixo";

        // Cria a área das informações do pedido
        const info = document.createElement("div");

        // Adiciona código, produto, restaurante, preço e status
        info.append(
            criar("span", `#${cod} - ${pedido.item}`, "cartao-nome"),
            criar("small", pedido.rest),
            criar("small", preco(pedido.preco)),
            criar(
                "span",
                pedido.status,
                "status s" + STATUS.indexOf(pedido.status)
            )
        );

        // Coloca as informações dentro da caixa do pedido
        linha.append(info);

        // Permite cancelar somente pedidos em preparação
        if (pedido.status === STATUS[0]) {

            // Cria o botão de cancelamento
            const cancelar = criar(
                "button",
                "Cancelar pedido",
                "perigo"
            );

            // Chama a função de cancelamento ao clicar
            cancelar.onclick = () => cancelarPedido(cod);

            linha.append(cancelar);
        }

        // Adiciona o pedido à lista
        lista.append(linha);
    }

    // Mostra uma mensagem caso não existam pedidos
    if (!achou) {
        lista.append(
            criar(
                "p",
                "Nenhum pedido ainda. Escolha um restaurante para começar.",
                "vazio"
            )
        );
    }

    // Abre a tela de pedidos
    mostrar("pedidos");
}


// Cancela um pedido que ainda está em preparação
function cancelarPedido(cod) {

    // Confere se o pedido existe, pertence ao usuário
    // e ainda está no primeiro status
    if (
        pedidos[cod] &&
        pedidos[cod].cliente === nome &&
        pedidos[cod].status === STATUS[0]
    ) {
        // Remove o pedido da lista
        delete pedidos[cod];
    }

    // Atualiza a tela de pedidos
    abrirPedidos();
}


// ---------- ADMINISTRAÇÃO ----------

// Cria um botão para cada status disponível
STATUS.forEach((status, indice) => {

    // Cria o botão com o número e o nome do status
    const botao = criar("button", `${indice + 1} - ${status}`);

    // Define o que acontece quando o botão é clicado
    botao.onclick = () => {

        // Pega o código informado pelo administrador
        const cod = $("codigoDono").value.trim();

        // Verifica se o código existe na lista de pedidos
        if (cod in pedidos) {

            // Atualiza o status do pedido
            pedidos[cod].status = status;

            // Mostra uma mensagem de confirmação
            $("msgDono").textContent =
                `Pedido #${cod} agora está: ${status}`;

        } else {
            // Informa que o código não foi encontrado
            $("msgDono").textContent =
                "Código não encontrado.";
        }
    };

    // Adiciona o botão à área de administração
    $("botoesStatus").append(botao);
});


// ---------- PESQUISA ----------

// Detecta quando o usuário digita no campo de busca
$("busca").addEventListener("input", () => {

    // Pega o texto digitado, remove espaços extras
    // e transforma tudo em letras minúsculas
    const pesquisa = $("busca").value.trim().toLowerCase();

    // Atualiza a lista conforme o texto pesquisado
    renderizarRestaurantes(pesquisa);

    // Limpa o aviso se a tela de restaurantes estiver aberta
    if (!$("restaurantes").hidden) {
        $("avisoRest").textContent = "";
    }
});


// ---------- INÍCIO ----------

// Exibe a lista de restaurantes quando o site é carregado
listarRestaurantes();
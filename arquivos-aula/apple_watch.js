const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniatura0 = document.getElementById("0-imagem-miniatura");
const miniatura1 = document.getElementById("1-imagem-miniatura");
const miniatura2 = document.getElementById("2-imagem-miniatura");

const verdeCipreste= {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
}

const azulInverno = {
    nome: "azul-inverno",
    pasta: "imagens-azul-inverno"
}

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
}

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
}

const rosaClaro = {
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro"
}

const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro];
const opcoesTamanho = ["41 mm","45 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    //atualizar as posiçoes do relógio
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";

}

function trocarTamanho() {
    //atualizar o camera do relógio
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //mudar o titulo
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho [tamanhoSelecionado];
    //trocar tamanho do relogio
    if (opcoesTamanho[tamanhoSelecionado] === "41 mm"){
    imagemVisualizacao.classList.add("caixa-pequena");
    }else{
        imagemVisualizacao.classList.remove("caixa-pequena");
    }

}

function trocarCor() {
    //troca cor
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar titulo
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho [tamanhoSelecionado];
    //trocar nome da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;
    //trocar miniaturas
    miniatura0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-0.jpeg";
    miniatura1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-1.jpeg";
    miniatura2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-2.jpeg";
    //trocar imagem de visualizacao
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
}

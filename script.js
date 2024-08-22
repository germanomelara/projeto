const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra um livro antigo na biblioteca da escola que parece ter uma história fascinante. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Adoro livros antigos! Vou levar para casa e ler o quanto antes.",
                afirmacao: "Ficou empolgado com a descoberta e a possibilidade de mergulhar em uma história do passado."
            },
            {
                texto: "Prefiro ler livros mais recentes e modernos. Esse parece muito desatualizado.",
                afirmacao: "Se mostrou mais interessado em literatura contemporânea e menos entusiasmado com o livro antigo."
            }
        ]
    },
    {
        enunciado: "Durante uma aula sobre mudanças climáticas, sua professora pede que você crie um projeto sobre maneiras de reduzir a pegada de carbono pessoal. Qual abordagem você escolhe?",
        alternativas: [
            {
                texto: "Desenvolvo um projeto prático que inclui sugestões específicas para reduzir a pegada de carbono, como mudanças na dieta e no transporte.",
                afirmacao: "Optou por uma abordagem prática e realista para apresentar soluções concretas de redução da pegada de carbono."
            },
            {
                texto: "Faço uma apresentação geral sobre a importância de reduzir a pegada de carbono, destacando estatísticas e impacto ambiental.",
                afirmacao: "Escolheu focar em conscientização e informações gerais para educar sobre a importância da redução da pegada de carbono."
            }
        ]
    },
    {
        enunciado: "Durante uma discussão sobre cultura global, qual aspecto você acha mais importante para promover a compreensão entre diferentes países?",
        alternativas: [
            {
                texto: "O intercâmbio cultural, como viagens e programas de estudo no exterior, para experimentar diretamente outras culturas.",
                afirmacao: "Acredita que a imersão direta em diferentes culturas é a melhor forma de promover a compreensão global."
            },
            {
                texto: "Educação sobre a diversidade cultural e global nas escolas, para aumentar o entendimento desde cedo.",
                afirmacao: "Defende a educação e o aprendizado sobre diferentes culturas como meio fundamental para promover a compreensão global."
            }
        ]
    },
    {
        enunciado: "Você está organizando um evento de arrecadação de fundos para uma causa social. Qual estratégia você adota para garantir o sucesso do evento?",
        alternativas: [
            {
                texto: "Planejo uma série de atividades e atrações para atrair um grande público e garantir a participação ativa da comunidade.",
                afirmacao: "Escolheu uma abordagem dinâmica e diversificada para atrair e engajar o público no evento de arrecadação de fundos."
            },
            {
                texto: "Foco na promoção do evento por meio de campanhas de mídia social e parcerias com influenciadores locais para alcançar um público amplo.",
                afirmacao: "Optou por estratégias de marketing digital para maximizar a divulgação e o alcance do evento de arrecadação de fundos."
            }
        ]
    },
    {
        enunciado: "Você está participando de um projeto de grupo em história, e um dos membros sugere usar uma abordagem inovadora para apresentar o conteúdo. O que você faz?",
        alternativas: [
            {
                texto: "Apoio a ideia e colaboro na implementação de uma apresentação criativa, como um documentário ou uma dramatização.",
                afirmacao: "Vê valor em abordagens inovadoras e está disposto a colaborar para criar uma apresentação única e impactante."
            },
            {
                texto: "Prefiro manter uma abordagem tradicional e organizada, como uma apresentação com slides e discussão em grupo.",
                afirmacao: "Prefere métodos tradicionais e estruturados para garantir clareza e organização na apresentação do projeto."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Reflexões sobre Suas Decisões...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

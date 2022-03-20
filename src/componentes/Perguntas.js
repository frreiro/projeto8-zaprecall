import React from "react";
import Carta from "./Carta";
import Footer from "./Footer";
import Header from "./Header";
import Inicar from "./Iniciar";

const reactPerguntas = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: " Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: " expressões" },
    { question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: " Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __ ", answer: " passar diferentes informações para componentes " },
    { question: "Usamos estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
]


export default function Perguntas() {
    
    const [cartasConcluidas, setCartasConcluidas] = React.useState(0);
    // const [totalCartas, setTotalCartas] = React.useState(reactPerguntas.length);
    const [acertos,setAcertos] = React.useState(0);
    const [footerIcones, setFooterIcones] = React.useState([])
    let totalCartas = reactPerguntas.length;


    function embaralhar() { 
        return Math.random() - 0.5; 
    }

    reactPerguntas.sort(embaralhar);
 

    return (
        <main className="tela-perguntas">
            <Header />
            {reactPerguntas.map((pergunta, i) => {
                const { question, answer } = pergunta;
                return <Carta
                    key={i}
                    indice={i}
                    pergunta={question}
                    resposta={answer}
                    cartasConcluidas={cartasConcluidas}
                    setCartasConcluidas={setCartasConcluidas}
                    acertos={acertos}
                    setAcertos={setAcertos}
                    footerIcones={footerIcones}
                    setFooterIcones={setFooterIcones}
                     />
            })}
            <Footer 
            cartasConcluidas={cartasConcluidas}
            totalCartas={totalCartas}
            acertos={acertos} 
            footerIcones={footerIcones}
            />
        </main>
    )
}
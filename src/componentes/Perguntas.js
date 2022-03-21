import React from "react";
import Carta from "./Carta";
import Footer from "./Footer";
import Header from "./Header";






export default function Perguntas({deck}) {
    
    const [jogadas, setJogadas] = React.useState({concluidas:0, acertos:0})
    const [footerIcones, setFooterIcones] = React.useState([])

    let totalCartas = deck.length;

 
    
    
    return (
        <main className="tela-perguntas">
            <Header />
            {deck.map((pergunta, i) => {
                const { question, answer } = pergunta;
                return <Carta
                    key={i}
                    indice={i}
                    pergunta={question}
                    resposta={answer}
                    footerIcones={footerIcones}
                    setFooterIcones={setFooterIcones}
                    setJogadas={setJogadas}
                    jogadas={jogadas}
                     />
            })}
            <Footer 
            totalCartas={totalCartas}
            footerIcones={footerIcones}
            jogadas={jogadas}
            />
        </main>
    )
}
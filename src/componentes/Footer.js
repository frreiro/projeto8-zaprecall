import party from "../assets/party.png"
import sad from "../assets/sad.png"

import React from "react"



export default function Footer(props) {
    const { totalCartas, footerIcones, jogadas} = props
    const { concluidas, acertos } = jogadas

    function retornarIcones(objetos) {
        const icones = objetos.map((item, i) => {
            return (<div key={i} className={item.cor}><ion-icon name={item.nome}></ion-icon></div>);
        })
        return icones;
    }

    function verificarFimJogo() {
        return concluidas === totalCartas ? verificarTipoFinal() : footerJogadas
    }

    function verificarTipoFinal() {
        return acertos === totalCartas ? finalFeliz : finalTriste;
    }

    const finalTriste =
        <section className="section-final">
            <div>
                <img src={sad} alt="triste" />
                <h1>PUTZ!</h1>
            </div>
            <h2>
                Ainda faltaram alguns...<br /> Mas não desanime!
            </h2>
            <h2>
                <span className="qnt-concluido">{jogadas.concluidas}
                </span>/
                <span className="qnt-total">{totalCartas}</span> CONCLUÍDOS
            </h2>
        </section>


    const finalFeliz =
        <section className="section-final">
            <div>
                <img src={party} alt="feliz" />
                <h1>PARABÉNS!!</h1>
            </div>
            <h2>
                Você não esqueceu de nenhum flashcard!
            </h2>
            <h2>
                <span className="qnt-concluido">{jogadas.concluidas}
                </span>/
                <span className="qnt-total">{totalCartas}</span> CONCLUÍDOS
            </h2>
        </section>


    const footerJogadas =
        <h2>
            <span className="qnt-concluido">{jogadas.concluidas}
            </span>/
            <span className="qnt-total">{totalCartas}</span> CONCLUÍDOS
        </h2>


    return (
        <footer className={jogadas.concluidas === totalCartas ? "footer-final" : ""}>
            {verificarFimJogo()}
            <section>
                {retornarIcones(footerIcones)}
            </section>
            {jogadas.concluidas === totalCartas ? <button onClick={()=>window.location.reload(false)}>REINICIAR RECALL</button> : ""}
        </footer>
    )
}











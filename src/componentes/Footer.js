import party from  "../assets/party.png"
import sad from  "../assets/sad.png"

import React from "react"



export default function Footer(props) {
    const { cartasConcluidas, totalCartas, acertos, footerIcones } = props




    function retornarIcones(objetos) {
        const icones = objetos.map((item, i) => {
            return (<div key={i} className={item.cor}><ion-icon name={item.nome}></ion-icon></div>);
        })
        return icones;
    }


        function verificarFimJogo() {

            if (cartasConcluidas === totalCartas) {
                if (acertos === totalCartas) {
                    return (
                        <section className="section-final">
                            <div>
                                <img src={party} alt="feliz" />
                                <h1>PARABÉNS!!</h1>
                            </div>
                            <h2>
                                Você não esqueceu de nenhum flashcard!
                            </h2>
                        </section>
                    )
                } else {
                    return (
                        <section className="section-final">
                            <div>
                                <img src={sad} alt="triste" />
                                <h1>PUTZ!</h1>
                            </div>
                            <h2>
                                Ainda faltaram alguns...<br/> Mas não desanime!
                            </h2>
                        </section>
                    )
                }

            } else {
                //jogo ainda não acabou
                return (
                    <h2>
                        <span className="qnt-concluido">{cartasConcluidas}
                        </span>/
                        <span className="qnt-total">{totalCartas}</span> CONCLUÍDOS
                    </h2>
                )
            }


        }


        return (
            <footer className={cartasConcluidas === totalCartas ? "footer-final" : ""}>
                {verificarFimJogo()}
                <section>
                    {retornarIcones(footerIcones)}
                </section>
            </footer>

        )
    }











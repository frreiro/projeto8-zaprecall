import React from "react"

let guardarEmojis = []


export default function Footer(props) {
    const { cartasConcluidas, totalCartas, emoji } = props

    function verificarEmojis() {

        if (emoji === "cor-vermelho") {
            guardarEmojis.push(<div className="cor-vermelho"><ion-icon name="close-circle"></ion-icon></div>)
            return guardarEmojis
        }
        if (emoji === "cor-amarelo") {
            guardarEmojis.push(<div className="cor-amarelo"><ion-icon name="help-circle"></ion-icon></div>)
            return guardarEmojis
        }
        if (emoji === "cor-verde") {
            guardarEmojis.push(<div className="cor-verde"><ion-icon name="checkmark-circle"></ion-icon></div>)
            return guardarEmojis
        }
        if (emoji === "") return ""
    }


    function verificarFimJogo() {
        if (cartasConcluidas === totalCartas) {
            return (
                    <section className="section-final">
                        <div>
                            <img src="assets/party.png" />
                            <h1>PARABÉNS!!</h1>
                        </div>
                        <h2>
                            Você não esqueceu de nenhum flashcard!
                        </h2>
                    </section>
            )
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
                {verificarEmojis()}

            </section>
        </footer>

    )
}











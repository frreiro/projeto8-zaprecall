import React from "react"
import CartaVirada from "./CartaVirada";


// let cor = "cor-preto";

export default function Carta(props) {
    const { indice, pergunta, resposta, cartasConcluidas ,setCartasConcluidas,setEmoji } = props
    const [selecionado, setSelecionado] = React.useState(false);
    const [riscado, setRiscado] = React.useState("");
    const [cor, setCor] = React.useState("cor-preto")


    function retornarCarta(novaCor) {
        setSelecionado(!selecionado)
        setRiscado("riscado")
        setCor(novaCor)
        setCartasConcluidas(cartasConcluidas + 1)
        setEmoji(novaCor)
    }

    function verificarRetorno() {
        if (cor === "cor-vermelho") return <div className={cor}><ion-icon name="close-circle"></ion-icon></div>
        if (cor === "cor-amarelo") return <div className={cor}><ion-icon name="help-circle"></ion-icon></div>
        if (cor === "cor-verde") return <div className={cor}><ion-icon name="checkmark-circle"></ion-icon></div>
        if (cor === "cor-preto") return <div className={cor}><ion-icon name="play-outline"></ion-icon></div>
    }


    if (!selecionado) {
        return (
            <section className={`carta ${riscado} ${cor}`} onClick={() => setSelecionado(!selecionado)
            }>
                <h1 className={cor}>{`Perguntas ${indice + 1}`}</h1>
                {verificarRetorno()}
            </section>

        )
    } else {
        return (
            <>
                <CartaVirada
                    pergunta={pergunta}
                    resposta={resposta}
                    retornarCarta={retornarCarta} />
            </>
        )
    }
}
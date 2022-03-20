import React from "react";
import CartaResposta from "./CartaResposta";

export default function CartaVirada(props) {
    const { pergunta, resposta , retornarCarta} = props;

    const [virada, setVirar] = React.useState(false);

    if (virada) {
        return (
            <CartaResposta 
            resposta={resposta} 
            retornarCarta={retornarCarta}/>
        )
    } else {
        return (
            <section className="carta-virada">
                <h1>{pergunta}</h1>
                <img src="assets/setinha.png" alt="virar" onClick={() => setVirar(!virada) } />
            </section>
        )
    }
}
export default function CartaResposta(props) {
    const { resposta, retornarCarta} = props


    return (
        <section className="carta-virada">
            <h1>{resposta}</h1>
            <div>
                <button onClick={() => retornarCarta("cor-vermelho")} className="fundo-vermelha">Não lembrei</button>
                <button onClick={() => retornarCarta("cor-amarelo")} className="fundo-amarela">Quase não lembrei</button>
                <button onClick={() => retornarCarta("cor-verde")} className="fundo-verde">Zap!</button>
            </div>
        </section>
    )
}
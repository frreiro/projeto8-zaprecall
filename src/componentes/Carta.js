import React from "react"
import CartaVirada from "./CartaVirada";




export default function Carta(props) {
    const { indice, pergunta, resposta, cartasConcluidas ,setCartasConcluidas, setAcertos, acertos, footerIcones, setFooterIcones} = props

    const [selecionado, setSelecionado] = React.useState(false);
    const [riscado, setRiscado] = React.useState("");
    const [icones, setIcones] = React.useState([{cor: "cor-preto", nome: "play-outline"}])


    let ultimoIcone = icones[icones.length-1];


    function retornarCarta(novaCor) {
        setSelecionado(!selecionado)
        setRiscado("riscado")
        setCartasConcluidas(cartasConcluidas + 1)
        verificarCor(novaCor);
   
    }

    function verificarCor(novaCor){
        if (novaCor === "cor-vermelho") {
            setIcones([...icones, {cor:novaCor, nome:"close-circle"}]);
            setFooterIcones([...footerIcones, {cor:novaCor, nome:"close-circle"}])
        }
        if (novaCor === "cor-amarelo"){
            setIcones([...icones, {cor:novaCor, nome:"help-circle"}]);
            setFooterIcones([...footerIcones,{cor:novaCor, nome:"help-circle"}])
            setAcertos(acertos + 1)
        } 
        if (novaCor === "cor-verde") {
            setIcones([...icones, {cor:novaCor, nome:"checkmark-circle"}]);
            setFooterIcones([...footerIcones, {cor:novaCor, nome:"checkmark-circle"}])
            setAcertos(acertos + 1)
        }
    }


    function desvirarCarta(icone) {
        const {cor, nome} = icone;
        return <div className={cor}><ion-icon name={nome}></ion-icon></div>
    }

    


    if (!selecionado) {
        return (
            <section className={`carta ${riscado} ${ultimoIcone.cor}`} onClick={
                riscado != "riscado" ? () => setSelecionado(!selecionado) : ()=>""
            }>
                <h1 className={ultimoIcone.cor}>{`Pergunta ${indice + 1}`}</h1>
                {desvirarCarta(ultimoIcone)}
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
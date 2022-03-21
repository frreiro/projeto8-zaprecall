import React from "react"
import CartaVirada from "./CartaVirada";




export default function Carta(props) {    
    const { indice, pergunta, resposta, footerIcones, setFooterIcones, setJogadas, jogadas } = props
    const [selecionado, setSelecionado] = React.useState(false);
    const [riscado, setRiscado] = React.useState("");
    const [icones, setIcones] = React.useState([{ cor: "cor-preto", nome: "play-outline" }])


    let ultimoIcone = icones[icones.length - 1];

    let qntJogadas = (jogadas.concluidas + 1);


    function retornarCarta(novaCor) {
        setSelecionado(!selecionado)
        setRiscado("riscado")
        verificarCor(novaCor);
    }

    function verificarCor(novaCor) {
        if (novaCor === "cor-vermelho") {
            alterarIconesEJogadas(novaCor, "close-circle", false);
        }
        if (novaCor === "cor-amarelo") {
            alterarIconesEJogadas(novaCor, "help-circle", true)
        }
        if (novaCor === "cor-verde") {
            alterarIconesEJogadas(novaCor, "checkmark-circle", true)
        }
    }


    const houveAcerto = { concluidas: qntJogadas, acertos: (jogadas.acertos + 1) }
    const naoHouveAcerto = { concluidas: qntJogadas, acertos: jogadas.acertos }

    function alterarIconesEJogadas(novaCor, icone, alterarAcerto) {
        setIcones([...icones, { cor: novaCor, nome: icone }]);
        setFooterIcones([...footerIcones, { cor: novaCor, nome: icone }])
        alterarAcerto ? setJogadas(houveAcerto) : setJogadas(naoHouveAcerto)
    }




    function desvirarCarta(icone) {
        const { cor, nome } = icone;
        return <div className={cor}><ion-icon name={nome}></ion-icon></div>
    }




    if (!selecionado) {
        return (
            <section className={`carta ${riscado} ${ultimoIcone.cor}`} onClick={
                riscado !== "riscado" ? () => setSelecionado(!selecionado) : () => ""
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
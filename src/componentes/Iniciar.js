import React from "react"
import logo from "../assets/logo.svg"


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

const FlamengoPerguntas = [
    { question: "Em que ano o Clube de Regatas foi criado?", answer: "1895" },
    { question: "Em que ano o flamengo ganhou seu primeiro título da história?", answer: "1900" },
    { question: "Em que ano o flamengo ganhou o título de campeão mundial?", answer: "1981" },
    { question: "Qual é o maior artilheiro da história do clube?", answer: "Zico" }
]

reactPerguntas.sort(embaralhar);
FlamengoPerguntas.sort(embaralhar);


function embaralhar() {
    return Math.random() - 0.5;
}

export default function Inicar(props) {

    const { click: setClick, setDeck } = props
    const [item, setItem] = React.useState("")

    
    function definirDeck() {
        if (item === "") {
            alert("Escolha um deck")
        } else {
            if (item === "1") {
                setDeck(reactPerguntas);
            }
            if (item === "2") {
                setDeck(FlamengoPerguntas);
            }
            setClick(true);
        }

    }


    return (
        <main className="tela-inicial">
            <div className="app-menu">
                <img src={logo} alt="logo" />
                <h1>ZappRecall</h1>
            </div>

            <select name="decks" onChange={(e) => setItem(e.target.value)}>
                <option value="" hidden>Esolha um deck</option>
                <option value="1">React</option>
                <option value="2">Flamengo</option>
            </select>

            <button type="submit" onClick={definirDeck}>Iniciar Recall!</button>
        </main>
    )
}
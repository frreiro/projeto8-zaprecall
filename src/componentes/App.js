
import React from "react";
import Inicar from "./Iniciar";
import Perguntas from "./Perguntas";


function App() {
    const [clicado, setClick] = React.useState(false);
    const [deck, setDeck] = React.useState("")

    return (
        <>
            {clicado ?   <Perguntas deck={deck} /> : <Inicar click={setClick} setDeck={setDeck} />}
        </>
    )
}

export default App;
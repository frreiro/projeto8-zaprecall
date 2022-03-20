import React from "react";
import Inicar from "./Iniciar";
import Perguntas from "./Perguntas";


function App() {
    const [clicado, setClick] = React.useState(false);
    return (
        <>{clicado ? <Perguntas /> : <Inicar click={setClick} />}</>
    )
}

export default App;
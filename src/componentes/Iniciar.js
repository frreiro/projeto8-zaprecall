import logo from "../assets/logo.svg"


export default function Inicar(props) {
    const {click: setClick} = props
    return (
        <main className="tela-inicial">
            <div className="app-menu">
                <img src={logo} alt="logo" />
                <h1>ZappRecall</h1>
            </div>
            <button onClick={()=>setClick(true)}>Iniciar Recall!</button>
        </main>
    )
}
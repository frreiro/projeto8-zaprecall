import logoPequeno from "../assets/logo-pequeno.svg"

export default function Header(){
    return (
        <header>
            <img src={logoPequeno} alt="logo" />
            <h1>ZappRecall</h1>
        </header>
    )
}
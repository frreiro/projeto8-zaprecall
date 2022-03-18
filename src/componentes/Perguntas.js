import Carta from "./Carta";
import CartaResposta from "./CartaResposta";
import CartaVirada from "./CartaVirada";
import Footer from "./Footer";
import Header from "./Header";

export default function Perguntas() {
    return (
        <main className="tela-perguntas">
            <Header />
            <Carta />
            <CartaVirada />
            <CartaResposta />
            <Carta />
            <Carta/>
            <Footer/>
        </main>
    )
}
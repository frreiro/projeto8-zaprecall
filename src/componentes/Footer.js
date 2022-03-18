export default function Footer() {
    return (
        <footer>
            <h1>
                <span className="qnt-concluido">0
                </span>/
                <span className="qnt-total">4</span> CONCLUÍDOS
            </h1>
            <section>
                <div className="cor-vermelho"><ion-icon name="close-circle"></ion-icon></div>
                <div className="cor-amarelo"><ion-icon name="help-circle"></ion-icon></div>
                <div className="cor-verde"><ion-icon name="checkmark-circle"></ion-icon></div>
            </section>
        </footer>
    )
}
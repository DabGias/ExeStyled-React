import {DivCabecalho} from "../styled"
import logoSorvete from "../img/logo.png"

function Cabecalho() {
    return(
        <DivCabecalho>
            <div className="divImagem">
                <img src={logoSorvete} alt="Logo de sorvete"/>
            </div>
            <div className="divTitulo">
                <h1>Sorveteria Gélida</h1>
                <p>Sorvetes gelados</p>
            </div>
        </DivCabecalho>
    )
}

export default Cabecalho
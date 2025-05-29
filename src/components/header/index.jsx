import "./style.css"
import IconCarinho from "../../assets/produto-off.svg"

function header(){
    return(
        <header>
                <p className="header-tittle">Terraço Gourmet</p>
                <nav className="header-nav">
                    <p>Home</p>
                    <p>Sobre</p>
                    <p>Contato</p>
                    <p>Galeria</p>
                </nav>
                <img src={IconCarinho} alt="Carrinho" />
        </header>
    )
}

export default header;
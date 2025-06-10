import "./style.css"
import IconFacebook from "../../assets/facebook.svg"
import IconInstagram from "../../assets/instagram.svg"
function footer (){
    return(
        <>
        <footer className="footer">
            <div className="footer-link">

                <h4>Terraço Gourmet</h4>
                <nav>
                    <a href="">Home</a>
                    <a href="">Sobre</a>
                    <a href="">Contato</a>
                    <a href="">Galeria</a>
                </nav>
                <div>
                        <img src={IconFacebook} alt="Icon do Facebook" />
                        <img src={IconInstagram} alt="Icon do Instagram" />
                </div>
            </div>

                <hr />       

            <p className="footer-copyright">Copyright © 2024 Terraço gourmet | Todos os direitos reservados</p>
        </footer>
        </>
    )
}

export default footer;
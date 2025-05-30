import Header from "../components/header/index"
import IconCardapio from "../assets/icon-cardapio.svg"
import ImgPrato from "../assets/prato.svg"
import ImgEspaco from "../assets/imagem-espaco.png"


function app (){
    return(
        <>
        <Header/>

        <div className="home">
            <div className="home-tittle">
                <div className="tittle-principal">
                    <h3>O mais suculento </h3>
                    <p>Filet mignon grelhado do Brasil</p>
                </div>
                <span><button className="home-button"><img src={IconCardapio} alt="Icone do cardapio" />Cardápio</button></span>
            </div>
            <img className="home-prato" src={ImgPrato} alt="prato" />
        </div>

        <main className="main-home">
            <img src={ImgEspaco} alt="" />

            <div className="main-home-text">
                <h3>Nosso espaço:</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </main>
        </>
    )
}

export default app;
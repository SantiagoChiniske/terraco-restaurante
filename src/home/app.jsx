import Header from "../components/header/index"
import IconCardapio from "../assets/icon-cardapio.svg"
import ImgPrato from "../assets/prato.svg"
import ImgEspaco from "../assets/imagem-espaco.png"
import ImgPerfilReviews from "../assets/foto-reviews.svg"
import Carousel from "../components/carrosel"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
                <p>O Terraço Gourmet é um dos espaços mais charmosos do Shopping Eldorado, projetado com requinte para receber clientes em ocasiões especiais ou para refeições diárias mais refinadas. Localizado no 3º piso, o espaço oferece diversas opções de restaurantes com cardápios variados, atendendo a diferentes gostos. Com vista para o Jockey Club de São Paulo, as grandes janelas proporcionam uma sensação de ambiente aberto e iluminado, ideal para quem aprecia compartilhar momentos nas redes sociais .</p>
            </div>
        </main>
        <section className="section-reviews">
            <hr />


                <h3>Reviews</h3>    

                 <Carousel/>

        </section>

   


        </>
    )
}

export default app;
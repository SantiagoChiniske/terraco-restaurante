import "./style.css"
import ImgPerfilReviews from "../../assets/foto-reviews.svg"

function cardAvaliacoes({picture, name,date,paragraph}){
    return(
        <>
        <div className="section-card-avaliacoes">
                <div className="card-avaliacoes-perfil">
                    <img src={ImgPerfilReviews} alt="" />
                    <div>
                        <h4>{name}</h4>
                        <p>Data: {date}    </p>
                    </div>      
                </div>
                <p className="card-avaliacoes-text">
                    {paragraph}
                </p>
                <div>
                    <img src="" alt="" />
                </div>

        </div>
        </>
    )
}

export default cardAvaliacoes;
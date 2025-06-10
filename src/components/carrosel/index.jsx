import  "./style.css"

import 'swiper/css';
import ImgPerfilReviews from "../../assets/foto-reviews.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import CardAvaliacoes from "../card-avaliacoes/index"

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => (
  <Swiper 
  modules={[Navigation, Pagination, A11y]}
      spaceBetween={70}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
  loop={true}
  className="carrosel"
  >
    <SwiperSlide>
            <CardAvaliacoes
            name="Santiago"
            date="12/03/2025"
            paragraph= "JSHDJASHDKjashdjkashdjkahsgdhajksdgakjsdhahsjkdhasjkd"
            />

    </SwiperSlide>
    <SwiperSlide>
         <CardAvaliacoes
            name="Santiago"
            date="12/03/2025"
            paragraph= "JSHDJASHDKjashdjkashdjkahsgdhajksdgakjsdhahsjkdhasjkd"
            />
        
    </SwiperSlide>
    <SwiperSlide>
        <div className="section-card-avaliacoes">
                            <div className="card-avaliacoes-perfil">
                                <img src={ImgPerfilReviews}alt="" />
                                <div>
                                    <h4>Nome</h4>
                                    <p>Data:    </p>
                                </div>      
                            </div>
                              <p className="card-avaliacoes-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        
                                <div>
                                    <img src="" alt="" />
                                </div>
        
                        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="section-card-avaliacoes">
                            <div className="card-avaliacoes-perfil">
                                <img src={ImgPerfilReviews}alt="" />
                                <div>
                                    <h4>Nome</h4>
                                    <p>Data:    </p>
                                </div>      
                            </div>
                              <p className="card-avaliacoes-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        
                                <div>
                                    <img src="" alt="" />
                                </div>
        
                        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="section-card-avaliacoes">
                            <div className="card-avaliacoes-perfil">
                                <img src={ImgPerfilReviews}alt="" />
                                <div>
                                    <h4>Nome</h4>
                                    <p>Data:    </p>
                                </div>      
                            </div>
                              <p className="card-avaliacoes-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        
                                <div>
                                    <img src="" alt="" />
                                </div>
        
                        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="section-card-avaliacoes">
                            <div className="card-avaliacoes-perfil">
                                <img src={ImgPerfilReviews}alt="" />
                                <div>
                                    <h4>Nome</h4>
                                    <p>Data:    </p>
                                </div>      
                            </div>
                              <p className="card-avaliacoes-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        
                                <div>
                                    <img src="" alt="" />
                                </div>
        
                        </div>
    </SwiperSlide>
  </Swiper>
);

export default Carousel;
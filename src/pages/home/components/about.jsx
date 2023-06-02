import React, { Component } from "react";
import AboutImg from "./img/aboutImg1.png";
import AboutImg3 from "./img/about3.png";
import AboutImg2 from "./img/aboutimg2.png";
export class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="about__wrapper container">
            <div className="about__inner">
              <div className="about__lift-wrapper">
                <a href="/">
                  <ul className="about__list">
                    <li>
                      <img src={AboutImg} alt="" />
                    </li>

                    <li>
                      <img src={AboutImg2} alt="" />
                    </li>
                  </ul>
                </a>
              </div>

              <div className="about__centir">
                <div className="about_centir_inner">
                  <h2 className="about__centir-hiddin">About me</h2>

                  <p>
                    Hammaga yana salom! Shunday qilib, siz mening ismim Shohjahon
                    ekanligini allaqachon bilasiz. O'zim haqimda bir oz: uqivchi,
                    17 yosh, sportchi-karate, bolaligimdan ijodni yaxshi
                    ko'raman, Uzbekiston Samarqant shahrida yashayman. Nima uchun
                    dasturlash? Hammasi oddiy - bu menga yoqadi, kelajak kasbi,
                    buning yordamida men o'zimni ta'minlay olaman va orzuimni
                    amalga oshira olaman - sayohat, hozir men veb-dasturlash,
                    front-end va back-end ishlab chiqish, kalitlarga
                    topshirilgan veb-saytlar bo'yicha ixtisoslashganman. Nega
                    meni tanlashing kerak? Men har bir buyurtmaga katta
                    mas'uliyat va mehr bilan yondashaman, chunki men o'zimni nom
                    qozonishni, plagiat va beparvolikni istisno qilishni,
                    loyihani, mijozni va uning maqsadli auditoriyasini to'liq
                    o'rganishni, sifatli ishlashni, buyurtmani tez va o'ziga xos
                    tarzda bajarishga harakat qilaman.
                  </p>
                </div>
              </div>

              <div className="about__righit">
                <div className="about__righit-inner">
                  <img src={AboutImg3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;

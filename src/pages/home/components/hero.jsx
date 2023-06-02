import React from "react";
import HeroImg from "./img/Gleb.png";
export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__wrapper container">
          <div className="hero__lift-wrapper">
            <span>
              {" "}
              <h3 className="hero__hidding-h3">Hello</h3>
              <h1 className="hero__hiddin-h1">I’m Shohjahon Alisherivch</h1>
              <span className="hero__span">
                <p className="hero__text">
                  Men Frontent va Becend dasturchiman ,
                  Men Najot Ta'lim uquv markazida tahsil olaman, men junior darajadagi dasturchiman, hozirda ish izlayapman
                </p>
              </span>
              <button className="hero_button">Contact me</button>
            </span>
          </div>

          <div className="hero__righit-wrapper">
            <img src={HeroImg} alt="heroImg" />
          </div>
        </div>
      </div>
    </>
  );
};

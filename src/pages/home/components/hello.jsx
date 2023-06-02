import React, { Component } from 'react'
import Helloimg1 from "./img/bi_vector-pen.png"
import Helloimg2 from "./img/UI.png"
import Helloimg3 from "./img/fontisto_nav-icon-list.png"
import Helloimg4 from "./img/carbon_logo-delicious.png"
import Helloimg5 from "./img/bx_bx-code-alt.png"
import Helloimg6 from "./img/bi_display.png"
import Helloimg7 from "./img/Vector (3).png"
export class Hello extends Component {
  render() {
    return (
      <>
      <div className="hello">
        <div className="hello__wrapper ">
          <div className="hello__inner container">
            <ul className="hello__list">
              <li className="hello__item">
                <a href="/">
                  <img src= {Helloimg1} alt="" />

                  <p>Product Design</p>
                </a>
              </li>

              <li className="hello__item">
                <a href="/">
                  <img className='hellomg2' src= {Helloimg2} alt="" />

                  <p>UX/UI Design</p>
                </a>
              </li>

              <li className="hello__item">
                <a href="/">
                  <img src= {Helloimg3} alt="" />

                  <p>Icon Design</p>
                </a>
              </li>

              <li className="hello__item">
                <a href="/">
                  <img src= {Helloimg4} alt="" />

                  <p>Logo Design</p>
                </a>
              </li>

              <li className="hello__item">
                <a href="/">
                  <img src= {Helloimg5} alt="" />

                  <p>Backend</p>
                </a>
              </li>

              <li className="hello__item">
                <a href="/">
                  <img src= {Helloimg6} alt="" />

                  <p>Frontend</p>
                </a>
              </li>

              <li className="hello__item">
                <a href="/">
                  <img src= {Helloimg7} alt="" />

                  <p>Motion</p>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Hello
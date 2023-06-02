import React from "react";
import HeaderLogo from "../components/img/header_logo.png";

export const Header = () => {
  // const [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data2) => setData(data2));

  //     fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
  //     .then((res) => res.json())
  //     .then((data2) => setData(data2));
  // }, []);

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__inner container">
            <a href="/" className="header__logo-link">
              <img src={HeaderLogo} alt="header__logo" />
            </a>

            <ul className="header__list">
              <li className="header__item header_ntchild">
                <a href="/" className="header__link">
                Home
                </a>
              </li>

              <li className="header__item">
                <a href="/" className="header__link">
                About me
                </a>
              </li>

              <li className="header__item">
                <a href="/" className="header__link">
                Portfolio
                </a>
              </li>

              <li className="header__item">
                <a href="tel:+998937208481" className="header__link">
                Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

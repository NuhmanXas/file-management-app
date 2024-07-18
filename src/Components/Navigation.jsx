import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../Services";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

function Navigation({ list = [], className, ...props }) {

  const [isClicked, setIsClicked] = useState(false);
  

  return (
    <NavigationStyle
      {...props}
      className={`d-flex flex-md-grow-0 justify-content-sm-end flex-sm-grow-1 ${className}`}
    >
      <section className="d-flex align-items-center justify-content-center gap-lg-5 gap-md-3 d-none d-md-block">
        {list.map(({ text, path }, i) => (
          <Link className="navigation-link" to={path} key={i}>
            {text}
          </Link>
        ))}
      </section>

      <button
        className="d-block d-md-none nav-sm-button"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        <BiMenu />
      </button>

      <nav
        className={`d-block d-md-none small-device-nav-container ${
          isClicked ? "d-flex" : "d-none"
        }`}
      >
        {list.map(({ text, path }, i) => (
          <Link className="navigation-sm-link" to={path} key={i}>
            {text}
          </Link>
        ))}
      </nav>
    </NavigationStyle>
  );
}

const NavigationStyle = styled.nav`
  .navigation-link {
    text-decoration: none;
    color: #ffffff;
    font-size: 24px;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    line-height: 31px;
    margin: 0 10px; /* Adjust margin as needed */

    @media ${media.md} {
      font-size: 20px;
    }
  }

  .nav-sm-button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 35px;
  }

  position: relative;
  .small-device-nav-container {
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    width: 200px;

    .navigation-sm-link {
      text-decoration: none;
      color: #000000;
      font-size: 14px;
      font-family: "DM Sans", sans-serif;
      font-weight: 700;
      line-height: 31px;
      margin: 0 10px; /* Adjust margin as needed */


      &:hover{
        opacity: 0.7;
      }
    }
  }
`;

export default Navigation;
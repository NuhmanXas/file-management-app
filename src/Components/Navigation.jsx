import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getColorSchemes, media } from "../Services";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";

function Navigation({ list = [], className, ...props }) {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();


  return (
    <NavigationStyle
      {...props}
      className={`d-flex flex-md-grow-0 justify-content-sm-end flex-sm-grow-1 ${className}`}
    >
      <section className="d-flex align-items-center justify-content-center gap-lg-5 gap-md-3 d-none d-md-block">
        {list.map(({ text, path }, i) => (
          <Link
            className={`navigation-link ${
              location.pathname === path ? "active" : ""
            }`}
            to={path}
            key={i}
          >
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
          <Link
            className={`navigation-sm-link ${
              location.pathname === path ? "active" : ""
            }`}
            to={path}
            key={i}
          >
            {text}
          </Link>
        ))}
      </nav>
    </NavigationStyle>
  );
}

const NavigationStyle = styled.nav`
  position: relative;

  .navigation-link,
  .navigation-sm-link {
    text-decoration: none;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    line-height: 31px;
    margin: 0 10px;
    cursor: pointer;

    @media ${media.md} {
      font-size: 20px;
    }
  }

  .navigation-link {
    color: #ffffff;
    font-size: 24px;

    &:hover {
      opacity: 0.7;
    }
  }

  .active {
    color: ${getColorSchemes().color1.backColor};
  }

  .navigation-sm-link {
    color: #000000;
    font-size: 14px;

    &:hover {
      opacity: 0.7;
    }

    &.active {
      color: ${getColorSchemes().color1.backColor};
    }
  }

  .nav-sm-button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 35px;
    cursor: pointer;
  }

  .small-device-nav-container {
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    width: 200px;
  }
`;

export default Navigation;

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function TopImageDropDown({ image, subList = [], ...props }) {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleNavClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <TopImageDropDownStyle {...props} ref={dropdownRef}>
      <div className="image" onClick={handleNavClick}>
        <img src={image} />
      </div>
      {subList.length !== 0 && (
        <div
          className={`sub-list-container ${
            isActive ? "d-flex" : "d-none"
          } flex-column p-3 gap-2`}
        >
          {subList.map(({ text, path }) => (
            <Link key={text} className="sub-list-item" to={path}>
              {text}
            </Link>
          ))}
        </div>
      )}
    </TopImageDropDownStyle>
  );
}

const TopImageDropDownStyle = styled.div`
  position: relative;
  .sub-list-container {
    position: absolute;
    right: 0px;
    background-color: #272c34;
    top: 60px;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-left: 10px solid transparent; /* Adjust size as needed */
      border-right: 10px solid transparent; /* Adjust size as needed */
      border-bottom: 10px solid #272c34; /* Adjust size and color as needed */
      position: absolute;
      top: -10px;
      right: 2px;
    }
  }

  .sub-list-item {
    text-decoration: none;
    font-size: 15px;
    width: 200px;
    color: #e3e3e3;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .image{
    width: 45px;
    height: 45px;
    border-radius: 100%;
    overflow: hidden;

    img{
      height: 100%;
      width: 100%;
    }
  }
`;

export default TopImageDropDown;

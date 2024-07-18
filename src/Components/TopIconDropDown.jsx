import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function TopIconDropDown({ icon, subList = [], ...props }) {
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
    <TopIconDropDownStyle {...props} ref={dropdownRef}>
      <div className="icon" onClick={handleNavClick}>
        {icon}
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
    </TopIconDropDownStyle>
  );
}

const TopIconDropDownStyle = styled.div`
  position: relative;

  .icon {
    color: white;
    font-size: 25px;
    cursor: pointer;
  }

  .sub-list-container {
    position: absolute;
    right: 0px;
    background-color: #272c34;
    top: 55px;

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
`;

export default TopIconDropDown;

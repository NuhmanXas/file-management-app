import styled from "styled-components";
import { getColorSchemes, media } from "../Services";

function Button({ text, buttonType = "style-1", icon, className, ...props }) {
  return (
    <ButtonStyle
      {...props}
      className={`d-flex justify-content-center align-items-center ${buttonType} ${className}`}
      aria-label={text}
    >
      {icon} {text}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  min-height: 58px;
  width: fit-content;
  padding: 0 15px;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }

  &.style-1 {
    background-color: ${getColorSchemes().color1.backColor};
    color: ${getColorSchemes().color1.color};
    border: none;
  }

  &.style-2 {
    background-color: ${getColorSchemes().color2.backColor};
    color: ${getColorSchemes().color2.color};
    border: 1px solid ${getColorSchemes().color2.border};
  }

  &.style-3 {
    color: ${getColorSchemes().color2.color};
    background-color: transparent;
    border: none;
  }
`;

export default Button;

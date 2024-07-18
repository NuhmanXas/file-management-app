import styled from "styled-components";
import { getColorSchemes, media } from "../Services";

function SmallButton({ text, SmallButtonType = "style-1", icon, width , className, ...props }) {
  return (
    <SmallButtonStyle
      {...props}
      width={width}
      className={`d-flex justify-content-center align-items-center ${SmallButtonType} ${className}`}
      aria-label={text}
    >
      <span className="me-2">{icon}</span> {text}
    </SmallButtonStyle>
  );
}

const SmallButtonStyle = styled.button`
  min-height: 35px;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  padding: 0 15px;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  font-size: 15px;
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

export default SmallButton;

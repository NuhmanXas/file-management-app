import styled from "styled-components";
import { getColorSchemes } from "../Services";

function Button({ text, buttonType = "style-1" , icon , ...props }) {

  return (
    <ButtonStyle {...props}>
      <div
        className={`button-container d-flex justify-content-center align-items-center ${buttonType} `}
      >
        {icon} {text}
      </div>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  .button-container {
    height: 58px;
    width: fit-content;
    padding: 0px 15px;
    cursor: pointer;
    font-family: "DM Sans", sans-serif;
    font-size: 24px;
    font-weight: 700;

    &:hover {
      opacity: 0.8;
    }
  }

  .style-1 {
    background-color: ${getColorSchemes().color1.backColor};
    color: ${getColorSchemes().color1.color};
  }

  .style-2 {
    background-color: ${getColorSchemes().color2.backColor};
    color: ${getColorSchemes().color2.color};
    border: 1px solid ${getColorSchemes().color2.border};
  }

  .style-3 {
    color: ${getColorSchemes().color2.color};
  }
`;

export default Button;

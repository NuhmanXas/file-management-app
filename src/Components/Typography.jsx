import styled from "styled-components";
import { media } from "../Services";

const H1 = styled.h1`
  color: ${(props) => props.color};
  font-size: 48px;
  font-weight: 700;
  line-height: 62px;
  font-family: "DM Sans", sans-serif;

  @media ${media.md} {
    font-size: 35px;
  }

`;


const H2 = styled.h1`
  color: ${(props) => props.color};
  font-size: 38px;
  font-weight: 700;
  line-height: 62px;
  font-family: "DM Sans", sans-serif;

  @media ${media.md} {
    font-size: 35px;
  }
`;



const H3 = styled.h1`
  color: ${(props) => props.color};
  font-size: 28px;
  font-weight: 700;
  line-height: 62px;
  font-family: "DM Sans", sans-serif;

  @media ${media.md} {
    font-size: 35px;
  }
`;


const P = styled.p`
  color: ${(props) => props.color};
  font-size: 20px;
  line-height: 26px;
  font-family: "DM Sans", sans-serif;
`;

function Typography({ text, type = "p", color = "#ffffff", ...props }) {

  const getElement = () => {
    return type === "h1" ? (
      <H1 color={color} {...props}>
        {text}
      </H1>
    ) : type === "h2" ? (
      <H2 color={color} {...props}>
        {text}
      </H2>
    ) : type === "h3" ? (
      <H3 color={color} {...props}>
        {text}
      </H3>
    ) : (
      <P color={color} {...props}>
        {text}
      </P>
    );
  }


  return getElement();
}



export default Typography;
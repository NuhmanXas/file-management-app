import styled from "styled-components";


function Typography({ text, type = "p", color = "#ffffff", ...props }) {
  return (
    <TypographyStyle color={color} {...props}>
      <div className={`typography-container ${type}`}>{text}</div>
    </TypographyStyle>
  );
}

const TypographyStyle = styled.div`
  font-family: "DM Sans", sans-serif;
  .h1 {
    color: ${(props) => props.color};
    font-size: 48px;
    font-weight: 700;
    line-height: 62px;
  }

  .p {
    color: ${(props) => props.color};
    font-size: 20px;
    line-height: 26px;
  }
`;

export default Typography;
import styled from "styled-components";

function IconCombo({ icon, text1, text2, className, ...props }) {
  return (
    <IconComboStyle className={`icon-combo-container ${className}`} {...props}>
      <div className="icon">{icon}</div>
      <div className="text1">{text1}</div>
      <div className="text2">{text2}</div>
    </IconComboStyle>
  );
}

const IconComboStyle = styled.div`
  .icon {
    color: #ffffff;
    fill: #ffffff;
    font-size: 32px;
  }
  .text1 {
    color: #ffffff;
    font-size: 24px;
    font-family: "DM Sans";
    font-weight: 700;
    line-height: 31px;
  }

  .text2 {
    color: #788199;
    font-size: 16px;
    font-family: "DM Sans";
    line-height: 21px;
  }
`;

export default IconCombo;

export function IconComboList({ list = [], className }) {
  return (
    <IconComboListStyle className={`d-flex mt-5 gap-5 ${className}`}>
      {list.map(({ icon, text1, text2 }, i) => (
        <IconCombo
          key={i}
          className={`icon-combo ${
            i !== list.length - 1 ? "icon-combo-border" : ""
          }`}
          icon={icon}
          text1={text1}
          text2={text2}
        />
      ))}
    </IconComboListStyle>
  );
}

const IconComboListStyle = styled.div`
  display: flex;
  gap: 5px;

  .icon-combo {
    position: relative;
  }

  .icon-combo-border::after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background-color: #272c34;
    border-radius: 2px;
    position: absolute;
    top: 0;
    right: -20px;
  }
`;

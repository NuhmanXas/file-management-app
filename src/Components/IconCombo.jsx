import styled from "styled-components";

function IconCombo({ icon , text1 , text2 , ...props }) {
    return (
      <IconComboStyle {...props}>
        <div className="icon-combo-container">
          <div className="icon">{icon}</div>
          <div className="text1">{text1}</div>
          <div className="text2">{text2}</div>
        </div>
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


export function IconComboList({ list = []}) {
    return ( <IconComboListStyle className="d-flex mt-5 gap-5" >
        {
            list.map(({icon , text1 , text2} , i) => <IconCombo key={i} className={`icon-combo ${ i != (list.length -1) ? "icon-combo-border" : "" } `} icon={icon} text1={text1} text2={text2} />)
        }
    </IconComboListStyle> );
}

const IconComboListStyle = styled.div`
  .icon-combo-border{
    position: relative;
    &::after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background-color: #272c34;
    border-radius: 2px;
    position: absolute;
    top: 0px;
    right: -20px;
    }
  }
`;

import styled from "styled-components";
import { FaBoxArchive } from "react-icons/fa6";
import { getColorSchemes } from "../Services";


function Logo({ text = "MyBox" , ...props }) {
  return (
    <LogoStyle {...props}>
      <div className="logo-container d-flex align-items-center gap-3">
        <FaBoxArchive className="logo" />
        <div className="logo-text">{text}</div>
      </div>
    </LogoStyle>
  );
}

const LogoStyle = styled.div`
  .logo-container {
    /* border: 1px solid white; */
    .logo {
      color: ${getColorSchemes().color1.backColor};
      font-size: 40px;
      top: 49.5px;
    }

    .logo-text {
      color: ${getColorSchemes().color1.color};
      font-size: 36px;
      font-family: "DM Sans", sans-serif;
      font-weight: 700;
      line-height: 47px;
    }
  }
`;

export default Logo;
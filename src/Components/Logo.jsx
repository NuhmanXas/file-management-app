import styled from "styled-components";
import { FaBoxArchive } from "react-icons/fa6";
import { getColorSchemes } from "../Services";

function Logo({ text = "MyBox", className, ...props }) {
  return (
    <LogoStyle
      {...props}
      className={`d-flex align-items-center gap-3 ${className}`}
    >
      <FaBoxArchive className="logo" />
      <div className="logo-text">{text}</div>
    </LogoStyle>
  );
}

const LogoStyle = styled.div`
  .logo {
    color: ${getColorSchemes().color1.backColor};
    font-size: 40px;
  }

  .logo-text {
    color: ${getColorSchemes().color1.color};
    font-size: 36px;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    line-height: 47px;
  }
`;

export default Logo;
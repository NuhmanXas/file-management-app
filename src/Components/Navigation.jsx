import { Link } from "react-router-dom";
import styled from "styled-components";



function Navigation({ list = [] , ...props }) {
    return (
      <NavigationStyle {...props}>
        <div className="nav-container d-flex h-100 align-items-center gap-5">
          {list.map(({ text, path }, i) => (
            <Link className="nav-items" to={path} key={i}>
              {text}
            </Link>
          ))}
        </div>
      </NavigationStyle>
    );
}


const NavigationStyle = styled.div`

  
  .nav-items {
    text-decoration: none;
    color: #ffffff;
    font-size: 24px;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    line-height: 31px;
  }
`;

export default Navigation;
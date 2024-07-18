import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { useState } from "react";


function DashboardNav({ title , navList = [] , className , ...props }) {
    return (
      <DashboardNavStyle className={` ${className}`} {...props}>
        <div className="title-con mb-2">{title}</div>

        {navList.map(({ icon, title, sub, notify }, i) => (
          <NavItems icon={icon} notify={notify} sub={sub} title={title}  />
        ))}
      </DashboardNavStyle>
    );
}

const DashboardNavStyle = styled.nav`
  font-family: "DM Sans", sans-serif;
  color: white;
  margin-top: 50px;


  .nav-item-con{
    cursor: pointer;
    user-select: none;
  } .title-con {
    color: white;
  }

`;

export default DashboardNav;


function NavItems({ icon, title, sub, notify }) {

    const [isActive, setIsActive] = useState(false);

    const handleNavClick = () => {
        setIsActive(pre => !pre);
    }

  return (
    <NavItemsStyle>
      <section className="nav-item-con p-2" onClick={handleNavClick}>
        <span>
          {isActive ? (
            <FaAngleDown className="me-2" />
          ) : (
            <FaAngleRight className="me-2" />
          )}
          {icon}
        </span>{" "}
        {title} {notify ?? <span>{notify}</span>}
      </section>
      <section
        className={`nav-sum-item-con mt-2 ${
          isActive ? "d-flex flex-column" : "d-none"
        } `}
      >
        {sub.map(({ text, path }) => (
          <Link className="d-block ps-5 pt-2 pb-2 mb-1" to={path}>
            {text}
          </Link>
        ))}
      </section>
    </NavItemsStyle>
  );
}

const NavItemsStyle = styled.div`
  .nav-sum-item-con {
    a {
      text-decoration: none;
      color: white;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

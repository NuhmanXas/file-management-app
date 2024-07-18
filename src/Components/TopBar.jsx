import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import Navigation from "./Navigation";

function TopBar() {


    const getNavList = () => {
        return [
          {
            path: "/",
            text: "Home",
          },
          {
            path: "/work",
            text: "How it works",
          },
          {
            path: "/faq",
            text: "FAQ",
          },
          {
            path: "/pricing",
            text: "Pricing",
          },
        ];
    }


    return (
      <TopBarStyle className="d-flex justify-content-between pt-5 ps-5 pe-5 ">
        <Logo />
        <Navigation className="ms-4" list={getNavList()} />
        <Button text="Log In" buttonType="style-2"  />
      </TopBarStyle>
    );
}

const TopBarStyle = styled.section`
  
`;


export default TopBar;
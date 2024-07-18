import styled from "styled-components";
import FullPageLayout from "../Components/FullPageLayout";
import Logo from "../Components/Logo";
import Button from "../Components/Button";
import TopBar from "../Components/TopBar";
import Typography from "../Components/Typography";
import image from '../Assets/file_image.png'
import { FaPlay } from "react-icons/fa";
import  { IconComboList } from "../Components/IconCombo";
import { FaUserFriends } from "react-icons/fa";
import Image from "../Components/Image";

function HomePage() {

    const getIconComboList = () => {
        return [
            {
                icon : <FaUserFriends />,
                text1 : "1M+",
                text2 : "active users"
            },
            {
                icon : <FaUserFriends />,
                text1 : "5TB+",
                text2 : "files stored"
            },
            {
                icon : <FaUserFriends />,
                text1 : "6M+",
                text2 : "uploaded files"
            }
        ]
    }


    return (
      <HomePageStyle>
        <FullPageLayout className="d-flex flex-column">
          <TopBar />
          <div className="body-container flex-grow-1 d-flex align-items-center">
            <div className="row p-5 d-flex justify-content-center">
              <div className="col-lg-5 col-md-12 ps-5 d-flex flex-column justify-content-center">
                <Typography
                  text="Organize your files and keep them safe, everywhere!"
                  type="h1"
                  className="col-lg-8 heading-1"
                />
                <Typography
                  text="We offer secure storage, ensuring all your data is protected from unauthorized access."
                  type="p"
                  color="#788199"
                  className="col-lg-8 mt-3"
                />
                <div className="button-container d-flex gap-3 mt-5">
                  <Button text="Get Started" buttonType="style-1" />
                  <Button
                    text="Request a demo"
                    icon={<FaPlay className="me-3" />}
                    buttonType="style-3"
                  />
                </div>

                <IconComboList list={getIconComboList()} />
              </div>
              <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-sm-5">
                {/* <img src={image} alt="Image" /> */}
                <Image
                  src={image}
                  xxlSize={"85%"}
                  xlSize={"90%"}
                  mdSize={"90%"}
                />
              </div>
            </div>
          </div>
        </FullPageLayout>
      </HomePageStyle>
    );
}


const HomePageStyle = styled.div`

  
`;

export default HomePage;
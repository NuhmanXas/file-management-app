import styled from "styled-components";
import FullPageLayout from "../Components/FullPageLayout";
import TopBar from "../Components/TopBar";
import Typography from "../Components/Typography";
import image from '../Assets/how_it_work_image.png'
import Image from "../Components/Image";


function HowItWorksPage() {
    return (
      <HowItWorksPageStyle>
        <FullPageLayout className="d-flex flex-column">
          <TopBar />
          <div className="body-container flex-grow-1 d-flex align-items-center">
            <div className="row p-5 d-flex justify-content-center">
              <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-sm-5">
                {/* <img src={image} alt="Image" /> */}
                <Image
                  src={image}
                  xxlSize={"85%"}
                  xlSize={"90%"}
                  mdSize={"90%"}
                />
              </div>
              <div className="col-lg-5 col-md-12 ps-5 d-flex flex-column justify-content-center">
                <Typography
                  text="Organize Your Files"
                  type="h2"
                  className="col-lg-8 heading-1"
                />
                <Typography
                  text="Our intuitive file management system allows you to easily organize your files with a few simple clicks. Create folders, subfolders, and categorize your files to keep everything in order. Use tags and search functions to quickly find what you need."
                  type="p"
                  color="#788199"
                  className="col-lg-12 mt-3"
                />
                <Typography
                  text="Keep Them Safe"
                  type="h2"
                  className="col-lg-8 heading-1"
                />
                <Typography
                  text="Your files are securely stored with our advanced encryption technology, ensuring that only you have access to them. Regular backups and data redundancy measures are in place to protect your files from accidental loss or damage."
                  type="p"
                  color="#788199"
                  className="col-lg-12 mt-3"
                />
                <Typography
                  text="Access Everywhere"
                  type="h2"
                  className="col-lg-8 heading-1"
                />
                <Typography
                  text="With our cloud-based solution, you can access your files from any device, anywhere in the world. Whether you're using a smartphone, tablet, or computer, your files are always within reach. Collaborate with others by sharing files and folders, making teamwork easier than ever."
                  type="p"
                  color="#788199"
                  className="col-lg-12 mt-3"
                />
              </div>
            </div>
          </div>
        </FullPageLayout>
      </HowItWorksPageStyle>
    );
}

const HowItWorksPageStyle = styled.section`
  
`;

export default HowItWorksPage;
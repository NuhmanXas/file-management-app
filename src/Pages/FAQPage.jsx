import styled from "styled-components";
import FullPageLayout from "../Components/FullPageLayout";
import TopBar from "../Components/TopBar";
import Typography from "../Components/Typography";
import AppAccordion from "../BootstrapComponents/Accordion";


function FAQPage() {

    const getFAQList = () => {
        return [
          {
            header: "How do I start organizing my files?",
            body: "To start organizing your files, simply log in to your account, navigate to the 'Files' section, and use the options to create folders, upload files, and tag items for easier categorization and retrieval.",
          },
          {
            header: "How is the security of my files ensured?",
            body: "We use advanced encryption to secure your files, ensuring that only you can access them. Additionally, our system performs regular backups and employs data redundancy measures to prevent data loss.",
          },
          {
            header: "Can I access my files from multiple devices?",
            body: "Yes, you can access your files from any device with an internet connection. Our cloud-based system allows seamless access from smartphones, tablets, and computers.",
          },
          {
            header: "How do I share files with others?",
            body: "To share files, select the file or folder you wish to share, and choose the 'Share' option. You can then generate a link or invite collaborators by entering their email addresses.",
          },
          {
            header: "Is there a limit to the number of files I can store?",
            body: "Storage limits depend on your subscription plan. Please refer to our pricing page for details on the storage capacity available for each plan.",
          },
        ];
    }

    return (
      <FAQPageStyle>
        <FullPageLayout className="d-flex flex-column">
          <TopBar />
          <div className="body-container flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="faq-container">
              <Typography text="Frequently Asked Questions (FAQs)" type="h3" />

              <AppAccordion list={getFAQList()} />
            </div>
          </div>
        </FullPageLayout>
      </FAQPageStyle>
    );
}


const FAQPageStyle = styled.div`
  
`;

export default FAQPage;
import styled from "styled-components";
import FullPageLayout from "../Components/FullPageLayout";
import TopBar from "../Components/TopBar";
import Typography from "../Components/Typography";
import PricingList from "../Components/PricingList";


function PricingPage() {

    const pricingList = [
      {
        title: "Basic Plan",
        price: "$5",
        features: [
          {
            title: "Storage",
            text: "50 GB",
          },
          {
            title: "File Sharing",
            text: "Up to 5 users",
          },
          {
            title: "Security",
            text: "Basic encryption",
          },
          {
            title: "Support",
            text: "Email support",
          },
          {
            title: "Access",
            text: "Web and mobile access",
          },
        ],
      },
      {
        title: "Pro Plan",
        price: "$15",
        features: [
          {
            title: "Storage",
            text: "200 GB",
          },
          {
            title: "File Sharing",
            text: "Up to 20 users",
          },
          {
            title: "Security",
            text: "Advanced encryption",
          },
          {
            title: "Support",
            text: "Email and chat support",
          },
          {
            title: "Access",
            text: "Web, mobile, and desktop access",
          },
          {
            title: "Additional Features",
            text: "File versioning and recovery",
          },
        ],
      },
      {
        title: "Premium Plan",
        price: "$30",
        features: [
          {
            title: "Storage",
            text: "1 TB",
          },
          {
            title: "File Sharing",
            text: "Unlimited users",
          },
          {
            title: "Security",
            text: "Advanced encryption with two-factor authentication",
          },
          {
            title: "Support",
            text: "24/7 phone, email, and chat support",
          },
          {
            title: "Access",
            text: "Web, mobile, desktop, and offline access",
          },
          {
            title: "Additional Features",
            text: "File versioning, recovery, and priority support",
          },
        ],
      },
    ];


    return (
      <PricingPageStyle>
        <FullPageLayout className="d-flex flex-column">
          <TopBar />
          <div className="body-container flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="faq-container">
              <Typography text="Pricing Plan" type="h3" />
            <PricingList list={pricingList} />

            </div>
          </div>
        </FullPageLayout>
      </PricingPageStyle>
    );
}

const PricingPageStyle = styled.div`
  
`;

export default PricingPage;
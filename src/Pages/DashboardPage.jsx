import styled from "styled-components";
import { MdDashboard, MdOutlineGridView } from "react-icons/md";
import { FaSortAmountDown } from "react-icons/fa";
import SmallButton from "../Components/SmallButton";
import { FiPlus } from "react-icons/fi";
import DashboardLayout from "../Components/DashboardLayout";
import Typography from "../Components/Typography";
import { FaRegImage } from "react-icons/fa6";
import { ImMusic } from "react-icons/im";
import { MdOutlineOndemandVideo } from "react-icons/md";
import MediaStorageSummaryList from "../Components/MediaStorageSummaryList";
import {
  IoDocumentText,
  IoImage,
  IoVideocam ,
} from "react-icons/io5";

import suggestionImage1 from '../Assets/Suggestions_image1.jpeg';
import suggestionImage2 from '../Assets/Suggestions_image2.jpeg';
import suggestionImage3 from '../Assets/Suggestions_image3.jpeg';
import suggestionImage4 from '../Assets/Suggestions_image4.jpeg';
import SuggestionsList from "../Components/SuggestionsList";
import Table1 from "../Components/Table1";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";

function DashboardPage() {

    const getMediaListWithSpace = () => {
        return [
          {
            type: "Image",
            items: "361 items",
            icon: <FaRegImage />,
            space: "358.4 GB of 1TB",
            color: "#ff4647",
            percentage: 35,
          },
          {
            type: "Video",
            items: "109 items",
            icon: <MdOutlineOndemandVideo />,
            space: "81.92 GB of 1TB",
            color: "#3146ff",
            percentage: 8,
          },
          {
            type: "Music",
            items: "987 items",
            icon: <ImMusic />,
            space: "174.08 GB of 1TB",
            color: "#41cd65",
            percentage: 17,
          },
          {
            type: "Documents",
            items: "24 items",
            icon: <FaRegImage />,
            space: "471.04 GB of 1TB",
            color: "#f3cc31",
            percentage: 46,
          },
        ];
    }


    
    const getSuggestionList = () => {
      return [
        {
          name: "School paper.docx",
          url: suggestionImage1,
        },
        {
          name: "Work paper.pdf",
          url: suggestionImage2,
        },
        {
          name: "IMG_000007.jpg",
          url: suggestionImage3,
        },
        {
          name: "Important keynote.pptx",
          url: suggestionImage4,
        },
      ];
    };


    const getRecentFileList = () => {
      return {
        thead: ["Name", "Size", "Shared", "Last modified", "Type", "Owner"],
        tbody: [
          {
            Name: (
              <>
                <span className="me-2">
                  <IoDocumentText />
                </span>
                Document1.txt
              </>
            ),
            Size: "15 KB",
            Shared: "Me",
            "Last modified": "2024-07-18",
            Type: "Text File",
            Owner: "John Doe",
          },
          {
            Name: (
              <>
                <span className="me-2">
                  <IoImage />
                </span>
                Image2.png
              </>
            ),
            Size: "2 MB",
            Shared: "Team",
            "Last modified": "2024-07-17",
            Type: "Image",
            Owner: "Jane Smith",
          },
          {
            Name: (
              <>
                <span className="me-2">
                  <IoVideocam />
                </span>
                Presentation3.pptx
              </>
            ),
            Size: "20 MB",
            Shared: "Me",
            "Last modified": "2024-07-16",
            Type: "Presentation",
            Owner: "John Doe",
          },
          {
            Name: (
              <>
                <span className="me-2">
                  <BsFillFileEarmarkSpreadsheetFill />
                </span>
                Spreadsheet4.xlsx
              </>
            ),
            Size: "500 KB",
            Shared: "Team",
            "Last modified": "2024-07-15",
            Type: "Spreadsheet",
            Owner: "Jane Smith",
          },
          {
            Name: (
              <>
                <span className="me-2">
                  <IoDocumentText />
                </span>
                Document5.docx
              </>
            ),
            Size: "30 KB",
            Shared: "Me",
            "Last modified": "2024-07-19",
            Type: "Word Document",
            Owner: "Emily Clark",
          },
          {
            Name: (
              <>
                <span className="me-2">
                  <IoImage />
                </span>
                Image6.jpg
              </>
            ),
            Size: "3 MB",
            Shared: "Me",
            "Last modified": "2024-07-14",
            Type: "Image",
            Owner: "Michael Brown",
          },
          {
            Name: (
              <>
                <span className="me-2">
                  <IoVideocam />
                </span>
                Video7.mp4
              </>
            ),
            Size: "100 MB",
            Shared: "Team",
            "Last modified": "2024-07-13",
            Type: "Video",
            Owner: "Sarah Lee",
          },
          {
            Name: (
              <>
                <span className="me-2">
                  <BsFillFileEarmarkSpreadsheetFill />
                </span>
                Report8.csv
              </>
            ),
            Size: "250 KB",
            Shared: "Team",
            "Last modified": "2024-07-12",
            Type: "CSV",
            Owner: "David Wilson",
          },
          {
            Name: (
              <>
                <span className="me-2">
                  <IoDocumentText />
                </span>
                Notes9.pdf
              </>
            ),
            Size: "100 KB",
            Shared: "Me",
            "Last modified": "2024-07-11",
            Type: "PDF",
            Owner: "Laura Johnson",
          },
        ],
      };
    };

    return (
      <DashboardLayout>
        <DashboardPageStyle>
          <section className="d-flex align-items-center">
            <SmallButton
              icon={<MdDashboard />}
              text=" - Overview Storage"
              className="rounded-3 p-3"
              SmallButtonType="style-4"
            />
            <div className="ms-auto d-flex gap-3">
              <SmallButton
                icon={<FaSortAmountDown />}
                text="Sort"
                SmallButtonType="style-4"
                className="rounded-3 p-3"
              />
              <SmallButton
                icon={<MdOutlineGridView />}
                text="View"
                SmallButtonType="style-4"
                className="rounded-3 p-3"
              />
              <SmallButton
                icon={<FiPlus />}
                text="Create"
                className="rounded-3 p-3"
              />
            </div>
          </section>
          <section>
            <Typography text="Overview Storage" type="h2" className="mt-3" />
            <MediaStorageSummaryList list={getMediaListWithSpace()} />
          </section>
          <section>
            <Typography text="Suggestions" type="h2" className="mt-3" />
            <SuggestionsList list={getSuggestionList()} />
          </section>
          <selection>
            <Typography text="Recent files" type="h2" className="mt-3" />
            <Table1 tableList={getRecentFileList()} />
          </selection>
        </DashboardPageStyle>
      </DashboardLayout>
    );
}

const DashboardPageStyle = styled.div`
  
`;

export default DashboardPage;
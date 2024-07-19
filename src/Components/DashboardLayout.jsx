import styled from "styled-components";
import FullPageLayout from "./FullPageLayout";
import Logo from "./Logo";
import DashboardNav from "./DashboardNav";
import {
  FaBell,
  FaClock,
  FaFolder,
  FaSchool,
  FaStar,
  FaTrash,
  FaUsers,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import SmallButton from "./SmallButton";
import { MdFileUpload } from "react-icons/md";
import ProgressBarView from "./ProgressBarView";
import SearchBox from "./SearchBox";
import { FaInfoCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import TopIconDropDown from "./TopIconDropDown";
import TopImageDropDown from "./TopImageDropDown";
import UserImage from "../Assets/user.jpeg";

function DashboardLayout({ children }) {
  const getFileManagerList = () => [
    {
      title: "File Manager",
      path: "/file-manager",
      icon: <FaFolder />,
      sub: getFileManagerSubList(),
    },
    {
      title: "Recent Files",
      path: "/recent-files",
      icon: <FaClock />,
      sub: getRecentFilesSubList(),
    },
    {
      title: "Favorites",
      path: "/favorites",
      icon: <FaStar />,
      sub: getFavoritesSubList(),
    },
    {
      title: "Trash Bin",
      path: "/trash-bin",
      icon: <FaTrash />,
      sub: getTrashBinSubList(),
    },
  ];

  const getFileManagerSubList = () => [
    { text: "Documents", path: "/file-manager/documents" },
    { text: "Images", path: "/file-manager/images" },
    { text: "Videos", path: "/file-manager/videos" },
  ];

  const getRecentFilesSubList = () => [
    { text: "Last 24 Hours", path: "/recent-files/last-24-hours" },
    { text: "Last Week", path: "/recent-files/last-week" },
    { text: "Last Month", path: "/recent-files/last-month" },
  ];

  const getFavoritesSubList = () => [
    { text: "Work", path: "/favorites/work" },
    { text: "Personal", path: "/favorites/personal" },
    { text: "Projects", path: "/favorites/projects" },
  ];

  const getTrashBinSubList = () => [
    { text: "Deleted Files", path: "/trash-bin/deleted-files" },
    { text: "Deleted Folders", path: "/trash-bin/deleted-folders" },
    { text: "Restore All", path: "/trash-bin/restore-all" },
  ];

  const getSharedFileList = () => [
    {
      title: "Team",
      path: "/team",
      icon: <FaUsers />,
      sub: getTeamSubList(),
    },
    {
      title: "School",
      path: "/school",
      icon: <FaSchool />,
      sub: getSchoolSubList(),
    },
  ];

  const getTeamSubList = () => [
    { text: "Team Documents", path: "/team/documents" },
    { text: "Team Images", path: "/team/images" },
    { text: "Team Videos", path: "/team/videos" },
  ];

  const getSchoolSubList = () => [
    { text: "School Documents", path: "/school/documents" },
    { text: "School Images", path: "/school/images" },
    { text: "School Videos", path: "/school/videos" },
  ];

  const getTopIconDropDownSubList = (type) => {
    switch (type) {
      case "info":
        return [
          { text: "User Guide", path: "/user-guide" },
          { text: "FAQs", path: "/faqs" },
          { text: "Contact Us", path: "/contact-us" },
        ];
      case "notifications":
        return [
          {
            text: "New file uploaded",
            path: "/notifications/new-file-uploaded",
          },
          { text: "File shared with you", path: "/notifications/file-shared" },
          {
            text: "File download completed",
            path: "/notifications/file-download",
          },
        ];
      case "settings":
        return [
          { text: "Account Settings", path: "/settings/account" },
          { text: "Notification Settings", path: "/settings/notifications" },
          { text: "Privacy Settings", path: "/settings/privacy" },
          { text: "Billing Information", path: "/settings/billing" },
        ];
      default:
        return [];
    }
  };

  const getTopImageDropDownSubList = () => [
    { text: "Profile", path: "/user/profile" },
    { text: "My Files", path: "/user/files" },
    { text: "Shared with Me", path: "/user/shared" },
    { text: "Recent Activity", path: "/user/activity" },
    { text: "Logout", path: "/user/logout" },
  ];

  return (
    <DashboardLayoutStyle>
      <FullPageLayout>
        <div className="row min-vh-100">
          <section className="side-bar-container sticky-top vh-100 col-xxl-2 col-xl-3 col-lg-3 d-flex flex-column ps-5 justify-content-start pt-4">
            <Logo />

            <DashboardNav title="File manager" navList={getFileManagerList()} />
            <DashboardNav title="Shared files" navList={getSharedFileList()} />

            <SmallButton
              icon={<FaPlus />}
              text="Create shared folder"
              className="mt-3 rounded-2"
              width="85%"
            />

            <div className="mt-auto">
              <ProgressBarView
                icon={<FaFolder />}
                text="Storage"
                percentage={43}
                width="85%"
                className="mb-3"
              />

              <SmallButton
                icon={<MdFileUpload />}
                text="Upgrade storage"
                className="mb-3 rounded-2"
                width="85%"
              />
            </div>
          </section>
          <section className="col-xxl-10 col-xl-9 col-lg-9 ">
            <div className="top-bar position-sticky sticky-top  d-flex align-items-center">
              <SearchBox text="Search..." width="35%" />

              <div className="ms-auto d-flex gap-3">
                <TopIconDropDown
                  icon={<FaInfoCircle />}
                  className="top-bar-icon"
                  subList={getTopIconDropDownSubList("info")}
                />
                <TopIconDropDown
                  icon={<FaBell />}
                  className="top-bar-icon"
                  subList={getTopIconDropDownSubList("notifications")}
                />
                <TopIconDropDown
                  icon={<IoSettings />}
                  className="top-bar-icon"
                  subList={getTopIconDropDownSubList("settings")}
                />

                <TopImageDropDown
                  image={UserImage}
                  className="top-bar-icon"
                  subList={getTopImageDropDownSubList()}
                />
              </div>
            </div>

            <div className="mt-3 page-container">{children}</div>
          </section>
        </div>
      </FullPageLayout>
    </DashboardLayoutStyle>
  );
}

const DashboardLayoutStyle = styled.div`
  .side-bar-container {
    background-color: #272c34;
    display: flex;
    flex-direction: column;
  }

  .mt-auto {
    margin-top: auto;
  }

  .top-bar {
    height: 120px;
    position: relative;
    background-color: #181a1f;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      background-color: #272c34;
      width: 100%;
      left: 0px;
      bottom: 0px;
    }
  }
`;

export default DashboardLayout;

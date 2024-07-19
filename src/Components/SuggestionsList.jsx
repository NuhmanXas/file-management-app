import styled from "styled-components";
import Typography from "./Typography";
import { FaFileAlt } from "react-icons/fa";



function SuggestionsList({ list = [] , className , ...props }) {
    return (
      <SuggestionsListStyle
        className={` d-flex justify-content-between gap-3 ${className}`}
        {...props}
      >
        {list.map(({ name, url }, i) => (
          <Suggestions key={i} name={name} url={url} />
        ))}
      </SuggestionsListStyle>
    );
}

const SuggestionsListStyle = styled.div`
  
`;

export default SuggestionsList;


function Suggestions({ name , url }) {
  return (
    <SuggestionsStyle className="p-3 flex-grow-1 rounded-2">
      <img src={url} alt={name} />
      <section className="file-name-container d-flex align-items-center gap-3">
        <FaFileAlt className="icon" />
        <Typography
          text={name}
          type="p"
          color="#b2b6c3"
          className="file-name-text"
        />
      </section>
    </SuggestionsStyle>
  );
}


const SuggestionsStyle = styled.div`
  background-color: #272c34;
  width: 250px;
  min-height: 107px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .file-name-container {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 10px;
    left: 0px;
    background-color: #788199;
    border-radius: 8px;

    .icon {
      font-size: 24px;
      color: #b2b6c3;
    }

    .file-name-text {
      font-size: 15px;
      line-height: normal;
      margin-bottom: auto;
    }
  }

  &:hover {
    opacity: 0.7;
  }
`;

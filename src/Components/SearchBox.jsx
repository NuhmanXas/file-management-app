import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { HiFilter } from "react-icons/hi";

function SearchBox({ text , width = "300px" }) {
    return (
      <SearchBoxStyle
        width={width}
        className="d-flex ps-3 pe-3 rounded-2 align-items-center justify-content-between"
      >
        <FaSearch />
        <input type="search" className="flex-grow-1 ps-4 pe-3" placeholder={text} />
        <HiFilter />
      </SearchBoxStyle>
    );
}

const SearchBoxStyle = styled.div`
  background-color: transparent;
  color: white;
  background-color: #272c34;
  height: 45px;
  width: ${(props) => props.width};

  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
  }
`;

export default SearchBox;
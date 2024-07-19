import React, { useState } from "react";
import styled from "styled-components";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const Table1Style = styled.table`
  width: 100%;
  th {
    cursor: pointer;
    color: white;
    border-bottom: 1px solid #272c34;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
    color: white;

    &:hover {
      color: #ddd;
    }
  }
`;

const CustomCheckbox = styled.input`
  /* Hide the default checkbox */
  appearance: none;
  -webkit-appearance: none;
  background-color: #272c34; /* Background color for unchecked */
  border: 2px solid #272c34;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  /* Add a checkmark for checked state */
  &:checked {
    background-color: #272c34; /* Background color for checked */
    border: 2px solid #272c34;
  }

  /* Add a checkmark using pseudo-element */
  &:checked::after {
    content: "";
    position: absolute;
    left: 7px;
    top: 3px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;



function Table1({ tableList = { thead: [], tbody: [] } }) {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [selectedRows, setSelectedRows] = useState([]);

  const sortedTableList = React.useMemo(() => {
    let sortableItems = [...tableList.tbody];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [tableList.tbody, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <FaSort />;
    }
    if (sortConfig.direction === "ascending") {
      return <FaSortUp />;
    }
    return <FaSortDown />;
  };

  const handleSelectAll = () => {
    if (selectedRows.length === sortedTableList.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(sortedTableList.map((_, index) => index));
    }
  };

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <Table1Style>
      <thead>
        <tr>
          <th>
            <CustomCheckbox
              type="checkbox"
              checked={selectedRows.length === sortedTableList.length}
              onChange={handleSelectAll}
            />
          </th>
          {tableList.thead.map((data) => (
            <th key={data} onClick={() => requestSort(data)}>
              {data} {getSortIcon(data)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedTableList.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              <CustomCheckbox
                type="checkbox"
                checked={selectedRows.includes(rowIndex)}
                onChange={() => handleSelectRow(rowIndex)}
              />
            </td>
            {tableList.thead.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table1Style>
  );
}


export default Table1;

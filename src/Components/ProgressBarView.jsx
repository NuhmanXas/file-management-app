import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getColorSchemes } from "../Services";

function ProgressBarView({ icon, text, percentage, width = "100%", ...props }) {
  return (
    <ProgressBarViewStyle width={width} percentage={percentage} {...props}>
      <div className="text-view d-flex justify-content-between mb-2 mt-2">
        <span className="letter-text">
          <span className="icon">{icon}</span>{" "}
          <span className="text">{text}</span>
        </span>
        <span className="percentage-container">{percentage}%</span>
      </div>
      <div className="progress-bar-container">
        <span></span>
      </div>
    </ProgressBarViewStyle>
  );
}

ProgressBarView.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  width: PropTypes.string,
};

const ProgressBarViewStyle = styled.div`
  color: white;
  width: ${(props) => props.width};

  .progress-bar-container {
    background-color: #788199;
    display: block;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    span {
      display: block;
      height: 100%;
      width: ${(props) => props.percentage}%;
      background-color: ${getColorSchemes().color1.backColor};
      border-radius: 5px;
    }
  }
`;

export default ProgressBarView;

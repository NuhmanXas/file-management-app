import styled from "styled-components";
import Typography from "./Typography";



function MediaStorageSummaryList({ list = [] , className , ...props }) {
    return (
      <MediaStorageSummaryListStyle
        className={` d-flex gap-3 ${className}`}
        {...props}
      >
        {list.map(({ type, items, icon, space, percentage, color }, i) => (
          <MediaStorageSummary
            key={i}
            type={type}
            items={items}
            icon={icon}
            space={space}
            color={color}
            percentage={percentage}
          />
        ))}
      </MediaStorageSummaryListStyle>
    );
}

const MediaStorageSummaryListStyle = styled.div`
  
`;

export default MediaStorageSummaryList;


function MediaStorageSummary({ type, items, icon, space, color, percentage }) {
  return (
    <MediaStorageSummaryStyle className="p-3 rounded-2" color={color} percentage={percentage}>
      <section className="d-flex align-items-center">
        <div className="icon-con d-flex justify-content-center align-items-center me-3">
          {icon}
        </div>
        <section className="d-flex flex-column">
          <Typography text={type} type="h5" className="media-heading mb-1" />
          <Typography
            text={items}
            type="p"
            color="#788199"
            className="item-desc mb-0"
          />
        </section>
      </section>
      <section className="d-flex flex-column mt-2">
        <div className="progress-container  mb-2">
          <span></span>
        </div>
        <Typography
          text={space}
          type="p"
          className="item-desc mb-0"
          color="#788199"
        />
      </section>
    </MediaStorageSummaryStyle>
  );
}


const MediaStorageSummaryStyle = styled.div`
  background-color: #272c34;
  width: 250px;
  min-height: 107px;

  .media-heading {
    line-height: normal;
  }

  .item-desc {
    line-height: normal;
    font-size: 15px;
  }

  .icon-con {
    background-color: ${(props) => props.color};
    width: 52px;
    height: 52px;
    border-radius: 8px;
    color: white;
  }

  .progress-container {
    background-color: #788199;
    height: 7px;
    border-radius: 10px;

    span {
      display: block;
      height: 100%;
      background-color: ${(props) => props.color};
      width: ${(props) => props.percentage}%;
      border-radius: 10px;
    }
  }
`;

import styled from "styled-components";

function FullPageLayout({ backColor = "#181a1f" , children , className , ...pops }) {
  return (
    <FullPageLayoutStyle
      {...pops}
      className={`container-fluid min-vh-100 ${className}`}
      backColor={backColor}
    >
      {children}
    </FullPageLayoutStyle>
  );
}

const FullPageLayoutStyle = styled.div`

    background-color: ${props => props.backColor};

`;

export default FullPageLayout;

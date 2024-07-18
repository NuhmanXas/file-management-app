import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import { media } from "../Services";

function AppAccordion({ list = [] }) {
  return (
    <AppAccordionStyle>
      <Accordion defaultActiveKey="0">
        {list.map(({ header, body }, i) => (
          <Accordion.Item eventKey={i} key={i}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>{body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </AppAccordionStyle>
  );
}

const AppAccordionStyle = styled.div`
  width: 1000px;

  .accordion {
    --bs-accordion-btn-bg: #272c34;
    --bs-accordion-btn-color: #d3d3d3;
    --bs-accordion-active-bg: #3b424e;
    --bs-accordion-active-color: #ffffff;
    --bs-accordion-btn-focus-box-shadow: #191c21;
    --bs-accordion-bg: #6e747d;
    --bs-accordion-color: #e8e8e8;

    .accordion-button::after {
      filter: invert(1);
    }

    .accordion-item {
      border: none; /* Removes the border between items */
    }

    .accordion-button {
      border: none; /* Removes the border around the button */
    }
  }

  @media ${media.md} {
    width: 600px;
  }
`;

export default AppAccordion;

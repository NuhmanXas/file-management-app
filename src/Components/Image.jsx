import styled from "styled-components";
import { media } from "../Services";

function Image({
  src,
  alt = "image",
  xxlSize,
  xlSize,
  lgSize,
  mdSize,
  smSize,
}) {
  return (
    <ImageStyle
      src={src}
      alt={alt}
      xxlSize={xxlSize}
      xlSize={xlSize}
      lgSize={lgSize}
      mdSize={mdSize}
      smSize={smSize}
    />
  );
}

const ImageStyle = styled.img`
  width: 100%; /* Default width */

  @media ${media.xxl} {
    width: ${(props) => props.xxlSize};
  }
  @media ${media.xl} {
    width: ${(props) => props.xlSize};
  }
  @media ${media.lg} {
    width: ${(props) => props.lgSize};
  }
  @media ${media.md} {
    width: ${(props) => props.mdSize};
  }
  @media ${media.sm} {
    width: ${(props) => props.smSize};
  }
`;

export default Image;

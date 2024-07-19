export const getColorSchemes = () => {
  return {
    color1: {
      backColor: "#3146ff",
      color: "#ffffff",
    },
    color2: {
      backColor: "#181a1f",
      color: "#ffffff",
      border: "#788199",
    },
    color3: {
      color: "#ffffff",
    },
    color4: {
      backColor: "#272c34",
      color: "#ffffff",
    },
  };
};



const sizes = {
  xs: "575.98px",
  sm: "767.98px",
  md: "991.98px",
  lg: "1199.98px",
  xl: "1399.98px",
  xxl: "1400px",
};

// Create a helper function for media queries
export const media = {
  xs: `(max-width: ${sizes.xs})`,
  sm: `(max-width: ${sizes.sm})`,
  md: `(max-width: ${sizes.md})`,
  lg: `(max-width: ${sizes.lg})`,
  xl: `(max-width: ${sizes.xl})`,
  xxl: `(min-width: ${sizes.xxl})`,
};
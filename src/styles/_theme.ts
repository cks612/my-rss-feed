export const color = {
  FONT_BLACK: "#000",
  FONT_WHITE: "#FFF",
  FEED_BODY: "#fffcf1",
  FEED_CONTENT: "#2b2d36",
  FEED_FOOTER: "#595f67",
  PAGINATE_TEXT: "#52a8ec",
};

export const mixins = {
  flexBox: (direction = "row", align = "center", justify = "center") => `
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`,

  widthHeightSize: (width = "100%", height = "100%") => `
  width:${width};
  height:${height};
`,

  commonFont: (size = "1.2em", weight = "500", font = "Noto Sans KR") => `
  font-size:${size};
  font-weight: ${weight};
  font-family: ${font};
`,

  commonPadding: (padding = "20px 20px") => `
  padding:${padding}
`,
  positionCenter: (type = "absolute") => {
    if (type === "absolute" || type === "fixed")
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    `;
    return;
  },
};

export const styles = {
  lightTheme: {
    ...color,
    MAIN: "#6868AD",
    SUB: "#dbd7ff",
    BACKGROUND: "#fdfdff",
    SUBBACKGROUND: "rgb(242, 240, 253)",
  },

  darkTheme: {
    ...color,
    MAIN: "#dbd7ff",
    SUB: "#6868AD",
    BACKGROUND: "#202124",
    SUBBACKGROUND: "#30373e",
  },
};

export type MainTheme = typeof styles.lightTheme;

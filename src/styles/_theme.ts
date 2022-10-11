export const color = {
  mainBodyColor: "#f3f4f6",
  whiteColor: "#FFF",
  mainColor: "#0EB8FF",
  mainFontColor: "#52a8ec",
  carouselBackColor: "#bbe3fc",
  titleColor: "#28323c",
  rightTagColor: "#f2fafd",
  grayColor: "#6c757d",
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

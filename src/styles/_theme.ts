const color = {
  // bg
  bg_page1: "#F8F9FA",
  bg_page2: "#FFFFFF",
  bg_element: "#FFFFFF",
  bg_element2: "#F8F9FA",
  bg_element3: "#E9ECEF",
  bg_element4: "#DEE2E6",
  dark_bg_page1: "#121212",
  dark_bg_element1: "#1E1E1E",
  dark_bg_element2: "#252525",
  dark_bg_element3: "#2E2E2E",

  // text
  text1: "#212529",
  text2: "#495057",
  text3: "#868E96",
  text4: "#CED4DA",
  dark_text1: "#ECECEC",
  dark_text2: "#D9D9D9",
  dark_text3: "#ACACAC",
  dark_text4: "#595959",

  // border
  border1: "#343A40",
  border2: "#ADB5BD",
  border3: "#DEE2E6",
  border4: "#F1F3F5",
  dark_border1: "#E0E0E0",
  dark_border2: "#A0A0A0",
  dark_border3: "#4D4D4D",
  dark_border4: "#2A2A2A",
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
  commonFont: (size = "1.2em", weight = "500") => `
  font-size:${size};
  font-weight: ${weight};

`,

  commonPadding: (padding = "20px 20px") => `
  padding:${padding}
`,

  border: (border = "1px solid black", radius = "") => `
  border:${border};
  border-radius:${radius};
  `,

  borderDetail: (
    left = "1px solid black;",
    right = "1px solid black;",
    top = "1px solid black;",
    bottom = "1px solid black;",
    leftRadius = "",
    rightRadius = ""
  ) => `
  border-left:${left};
  border-right:${right};
  border-top:${top};
  border-bottom:${bottom};
  border-bottom-left-radius:${leftRadius};
  border-bottom-right-radius:${rightRadius};
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

  visibleAttrs: (
    z = "1",
    opacity = "0",
    visible = "hidden",
    transition = "0.5s"
  ) => `
  z-index:${z};
  opacity:${opacity};
  visibility:${visible};
  transition:${transition}
  `,
};

export const styles = {
  lightTheme: {
    BACKGROUND: color.bg_page1,
    PRIMARY_FONT: color.text1,
    FEED_BACKGROUND: color.bg_element3,
    FEED_TITLE: color.text1,
    FEED_CONTENT: color.text2,
    FEED_FOOTER: color.text3,
    PAGINATE_NUM_TEXT: color.text3,
    BLOG_LIST: color.dark_bg_element1,
    BLOG_LIST_FONT: color.text4,
  },

  darkTheme: {
    BACKGROUND: color.dark_bg_element1,
    PRIMARY_FONT: color.dark_text1,
    FEED_BACKGROUND: color.dark_bg_element3,
    FEED_TITLE: color.dark_text1,
    FEED_CONTENT: color.dark_text2,
    FEED_FOOTER: color.dark_text3,
    PAGINATE_NUM_TEXT: color.dark_text3,
    BLOG_LIST: color.bg_page1,
    BLOG_LIST_FONT: color.dark_text4,
  },
};
export type MainTheme = typeof styles.lightTheme;

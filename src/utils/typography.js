import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["700", "400"],
    },
  ],
  baseFontSize: "21px",
  baseLineHeight: 1.285,
  scaleRatio: 2.5,
  paragraphSpacing: 2.19,
  //headerFontFamily: ["windsor_outline_dregular", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  // See below for the full list of options.
})
export default typography

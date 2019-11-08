import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["700", "400"],
    },
  ],
  baseFontSize: "16px",
  baseLineHeight: 1.57,
  scaleRatio: 5.04,
  paragraphSpacing: 2.38,
  headerFontFamily: ["Windsor", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  // See below for the full list of options.
})
export default typography

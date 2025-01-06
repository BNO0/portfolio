const ColorTheme = {
  // dark gray
  Base_bgColor: `bg-[#272525]`, //#272525
  Base_textColor: `text-white`, //#FFFFFF

  // dark blue
  bgColor1: `bg-[#18386b]`, //#18386b
  textColor1: `text-white`, //#FFFFFF
  bgColor1_2: `bg-[#204c8e]`, //#204c8e
  textColor1_2: `text-white`, //#FFFFFF

  // dark gray
  bgColor2: `bg-[#272525]`, //#272525
  textColor2: `text-white`, //#FFFFFF
  bgColor2_2: `bg-[#3c3838]`, //#3c3838
  textColor2_2: `text-white`, //#FFFFFF

  // white blue
  iconColor: `bg-[#C9E3FA]`,
  iconColorRGB: `#C9E3FA`,
}
const calculateColor1 = (index, colors) => {
  return colors[index%colors.length];
}
const calculateColor2 = (index, index2, colors) => {
  const row = index%colors.length;
  const column = index2%colors[row].length;
  return colors[row][column];
}
const tailwindToRGB = (color)=>{return "#"+color.split("#")[1].substring(0,6);};
export {ColorTheme, tailwindToRGB, calculateColor1, calculateColor2};
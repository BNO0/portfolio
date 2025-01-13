/**
 * @param {*} color ex) bg-[#C9E3FA]
 * @returns RGB 추출 ex) C9E3FA
 */
function tailwindToRGB(color){
  return "#"+color.split("#")[1].substring(0,6);
}
/**
 * @param {*} index row
 * @param {*} colors [color1, color2, ...]
 * @returns 계산된 color
 */
function calculateColor1(index, colors){
  return colors[index%colors.length];
}
/**
 * @param {*} index row
 * @param {*} index2 coloumns
 * @param {*} colors [[color1, color2], [color3, color4], ...]
 * @returns 계산된 color
 */
function calculateColor2(index, index2, colors){
  const row = index%colors.length;
  const column = index2%colors[row].length;
  return colors[row][column];
}
export {tailwindToRGB, calculateColor1, calculateColor2};
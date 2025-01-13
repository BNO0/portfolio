
/**
 * @param {*} props { data{link, linkTitle, linkIcon?}, colors{bgColor, textColor, hover_bgColor, hover_textColor, hover_fill} }
 * @returns 
 */
export default function ButtonLink(props) {
  const { data, colors } = props;
  const onClick = (url)=>{
    window.open(url, data.linkTitle);
  };
  return (
    <button onClick={()=>onClick(data.link)} className={`p-2 rounded-xl flex flex-row place-items-center
    ${colors.bgColor} ${colors.textColor} ${colors.hover_bgColor} ${colors.hover_textColor} ${colors.hover_fill}`}>
      {(data.linkIcon) ? <>{data.linkIcon}</> : <></>}
      <h2 className={`text-4xl font-bold ml-2 mr-2`}>{data.linkTitle}</h2>
    </button>
  );
}
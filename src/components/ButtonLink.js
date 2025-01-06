
export default function ButtonLink(props) {
  const { data, bgColor, textColor } = props;
  const onClink = (url)=>{
    window.open(url, data.linkTitle);
  };
  return (
    <button onClick={()=>onClink(data.link)} className={`p-2 rounded-xl flex flex-row place-items-center ${bgColor} ${textColor}`}>
      {(data.linkIcon) ? <>{data.linkIcon}</> : <></>}
      <h2 className={`text-2xl font-bold ml-2 mr-2`}>{data.linkTitle}</h2>
    </button>
  );
}
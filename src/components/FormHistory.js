import { ColorTheme } from "src/tailwindCSS/ColorTheme";
export default function FormHistory(props) {
  const { data, css } = props;
  return (
    <div className={`grid grid-cols-8 gap-0 ${css}`}>
      <h1 className={`col-span-8 text-5xl font-bold mb-5`}>{data.title}</h1>
      {data.datas.map((current, index)=>(
        <div key={current.title} className={`col-span-8 grid grid-cols-8 m-5`}>
          <div className={`col-span-1`}>
            <div className={`w-12 h-12 ${ColorTheme.bgColor1} rounded-md text-white text-lg font-bold flex items-center justify-center`}>
              {index+1}
            </div>
          </div>
          <div className={`col-span-7 ml-10`}>
            <h1 className={`text-2xl font-bold`}>{current.title}</h1>
            {current.contents.split(".").map((content, index)=>(
              <div key={content}>{content}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
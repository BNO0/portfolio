import { calculateSpan, DynamicTailwind } from "src/tailwindCSS/DynamicTailwind";
import { ColorTheme } from "src/tailwindCSS/ColorTheme";
import { tailwindToRGB } from "src/functions/CalculateColor";
export default function FormSequence(props) {
  const { data, css } = props;
  const dataCount = data.datas.length;
  return (
    <div className={`grid grid-cols-2 gap-4
      ${DynamicTailwind.mdGridCols[calculateSpan(dataCount, 3)]}
      ${DynamicTailwind.lgGridCols[calculateSpan(dataCount, 4)]}
      ${DynamicTailwind.xlGridCols[calculateSpan(dataCount, 5)]}
      ${DynamicTailwind._2xlGridCols[calculateSpan(dataCount, 6)]}
      ${css}`
    }>
      {data.datas.map((current, index)=>(
        <div key={current.title} className={`mt-5`}>
          <div className={`h-20 font-bold text-4xl`}>
            <svg width="100%" height="100%" viewBox="0 0 500 72">
              <path fill={`${tailwindToRGB(ColorTheme.bgColor1)}`} d="M 482 0 L 500 36 L 482 72 L 0 72 L 18 36 L 0 0 Z"></path>
              <text textAnchor="middle" dominantBaseline="middle" x="50%" y="50%" fill={`white`}>{index+1}</text>
            </svg>
          </div>
          <h1 className={`text-2xl font-bold mt-5`}>{current.title}</h1>
          <br/>
          {current.contents.split(".").map((content, index)=>(
            <div key={content}>{content}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
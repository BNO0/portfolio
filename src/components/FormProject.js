import { calculateSpan, DynamicTailwind } from "src/tailwindCSS/DynamicTailwind";
import { ColorTheme } from "src/tailwindCSS/ColorTheme";
import ImageComponents from "src/functions/ImageComponents";
import { tailwindToRGB } from "src/functions/CalculateColor";
import ProjectCommons from "./ProjectCommons";
export default function FormProject(props) {
  const { data, css } = props;
  const dataCount = data.datas.length;
  let imgCount = 0;
  if(data.image){imgCount = data.image.imgs.length;}
  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4
        ${DynamicTailwind.mdGridCols[calculateSpan(dataCount, 3)]}
        ${DynamicTailwind.xlGridCols[calculateSpan(dataCount, 4)]}
        ${DynamicTailwind._2xlGridCols[calculateSpan(dataCount, 5)]}
        ${css}`
      }>
        <ProjectCommons data={data} />
        {data.datas.map((current, index)=>(
          <div key={current.title} className={`mt-5`}>
            <div className={`flex items-center gap-4`}>
              {(current.icon ?
              <>{current.icon}</>
              :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clipRule="evenodd" />
              </svg>
              )}
              <div>
                <h2 className={`text-2xl font-bold`}>{current.title}</h2>
              </div>
            </div>
            <br/>
              {current.contents.split(".").map((content, index)=>(
                <div key={content}>{content}</div>
              ))}
          </div>
        ))}
      </div>
      {(imgCount>0) ?
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center
          ${DynamicTailwind.mdGridCols[calculateSpan(imgCount, 3)]}
          ${DynamicTailwind.xlGridCols[calculateSpan(imgCount, 4)]}
          ${DynamicTailwind._2xlGridCols[calculateSpan(imgCount, 5)]}
          ${css}`
        }>
          {ImageComponents(data.image, `object-cover min-w-40 mt-10`)}
        </div>
        : <></>
      }
    </>
  );
}
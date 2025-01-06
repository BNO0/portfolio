import { calculateSpan, DynamicTailwind } from "src/tailwindCSS/DynamicTailwind";
import { ColorTheme, tailwindToRGB } from "src/tailwindCSS/ColorTheme";
import ButtonLink from "./ButtonLink";
import ToggleDetails from "./ButtonToggle";
export default function FormProject(props) {
  const { data } = props;
  const dataCount = data.datas.length;
  let imgCount = 0;
  if(data.image){imgCount = data.image.imgs.length;}
  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 m-10
        ${DynamicTailwind.mdGridCols[calculateSpan(dataCount, 3)]}
        ${DynamicTailwind.xlGridCols[calculateSpan(dataCount, 4)]}
        ${DynamicTailwind._2xlGridCols[calculateSpan(dataCount, 5)]}`
      }>
        <div className={`col-span-full`}>
          <h1 className={`text-5xl font-bold`}>{data.title}</h1>
          <br/>
          {(data.link) ?
          <ButtonLink data={data} bgColor={`bg-[#C9E3FA]`} textColor={`text-[#000000]`}/>
          :
          <></>
          }
        </div>
        {data.datas.map((current, index)=>(
          <div key={current.title} className={`mt-5`}>
            <div className={`flex items-center gap-4`}>
              {(current.icon ?
              <>{current.icon}</>
              :
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path fill={`${tailwindToRGB(ColorTheme.iconColor)}`} d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clipRule="evenodd" />
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
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 m-10 place-items-center
          ${DynamicTailwind.mdGridCols[calculateSpan(imgCount, 3)]}
          ${DynamicTailwind.xlGridCols[calculateSpan(imgCount, 4)]}
          ${DynamicTailwind._2xlGridCols[calculateSpan(imgCount, 5)]}`
        }>
          {(data.image.type==="string") ?
            data.image.imgs.map((img, index)=>(
              <img key={img} className={`object-cover min-w-40 mt-10`} src={img} alt={img}></img>
            ))
            :
            data.image.imgs.map((svg, index)=>(
              <div key={svg} className={`object-cover min-w-40 mt-10`}>{svg}</div>
            ))
          }
        </div>
        : <></>
      }
      {(data.details) ? <div className={`m-10`}><ToggleDetails data={data.details}/></div> : <></>}
    </>
  );
}
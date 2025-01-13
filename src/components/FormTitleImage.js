import ImageComponents from "src/functions/ImageComponents";
import { calculateSpan, DynamicTailwind } from "src/tailwindCSS/DynamicTailwind";
export default function FormTitleImage(props) {
  const { data, css } = props;
  let imgCount = data.image.imgs.length;
  
  
  let gridCSS = `grid items-center gap-4 ${DynamicTailwind.gridCols[calculateSpan(imgCount, 6)]} ${DynamicTailwind.smGridCols[calculateSpan(imgCount, 8)]} ${css}`;
  let gridSpanCSS = `col-span-full`;
  let imageCSS = `object-cover min-w-10 w-10 mt-10`;
  if(imgCount===1){
    gridCSS = `grid items-center max-[900px]:place-items-center gap-4 grid-cols-1 min-[900px]:grid-cols-4 ${css}`;
    gridSpanCSS = `col-span-full min-[900px]:col-span-3`;
    imageCSS = `object-cover min-w-56 max-h-[400px]`;
  }
  return (
    <div className={gridCSS}>
      <div className={gridSpanCSS}>
        <h1 className={`text-5xl font-bold`}>{data.title}</h1>
        <div className={`mt-10`}></div>
        {data.contents.split(".").map((content, index)=>(
          <div key={content}>{content}</div>
        ))}
      </div>
      {ImageComponents(data.image, imageCSS)}
    </div>
  );
}

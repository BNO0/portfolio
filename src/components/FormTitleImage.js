import { calculateSpan, DynamicTailwind } from "src/tailwindCSS/DynamicTailwind";
export default function FormTitleImage(props) {
  const { data } = props;
  let imgCount = data.image.imgs.length;
  
  
  let gridCSS = `grid items-center gap-4 m-10 ${DynamicTailwind.gridCols[calculateSpan(imgCount, 6)]} ${DynamicTailwind.smGridCols[calculateSpan(imgCount, 8)]}`;
  let gridSpanCSS = `col-span-full`;
  if(imgCount===1){
    gridCSS = `grid items-center max-[900px]:place-items-center gap-4 m-10 grid-cols-1 min-[900px]:grid-cols-4`;
    gridSpanCSS = `col-span-full min-[900px]:col-span-3`;
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
      {
        (data.image.type==="string") ?
          (imgCount===1) ?
            <img className={`object-cover min-w-56 max-h-[400px]`} src={data.image.imgs[0]} alt={data.image.imgs[0]}></img>
            :
            data.image.imgs.map((img, index)=>(
            <img key={img} className={`object-cover min-w-10 w-10 mt-10`} src={img} alt={img}></img>
            ))
          :
          (imgCount===1) ?
            <div key={data.image.imgs[0]} className={`object-cover min-w-56 max-h-[400px]`}>{data.image.imgs[0]}</div>
            :
            data.image.imgs.map((svg, index)=>(
              <div key={svg} className={`object-cover min-w-10 w-10 mt-10`}>{svg}</div>
          )
        )
      }
    </div>
  );
}

/**
 * @param {*} image {type:"string", imgs:["파일명", ...]} / {type:"svg", imgs:[{key:"key", svg:<svg></svg>}, ...]}
 * @param {*} className css class
 * @returns map < img> / map < svg>
 */
export default function ImageComponents(image, className){
  return (image.type==="string") ?
    image.imgs.map((img, index)=>(
      <img key={img} className={className} src={img} alt={img}></img>
    ))
    :
    (image.type==="svg") ?
    image.imgs.map((img, index)=>(
      <div key={img.key} className={className}>{img.svg}</div>
    ))
    :
    <></>
  ;
}
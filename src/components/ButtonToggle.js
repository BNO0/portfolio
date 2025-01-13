
import { useState } from "react";
import Button from "./Button";
import { toggleH } from "src/data/SVG";
export default function ButtonToggle(props) {
  const { data, buttons } = props;
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((isOpen)=>!isOpen);
  };
  return (
    <>
      <div className={`inline-flex gap-2`}>
        {(buttons!==undefined) ? buttons.map((button, index)=>(button)) : <></>}
        <Button onClick={onClick} text={`상세내용`} SVG={toggleH} isOpen={isOpen}/>
      </div>
      <div className={`${isOpen ? "max-h-[3000px]" : "max-h-0"} transition-[max-height] duration-500 ease-in-out overflow-hidden`}>
        <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
          <div className="text-gray-700 mt-2">
          {(data) ?
            data.map((current, index)=>(
              <div key={current.title} className={`mt-5`}>
                <div className={`flex items-center gap-4`}>
                  <div>
                    <h2 className={`text-2xl font-bold`}>{current.title}</h2>
                  </div>
                </div>
                <br/>
                  {current.contents.split(".").map((content, index)=>(
                    <div key={content}>{content}</div>
                  ))}
              </div>
            ))
            : <></>
          }
          </div>
        </div>
      </div>
    </>
  );
}
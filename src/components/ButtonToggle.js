
import { useState } from "react";
import { ColorTheme } from "src/tailwindCSS/ColorTheme";
export default function ButtonToggle(props) {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((isOpen)=>!isOpen);
  };
  return (
    <>
      <button onClick={onClick}
      className={`p-2 bg-gray-100 text-black fill-black hover:bg-black hover:text-gray-100 hover:fill-white font-bold rounded-md transition`}>
        <div className={`flex place-items-center gap-2`}>
          상세보기
          <svg transform={`${isOpen ? "rotate(180)" : "rotate(0)"}`} height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
            <g>
              <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>
            </g>
          </svg>
        </div>
      </button>
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
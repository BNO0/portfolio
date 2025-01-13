import { useParams } from "react-router-dom";
import { Params } from "src/params/Params";
import Data from "src/data/Data";
import ImageComponents from "src/functions/ImageComponents";
import { ColorTheme } from "src/tailwindCSS/ColorTheme";
import ButtonLink from "src/components/ButtonLink";
import ProjectCommons from "src/components/ProjectCommons";
export default function Project() {
  const params = useParams();
  return (
    <div className={`p-10 ${ColorTheme.Base_bgColor} ${ColorTheme.Base_textColor}`}>
      <ProjectCommons data={Data.projectDetailPage[params[Params.projectParam]]}/>
      {Data.projectDetailPage[params[Params.projectParam]].datas.map((project, index)=>(
        <div key={project.title} className={`mt-10`}>
          <div className={`text-5xl`}>
            {(project.link!==undefined) ?
              <ButtonLink data={{link: project.link, linkTitle: project.title, linkIcon: project.svg}} colors={{
                bgColor : ColorTheme.Base_bgColor,
                textColor: ColorTheme.Base_textColor,
                hover_bgColor: ColorTheme.Base_hover_bgColor,
                hover_textColor: ColorTheme.Base_hover_textColor,
              }}/>
              :
              <h2 className={`text-4xl font-bold ml-2 mr-2`}>{project.title}</h2>
            }
          </div>
          {ImageComponents(project.image, `object-cover w-full mt-10`)}
        </div>
      ))}
    </div>
  );
}
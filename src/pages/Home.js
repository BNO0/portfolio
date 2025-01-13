import FormTitleImage from "src/components/FormTitleImage";
import Data from "src/data/Data";
import Form from "src/components/Form";
import FormSequence from "src/components/FormSequence";
import FormHistory from "src/components/FormHistory";
import FormProject from "src/components/FormProject";
import { ColorTheme } from "src/tailwindCSS/ColorTheme";
import { Link } from "react-router-dom";
import ButtonToggle from "src/components/ButtonToggle";
import { calculateColor2 } from "src/functions/CalculateColor";
import { search } from "src/data/SVG";
import Button from "src/components/Button";

export default function Home() {
  const projectBgColors = [
    [ColorTheme.bgColor1, ColorTheme.bgColor1_2],
    [ColorTheme.bgColor2, ColorTheme.bgColor2_2],
  ];
  const projectTextColors = [
    [ColorTheme.textColor1, ColorTheme.textColor1_2],
    [ColorTheme.textColor2, ColorTheme.textColor2_2],
  ];
  const baseColor = {
    bgColor: ColorTheme.Base_bgColor,
    textColor: ColorTheme.Base_textColor,
  };
  const projectColors = (projectIndex, slideIndex) => {
    return {
      bgColor: calculateColor2(projectIndex, slideIndex, projectBgColors),
      textColor: calculateColor2(projectIndex, slideIndex, projectTextColors),
    };
  };
  const slideCSS = `min-h-[500px]`;
  return (
    <div>
      <Form Component={FormTitleImage} data={Data.introduce} colors={baseColor} css={slideCSS} />
      <Form Component={FormSequence} data={Data.roadmap} colors={baseColor} css={slideCSS} />
      <Form Component={FormHistory} data={Data.education} colors={baseColor} css={slideCSS} />
      <Form Component={FormTitleImage} data={Data.experience} colors={baseColor} css={slideCSS} />
      {Data.projects.map((project, projectIndex)=>(
        project.map((slide, slideIndex)=>{
          const tempColors = projectColors(projectIndex, slideIndex);
          return (
            <div key={`${slide.title}`}>
              <Form Component={FormProject} data={slide} colors={tempColors} css={slideCSS} />
              {(slide.details) ?
              <Form colors={tempColors}
                Component={ function Buttons(props) { const {css} = props; return (
                  <div className={`mt-0 ${css}`}>
                    <ButtonToggle data={slide.details} buttons={[
                      <Link to={`/project/${projectIndex}`} key={`${slide.details[0].contents}`}>
                        <Button text={`기획과정`} SVG={search} />
                      </Link>,
                    ]}/>
                  </div>
                );}}>
              </Form>
              :
              <></>}
            </div>
          );
        })
      ))}
    </div>
  );
}
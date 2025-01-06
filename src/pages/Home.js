import FormTitleImage from "src/components/FormTitleImage";
import Data from "src/data/Data";
import Form from "src/components/Form";
import FormSequence from "src/components/FormSequence";
import FormHistory from "src/components/FormHistory";
import FormProject from "src/components/FormProject";
import { ColorTheme, calculateColor2 } from "src/tailwindCSS/ColorTheme";

export default function App() {
  return (
    <div>
      <Form Component={FormTitleImage} data={Data.introduce} bgColor={`${ColorTheme.Base_bgColor}`} textColor={`${ColorTheme.Base_textColor}`}></Form>
      <Form Component={FormSequence} data={Data.roadmap} bgColor={`${ColorTheme.Base_bgColor}`} textColor={`${ColorTheme.Base_textColor}`}></Form>
      <Form Component={FormHistory} data={Data.education} bgColor={`${ColorTheme.Base_bgColor}`} textColor={`${ColorTheme.Base_textColor}`}></Form>
      <Form Component={FormTitleImage} data={Data.experience} bgColor={`${ColorTheme.Base_bgColor}`} textColor={`${ColorTheme.Base_textColor}`}></Form>
      {Data.projects.map((project, projectIndex)=>(
        project.map((slide, slideIndex)=>(
          <Form key={slide.title} Component={FormProject} data={slide}
            bgColor={`${calculateColor2(projectIndex, slideIndex, [
              [ColorTheme.bgColor1, ColorTheme.bgColor1_2],
              [ColorTheme.bgColor2, ColorTheme.bgColor2_2],
            ])}`}
            textColor={`${calculateColor2(projectIndex, slideIndex, [
              [ColorTheme.textColor1, ColorTheme.textColor1_2],
              [ColorTheme.textColor2, ColorTheme.textColor2_2],
            ])}`}>
          </Form>
        ))
      ))}
      {/* {Data.projects.map((project, index)=>(
        // <Form key={project.title} Component={FormProject} data={project} bgColor={`${calculateBGColor(index)}`} textColor={`${calculateTextColor(index)}`}></Form>
        <Form key={project.title} Component={FormProject} data={project}
          bgColor={`${calculateColor1(index, [
            ColorTheme.bgColor1,
            ColorTheme.bgColor1_2,
            ColorTheme.bgColor2,
            ColorTheme.bgColor2_2,
          ])}`}
          textColor={`${calculateColor1(index, [
            ColorTheme.textColor1,
            ColorTheme.textColor1_2,
            ColorTheme.textColor2,
            ColorTheme.textColor2_2,
          ])}`}>
        </Form>
      ))} */}
    </div>
  );
}

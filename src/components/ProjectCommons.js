import { ColorTheme } from "src/tailwindCSS/ColorTheme";
import ButtonLink from "./ButtonLink";
export default function ProjectCommons(props) {
  const { data, css } = props;
  return (
    <div className={`col-span-full ${css}`}>
      <h1 className={`text-5xl font-bold`}>{data.title}</h1>
      <br/>
      {(data.link) ?
      <ButtonLink data={data} colors={{
        bgColor : ColorTheme.icon_bgColor,
        textColor: ColorTheme.icon_textColor,
        hover_bgColor: ColorTheme.icon_hover_bgColor,
        hover_textColor: ColorTheme.icon_hover_textColor,
        hover_fill: ColorTheme.icon_hover_fill,
      }}/>
      :
      <></>
      }
    </div>
  );
}
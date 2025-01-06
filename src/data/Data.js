import { ColorTheme, tailwindToRGB } from "src/tailwindCSS/ColorTheme";
import {javascript, typescript, react, redux, java, springboot, aws, docker} from "src/data/SVG";
import Project_2207_indierait, { indierait_detailPage } from "./Project_2207_indierait";
import Project_2209_rnasterpiece, { rnasterpiece_detailPage }  from "./Project_2209_rnasterpiece";
import Project_2211_TheKnight, { TheKnight_detailPage }  from "./Project_2211_TheKnight";
const Data = {
  introduce: {
    title: "기회는 도전하는 자에게",
    contents: `웹 개발의 최전선에서 사용자와 직접 소통하는 프론트엔드 개발자 박민호 입니다.
    다양한 프로젝트 경험과 지속적인 학습을 통해 성장하고 있습니다.`,
    image: {
      type: "string",
      imgs: [
        "profile.png",
      ],
    }
  },
  roadmap:{
    datas: [
      {
        title: "지속적 학습",
        contents: `새로운 기술에 대한.
        끊임없는 학습`
      },
      {
        title: "협업 능력",
        contents: `팀 프로젝트를 통한.
        협업 능력 강화`
      },
      {
        title: "DX/UX",
        contents: `개발자 경험 개선.
        사용자 경험 개선`
      },
      {
        title: "풀스택 역량",
        contents: `프론트엔드를 기반으로.
        백엔드와 함께 균형 성장`
      },
    ]
  },
  education: {
    title: "교육",
    datas: [
      {
        title: "숭실대 글로벌미디어학부 졸업",
        contents: "컴퓨터 공학 기초를 다짐"
      },
      {
        title: "2022 SSAFY(삼성 청년 SW 아카데미) 수료",
        contents: "실무 중심의 SW 개발 역량 강화"
      },
      {
        title: "2023 콘텐츠 창의인재 동반사업",
        contents: "보드게임 개발을 통한 기획력 향상"
      },
      {
        title: "구름 풀스택 교육 수료",
        contents: "프론트엔드부터 백엔드, 배포까지 전반적인 웹 개발 프로세스 학습"
      },
    ]
  },
  experience: {
    title: "프로젝트 및 경험",
    contents: `프론트엔드 기술을 중심으로 풀스택 개발 경험을 쌓아가고 있습니다.
    JavaScript, TypeScript, React, Redux부터 Java, Spring Boot, AWS, Docker 등.
    다양한 기술을 학습하고 프로젝트에 적용했습니다.`,
    image: {
      type: "svg",
      imgs: [javascript, typescript, react, redux, java, springboot, aws, docker,],
    },
  },
  projects: [
    Project_2211_TheKnight,
    Project_2209_rnasterpiece,
    Project_2207_indierait,
  ],
  projectDetailPage: [
    TheKnight_detailPage,
    rnasterpiece_detailPage,
    indierait_detailPage,
  ],
};
export default Data;

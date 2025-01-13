import { ColorTheme } from "src/tailwindCSS/ColorTheme";
import { tailwindToRGB } from "src/functions/CalculateColor";
import { figma } from "./SVG";
const commons = {
  title: "인디라it",
  link: "https://github.com/BNO0/indierait",
  linkTitle: "Github - 인디라it",
  linkIcon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 64 64">
    <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z"></path>
  </svg>,
}
const Project_2207_indierait = [
  {
    title: commons.title,
    link: commons.link,
    linkTitle: commons.linkTitle,
    linkIcon: commons.linkIcon,
    datas: [
      {
        title: "개요",
        contents: "인디 공연/전시 홍보 플랫폼 서비스",
      },
      {
        title: "기술스택",
        contents: "JavaScript, React"
      },
      {
        title: "주요기능",
        contents: `아티스트 홍보, 피드 소통.
        아바타 제작, 호감도 시스템`
      },
    ],
    image: {
      type: "string",
      imgs: [
        "Project_indierait_공연등록.gif",
        "Project_indierait_공연상세.gif",
      ],
    },
  },
  {
    title: "인디라it - 주요 담당 역할",
    datas: [
      {
        title: "유저 페이지",
        contents: `유저 상호작용에 따른.
        관심 분포 차트 구현`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
        </svg>,
      },
      {
        title: "아바타 시스템",
        contents: `아바타 제작 및 호감도 top3.
        유저 아바타 표시`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>,
      },
      {
        title: "소통 기능",
        contents: `Follow, 방명록.
        피드댓글, 공연댓글 기능 통합 구현`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
        </svg>,
      },
    ],
    image: {
      type: "string",
      imgs: [
        "Project_indierait_호감도순위.gif",
        "Project_indierait_아바타.gif",
      ],
    },
    details: [
      {
        title: "담당역할",
        contents: `유저페이지 구현.
        유저의 상호작용에 따른 관심 분포 차트 구현.
        아바타 제작기능 구현.
        호감도 시스템 구현.
        호감도 top3 유저 아바타 표시.
        Follow 기능 구현.
        방명록 기능 구현.
        피드댓글, 공연댓글 기능 통합`,
      },
      {
        title: "구현과정",
        contents: `방명록 작성기능과 피드/공연 댓글기능이 유사.
        기능 통합 및 재사용가능하도록 수정.
        아바타 제작.
        Position:absolute를 통해 각 이미지 절대위치 고정.
        이미지url, 각No를 응답받아 알맞은 이미지 출력.
        Stage.
        자신의 대한 호감도가 높은 top3 유저의 아바타 표시.
        자신의 아바타 클릭 시 아바타 수정.
        우측 하단 MUI Modal을 통해 방명록 구현.
        호감도.
        유저의 저장, 좋아요, 팔로우 등의 상호작용마다 해당 공연자/전시자에 대한 점수부여.
        점수가 가장 높은 top3 유저의 아바타, level 표시.
        관심사.
        유저가 저장한 공연/전시 의 카테고리 정보 수집.
        각 카테고리 비율에 따라 다각형 그래프에 관심사 출력`,
      },
    ],
  },
];
const DetailPage_2207_indierait = {
  title: commons.title,
  link: commons.link,
  linkTitle: commons.linkTitle,
  linkIcon: commons.linkIcon,
  datas: [
    {
      title: `Figma`,
      svg: figma,
      link: `https://www.figma.com/proto/TKg8K3H3DdC0lqoFFTv6G1/Troupe-team-library?node-id=563-388&p=f&t=OlSWTY2v4ZFKC9Xi-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=563%3A388`,
      // link: `https://www.figma.com/design/TKg8K3H3DdC0lqoFFTv6G1/Troupe-team-library?node-id=0-1&t=lzuBCh8d7OKKvGzW-1`,
      image: {
        type: "string",
        imgs: [
          "figma_indierait.png",
        ],
      },
    },
    {
      title: `API`,
      image: {
        type: "string",
        imgs: [
          "api_indierait.png",
        ],
      },
    },
    {
      title: `ERD`,
      image: {
        type: "string",
        imgs: [
          "erd_indierait.png",
        ],
      },
    },
  ]
};
export default Project_2207_indierait;
export {DetailPage_2207_indierait};
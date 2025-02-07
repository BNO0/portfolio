import { ColorTheme } from "src/tailwindCSS/ColorTheme";
import { tailwindToRGB } from "src/functions/CalculateColor";
import { figma } from "./SVG";
const commons = {
  title: "The Knight",
  link: "https://github.com/BNO0/theknight",
  linkTitle: "Github - The Knight",
  linkIcon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 64 64">
    <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 40.238706 44.458716 47.16934 36.904297 49.306641 C 36.811496 49.1154 36.747844 48.905917 36.753906 48.667969 C 36.784906 47.458969 36.753906 44.637563 36.753906 43.601562 C 36.753906 41.823563 35.628906 40.5625 35.628906 40.5625 C 35.628906 40.5625 44.453125 40.662094 44.453125 31.246094 C 44.453125 27.613094 42.554688 25.720703 42.554688 25.720703 C 42.554688 25.720703 43.551984 21.842266 42.208984 20.197266 C 40.703984 20.034266 38.008422 21.634812 36.857422 22.382812 C 36.857422 22.382813 35.034 21.634766 32 21.634766 C 28.966 21.634766 27.142578 22.382812 27.142578 22.382812 C 25.991578 21.634813 23.296016 20.035266 21.791016 20.197266 C 20.449016 21.842266 21.445312 25.720703 21.445312 25.720703 C 21.445312 25.720703 19.546875 27.611141 19.546875 31.244141 C 19.546875 40.660141 28.371094 40.5625 28.371094 40.5625 C 28.371094 40.5625 27.366329 41.706312 27.265625 43.345703 C 26.675939 43.553637 25.872132 43.798828 25.105469 43.798828 C 23.255469 43.798828 21.849984 42.001922 21.333984 41.169922 C 20.825984 40.348922 19.7845 39.660156 18.8125 39.660156 C 18.1725 39.660156 17.859375 39.981656 17.859375 40.347656 C 17.859375 40.713656 18.757609 40.968484 19.349609 41.646484 C 20.597609 43.076484 20.574484 46.292969 25.021484 46.292969 C 25.547281 46.292969 26.492043 46.171872 27.246094 46.068359 C 27.241926 47.077908 27.230199 48.046135 27.246094 48.666016 C 27.251958 48.904708 27.187126 49.114952 27.09375 49.306641 C 19.540258 47.168741 14 40.238046 14 32 C 14 22.059 22.059 14 32 14 z"></path>
  </svg>,
}
const Project_2211_TheKnight = [
  {
    title: commons.title,
    link: commons.link,
    linkTitle: commons.linkTitle,
    linkIcon: commons.linkIcon,
    datas: [
      {
        title: "개요",
        contents: `심리/전략 실시간 온라인 웹게임`,
      },
      {
        title: "기술스택",
        contents: `Javascript, React, Redux.
        Websocket, SockJS`
      },
      {
        title: "주요기능",
        contents: `실시간 팀전 게임.
        채팅 시스템, 심리전 요소`
      },
    ],
    image: {
      type: "string",
      imgs: [
        "Project_TheKnight_로비.gif",
        "Project_TheKnight_인게임03_공격.gif",
      ],
    },
  },
  {
    title: "The Knight - 주요 담당 역할",
    datas: [
      {
        title: "실시간 통신",
        contents: `SockJS를 통한.
        실시간 게임 통신 구현`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
        </svg>,
      },
      {
        title: "채팅 시스템",
        contents: `전체채팅, 팀채팅 기능 구현`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
        </svg>,
      },
      {
        title: "컴포넌트 모듈화",
        contents: `재사용성을 위해.
        아이템, 방 정보 등 모듈화`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
        </svg>,
      },
      {
        title: "상태 관리",
        contents: `Redux 및 ReduxToolkit 통한.
        비동기 처리`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
          <path fill={`${tailwindToRGB(ColorTheme.icon_bgColor)}`} d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>,
      },
    ],
    image: {
      type: "string",
      imgs: [
        "Project_TheKnight_인게임01_무기선택.gif",
        "Project_TheKnight_인게임02_방어.gif",
      ],
    },details: [
      {
        title: "담당역할",
        contents: `재사용을 위한 Component 모듈화 (Item, 방정보).
        로비에서 대기방 입장 시 SockJS 를 통해 SpringBoot와 연결.
        대기방, 게임중 이외의 화면전환 시 SockJS 연결 해제.
        전체채팅, 팀채팅 기능 구현.
        Redux를 통한 State 관리.
        ReduxToolkit redux-thunk 를 통한 비동기 처리 (방만들기 후 자동입장, 모든채널 연결 후 방정보 load, 퇴장 후 연결끊기)`,
      },
      {
        title: "구현과정",
        contents: `SockJS publish, subscribe 코드 반복.
        function 파일 분리.
        분리된 fucntion에 parameter 지정 후 호출 시 data 전달.
        재사용을 위한 Component 모듈화.
        아이템 component.
        Room 만들기, Room 정보, Room 설정변경.
        채팅 기능 구현.
        대기방 - 팀선택을 통해 A/B 팀채팅 구독/해제.
        인게임 - 전체/팀 채팅변경 및 올바른 publish 요청.
        채팅마다 memberId, nickname, content, 종류 저장.
        Header 구현.
        React-router-dom 을 통해 화면전환.
        대기방, 게임중 이외의 화면전환 시 SockJS 연결 해제.
        비동기 처리 콜백.
        방만들기 후 방입장 진행.
        방입장 시 모든 채널 구독 후 방정보 publish.
        방정보 응답받은 후 해당 방으로 이동, 화면출력.
        방퇴장 후 SockJS disconnect.
        방만들기, 방입장 시 SockJS 연결 및 채널 구독게임 플레이 시 간헐적인 혼선 해결`,
      },
      {
        title: "문제해결",
        contents: `SockJS 연결 시 403 error 발생.
        로그인 토큰정보를 통해 접근권한을 확인했으나 SockJS 객체 생성 시 header에 토큰정보를 전달할 수 없어 접근불가.
        header에 토큰정보를 전달할 수 있는 connect 요청부터 접근권한을 확인하도록 수정.
        게임 플레이 시 간헐적으로 혼선 발생.
        퇴장하기 버튼이 아닌 다른경로로 퇴장 (대기방에서 다른페이지로 이동) 시 퇴장처리가 안되어 발생하는 문제.
        대기방, 게임중 page를 제외한 모든 page 접근 시 SockJS exit, disconnect 처리`,
      },
    ],
  },
];
const DetailPage_2211_TheKnight = {
  title: commons.title,
  link: commons.link,
  linkTitle: commons.linkTitle,
  linkIcon: commons.linkIcon,
  datas: [
    {
      title: `Figma`,
      svg: figma,
      link: `https://www.figma.com/proto/AryONRgFRD5QA2v8O7L0XO/%EC%9E%90%EC%9C%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-team-library?node-id=518-15077&p=f&t=h3WzaUGq9Sft4Y0q-9&scaling=min-zoom&content-scaling=fixed&page-id=411%3A7660&starting-point-node-id=518%3A15077&show-proto-sidebar=1`,
      // link: `https://www.figma.com/design/AryONRgFRD5QA2v8O7L0XO/%EC%9E%90%EC%9C%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-team-library?node-id=411-7660&t=Cs52aROXWYrS415C-1`,
      image: {
        type: "string",
        imgs: [
          "figma_TheKnight.png",
        ],
      },
    },
    {
      title: `API`,
      image: {
        type: "string",
        imgs: [
          "api_TheKnight.png",
        ],
      },
    },
    {
      title: `ERD`,
      image: {
        type: "string",
        imgs: [
          "erd_TheKnight.png",
        ],
      },
    },
  ],
};
export default Project_2211_TheKnight;
export {DetailPage_2211_TheKnight};
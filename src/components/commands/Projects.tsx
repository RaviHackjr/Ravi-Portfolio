import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Flame Dev - Advanced Game Dev",
    desc: "A high-performance development framework for creating 3d games with advanced customization and seamless integration.",
    url: "https://flamedev.netlify.app/",
  },
  {
    id: 2,
    title: "GBA Web Emulator",
    desc: "A full-fledged, mobile-friendly GBA emulator with save/load states, cheat codes, and fast performance, playable directly in the browser.",
    url: "https://retrocloudgaming.netlify.app/",
  },
  {
    id: 3,
    title: "Rupali - Horror Game",
    desc: "A spine-chilling 2D horror game where players uncover dark secrets in an abandoned mansion, featuring eerie sound design and atmospheric horror elements.",
    url: "https://discord.gg/EazCGVkWn6",
  },
  {
    id: 4,
    title: "Retro Cloud Gaming",
    desc: "Play classic games from SNES, GBA, and N64 directly from the cloud. No downloads needed, instant play from any device!",
    url: "https://retrocloudgaming.netlify.app/",
  },{
    id: 5,
    title: "Blakite Anime For Hindi Anime",
    desc: "Fetch and stream anime from the Consumet API with a smooth, user-friendly interface and Vidstack integration for high-quality playback.",
    url: "https://t.me/BlakiteAnime",
  },{
    id: 6,
    title: "9Anime Eng Sub Dub",
    desc: "Stay updated with the latest anime episodes, discussions, and recommendations. Join now for exclusive content!",
    url: "https://t.me/NineAnimeOfficial",
  }
];

export default Projects;

import { ExpIntro, ExpList } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <ExpIntro>Here is my professional experience!</ExpIntro>
      {expBg.map(({ title, period, desc }) => (
        <ExpList key={title}>
          <div className="title">{title}</div>
          <div className="period">{period}</div>
          <div className="desc">{desc}</div>
        </ExpList>
      ))}
    </Wrapper>
  );
};

const expBg = [
  {
    title: "Co-Founder & Manager - Flame Dev",
    period: "2023 - Present",
    desc: "Leading an independent game development team focused on creating innovative 2D and 3D games. Worked on multiple projects, including a Pokémon-style RPG and a Horror game using Godot 4."
  },
  {
    title: "Full-Stack Developer - Web-Based GBA Emulator",
    period: "2024 - Present",
    desc: "Developed a browser-based GBA emulator with features like save/load states, mobile-friendly touch controls, and cheat support, allowing users to play classic GBA games online."
  },
  {
    title: "Lead Developer - Cloud Gaming App Prototype",
    period: "2024 - Present",
    desc: "Designed and implemented a cloud gaming solution inspired by Netboom and Chikii, enabling users to play PC games remotely via a web-based interface."
  },
  {
    title: "AI Bot Developer - Discord & Telegram Automation",
    period: "2023 - Present",
    desc: "Created an AI-powered bot for automated Discord & Telegram event management, enhancing user engagement and simplifying server administration."
  },
  {
    title: "Frontend Developer - Anime Streaming Web App",
    period: "2024",
    desc: "Built a web application utilizing the Consumet API to fetch and stream anime content with a smooth, user-friendly interface using Vidstack for video playback."
  }
];

export default Experience;
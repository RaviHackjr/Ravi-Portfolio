import { AchIntro, AchList, AchItem } from "../styles/Achievements.styled";
import { Wrapper } from "../styles/Output.styled";

const Achievements: React.FC = () => {
  return (
    <Wrapper data-testid="achievements">
      <AchIntro>Here are my achievements!</AchIntro>
      <AchList>
        {achBg.map(({ title }) => (
          <AchItem key={title}>
            <div className="title">{title}</div>
          </AchItem>
        ))}
      </AchList>
    </Wrapper>
  );
};

const achBg = [
  {
    title: "Flame Dev - Our Independent Game Development Team"
  },
  {
    title: "Created a Web-based GBA Emulator with Save/Load States"
  },
  {
    title: "Built a Pokémon-style RPG using Godot 4"
  },
  {
    title: "Developed a Cloud Gaming App Prototype like Netboom"
  },
  {
    title: "Created an AI-powered Bot for Automated Discord Event Management"
  },
  {
    title: "Built a Web App for Streaming Anime using Consumet API"
  }
];

export default Achievements;

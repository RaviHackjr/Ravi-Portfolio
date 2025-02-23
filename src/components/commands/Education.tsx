import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "12th (PCM)",
    desc: "Completed Higher Secondary Education with PCM Stream | India",
  },
  {
    title: "Self-Taught Software Developer",
    desc: "Mastered Game Development, Web Development, and AI Bot Development through self-learning and projects.",
  },
];

export default Education;
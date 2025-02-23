import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Blakite_Ravii</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>an Web, Game & Bot developer</HighlightAlt> Mathura,
        India.
      </p>
      <p>
        I am passionate about Web, Game develpement and <br />
        Bot. Also have a keen interest in <br />
        VolleyBall playing & Poetry Reading Philosophy Reading ,etc.
      </p>
      <p>
      I've been honored in the Flame Dev as a manager .</p>
    </AboutWrapper>
  );
};

export default About;

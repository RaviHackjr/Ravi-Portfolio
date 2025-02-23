import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        

   __  ___                    __     ___         _           __ 

   ___   __       __    _  __            ___               _  _ 
  / _ ) / /___ _ / /__ (_)/ /_ ___      / _ \ ___ _ _  __ (_)(_)
 / _  |/ // _ `//  '_// // __// -_)    / , _// _ `/| |/ // // / 
/____//_/ \_,_//_/\_\/_/ \__/ \__/____/_/|_| \_,_/ |___//_//_/  
                                 /___/                          

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
   __  ___                    __  
  
   ___   __       __    _  __            ___               _  _ 
  / _ ) / /___ _ / /__ (_)/ /_ ___      / _ \ ___ _ _  __ (_)(_)
 / _  |/ // _ `//  '_// // __// -_)    / , _// _ `/| |/ // // / 
/____//_/ \_,_//_/\_\/_/ \__/ \__/____/_/|_| \_,_/ |___//_//_/  
                                 /___/                          

 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0)</div>
        <Seperator>----</Seperator>
        
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
          ,##,,eew,
          ,##############C
       a###############@##
      7####^\`^"7W7^"@####
      @#@b\`         ^@#@^
       ##^,,,,   ,,,,^#^
      ,,@######"#######=
       .''555"\` '5555b|
       T"@  ,,,^,mg,@,*
          %p||\`~~'.#\`
           ^Wp  ,#T
          :b''@@b^}
       ,^     \` 'b 3-
   .<\` 'p   ^v   #   b   *.
 {      }   #"GpGb   [
 C      3 * @#######Nl      \`
'            ^@##b     ($    !
`}          '
             @Blakite_Ravii
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

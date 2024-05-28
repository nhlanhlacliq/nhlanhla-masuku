import { Github, Linkedin } from "lucide-react";
import Section from "./ui/Section";
import Type from "./ui/Type";

const Hero = () => {
  return (
    <Section id='#' style='flex-col'>
      <Type variant='title'>Nhlanhla Masuku</Type>
      <Type variant='subtitle'>Frontend Developer </Type>
      <Type variant='highlight'>Javascript - React / React Native</Type>
      <Type className='text-background/75'>
        Mostly Front-end. But, I can Design, Build (Fullstack) and Ship.
      </Type>
      <div className={styles.iconContainer}>
        <Github size={32} className={styles.icon} />
        <Linkedin size={32} className={styles.icon} />
      </div>
    </Section>
  );
};

export default Hero;

const styles = {
  iconContainer: "flex items-center gap-4",
  icon: "rounded-sm p-1 text-background/75",
};

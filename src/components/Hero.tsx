import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Section from "./ui/Section";
import Type from "./ui/Type";
import Nav from "./Nav";

const Hero = () => {
  return (
    <Section id='#' style={styles.section}>
      <div className='md:max-w-none lg:max-w-[440px] xl:max-w-none'>
        <Type variant='title'>Nhlanhla Masuku</Type>
        <Type variant='subtitle'>Fullstack Developer </Type>
        <div className='lg:mt-1'>
          <Type variant='highlight'>
            Javascript - React / React Native, NodeJS
          </Type>
        </div>
        <Type className='text-background/75'>
          Mostly Front-end. But, I can Design & Build (including mobile).
        </Type>
      </div>
      <Nav style={styles.nav} />
      <div className={styles.iconContainer}>
        <a
          href='https://github.com/nhlanhlacliq'
          target='_blank'
          className={styles.iconLink}
        >
          <Github size={32} className={styles.icon} />
        </a>
        <a
          href='https://www.linkedin.com/in/nhlanhla-masuku'
          target='_blank'
          className={styles.iconLink}
        >
          <Linkedin size={32} className={styles.icon} />
        </a>
        <a href='tel:+27844900875' target='_blank' className={styles.iconLink}>
          <Phone size={32} className={styles.icon} />
        </a>
        <a
          href='mailto:nhlanhlabmasuku@gmail.com'
          target='_blank'
          className={styles.iconLink}
        >
          <Mail size={32} className={styles.icon} />
        </a>
      </div>
    </Section>
  );
};

export default Hero;

const styles = {
  section: "flex-col justify-between lg:h-screen lg:fixed",
  nav: "hidden lg:block text-white",
  iconContainer: "flex items-center gap-4",
  icon: "rounded-sm p-1 text-background/75 hover:text-accent-2 cursor-pointer transition-all duration-300",
  iconLink: "",
};

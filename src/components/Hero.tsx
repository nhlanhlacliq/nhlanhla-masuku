import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Section from "./ui/Section";
import Type from "./ui/Type";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  return (
    <Section id="#" style={styles.section}>
      <div className="md:max-w-none lg:max-w-[440px] xl:max-w-none">
        <Type variant="title">Nhlanhla Masuku</Type>
        <Type variant="subtitle">Full Stack Developer</Type>
        <div className="lg:mt-1">
          <Type variant="highlight">
            Building human-centered technology with React, Vue.js, TypeScript &
            Python
          </Type>
        </div>
        <Type className="text-foreground/60 text-base leading-relaxed">
          I create intuitive, accessible applications that genuinely improve
          people&apos;s lives — from front-end to full stack.
        </Type>
      </div>
      <Nav style={styles.nav} />
      <div className={styles.iconContainer}>
        <a
          href="https://github.com/nhlanhlacliq"
          target="_blank"
          className={styles.iconLink}
        >
          <Github size={28} className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/nhlanhla-masuku"
          target="_blank"
          className={styles.iconLink}
        >
          <Linkedin size={28} className={styles.icon} />
        </a>
        <a href="tel:+27844900875" target="_blank" className={styles.iconLink}>
          <Phone size={28} className={styles.icon} />
        </a>
        <a
          href="mailto:nhlanhlabmasuku@gmail.com"
          target="_blank"
          className={styles.iconLink}
        >
          <Mail size={28} className={styles.icon} />
        </a>
        <div className="border-l border-foreground/10 pl-4 ml-1">
          <ThemeToggle />
        </div>
      </div>
    </Section>
  );
};

export default Hero;

const styles = {
  section:
    "flex-col justify-between lg:h-screen lg:fixed lg:w-1/2 lg:max-w-[640px]",
  nav: "hidden lg:block",
  iconContainer: "flex items-center gap-5",
  icon: "rounded-sm p-1 text-foreground/50 hover:text-accent-2 cursor-pointer transition-all duration-300",
  iconLink: "",
};

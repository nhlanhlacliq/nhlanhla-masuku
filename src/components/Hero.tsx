import { Github, Linkedin } from "lucide-react";
import Section from "./ui/Section";

const Hero = () => {
  return (
    <Section id='#' style='flex-col'>
      <h1 className={styles.title}>Nhlanhla Masuku</h1>
      <h2 className={styles.subtitle}>Frontend Developer </h2>
      <h2 className={styles.subtitle2}>Javascript - React / React Native</h2>
      <p className={styles.text}>
        Mostly Front-end. But, I can Design, Build (Fullstack) and Ship.
      </p>
      <div className={styles.iconContainer}>
        <Github size={32} className={styles.icon} />
        <Linkedin size={32} className={styles.icon} />
      </div>
    </Section>
  );
};

export default Hero;

const styles = {
  title: "text-4xl md:text-6xl my-4 font-semibold tracking-tight",
  subtitleContainer: "flex items-center gap-4",
  subtitle: "text-xl md:text-2xl text-background/90",
  subtitle2: " mb-8 opacity-75 font-light text-accent-2",
  text: "mb-8 text-background/75",
  iconContainer: "flex items-center gap-4",
  icon: "rounded-sm p-1 text-background/75",
};

import { ImageIcon } from "lucide-react";
import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";

const highlights = [
  "Designed and built responsive web applications using React, Next.js, and TypeScript, ensuring accessibility and optimal user experience across devices",
  "Integrated RESTful APIs and GraphQL endpoints for seamless data flow between frontend and backend systems",
  "Implemented Vue.js components for specific modules, gaining hands-on experience with Vue 3 Composition API",
  "Translated UI/UX designs into pixel-perfect, intuitive interfaces using HTML5, CSS3, and Tailwind CSS",
  "Established CI/CD pipelines using GitHub Actions and Docker for automated testing and deployment",
  "Applied security best practices including authentication, authorization, and data protection measures",
];

const techStack = [
  "React",
  "Vue.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "RESTful APIs",
  "GraphQL",
  "Docker",
  "GitHub Actions",
];

const FeaturedRole = () => {
  return (
    <Section id='featured' style='flex-col'>
      <Header title='Current Work' />

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <Type className={styles.role}>Full Stack Developer</Type>
            <Type variant='highlight' className={styles.company}>
              LOR
            </Type>
            <Type className={styles.duration}>2022 — Present</Type>
          </div>
        </div>

        <Type className={styles.description}>
          Developing healthcare technology solutions focused on improving patient
          outcomes and operational efficiency through user-centered web
          applications. Working in close partnership with designers, backend
          developers, and stakeholders to build compassionate, human-centered
          software.
        </Type>

        <ul className={styles.list}>
          {highlights.map((item, idx) => (
            <li key={idx} className={styles.listItem}>
              <Type className={styles.listText}>{item}</Type>
            </li>
          ))}
        </ul>

        <div className={styles.techList}>
          {techStack.map((tech, idx) => (
            <span key={idx} className={styles.badge}>
              {tech}
            </span>
          ))}
        </div>

        {/* Image placeholder — replace with actual LOR screenshots */}
        <div className={styles.imagePlaceholder}>
          <div className={styles.placeholderInner}>
            <ImageIcon size={32} className='text-foreground/20 mb-2' />
            <Type className='text-foreground/30 text-sm mb-0'>
              Project screenshots coming soon
            </Type>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedRole;

const styles = {
  card: "rounded-lg border border-accent-2/20 bg-card dark:bg-slate-800/30 p-6 lg:p-8 -mx-2 shadow-sm dark:shadow-none",
  cardHeader: "flex items-start justify-between mb-4",
  role: "text-xl font-semibold mb-1 text-foreground",
  company: "mb-1 text-lg",
  duration: "text-sm text-foreground/50 mb-0",
  description: "text-sm text-foreground/70 mb-6 leading-relaxed",
  list: "space-y-3 mb-6",
  listItem: "flex items-start gap-3",
  listText:
    "text-sm text-foreground/70 mb-0 leading-relaxed before:content-['▸'] before:text-accent-2 before:mr-2",
  techList: "flex flex-wrap gap-2 mb-6",
  badge:
    "bg-accent-2-muted text-accent-2 text-xs px-3 py-1 rounded-full font-medium",
  imagePlaceholder:
    "mt-4 rounded-lg border-2 border-dashed border-foreground/10 bg-foreground/[0.02]",
  placeholderInner: "flex flex-col items-center justify-center py-12 px-4",
};

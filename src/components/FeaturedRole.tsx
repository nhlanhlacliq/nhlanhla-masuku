import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";
import ImageCarousel from "./ImageCarousel";

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

// ─── Add new images here ────────────────────────────────
const projectImages = [
  { src: "/images/GF1.png", alt: "LOR — Screenshot 1" },
  { src: "/images/GF2.png", alt: "LOR — Screenshot 2" },
  // { src: "/images/d1.png", alt: "Project screenshot" },
  // { src: "/images/d2.png", alt: "Project screenshot" },
  // { src: "/images/d3.png", alt: "Project screenshot" },
  // { src: "/images/d4.png", alt: "Project screenshot" },
  // { src: "/images/d5.png", alt: "Project screenshot" },
  // { src: "/images/d6.png", alt: "Project screenshot" },
  // { src: "/images/d7.png", alt: "Project screenshot" },
  // { src: "/images/d8.png", alt: "Project screenshot" },
  // { src: "/images/d9.png", alt: "Project screenshot" },
  // { src: "/images/ec1.png", alt: "Project screenshot" },
  // { src: "/images/ec2.png", alt: "Project screenshot" },
  // { src: "/images/ec3.png", alt: "Project screenshot" },
  // { src: "/images/ec4.png", alt: "Project screenshot" },
  // { src: "/images/ec5.png", alt: "Project screenshot" },
  // { src: "/images/ec6.png", alt: "Project screenshot" },
  // { src: "/images/ec7.png", alt: "Project screenshot" },
  // { src: "/images/ec8.png", alt: "Project screenshot" },
  // { src: "/images/ec9.png", alt: "Project screenshot" },
  // { src: "/images/mp1.png", alt: "Project screenshot" },
  // { src: "/images/mp2.png", alt: "Project screenshot" },
  // { src: "/images/mp3.png", alt: "Project screenshot" },
  // { src: "/images/mp4.png", alt: "Project screenshot" },
  // { src: "/images/mp5.png", alt: "Project screenshot" },
  // { src: "/images/mp6.png", alt: "Project screenshot" },
  // { src: "/images/mp7.png", alt: "Project screenshot" },
];

const FeaturedRole = () => {
  return (
    <Section id="featured" style="flex-col">
      <Header title="Current Work" />

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <Type className={styles.role}>Full Stack Developer</Type>
            <Type variant="highlight" className={styles.company}>
              LOR
            </Type>
            <Type className={styles.duration}>2022 — Present</Type>
          </div>
        </div>

        <Type className={styles.description}>
          Developing healthcare technology solutions focused on improving
          patient outcomes and operational efficiency through user-centered web
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

        <ImageCarousel images={projectImages} />
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
};

import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";
import ImageCarousel from "./ImageCarousel";
import { MoveRight } from "lucide-react";

const highlights = [
  "Architected and developed a comprehensive job management platform with real-time task tracking, document workflow automation, and third-party accounting integration",
  "Integrated Sage One accounting system API for seamless synchronization of quotes, invoices, receipts, purchase orders, and customer data",
  "Built advanced data tables with TanStack Table featuring complex filtering, sorting, pagination, column pinning, and persistent user preferences",
  "Implemented secure document management system with AWS S3 storage and SMB protocol support for enterprise file servers",
  "Developed role-based access control system with granular permissions for managing user capabilities across different modules",
  "Designed reusable component library with Radix UI primitives, custom table components, and form validation using React Hook Form and Zod",
  "Led technical demos showcasing new features and architectural decisions to stakeholders and team members",
  "Facilitated knowledge sharing sessions on modern React patterns, TypeScript best practices, and API integration strategies",
];

const techStack = [
  "Next.js 15",
  "React 19",
  "Vue 3",
  "TypeScript",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "TanStack Query",
  "TanStack Table",
  "Radix UI",
  "Zustand",
  "Tailwind CSS",
  "SQLAlchemy",
  "AWS S3",
  "GitHub Actions",
  "JWT Auth",
  "Pydantic",
  "Zod",
];

const link = "https://c2group.co.za/";

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

      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <Type className={styles.role}>Full Stack Developer</Type>
              <div className="flex gap-3 items-center group ">
                <Type variant="highlight" className={styles.company}>
                  C2 Technologies
                </Type>
                <div className="hidden group-hover:block group-hover:animate-in transition-all">
                  <MoveRight size={18} />
                </div>
              </div>
              <Type className={styles.duration}>2022 — Present</Type>
            </div>
          </div>

        <Type className={styles.description}>
          Working at a technology company building enterprise solutions across
          multiple products including Graffiti (job management), GameOn,
          BikeWise, and LeaseTracker. Developing full-stack applications with
          modern frameworks while integrating with third-party accounting
          systems. Collaborating with stakeholders to deliver intuitive,
          performant software that enhances productivity and data accuracy.
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
      </a>
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

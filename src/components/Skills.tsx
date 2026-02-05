import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TanStack Query",
      "TanStack Table",
      "Radix UI",
      "Zustand",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "RESTful APIs",
      "GraphQL",
      "PostgreSQL",
      "SQLAlchemy",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "AWS DevOps",
      "Testing & Debugging",
    ],
  },
  {
    title: "Design & UX",
    skills: [
      "Figma",
      "Adobe Suite",
      "UI/UX Implementation",
      "Accessible Design",
      "Prototyping",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Collaboration",
      "Technical Communication",
      "Agile",
      "Code Review",
      "Stakeholder Management",
      "User-Centered Design",
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills" style="flex-col">
      <Header title="Skills" />

      <div className={styles.grid}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className={styles.category}>
            <Type className={styles.categoryTitle}>{category.title}</Type>
            <div className={styles.skillList}>
              {category.skills.map((skill, skillIdx) => (
                <span key={skillIdx} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

const styles = {
  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  category: "mb-2",
  categoryTitle:
    "text-sm font-semibold text-accent-2 uppercase tracking-wider mb-3",
  skillList: "flex flex-wrap gap-2",
  skill:
    "text-sm text-foreground/70 bg-foreground/[0.04] border border-foreground/10 px-3 py-1.5 rounded-md hover:border-accent-2/30 hover:text-foreground/90 transition-colors",
};

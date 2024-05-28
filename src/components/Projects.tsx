import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";

const projects = [
  {
    title: "estConnect",
    description:
      "Developed an app for estate residents to book amenities, request concierge services, and manage access. Includes an admin dashboard for posting events and managing the estate.",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "MyPension",
    description:
      "Created an app for South Africans to check and withdraw funds available through the government's 2 pot savings system, ensuring easy access to pension details and transactions.",
    technologies: ["React Native", "GraphQL", "TypeScript"],
    link: "#",
  },
  {
    title: "Dawao",
    description:
      "Built a comprehensive React dashboard for warehouses to track deliveries, manage customers, drivers, and warehouse duties, enhancing operational efficiency.",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Full-Stack E-commerce Platform",
    description:
      "Developed a responsive e-commerce platform using JavaScript, React, Next.js, and Sanity.io to aggregate deals, primarily focusing on Stellenbosch and expanding countrywide.",
    technologies: ["React", "Next.js", "Sanity.io", "JavaScript"],
    link: "#",
  },
  {
    title: "DeltaMax Auto",
    description:
      "Created a professional site for an automotive workshop using React, TypeScript, and Figma, showcasing services and improving customer engagement.",
    technologies: ["React", "TypeScript", "Figma"],
    link: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Section id='projects' style='flex-col'>
      <Header title='Projects' />
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <Type className={styles.title}>{project.title}</Type>
            <Type className={styles.description}>{project.description}</Type>
            <div className={styles.techList}>
              {project.technologies.map((tech, idx) => (
                <div key={idx} className={styles.badge}>
                  <Type className={styles.tech}>{tech}</Type>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

const styles = {
  grid: "grid grid-cols-1 md:grid-cols-2",
  card: "my-3",
  title: "text-l font-bold mb-4",
  description: "text-sm mb-5 ",

  techList: "flex flex-wrap flex-row gap-2 mb-8",
  badge:
    "bg-accent-2-muted rounded-full items-center justify-center items-center px-3 py-1",
  tech: "mb-0 text-xs text-accent-2 animate-pulse",
};

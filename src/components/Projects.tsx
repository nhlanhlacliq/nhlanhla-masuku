import { MoveRight } from "lucide-react";
import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";

const projects = [
  {
    title: "estConnect",
    description:
      "An app for estate residents to book amenities, request concierge services, and manage access. Includes an admin dashboard for posting events and managing the estate.",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    link: "",
    images: [],
  },
  {
    title: "MyPension",
    description:
      "An app for South Africans to check and withdraw funds available through the government's 2 pot savings system, ensuring easy access to pension details and transactions.",
    technologies: ["React Native", "GraphQL", "TypeScript"],
    link: "",
    images: [],
  },
  {
    title: "Dawao",
    description:
      "Comprehensive React dashboard for warehouses to track deliveries, manage customers, drivers, and warehouse duties, enhancing operational efficiency.",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    link: "",
    images: [],
  },
  {
    title: "DoesDeals",
    description:
      "Responsive e-commerce platform using JavaScript, React, Next.js, and Sanity.io to aggregate deals, primarily focusing on Stellenbosch and expanding countrywide.",
    technologies: ["React", "Next.js", "Sanity.io", "JavaScript"],
    link: "http://doesdeals.co.za/",
  },
  {
    title: "DeltaMax Auto",
    description:
      "A professional site for an automotive workshop using React, TypeScript, and Figma, showcasing services and improving customer engagement.",
    technologies: ["React", "TypeScript", "Figma"],
    link: "https://deltamaxauto.com/",
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
            <a href={project.link} target='_blank'>
              <div className='flex gap-4 hover:gap-8 transition-all cursor-pointer hover:animate-out'>
                <Type className={styles.title}>{project.title}</Type>
                <div className='mt-0.5'>
                  <MoveRight />
                </div>
              </div>
            </a>
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
  grid: "grid grid-cols-1",
  card: "my-3",
  title: "text-l font-bold mb-4",
  description: "text-sm mb-5 ",

  techList: "flex flex-wrap flex-row gap-2 mb-8",
  badge:
    "bg-accent-2-muted rounded-full items-center justify-center items-center px-3 py-1",
  tech: "mb-0 text-xs text-accent-2 animate-pulse",
};

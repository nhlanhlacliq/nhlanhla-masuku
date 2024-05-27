const projects = [
  {
    title: "Full-Stack E-commerce Platform",
    description:
      "Developing a responsive e-commerce platform using JS, React, Next.js, and Sanity.io for aggregating deals mainly in Stellenbosch and across the country.",
    link: "#",
  },
  {
    title: "DeltaMax Auto",
    description:
      "Created an automotive workshop site page using React, TypeScript, and Figma.",
    link: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id='projects' className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <a href={project.link} className={styles.link}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

const styles = {
  projects: "bg-white py-16 px-8 lg:px-16",
  heading: "text-3xl md:text-4xl font-bold text-center mb-12",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
  card: "bg-gray-100 p-6 rounded-lg shadow-md",
  title: "text-xl font-bold mb-2",
  description: "text-gray-700 mb-4",
  link: "text-teal-500 hover:underline",
};

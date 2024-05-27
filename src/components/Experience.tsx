const experiences = [
  {
    position: "Freelance UI/UX Designer and Full Stack Developer",
    company: "",
    duration: "June 2022 - Present",
    details: [
      "Developed and designed the front end of a warehouse dashboard application.",
      "Developed and maintained a full-stack e-commerce platform using JavaScript, React, Next.js, and Sanity.io.",
      "Collaborated with clients to create intuitive UI designs, graphics, logos, and website designs using Figma and Adobe products.",
    ],
  },
  {
    position: "Technical Writer (Software engineering and Machine learning)",
    company: "RITZA",
    duration: "July 2021 - March 2022",
    details: [
      "Created articles, blog posts, and documentation for software engineering and machine learning-focused clients.",
      "Designed and created internal and client graphics using Adobe products.",
    ],
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <div id='experience' className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.grid}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.position}>{exp.position}</h3>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.duration}>{exp.duration}</p>
            <ul className={styles.details}>
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

const styles = {
  experience: "bg-white py-16 px-8 lg:px-16",
  heading: "text-3xl md:text-4xl font-bold text-center mb-12",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
  card: "bg-gray-100 p-6 rounded-lg shadow-md",
  position: "text-xl font-bold mb-2",
  company: "text-gray-700 mb-2",
  duration: "text-gray-500 mb-4",
  details: "list-disc pl-5 space-y-2",
};

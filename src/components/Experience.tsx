import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";

const experiences = [
  {
    position: "React Native and React Developer",
    company: "Dial A Techie",
    duration: "2024 - Present",
    details: [
      "Developed and maintained cross-platform mobile applications using React Native.",
      "Collaborated with UI/UX designers to create seamless and engaging user experiences.",
      "Implemented state management using Redux and Context API for efficient data handling.",
      "Optimized application performance and ensured compatibility across different devices and platforms.",
      "Worked closely with backend developers to integrate APIs and ensure smooth data flow.",
    ],
    link: "https://www.dialatechie.co.za/",
  },
  {
    position: "Freelance UI/UX Designer and Full Stack Developer",
    company: "Nhlanhla Masuku",
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
    link: "https://ritza.co/",
  },
  {
    position: "Automotive Technician & Service Advisor",
    company: "Jaguar Land Rover",
    duration: "Mar 2015 - Sep 2020",
    details: [
      "Developed an automation script for reporting vehicle issues, enhancing technician productivity.",
      "Diagnosed and repaired electrical and mechanical vehicle faults, improving customer satisfaction.",
      "Coordinated with technicians and parts department to ensure parts availability and managed dealership schedules.",
    ],
    link: "https://www.jaguarlandrover.com/",
  },
];

const Experience = () => {
  return (
    <Section id='experience' style='flex-col'>
      <Header title='Experience' />

      <div className={styles.grid}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <div className='lg:w-1/4 pr-2'>
              <Type className={styles.duration}>{exp.duration}</Type>
            </div>
            <div className='lg:w-3/4'>
              <Type className={styles.position}>{exp.position}</Type>
              <div className='hover:-ml-2 transition-all cursor-pointer'>
                <a href={exp.link} target='_blank'>
                  <Type variant='highlight' className={styles.company}>
                    {exp.company}
                  </Type>
                </a>
              </div>
              <ul className={styles.details}>
                {exp.details.map((detail, idx) => (
                  <li key={idx}>
                    <Type className={styles.detail}>{detail}</Type>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

const styles = {
  grid: "grid grid-cols-1 gap-10",
  duration: "text-sm mb-0 opacity-75",
  position: "text-l font-bold mb-3 leading-normal",
  company: "mb-3",
  card: "my-3 lg:flex lg:flex-row",
  details: "list-disc pl-5 space-y-2 text-sm",
  detail: "pl-5 mb-0",
};

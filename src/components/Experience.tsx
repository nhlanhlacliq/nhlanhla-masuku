import { MoveRight } from "lucide-react";
import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";

const experiences = [
  {
    position: "Freelance UI/UX Designer & Full Stack Developer",
    company: "Self-Employed",
    duration: "2020 — 2022",
    details: [
      "Built full-stack applications using React, Next.js, and Vue.js with focus on user experience and performance.",
      "Designed and implemented responsive, accessible web interfaces aligned with client brand guidelines using Figma and Adobe.",
      "Integrated third-party platforms including Sanity.io CMS for content management capabilities.",
      "Established CI/CD pipelines and managed hosting infrastructure for reliable application deployment.",
    ],
  },
  {
    position: "Technical Writer",
    company: "RITZA",
    duration: "2021 — 2022",
    details: [
      "Researched and wrote clear, concise technical documentation for developer tools and platforms including Sentry.io, Garden.io, and others.",
      "Developed practical software projects and code examples to demonstrate development concepts.",
      "Utilized data science tools (Python, Pandas, NumPy, Matplotlib) for creating technical visualizations.",
    ],
    link: "https://ritza.co/",
  },
  {
    position: "Automotive Technician & Service Advisor",
    company: "Jaguar Land Rover",
    duration: "2015 — 2020",
    details: [
      "Developed an automation script for reporting vehicle issues, enhancing technician productivity.",
      "Diagnosed and repaired complex electrical and mechanical vehicle faults, improving customer satisfaction.",
      "Coordinated with teams to ensure smooth workflows and timely repairs.",
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
          <a href={exp.link} key={index} target='_blank'>
            <div className={styles.card}>
              <div className='lg:w-1/4 pr-2'>
                <Type className={styles.duration}>{exp.duration}</Type>
              </div>
              <div className='lg:w-3/4'>
                <Type className={styles.position}>{exp.position}</Type>
                <div className='flex gap-4'>
                  <Type variant='highlight' className={styles.company}>
                    {exp.company}
                  </Type>
                  {exp.link && (
                    <div className='hidden group-hover:block group-hover:animate-in transition-all'>
                      <MoveRight size={18} />
                    </div>
                  )}
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
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

const styles = {
  grid: "grid grid-cols-1 gap-6",
  duration: "text-sm mb-0 opacity-60",
  position: "text-base font-semibold mb-2 leading-normal text-foreground",
  company: "mb-3 group-hover:opacity-100",
  card: "my-2 lg:flex lg:flex-row opacity-80 transition-all hover:opacity-100 group cursor-pointer hover:bg-foreground/[0.03] rounded-lg -m-6 p-6",
  details: "list-disc pl-5 space-y-2 text-sm",
  detail: "pl-3 mb-0 text-foreground/60",
};

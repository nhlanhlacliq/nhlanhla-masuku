import { MoveRight } from "lucide-react";
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
      "Implemented state management using relevant libraries and Context API for efficient data handling.",
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
      "Developed the front end of a warehouse dashboard application using React ecosystem.",
      "Developed and maintained a full-stack e-commerce-like platform using Next.js and a Sanity.io back-end",
      "Collaborated with clients to create intuitive UI designs, graphics and logos using Figma and Adobe products.",
    ],
  },
  {
    position: "Technical Writer (Software engineering and Machine learning)",
    company: "RITZA",
    duration: "July 2021 - March 2022",
    details: [
      "Created articles, blog posts, and documentation for software engineering and machine learning-focused clients such as Sentry.io, Labdigital, Garden.io, Okera, IGotAnOffer, etc.",
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
                  <div className='hidden group-hover:block group-hover:animate-in transition-all'>
                    <MoveRight />
                  </div>
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
  grid: "grid grid-cols-1 gap-10",
  duration: "text-sm mb-0 opacity-75",
  position: "text-l font-bold mb-3 leading-normal",
  company: "mb-3 group-hover:opacity-100",
  card: "my-3 lg:flex lg:flex-row opacity-90 transition-all hover:opacity-100 group hover cursor-pointer hover:bg-slate-900/30 rounded-sm -m-6 p-6",
  details: "list-disc pl-5 space-y-2 text-sm",
  detail: "pl-5 mb-0",
};

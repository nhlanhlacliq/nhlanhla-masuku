/* eslint-disable react/no-unescaped-entities */
import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";

const About = () => {
  return (
    <Section id='about' style='flex-col'>
      <Header title='About' />

      <div>
        <Type className={styles.text}>
          My love for technology started with pulling apart RC cars to figure out
          how they worked. That curiosity led me to{" "}
          <strong>
            <a href='https://www.jaguarlandrover.com/' target='_blank'>
              Jaguar Land Rover
            </a>
          </strong>
          , where I spent five years diagnosing complex systems and even
          automating reporting processes — my first taste of using software to
          solve real-world problems.
        </Type>

        <Type className={styles.text}>
          The pull towards software only grew stronger. I completed a{" "}
          <strong>
            <a href='https://www.hyperiondev.com/' target='_blank'>
              Software Engineering Bootcamp
            </a>
          </strong>{" "}
          and a comprehensive{" "}
          <strong>University of Helsinki Full Stack course</strong>, then sharpened
          my communication skills through{" "}
          <strong>
            <a href='https://ritza.co/' target='_blank'>
              technical writing at Ritza
            </a>
          </strong>
          . Building freelance web applications with React, Vue.js, and Next.js
          gave me the breadth; healthcare technology gave me the purpose.
        </Type>

        <Type className={styles.text}>
          Today, I build human-centered applications in the healthcare space —
          designing and developing intuitive interfaces that align technology
          with genuine patient and provider needs. It's where my technical skills
          and personal values converge.
        </Type>
      </div>
    </Section>
  );
};

export default About;

const styles = {
  text: "opacity-80 mb-5 text-pretty",
};

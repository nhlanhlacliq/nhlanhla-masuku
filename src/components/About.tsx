/* eslint-disable react/no-unescaped-entities */
import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";

const About = () => {
  return (
    <Section id='about' style='flex-col'>
      <Header title='About' />

      <div className={styles.content}>
        <Type className={styles.text}>
          I discovered my love for technology as a kid breaking apart RC cars to
          figure out how they worked. I nurtured this curiosity while working
          with cars at{" "}
          <strong>
            <a href='https://www.jaguarlandrover.com/' target='_blank'>
              Jaguar Land Rover
            </a>
          </strong>
          . From fixing mechanical issues to diving into software, I was hooked
          on the world of innovation and problem-solving.
        </Type>

        <Type className={styles.text}>
          Every challenge was a chance to learn something new. So, I jumped into
          a{" "}
          <strong>
            <a href='https://www.hyperiondev.com/' target='_blank'>
              Software Engineering Bootcamp
            </a>{" "}
          </strong>
          to deepen my skills. It was intense, but it opened doors to a whole
          new world of coding and creativity. I also dipped my toes into{" "}
          <strong>
            <a href='https://ritza.co/' target='_blank'>
              technical writing
            </a>
          </strong>
          . Crafting articles and documentation for software-focused clients, I
          found joy in simplifying complex concepts for others.
        </Type>

        <Type className={styles.text}>
          Now, I'm freelancing, turning ideas into reality for clients. From
          designing user-friendly apps to crafting engaging websites, I'm all
          about making tech work for everyday people.
        </Type>
      </div>
    </Section>
  );
};

export default About;

const styles = {
  text: "opacity-80 mb-5 text-pretty",
};

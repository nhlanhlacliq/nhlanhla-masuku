"use client";

import { useEffect, useRef, useState } from "react";
import Section from "./ui/Section";

const About = () => {
  // const [isSticky, setIsSticky] = useState(false);
  // const headingRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const aboutHeading = headingRef.current;
  //     if (aboutHeading && window.scrollY > aboutHeading.offsetTop) {
  //       setIsSticky(true);
  //     } else if (aboutHeading) {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Section id='about' style='flex-col'>
      <h2
        // className={
        // isSticky
        // ? styles.heading + " " + styles.stickyHeading
        // : styles.heading
        // }
        className={styles.stickyHeader}
        id='about-heading'
      >
        About
      </h2>
      <div className={styles.content}>
        <p className={styles.text}>
          I discovered my love for technology as a kid breaking apart RC cars to
          figure out how they worked. I nurtured this curiosity while working
          with cars at Jaguar Land Rover. From fixing mechanical issues to
          diving into software, I was hooked on the world of innovation and
          problem-solving.
        </p>

        <p className={styles.text}>
          Every challenge was a chance to learn something new. So, I jumped into
          a Software Engineering Bootcamp to deepen my skills. It was intense,
          but it opened doors to a whole new world of coding and creativity. I
          also dipped my toes into technical writing. Crafting articles and
          documentation for software-focused clients, I found joy in simplifying
          complex concepts for others.
        </p>

        <p className={styles.text}>
          Now, I'm freelancing, turning ideas into reality for clients. From
          designing user-friendly apps to crafting engaging websites, I'm all
          about making tech work for everyday people.
        </p>
      </div>
    </Section>
  );
};

export default About;

const styles = {
  heading: "text-3xl md:text-4xl font-bold mb-12 ",
  content: "md:w-3/4",
  text: "md:text-lg leading-relaxed mb-8",
  stickyHeading: "sticky top-0 z-10 bg-background/90 bg-opacity-75",
  stickyHeader:
    "text-3xl md:text-4xl font-bold mb-12 sticky top-0 backdrop-blur-sm bg-backdrop -mx-8 px-8",
};

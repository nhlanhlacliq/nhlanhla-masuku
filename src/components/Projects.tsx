/* eslint-disable react/no-unescaped-entities */
import { MoveRight } from "lucide-react";
import Header from "./ui/Header";
import Section from "./ui/Section";
import Type from "./ui/Type";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ReactNode } from "react";

const projects = [
  {
    title: "estConnect",
    description:
      "An app for estate residents to book amenities, request concierge services, and manage estate access. Includes an admin dashboard for posting events, handling user reports and managing the estate.",
    technologies: ["React Native", "JWT token", "React Ecosystem", "REST API"],
    link: "",
    images: [
      "/images/ec1.png",
      "/images/ec2.png",
      "/images/ec3.png",
      "/images/ec4.png",
      "/images/ec5.png",
      "/images/ec6.png",
      "/images/ec7.png",
      "/images/ec8.png",
      "/images/ec9.png",
    ],
    type: "mobile",
  },
  {
    title: "MyPension",
    description:
      "An app for South Africans to check and withdraw funds available through the government's 2 pot savings system, ensuring easy access to pension details and transactions.",
    technologies: ["React Native", "OTPs", "JWT", "TypeScript"],
    link: "",
    images: [
      "/images/mp1.png",
      "/images/mp2.png",
      "/images/mp3.png",
      "/images/mp4.png",
      "/images/mp5.png",
      "/images/mp6.png",
      "/images/mp7.png",
    ],
    type: "mobile",
  },
  {
    title: "Dawao",
    description:
      "Comprehensive React dashboard for warehouses to track deliveries, manage customers, drivers, and warehouse duties, enhancing operational efficiency.",
    technologies: ["React", "Zustand", "Google APIs", "Schema Validation"],
    link: "",
    images: [
      "/images/d1.png",
      "/images/d2.png",
      "/images/d3.png",
      "/images/d4.png",
      "/images/d5.png",
      "/images/d6.png",
      "/images/d7.png",
      "/images/d8.png",
      "/images/d9.png",
    ],
    type: "web",
  },
  {
    title: "DoesDeals",
    description:
      "Responsive e-commerce platform using Next.js, and Sanity.io to aggregate deals, primarily focusing on Stellenbosch and expanding countrywide. Currently doing UX/UI redesign.",
    technologies: ["Next.js", "Sanity.io", "HTML", "CSS"],
    link: "http://doesdeals.co.za/",
  },
  {
    title: "DeltaMax Auto",
    description:
      "A professional site for an automotive workshop using React, TypeScript, and Figma, showcasing services and improving customer engagement. Co-founded the company and built the brand.",
    technologies: ["React", "Vite", "TypeScript", "Figma"],
    link: "https://deltamaxauto.com/",
  },
  // Add more projects as needed
];

const RenderDialog = ({
  project,
  projectCard,
}: {
  project: any;
  projectCard: ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ProjectCard project={project} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            {project.title}'s link cannot be shared just yet. It's coming soon
            though!
          </DialogDescription>
        </DialogHeader>
        <div
          className={
            project.type === "mobile"
              ? styles.imageContainerMobile
              : styles.imageContainerWeb
          }
        >
          {/* @ts-expect-error */}
          {project.images.map((image, idx) => (
            <Image
              key={idx}
              src={image}
              alt={image}
              className='hover:scale-150 transition-all rounded-sm shadow-sm'
              width={project.type === "mobile" ? 1200 : 400}
              height={project.type === "mobile" ? 1200 : 400}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className={styles.card}>
      <div className='flex gap-4 group-hover:gap-8 transition-all cursor-pointer hover:animate-out'>
        <Type className={styles.title}>{project.title}</Type>
        <div className='mt-0.5 group-hover:opacity-100 opacity-50'>
          <MoveRight />
        </div>
      </div>
      <Type className={styles.description}>{project.description}</Type>
      <div className={styles.techList}>
        {project.technologies.map((tech: any, idx: number) => (
          <div key={idx} className={styles.badge}>
            <Type className={styles.tech}>{tech}</Type>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Section id='projects' style='flex-col'>
      <Header title='Recent Work' />
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <>
            {project.link ? (
              <a href={project.link} target='_blank'>
                <ProjectCard key={index} project={project} />
              </a>
            ) : (
              <RenderDialog
                key={index}
                project={project}
                projectCard={<ProjectCard project={project} />}
              />
            )}
          </>
        ))}
      </div>
    </Section>
  );
};

export default Projects;

const styles = {
  grid: "grid grid-cols-1",
  card: "my-3 group peer cursor-pointer hover:bg-slate-900/30 rounded-sm -m-6 p-6 opacity-90 hover:opacity-100",
  title: "text-l font-bold mb-4 group-hover:text-accent-2",
  description: "text-sm mb-5 text-left",

  techList: "flex flex-wrap flex-row gap-2 mb-8",
  badge:
    "bg-accent-2-muted rounded-full items-center justify-center items-center px-3 py-1",
  tech: "mb-0 text-xs text-accent-2 animate-pulse",

  imageContainerMobile: "grid grid-cols-3 gap-4 lg:gap-8 py-4 lg:py-8",
  imageContainerWeb: "grid grid-cols-2 gap-4 lg:gap-16 p-4 lg:p-8",
};

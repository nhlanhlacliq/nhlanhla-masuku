import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedRole from "@/components/FeaturedRole";
import Skills from "@/components/Skills";
import { headers } from "next/headers";

export default function Home() {
  headers(); // force dynamic behaviour (no caching)
  return (
    <div className='lg:flex'>
      <div className='lg:w-1/2'>
        <Hero />
      </div>
      <div className='lg:w-1/2 lg:-ml-12 lg:pt-4'>
        <About />
        <FeaturedRole />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

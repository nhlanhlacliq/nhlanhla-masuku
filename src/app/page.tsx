import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className='lg:flex'>
      <div className='lg:w-1/2'>
        <Hero />
      </div>
      <div className='lg:w-1/2 lg:-ml-12 lg:pt-4'>
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

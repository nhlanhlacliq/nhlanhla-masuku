"use client";

import { cn } from "@/lib/utils";
// import Link from "next/link";

import { Link } from "react-scroll";
// animateScroll

const Links = [
  {
    name: "About",
    to: "about",
  },
  {
    name: "Experience",
    to: "experience",
  },
  {
    name: "Projects",
    to: "projects",
  },
];

type Props = {
  style?: string;
};

const Nav = ({ style }: Props) => {
  return (
    <nav className={cn(styles.nav, style)}>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          {Links.map((item, i) => (
            <div
              key={i}
              className='flex group items-center gap-4 cursor-pointer'
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                activeClass={styles.activeWidth}
                className='w-8 group-hover:w-16'
                spy={true}
              >
                <div className='w-full bg-background h-0.5 rounded-sm transition-all' />
              </Link>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className={styles.link}
                activeClass={styles.active}
                spy={true}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const styles = {
  nav: "",
  container: "py-4",
  mainLink: "text-2xl font-bold block mb-8",
  linkContainer: "flex flex-col space-y-4",
  link: "hover:underline peer",
  active: "active-nav",
  activeWidth: "active-nav-width",
};

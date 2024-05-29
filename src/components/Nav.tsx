import { cn } from "@/lib/utils";
import Link from "next/link";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

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
              <div className='w-8 bg-background h-0.5 rounded-sm group-hover:w-12 transition-all' />
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                className={styles.link}
                activeClass={styles.active}
                spy={true}
              >
                {item.name}
              </ScrollLink>
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
  link: "hover:underline",
  active: "text-accent-2",
};

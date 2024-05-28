import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href='/' className={styles.mainLink}>
          Nhlanhla Masuku
        </Link>
        <div className={styles.linkContainer}>
          <Link href='/#projects' className={styles.link}>
            Projects
          </Link>
          <Link href='/#contact' className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const styles = {
  nav: "hidden lg:block lg:w-1/4 bg-gray-800 text-white h-screen fixed",
  container: "container mx-auto py-4",
  mainLink: "text-2xl font-bold block mb-8",
  linkContainer: "flex flex-col space-y-4",
  link: "hover:underline",
};

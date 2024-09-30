import React from "react";
import Type from "./Type";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <Type variant='header' className={styles.stickyHeader}>
      {title}
    </Type>
  );
};

export default Header;

const styles = {
  stickyHeader:
    "sticky lg:relative top-0 backdrop-blur-sm bg-backdrop lg:backdrop-blur-none -mx-8 px-8 py-3 mb-8 z-50",
};

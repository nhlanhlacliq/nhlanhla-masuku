import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  style?: string;
  id: string;
};

const Section = ({ children, style, id }: Props) => {
  return (
    <main className={cn(styles.content, " " + style)} id={id}>
      {children}
    </main>
  );
};

export default Section;

const styles = {
  content: "p-8 md:p-16 flex text-white",
};

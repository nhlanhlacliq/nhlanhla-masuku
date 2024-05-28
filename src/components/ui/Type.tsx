import { cn } from "@/lib/utils";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import React, { ReactNode } from "react";

type variantType =
  | "navigation"
  | "highlight"
  | "subtitle"
  | "display"
  | "header"
  | "button"
  | "title"
  | "body";

interface Props {
  variant?: variantType;
  children: ReactNode;
  className?: string;
  props?: HtmlProps;
}

const Type: React.FC<Props> = ({
  variant = "body",
  children,
  className,
  props,
}) => {
  const variantClasses = getVariantClasses(variant);

  return (
    <p className={cn(variantClasses, className)} {...props}>
      {children}
    </p>
  );
};

const getVariantClasses = (variant: variantType) => {
  switch (variant) {
    case "display":
      return "text-4xl mb-6 text-gray-900 font-medium";

    case "highlight":
      return "mb-8 opacity-75 text-accent-2";
    case "title":
      return "text-4xl md:text-6xl my-4 font-semibold tracking-tight";
    case "subtitle":
      return "text-xl md:text-2xl text-background/90";

    case "header":
      return "text-xl md:text-2xl font-semibold mb-6";

    // case "navigation":
    //   return "text-base uppercase tracking-wide text-gray-900 font-medium";
    // case "button":
    //   return "text-sm font-bold tracking-wider text-white";
    default: // body
      return "text-md md:text-lg mb-8 leading-relaxed";
  }
};

export default Type;

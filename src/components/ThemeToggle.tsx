"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const cycle = () => {
    const next = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(next);
  };

  return (
    <button
      onClick={cycle}
      className='p-2 rounded-md text-foreground/50 hover:text-accent-2 transition-colors'
      aria-label={`Current theme: ${theme}. Click to switch.`}
    >
      {theme === "dark" ? (
        <Moon size={20} />
      ) : theme === "light" ? (
        <Sun size={20} />
      ) : (
        <Monitor size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;

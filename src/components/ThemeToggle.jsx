"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-text-black dark:text-text-white text-[25px]"
    >
      {theme === "dark" ? <CiLight /> : <CiDark />}
    </button>
  );
}

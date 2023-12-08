"use client";

import { useThemeContext } from "../context/theme";

const Pill = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, setIsDarkMode } = useThemeContext();
  return (
    <span
      className={`${isDarkMode ? "bg-[#f2f3f4]" : "bg-[#27374d]"} ${
        isDarkMode ? "text-[#27374d]" : "text-[#f2f3f4]"
      } py-0.5 px-1 rounded-full text-xs border border-sky-500 shadow-lg`}
    >
      {children}
    </span>
  );
};
export default Pill;

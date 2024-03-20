"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Button } from "./ui/button";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			variant="ghost"
			className="h-10 w-10 p-0 rounded-full absolute top-1 right-1"
		>
			<FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};
export default ThemeToggle;

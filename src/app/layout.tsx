import type { Metadata } from "next";
import { Merriweather, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["devanagari", "latin", "latin-ext"],
});
const merriweather = Merriweather({
	weight: ["300", "400", "700", "900"],
	subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});
const montserrat = Montserrat({
	subsets: ["cyrillic"],
});

export const metadata: Metadata = {
	title: "Caleb Wilson",
	description: "Las Vegas Software Engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={montserrat.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					<Toaster />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

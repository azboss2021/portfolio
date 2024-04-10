import EmailForm from "@/components/EmailForm";
import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	FaGraduationCap,
	FaLocationDot,
	FaEye,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa6";

const projects: {
	title: string;
	date?: string;
	description: string;
	repoLink?: string;
	liveDemoLink?: string;
	demoLink: string;
	skills: { skill: string; text?: string; color?: string }[];
}[] = [
	{
		title: "CaptionIt.fun",
		date: "2024",
		description:
			"This is my first full stack app that I built using my Next.js boilerplate. It accepts payments and is user ready. As of 4/5/24, there is lots of work to be done, and bugs to be fixed. Until then, I will be periodically updating it as I work on other projects.",
		demoLink: "https://www.youtube.com/embed/9DapZ_-stPY?si=vOFsuNWlBbiKJYRx",
		liveDemoLink: "https:captionit.fun",
		skills: [
			{ skill: "Next.js" },
			{ skill: "React" },
			{ skill: "Typescript" },
			{ skill: "Tailwind" },
			{ skill: "Stripe" },
			{ skill: "MongoDB" },
		],
	},
	{
		title: "Next.js Full Stack Boilerplate",
		date: "2024",
		description:
			"This boilerplate built over a few weeks encompasses most of the tools I would use to build a SaaS. It has an authentication system, account actions, support email page, stripe payments, newsletter subscription, and a customizeable landing page.",
		demoLink: "https://www.youtube.com/embed/U_4kkuXUN_0?si=QATweDpnznBj1RWs",
		skills: [
			{ skill: "Next.js" },
			{ skill: "React" },
			{ skill: "Typescript" },
			{ skill: "Tailwind" },
			{ skill: "Stripe" },
			{ skill: "MongoDB" },
		],
	},
	{
		title: "Pathfinding Visualizer",
		date: "2023",
		description:
			"This basic pathfinding app visualizes the shortest node-to-node path. This project simulates the A* algorithm I learned in my senior classes.",
		repoLink: "https://github.com/azboss2021/pathfinding",
		liveDemoLink: "https://azboss2021.github.io/pathfinding/",
		demoLink: "https://www.youtube.com/embed/73MtV735ssQ?si=Y6g7Fp7PJgGP6EJS",
		skills: [
			{ skill: "Vite" },
			{ skill: "React" },
			{ skill: "Javascript" },
			{ skill: "Tailwind" },
		],
	},
	{
		title: "Sorting Visualizer",
		date: "2023",
		description:
			"This basic sorting app visualizes a list of numbers being sorted from a random state. This project implements a few common sorting algorithms I learned in my senior classes.",
		repoLink: "https://github.com/azboss2021/sorting-practice",
		liveDemoLink: "https://azboss2021.github.io/sorting-practice/",
		demoLink: "https://www.youtube.com/embed/SBSD4NFydFY?si=eQr-JtcSV-ABaSsP",
		skills: [
			{ skill: "Vite" },
			{ skill: "React" },
			{ skill: "Javascript" },
			{ skill: "Tailwind" },
		],
	},
	{
		title: "CV Builder",
		date: "2022",
		description:
			"This was one of my first projects that I made while learning React states and forms. It is included in this project list to show my progress while self-learning.",
		repoLink: "https://github.com/azboss2021/cv-project",
		liveDemoLink: "https://azboss2021.github.io/cv-project/",
		demoLink: "https://www.youtube.com/embed/LSeUnKWt6XI?si=fZ19bHORLwRCRnAV",
		skills: [
			{ skill: "Create React App" },
			{ skill: "React" },
			{ skill: "Javascript" },
		],
	},
];

export default function Home() {
	return (
		<main className="flex flex-col items-center pt-20 pb-32 gap-24 max-w-5xl mx-auto px-8">
			<ThemeToggle />
			<div className="text-center flex flex-col gap-1 items-center pb-16 border-b w-full">
				<h1 className="text-2xl">Caleb Wilson</h1>
				{/* <span className="opacity-80">Full Stack Dev</span> */}
				<div className="flex flex-col sm:flex-row md:gap-2 gap-1 items-center text-sm">
					<Link
						href="mailto:cwilsonfun@gmail.com"
						target="_blank"
						className="hover:underline"
					>
						cwilsonfun@gmail.com
					</Link>
					<span className="flex items-center gap-0.5 text-sm">
						<FaLocationDot size={14} /> Las Vegas, NV
					</span>
					<span className="flex items-center gap-0.5 text-sm">
						<FaGraduationCap size={14} /> UNLV CS 2023
					</span>
				</div>
				<div className="flex gap-1.5">
					<Button
						asChild
						className="w-8 h-8 p-0 rounded-full"
						variant="default"
					>
						<Link href="https://github.com/azboss2021" target="_blank">
							<FaGithub size={18} />
							<span className="sr-only">GitHub Link</span>
						</Link>
					</Button>
					<Button
						asChild
						className="w-8 h-8 p-0 rounded-full"
						variant="default"
					>
						<Link
							href="https://www.linkedin.com/in/calebwilson-lv/"
							target="_blank"
						>
							<FaLinkedin size={18} />
							<span className="sr-only">LinkedIn Link</span>
						</Link>
					</Button>
				</div>
			</div>

			<section className="flex flex-col gap-24">
				{projects.map((project) => (
					<div
						key={project.title}
						className="flex flex-col md:flex-row gap-4 md:gap-12"
					>
						<div className="flex flex-col gap-2 basis-1/2">
							<div className="flex flex-col gap-2 justify-center h-full items-center md:items-start">
								<h2 className="font-extrabold text-2xl items-center text-center md:text-left">
									{project.title}{" "}
									<span className="font-normal">
										{project.date && <>({project.date})</>}
									</span>
								</h2>
								<h3 className="text-center md:text-left max-w-prose">
									{project.description}
								</h3>
								<div className="flex flex-wrap gap-1 sm:justify-start justify-center">
									{project.skills.map((skill, index) => (
										<Badge
											key={`${project.title}_skill_${index}`}
											variant="outline"
										>
											{skill.skill}
										</Badge>
									))}
								</div>
								{(project.repoLink || project.liveDemoLink) && (
									<div className="flex w-full gap-1">
										{project.repoLink && (
											<Button
												asChild
												className="w-full md:w-fit flex items-center gap-2"
											>
												<Link href={project.repoLink} target="_blank">
													Code <FaGithub size={16} />
												</Link>
											</Button>
										)}
										{project.liveDemoLink && (
											<Button
												asChild
												className="w-full md:w-fit flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity text-white"
											>
												<Link href={project.liveDemoLink} target="_blank">
													Demo <FaEye size={16} />
												</Link>
											</Button>
										)}
									</div>
								)}
							</div>
						</div>
						<iframe
							src={`${project.demoLink}?disablekb=0&rel=0`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							className="basis-1/2 aspect-video"
							allowFullScreen
						/>
					</div>
				))}
			</section>

			<EmailForm />
		</main>
	);
}

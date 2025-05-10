import Image from "next/image";
import Link from "next/link";
import {
	FaGraduationCap,
	FaLocationDot,
	FaEye,
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaBriefcase,
} from "react-icons/fa6";

const projects: {
	title: string;
	date?: string;
	description: string;
	repoLink?: string;
	liveDemoLink?: string;
	demoLink: string;
	skills: string[];
}[] = [
	{
		title: "CaptionIt.fun",
		date: "2024",
		description:
			"This is my first full stack app that I built using my Next.js boilerplate. It accepts payments and is user ready. Update (2025): The application is no longer deployed, but feel free to check out the demo video to see how it operated.",
		repoLink: "https://github.com/azboss2021/captionit",
		demoLink: "https://www.youtube.com/embed/9DapZ_-stPY?si=vOFsuNWlBbiKJYRx",
		skills: [
			"Next.js",
			"React",
			"Typescript",
			"Tailwind",
			"Stripe",
			"MongoDB",
			"Cloudinary",
			"OpenAI",
		],
	},
	{
		title: "Next.js Full Stack SaaS Boilerplate",
		date: "2024",
		description:
			"This boilerplate built over a few weeks encompasses most of the tools I would use to build a SaaS. It has an authentication system, account actions, support email page, stripe payments, newsletter subscription, and a customizeable landing page.",
		repoLink: "https://github.com/azboss2021/my-saas",
		demoLink: "https://www.youtube.com/embed/U_4kkuXUN_0?si=QATweDpnznBj1RWs",
		skills: ["Next.js", "React", "Typescript", "Tailwind", "Stripe", "MongoDB"],
	},
	{
		title: "Pathfinding Visualizer",
		date: "2023",
		description:
			"This basic pathfinding app visualizes the shortest node-to-node path. This project simulates the A* algorithm I learned in my senior classes.",
		repoLink: "https://github.com/azboss2021/pathfinding",
		liveDemoLink: "https://azboss2021.github.io/pathfinding/",
		demoLink: "https://www.youtube.com/embed/73MtV735ssQ?si=Y6g7Fp7PJgGP6EJS",
		skills: ["Vite", "React", "Javascript", "Tailwind"],
	},
	{
		title: "Sorting Visualizer",
		date: "2023",
		description:
			"This basic sorting app visualizes a list of numbers being sorted from a random state. This project implements a few common sorting algorithms I learned in my senior classes.",
		repoLink: "https://github.com/azboss2021/sorting-practice",
		liveDemoLink: "https://azboss2021.github.io/sorting-practice/",
		demoLink: "https://www.youtube.com/embed/SBSD4NFydFY?si=eQr-JtcSV-ABaSsP",
		skills: ["Vite", "React", "Javascript", "Tailwind"],
	},
];

export default function Home() {
	return (
		<main className="flex flex-col items-center pt-20 pb-32 gap-24 max-w-5xl mx-auto px-8">
			<div className="flex items-start justify-between w-full">
				<div className="flex flex-col gap-4 items-start">
					<h1 className="text-6xl font-bold">Caleb Wilson</h1>

					<h2 className="text-2xl">Full Stack & Next.js Developer</h2>

					<div className="flex flex-col gap-2 items-start opacity-80">
						<Link
							href="mailto:calebjwilson14@gmail.com"
							target="_blank"
							className="hover:underline flex items-start gap-2"
						>
							<div className="mt-1">
								<FaEnvelope />
							</div>
							calebjwilson14@gmail.com
						</Link>
						<Link
							href="https://www.linkedin.com/in/calebwilson-lv/"
							target="_blank"
							className="hover:underline flex items-start gap-2"
						>
							<div className="mt-1">
								<FaLinkedin />
							</div>
							calebwilson-lv
						</Link>
						<Link
							href="https://github.com/azboss2021"
							target="_blank"
							className="hover:underline flex items-start gap-2"
						>
							<div className="mt-1">
								<FaGithub />
							</div>
							azboss2021
						</Link>
						<div className="flex items-start gap-2">
							<div className="mt-1">
								<FaBriefcase size={14} />
							</div>
							General Dynamics (2024 - 2025)
						</div>
						<div className="flex items-start gap-2">
							<div className="mt-1">
								<FaGraduationCap size={14} />
							</div>
							BSc Computer Science @ UNLV (2023)
						</div>
						<div className="flex items-start gap-2">
							<div className="mt-1">
								<FaLocationDot size={14} />
							</div>
							Moon Township, PA
						</div>
					</div>
				</div>
				<Image
					width={196}
					height={196}
					src="/CJ.jpeg"
					alt="CJ"
					className="rounded-full"
				/>
			</div>

			<section className="flex flex-col gap-24">
				{projects.map((project) => (
					<div
						key={project.title}
						className="flex flex-col md:flex-row gap-4 md:gap-12"
					>
						<div className="flex flex-col gap-2 basis-1/2">
							<div className="flex flex-col gap-4 justify-center h-full items-start">
								<h2 className="text-2xl items-center font-bold text-left">
									{project.title}
								</h2>
								<h3 className="text-left max-w-prose">{project.description}</h3>
								<div className="flex flex-wrap gap-1 justify-start">
									{project.skills.map((skill, index) => (
										<div
											key={index}
											className="px-1.5 py-0.5 bg-black/10 rounded"
										>
											{skill}
										</div>
									))}
								</div>
								{(project.repoLink || project.liveDemoLink) && (
									<div className="flex w-full gap-1">
										{project.repoLink && (
											<Link
												href={project.repoLink}
												target="_blank"
												className="bg-black text-white px-3 py-1.5 flex items-center gap-2 rounded hover:opacity-60 transition-opacity duration-200"
											>
												Code <FaGithub size={16} />
											</Link>
										)}
										{project.liveDemoLink && (
											<Link
												href={project.liveDemoLink}
												target="_blank"
												className="bg-black text-white px-3 py-1.5 flex items-center gap-2 rounded hover:opacity-60 transition-opacity duration-200"
											>
												Demo <FaEye size={16} />
											</Link>
										)}
									</div>
								)}
							</div>
						</div>
						<iframe
							src={`${project.demoLink}?disablekb=0&rel=0`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							className="basis-1/2 aspect-video rounded"
							allowFullScreen
						/>
					</div>
				))}
			</section>
		</main>
	);
}

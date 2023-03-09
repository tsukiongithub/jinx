import { MouseEvent, useEffect, useState } from "react";

import { useQuery } from "react-query";

import Link from "next/link";
import addMonths from "@/common/addMonths";

type Project = {
	name: string;
	description: string;
	repoUrl: string;
	repoUrlText: string;
	createdAt: Date;
	pushedAt: Date;
};

const repoUrl = "https://api.github.com/users/tsukiongithub/repos";

const fetchProjects = async () => {
	return await (await fetch(repoUrl)).json();
};

const ProjectGrid = ({ variant, sortedBy }: { variant: "current" | "all"; sortedBy?: "lastActive" | "alphabetic" }) => {
	const [allRepos, setAllRepos] = useState<Project[]>([]);
	const [state, setState] = useState("");

	const { data, isLoading, isError, isSuccess } = useQuery("githubData", fetchProjects);

	useEffect(() => {
		if (isSuccess) {
			const newRepos = [];
			for (let i = 0; i < data.length; i++) {
				// if set to show current projects and data[i] is older than 1 (one) month ...
				if (variant === "current" && new Date(data[i].pushed_at) < addMonths(new Date(), -1)) {
					// ... skip it
					continue;
				}
				newRepos.push({
					name: data[i].name,
					description: data[i].description != undefined ? data[i].description : "no description found",
					repoUrl: data[i].html_url,
					repoUrlText: `${data[i].name} on github`,
					createdAt: new Date(data[i].created_at),
					pushedAt: new Date(data[i].pushed_at),
				});
			}

			if (sortedBy === "lastActive") {
				newRepos.sort((a, b) => a.pushedAt.getDate() - b.pushedAt.getDate());
			}

			setAllRepos(newRepos);
		}
	}, [isSuccess]);

	const handleOnMouseMove = (ev: MouseEvent<HTMLElement>) => {
		// responsible for the cool mouse hover effect
		const projectCards = ev.currentTarget.children;
		for (let i = 0; i < projectCards.length; i++) {
			const projectCard = projectCards[i] as HTMLElement;
			const rect = projectCard.getBoundingClientRect();
			const x = ev.clientX - rect.left;
			const y = ev.clientY - rect.top;
			projectCard.style.setProperty("--mouse-x", `${x}px`);
			projectCard.style.setProperty("--mouse-y", `${y}px`);
		}
	};

	if (isLoading) {
		return <div>loading projects...</div>;
	}

	if (isError) {
		return <div>there was an error loading the projects, please try again later :/</div>;
	}

	return (
		<div
			className="projects-grid"
			onMouseMove={handleOnMouseMove}
		>
			{allRepos.map((project, key) => {
				return (
					<article
						key={key}
						id={`${key}`}
						className="project-card"
					>
						<div className="project-card__content">
							<h4 className="mb-4 text-xl font-medium">{project.name}</h4>
							<p className="mb-4">{project.description}</p>
							<Link
								className="mt-auto w-fit underline underline-offset-2 transition-colors duration-100 hover:text-red-500"
								href={project.repoUrl}
								target="_blank"
							>
								{project.repoUrlText}
							</Link>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default ProjectGrid;

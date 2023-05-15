import { useEffect, useState } from "react";

import { useQuery } from "react-query";

import Link from "next/link";
import addMonths from "@/common/addMonths";
import handleCardHover from "@/common/handleCardHover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
				newRepos.sort((a, b) => b.pushedAt.getTime() - a.pushedAt.getTime());
			}

			setAllRepos(newRepos);
		}
	}, [data, isSuccess, variant, sortedBy]);

	if (isLoading) {
		return <div>loading projects...</div>;
	}

	if (isError) {
		return <div>there was an error loading the projects, please try again later :/</div>;
	}

	return (
		<div
			className="card-grid"
			onMouseMove={handleCardHover}
		>
			{allRepos.map((project, key) => {
				return (
					<article
						key={key}
						id={`${key}`}
						className="card"
					>
						<div className="card__content">
							<h4 className="mb-4 text-xl font-medium">{project.name}</h4>
							<p className="mb-4 overflow-hidden overflow-ellipsis">{project.description}</p>
							<Link
								className="group relative mt-auto w-fit underline underline-offset-2 transition-colors duration-100 hover:text-red-600"
								href={project.repoUrl}
								target="_blank"
							>
								<span>{project.repoUrlText}</span>
								<FontAwesomeIcon
									className="pointer-events-none absolute -right-5 top-0 h-3 w-3 bg-neutral-900 p-0.5 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
									icon={faArrowUpRightFromSquare}
								/>
							</Link>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default ProjectGrid;

import { useEffect, useState } from "react";

import { useQuery } from "react-query";

import addMonths from "@/common/addMonths";
import handleCardHover from "@/common/handleCardHover";

import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ variant, sortedBy }: { variant: "current" | "all"; sortedBy?: "lastActive" | "alphabetic" }) => {
	const [allRepos, setAllRepos] = useState<Project[]>([]);

	const { data, isLoading, isError, isSuccess } = useQuery({
		queryKey: ["githubData"],
		queryFn: async () => {
			const res = await fetch("https://api.github.com/users/tsukiongithub/repos");

			if (!res.ok) throw new Error("could not fetch projects from github");

			return (await res.json()) as RepositoryInfo[];
		},
	});

	useEffect(() => {
		if (isSuccess) {
			const newRepos = [];
			for (let i = 0; i < data.length; i++) {
				const currentRepo = data[i];

				if (currentRepo) {
					// if set to show current projects and data[i] is older than 1 (one) month ...
					if (variant === "current" && new Date(currentRepo.pushed_at) < addMonths(new Date(), -1)) {
						// ... skip it
						continue;
					}

					newRepos.push({
						id: currentRepo.id.toString(),
						name: currentRepo.name,
						description: currentRepo.description != undefined ? currentRepo.description : "no description found",
						repoUrl: currentRepo.html_url,
						repoUrlText: `${currentRepo.name} on github`,
						createdAt: new Date(currentRepo.created_at),
						pushedAt: new Date(currentRepo.pushed_at),
					} satisfies Project);
				}
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
			{allRepos.map((project) => {
				return (
					<ProjectCard
						project={project}
						key={project.id}
					/>
				);
			})}
		</div>
	);
};

export default ProjectGrid;

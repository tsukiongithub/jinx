import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useQuery } from "react-query";

type Project = {
	name: string;
	description: string;
	repoUrl: string;
	repoUrlText: string;
};

const repoUrl = "https://api.github.com/users/tsukiongithub/repos";

const fetchProjects = async () => {
	return await (await fetch(repoUrl)).json();
};

const projects: NextPage = () => {
	return (
		<>
			<Head>
				<title>tsuki&apos;s cool website - projects</title>
				<meta
					name="description"
					content="projects page for tsuki's website"
				/>
			</Head>
			<Header />
			<main className="container mx-auto flex flex-col items-center p-4">
				<h2 className="mb-12 text-3xl">projects</h2>
				<ProjectGrid />
			</main>
			<Footer />
		</>
	);
};

const ProjectGrid = () => {
	const projectsList: Project[] = [];
	const { data, isLoading, isError, isSuccess } = useQuery("githubData", fetchProjects);

	if (isLoading) {
		return <div>loading projects...</div>;
	}

	if (isError) {
		return <div>there was an error, please try again later</div>;
	}

	if (isSuccess) {
		for (let i = 0; i < data.length; i++) {
			projectsList.push({
				name: data[i].name,
				description: data[i].description != undefined ? data[i].description : "no description found",
				repoUrl: data[i].html_url,
				repoUrlText: `link to the ${data[i].name} project`,
			});
		}
	}

	return (
		<div className="grid auto-cols-fr grid-flow-col gap-4">
			{projectsList.map((project, key) => {
				return (
					<div
						key={key}
						className="rounded bg-neutral-800/60 py-6 px-4 shadow-lg transition hover:scale-105 hover:shadow-xl"
					>
						<h4 className="mb-4 text-xl font-medium">{project.name}</h4>
						<p className="mb-4">{project.description}</p>
						<Link
							className="underline"
							href={project.repoUrl}
							target="_blank"
						>
							{project.repoUrlText}
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default projects;

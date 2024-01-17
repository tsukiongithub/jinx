import { type NextPage } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import ProjectGrid from "@/components/ProjectGrid";
import Head from "next/head";
import Link from "next/link";

const projects: NextPage = () => {
	return (
		<>
			<Head>
				<title>tsuki.projects</title>
				<meta
					name="description"
					content="projects page for tsuki's website"
				/>
			</Head>
			<Header className="z-20" />
			<main className="container z-10 mx-auto flex flex-col items-center p-4 pt-28">
				<h2 className="text-3xl">projects</h2>
				<p className="mb-12 mt-6">these are all my public projects on github</p>
				<p className="text-lg">
					coming <span className="italic">soon&#8482;</span>
				</p>
				<p className="mt-2">
					for now you can check out my{" "}
					<Link
						className="md:animated-underline underline underline-offset-4 md:no-underline"
						href={"https://github.com/tsukiongithub?tab=repositories"}
						target="_blank"
					>
						github profile
					</Link>{" "}
					for all my public projects
				</p>
				{/* <ProjectGrid
					variant="all"
					sortedBy="lastActive"
				/> */}
			</main>
			<Footer />
		</>
	);
};

export default projects;

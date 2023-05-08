import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectGrid from "@/components/ProjectGrid";
import { type NextPage } from "next";
import Head from "next/head";

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
			<Header className="z-20" />
			<main className="container z-10 mx-auto flex flex-col items-center p-4 pt-28">
				<h2 className="text-3xl">projects</h2>
				<p className="my-6">these are all my public projects on github</p>
				<ProjectGrid variant="all" />
			</main>
			<Footer />
		</>
	);
};

export default projects;

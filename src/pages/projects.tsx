import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import ProjectGrid from "@/components/ProjectGrid";
import { type NextPage } from "next";
import Head from "next/head";

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

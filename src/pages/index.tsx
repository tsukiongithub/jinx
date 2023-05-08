import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { type NextPage } from "next";
import Head from "next/head";
import ProjectGrid from "@/components/ProjectGrid";
import ProficienciesGrid from "@/components/ProficienciesGrid";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>tsuki - home</title>
				<meta
					name="description"
					content="home page for tsuki's website"
				/>
			</Head>
			<Header className="z-20" />
			<main className="container z-10 mx-auto flex flex-1 flex-col items-center justify-center px-4">
				<section className="flex h-screen items-center text-center">
					<h1 className="text-6xl [line-height:5rem;]">
						hi.
						<br />
						i&apos;m tsuki :&#41;
					</h1>
					<div>
						<div className="absolute inset-x-0 bottom-0 -z-[9] h-[40vh] bg-gradient-to-b from-transparent to-neutral-900" />
						<div className="absolute inset-0 -z-10 bg-[url('/imgs/why-did-you-leave-me-2.png')] bg-cover bg-no-repeat" />
					</div>
				</section>
				<section className="w-full pt-20">
					<h2 className="text-3xl">currrent projects</h2>
					<p className="mt-6">projects i have worked on in the last month</p>
					<div className="mt-8">
						<ProjectGrid
							variant="current"
							sortedBy="lastActive"
						/>
					</div>
				</section>
			</main>
			<Footer className="z-10" />
		</>
	);
};

export default Home;

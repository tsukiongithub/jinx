import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { type NextPage } from "next";
import Head from "next/head";
import ProjectGrid from "@/components/ProjectGrid";

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
					<div className="relative">
						<h1 className="relative z-20 text-6xl [line-height:5rem;]">
							hiya :&#41;
							<br />
							i&apos;m tsuki
						</h1>
						<div className="absolute inset-0 z-10 bg-black blur-2xl" />
						<div className="absolute inset-0 z-10 bg-red-900 blur-3xl" />
					</div>
					<div>
						<div className="absolute inset-x-0 bottom-0 -z-[9] h-[40vh] bg-gradient-to-b from-transparent to-neutral-900" />
						<div className="absolute inset-0 -z-10 bg-[url('/imgs/why-did-you-leave-me-2.png')] bg-cover bg-no-repeat" />
					</div>
				</section>
				<section className="w-full pt-20">
					<h2 className="text-3xl">about me</h2>
					<div className="mt-6 max-w-2xl">
						<p className="mb-4">my approach to developing is very iterative. i believe my best work happens when i can get comfortable, listen to my music and churn out line after line of code.</p>
						<p>i feed well off feedback (no pun intended), and prefer work environments where i can ask questions freely, be it about design decisions, rendering logic or possible features.</p>
					</div>
				</section>
				<section className="w-full pt-20">
					<h2 className="text-3xl">currrent projects</h2>
					<p className="mt-6">projects i have worked on in the last month.</p>
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

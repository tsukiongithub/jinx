import { type NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
			<Header className="z-20 shadow-2xl" />
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
					<div className="pointer-events-none">
						<div className="absolute inset-x-0 bottom-0 z-[1] h-[40vh] bg-gradient-to-b from-transparent to-neutral-900" />
						<Image
							className="object-cover"
							src={"/imgs/why-did-you-leave-me-2.png"}
							alt={"bg"}
							fill
							placeholder="blur"
							blurDataURL={"/imgs/why-did-you-leave-me-2-small.png"}
						/>
					</div>
				</section>
				<section className="pt-20 text-center">
					<h2 className="text-4xl">about me</h2>
					<div className="mt-8 max-w-2xl">
						<p className="mb-4">
							Hiya! i'm tsuki! I am currently employed at Supporters A/S, where i do frontend development for internal and external tools. These tools include, a microsoft teams app with an ai chatbot using openai's davinci model, and a highly customized input prompt, (react + vite), a webapp where customers can record their screen and upload files, with a sister app for the it-supporters to view these files and screen recordings, (both done in vue). For obvious reasons i can't share any source code from these projects, but you can take a look over at my github to see my other
							work.
						</p>

						<p className="mb-4">I have around 2 years experience developing in react and tailwind, and over 4 years working with html, css and javascript. And although i am most comfortable in the react side of things, i love learning and experimenting with new tech surrounding the webdev world. So if you have a cool piece of tech you'd like me to use for your project, i'm all ears.</p>

						<p>For now i'm only looking to take on small to medium-ish projects. If you would like to discuss pricing, or just have questions, then feel free to contact me on any of the platforms listed on my "contact" page.</p>
					</div>
				</section>
				<section className="pt-20 text-center">
					<h2 className="text-3xl">proficiencies</h2>
					<div className="mt-6">
						<ul>
							<li>
								<h3 className="text-xl">
									<Link
										className="group relative underline underline-offset-2 transition-colors duration-100 hover:text-red-600"
										href={"https://react.dev/"}
										target="_blank"
									>
										<span>react</span>
										<FontAwesomeIcon
											className="pointer-events-none absolute -right-5 top-0 h-3 w-3 bg-neutral-900 p-0.5 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
											icon={faArrowUpRightFromSquare}
										/>
									</Link>
								</h3>
								<p className="mt-2 max-w-xl">i have 2 years of experience using react for my various frontend needs, and i&apos;m still learning something new, every time i spin up a new project.</p>
							</li>
							<li className="mt-6">
								<h3 className="text-xl">
									<Link
										className="group relative underline underline-offset-2 transition-colors duration-100 hover:text-red-600"
										href={"https://tailwindcss.com/"}
										target="_blank"
									>
										<span>tailwind css</span>
										<FontAwesomeIcon
											className="pointer-events-none absolute -right-5 top-0 h-3 w-3 bg-neutral-900 p-0.5 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
											icon={faArrowUpRightFromSquare}
										/>
									</Link>
								</h3>
								<p className="mt-2 max-w-xl">i&apos;ve only been using tailwind for about a year, but in that short timespan, i have grown to love it immensely.</p>
							</li>
						</ul>
					</div>
				</section>
				<section className="w-full pt-20">
					<h2 className="text-center text-3xl">current projects</h2>
					<p className="mt-6 text-center">projects i have worked on in the last month.</p>
					<div className="mt-8">
						<ProjectGrid
							variant="current"
							sortedBy="lastActive"
						/>
					</div>
				</section>
			</main>
			<Footer className="z-10 pt-20" />
		</>
	);
};

export default Home;

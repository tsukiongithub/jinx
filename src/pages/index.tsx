import { type NextPage } from "next";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>tsuki.home</title>
				<meta
					name="description"
					content="home page for tsuki's website"
				/>
			</Head>
			<Header className="z-20 shadow-2xl" />
			<main className="container z-10 mx-auto flex flex-1 flex-col items-center justify-center px-4">
				<section className="flex h-screen items-center text-center">
					<div className="relative z-10">
						<div className="relative">
							<h1 className="relative z-20 text-6xl [line-height:5rem;]">
								hi :&#41;
								<br />
								i&apos;m tsuki
							</h1>
							<div className="absolute inset-2 z-10 bg-neutral-950 blur-2xl" />
							<div className="absolute inset-4 z-10 bg-red-900 blur-3xl" />
						</div>
						<div className="relative z-20 mt-8 flex gap-4">
							<Button
								className="relative z-20"
								size={"lg"}
								asChild
							>
								<Link href={"#about-me"}>learn more</Link>
							</Button>
							<Button
								className="relative z-20"
								size={"lg"}
								asChild
							>
								<Link href={"/contact"}>contact</Link>
							</Button>
							<div className="absolute inset-0 z-10 bg-black blur-2xl" />
							<div className="absolute inset-0 z-10 bg-red-900 blur-3xl" />
						</div>
					</div>
					<div className="pointer-events-none">
						<div className="absolute inset-x-0 top-0 z-10 h-24 bg-neutral-950 mask-image-b" />
						<Image
							className="max-h-[100dvh] object-cover mask-image-b mask-image-start-75"
							src={"/imgs/why-did-you-leave-me-2.png"}
							alt={"the text 'why did you leave me?' all over a black background"}
							fill
							placeholder="blur"
							blurDataURL={"/imgs/why-did-you-leave-me-2-small.png"}
						/>
					</div>
				</section>
				<section
					className="my-32 flex scroll-mt-32 flex-col gap-8 md:flex-row"
					id="about-me"
				>
					<div>
						<h2 className="mb-4 text-5xl">about me</h2>
						<p className="mb-2">hiya! my name is tsuki. nice to meet you :D</p>
						<p className="mb-2">i&apos;m a 21 year old developer from europe striving to create fluid user experiences</p>
						<p>
							when i&apos;m not building intricate <span className="italic line-through">and sexy</span> webapps, i keep my brain engaged with video games and photo editing.
						</p>
						<h3 className="mb-4 mt-8 text-4xl">skills</h3>
						<ul className="space-y-2 pl-6">
							<li className="relative flex items-center">
								JavaScript + TypeScript
								<FontAwesomeIcon
									className="absolute -left-6 h-4 w-4"
									icon={faCheck}
								/>
							</li>
							<li className="relative flex items-center">
								React & Vue
								<FontAwesomeIcon
									className="absolute -left-6 h-4 w-4"
									icon={faCheck}
								/>
							</li>
							<li className="relative flex items-center">
								TailwindCSS
								<FontAwesomeIcon
									className="absolute -left-6 h-4 w-4"
									icon={faCheck}
								/>
							</li>
							<li className="relative flex items-center">
								Python
								<FontAwesomeIcon
									className="absolute -left-6 h-4 w-4"
									icon={faCheck}
								/>
							</li>
						</ul>
					</div>
					<div className="relative h-[32rem] w-full">
						<Image
							className="object-cover object-top mask-image-b mask-image-start-50"
							src={"/imgs/Wife-of-Satan-0.5x.png"}
							alt="woman with completely black and leaking eyes"
							fill
							placeholder="blur"
							blurDataURL={"/imgs/Wife-of-Satan-0.5x-small.png"}
						/>
						<div className="absolute -bottom-4 left-0 font-serif text-sm italic">psst, i made this!</div>
					</div>
				</section>
				<section className="my-40 w-full scroll-mt-32">
					<h2 className="text-center text-3xl">coolest projects</h2>
					<div className="mt-8 text-center">
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
							variant="current"
							sortedBy="lastActive"
						/> */}
					</div>
				</section>
			</main>
			<Footer className="z-10 pt-20" />
		</>
	);
};

export default Home;

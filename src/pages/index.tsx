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
						<div className="absolute inset-x-0 bottom-0 z-[1] h-[40vh]" />
						<Image
							className="object-cover mask-image-b mask-image-start-75"
							src={"/imgs/why-did-you-leave-me-2.png"}
							alt={"the text 'why did you leave me?' all over a black background"}
							fill
							placeholder="blur"
							blurDataURL={"/imgs/why-did-you-leave-me-2-small.png"}
						/>
					</div>
				</section>
				<section
					className="my-32 flex scroll-mt-32 gap-4 md:gap-8"
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
				{/* <section className="my-32 text-center">
					<h2 className="text-4xl">about me</h2>
					<div className="mt-8 max-w-2xl">
						<p className="mb-4">Hiya! i&apos;m tsuki! I am currently employed at Supporters A/S, where i do frontend development for internal and external tools. </p>
						<p className="mb-1">These tools include: </p>
						<ul className="space-y-2">
							<li>a microsoft teams app with an ai chatbot using openai&apos;s davinci model, and a highly customized input prompt, (react + vite)</li>
							<li>a webapp where customers can record their screen and upload files, with a sister app for the it-supporters to view these files and screen recordings, (both done in vue).</li>
						</ul>
						<br />
						<p>For obvious reasons i can&apos;t share any source code from these projects, but you can take a look over at my github to see my other work.</p>
						<h3 className="mb-4 mt-8 text-2xl">experience</h3>
						<p className="mb-4">I have around 2 years experience developing in react and tailwind, and over 4 years working with html, css and javascript. And although i am most comfortable in the react side of things, i love learning and experimenting with new tech surrounding the webdev world. So if you have a cool piece of tech you&apos;d like me to use for your project, i&apos;m all ears.</p>
						<p>For now i&apos;m only looking to take on small to medium-ish projects. If you would like to discuss pricing, or just have questions, then feel free to contact me on any of the platforms listed on my contact page.</p>
					</div>
				</section> */}
				{/* <section className="my-40 text-center">
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
				</section> */}
				<section className="my-40 w-full scroll-mt-32">
					<h2 className="text-center text-3xl">coolest projects</h2>
					<div className="mt-8 text-center">
						<p className="text-lg">
							coming <span className="italic">soon&#8482;</span>
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

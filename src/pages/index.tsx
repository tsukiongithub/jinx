import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
			<Header className="z-10 bg-transparent" />
			<main className="container z-10 mx-auto flex flex-1 flex-col items-center justify-center p-4">
				<h2 className="-mt-14 text-center text-6xl [line-height:5rem;]">
					hi.
					<br />
					i&apos;m{" "}
					<Link
						href="https://www.twitter.com/scfd_tsuki"
						target={"_blank"}
					>
						tsuki
					</Link>{" "}
					:)
				</h2>
			</main>
			<Footer className="z-10 bg-transparent" />
			<div className="absolute inset-0 overflow-hidden bg-neutral-900">
				<Image
					className="opacity-50"
					fill
					objectFit="cover"
					src="/../public/imgs/why-did-you-leave-me-2.png"
					alt="bg img"
				/>
			</div>
		</>
	);
};

export default Home;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const contact: NextPage = () => {
	return (
		<>
			<Head>
				<title>tsuki&apos;s cool website - contact</title>
				<meta
					name="description"
					content="contact page for tsuki's website"
				/>
			</Head>
			<Header className="z-20" />
			<main className="container z-10 mx-auto flex flex-col items-center p-4 pt-24">
				<div className="h-[calc(100vh-16rem)] min-h-[8rem]">
					<div className="text-center text-xl">
						<p>if you want me for a project, then</p>
						<p>shoot me a message on any of these platforms.</p>
					</div>
					<div className="mt-12 grid auto-cols-fr grid-cols-2 gap-16">
						<div className="mx-auto flex items-center">
							<Link
								className="flex h-full max-h-48 flex-col items-center justify-center p-4 transition-colors duration-100 hover:text-red-500"
								href={"https://twitter.com/tsukiisadev"}
								target={"_blank"}
							>
								<FontAwesomeIcon
									className="h-full max-h-24 min-h-[2rem]"
									icon={faTwitter}
								/>
								<div className="mt-4 text-2xl">twitter</div>
							</Link>
						</div>
						<div className="mx-auto flex items-center">
							<Link
								className="flex h-full max-h-48 flex-col items-center justify-center p-4 transition-colors duration-100 hover:text-red-500"
								href={"https://instagram.com/tsukioninsta/"}
								target={"_blank"}
							>
								<FontAwesomeIcon
									className="h-full max-h-24 min-h-[2rem]"
									icon={faInstagram}
								/>
								<div className="mt-4 text-2xl">instagram</div>
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default contact;

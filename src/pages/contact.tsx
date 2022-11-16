import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { type NextPage } from "next";
import Head from "next/head";

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
			<Header />
			<main className="container mx-auto flex flex-col items-center p-4">
				<h2>main content</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, molestiae labore vitae harum, fuga et rerum fugit ullam, laboriosam nam recusandae neque eaque! Hic, necessitatibus earum voluptatibus temporibus alias iste facere vero consectetur omnis cupiditate laborum architecto cum assumenda enim.</p>
			</main>
			<Footer />
		</>
	);
};

export default contact;

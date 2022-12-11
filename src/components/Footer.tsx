import Link from "next/link";

const Footer = ({ className }: { className?: string }) => {
	return (
		<footer className={`${className} mt-auto flex flex-col items-center bg-neutral-900/60 px-6 py-6`}>
			<p>
				Copyright © 2022 by{" "}
				<Link
					className="animated-underline after:bg-white"
					href={"https://www.twitter.com/scfd_tsuki"}
					target={"_blank"}
				>
					tsuki
				</Link>
			</p>
			<p>All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;

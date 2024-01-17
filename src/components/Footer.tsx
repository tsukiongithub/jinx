import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = ({ className }: { className?: string }) => {
	return (
		<footer className={`${className ? className : ""} mt-auto flex flex-col items-center px-6 py-6`}>
			<div className="mb-2 flex">
				<div className="mr-2">
					Built using{" "}
					<Link
						className="animated-underline after:bg-white"
						href="https://nextjs.org/"
						target="_blank"
					>
						NextJS
					</Link>{" "}
					and{" "}
					<Link
						className="animated-underline after:bg-white"
						href="https://tailwindcss.com/"
						target="_blank"
					>
						TailwindCSS
					</Link>
					.
				</div>
				<Link
					className="animated-underline flex items-center justify-center after:bg-white"
					href="https://vercel.com/"
					target="_blank"
				>
					Hosted with
					<FontAwesomeIcon
						className="mx-2 h-3 w-3"
						icon={faHeart}
					/>
					on Vercel.
				</Link>
			</div>
			<p>
				Copyright © 2024 by{" "}
				<Link
					className="animated-underline after:bg-white"
					href="https://twitter.com/tsukiisadev"
					target="_blank"
				>
					tsuki
				</Link>
			</p>
			<p>All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;

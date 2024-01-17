import { cn } from "@/lib/utils";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = ({ className }: { className?: string }) => {
	return (
		<footer className={cn(`mt-auto flex flex-col items-center gap-2 px-6 py-6`, className)}>
			<div className="text-center">
				<p>
					Copyright © 2024 by{" "}
					<Link
						className="md:animated-underline underline underline-offset-4 md:no-underline"
						href="https://twitter.com/tsukiisadev"
						target="_blank"
					>
						tsuki
					</Link>
				</p>
				<p>All Rights Reserved.</p>
			</div>
			<div className="mb-2 flex flex-col gap-2 whitespace-nowrap text-sm md:flex-row md:gap-0">
				<div className="mr-2">
					Built using{" "}
					<Link
						className="md:animated-underline underline underline-offset-4 md:no-underline"
						href="https://nextjs.org/"
						target="_blank"
					>
						NextJS
					</Link>{" "}
					and{" "}
					<Link
						className="md:animated-underline underline underline-offset-4 md:no-underline"
						href="https://tailwindcss.com/"
						target="_blank"
					>
						TailwindCSS
					</Link>
					.
				</div>
				<div className="flex items-center justify-center gap-1">
					<span>
						Hosted with{" "}
						<FontAwesomeIcon
							className="h-3 w-3"
							icon={faHeart}
						/>{" "}
						on{" "}
					</span>
					<Link
						className="md:animated-underline underline underline-offset-4 md:no-underline"
						href="https://vercel.com/"
						target="_blank"
					>
						Vercel.
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

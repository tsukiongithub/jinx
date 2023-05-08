import { useEffect, useState } from "react";

import Link from "next/link";
import Navigation from "./Navigation";

const Header = ({ className }: { className?: string }) => {
	const [headerHasBg, setHeaderHasBg] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`${className && className} fixed inset-x-0 top-0 flex items-center bg-transparent px-6 py-4 transition duration-300 ${scrollPosition > 80 && scrollPosition <= 300 ? "bg-neutral-900 bg-opacity-80" : scrollPosition > 300 ? "bg-neutral-800 shadow-2xl" : ""}`}>
			<div className="z-20 grow">
				<Link
					href={"/"}
					tabIndex={-1}
				>
					<div className="text-3xl md:text-5xl">tsuki</div>
				</Link>
			</div>
			<div className="z-20">
				<Navigation />
			</div>
			<div className={`pointer-events-none absolute inset-0 transition duration-300 ${scrollPosition > 300 ? "bg-black/60" : ""}`} />
		</header>
	);
};

export default Header;

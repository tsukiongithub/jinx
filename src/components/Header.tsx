import { useEffect, useState } from "react";

import Link from "next/link";
import Navigation from "./Navigation";
import { useAtom } from "jotai";
import { navIsOpenAtom } from "@/components/Navigation";

const Header = ({ className }: { className?: string }) => {
	const [navIsOpen] = useAtom(navIsOpenAtom);

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
		<header className={`fixed inset-x-0 top-0 flex items-center px-6 py-4 transition duration-200 ${navIsOpen ? "bg-neutral-950" : scrollPosition < 80 ? "bg-transparent" : "bg-neutral-950"} ${className ? className : ""} `}>
			<div className="z-20 mr-auto">
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
		</header>
	);
};

export default Header;

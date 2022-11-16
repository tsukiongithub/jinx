import React from "react";
import Link from "next/link";

import { v4 as uuid4 } from "uuid";
import { type NextRouter, useRouter } from "next/router";

const routes = [
	{ name: "home", href: "/", key: uuid4() },
	{ name: "projects", href: "/projects", key: uuid4() },
	{ name: "about", href: "/about", key: uuid4() },
	{ name: "contact", href: "/contact", key: uuid4() },
];

const Navigation = () => {
	const router = useRouter();

	return (
		<nav className="ml-auto flex items-center">
			{routes.map((route) => {
				return (
					<NavLink
						href={route.href}
						key={route.key}
						text={route.name}
						router={router}
					/>
				);
			})}
		</nav>
	);
};

const NavLink = ({ href, text, router }: { href: string; text: string; router: NextRouter }) => {
	const isActive = router.asPath === href || (router.asPath.includes(href) && href !== "/");

	return (
		<Link
			href={href}
			className={`${isActive ? "text-red-500" : "text-white"} font-lora animated-underline mr-4 py-4 px-4 font-medium transition-colors after:bg-red-800 last:mr-0 hover:text-red-700`}
		>
			{text}
		</Link>
	);
};

export default Navigation;

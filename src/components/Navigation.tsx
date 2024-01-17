import React, { useEffect, useState } from "react";
import Link from "next/link";

import { type NextRouter, useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const routes = [
	{ name: "home", href: "/", key: "caeca4af-ab81-40f6-a69a-9f50f95ebae8" },
	{ name: "projects", href: "/projects", key: "06f01fe1-3cac-4373-903b-c1da520220e3" },
	{ name: "contact", href: "/contact", key: "1e06f0f0-efa2-4148-be4a-e0a799319fbf" },
];

const Navigation = () => {
	const router = useRouter();

	const { windowWidth } = useWindowDimensions();

	// hydration error if this isn't here
	const [windowExists, setWindowExists] = useState(false);

	// hydration error if this isn't here
	useEffect(() => {
		if (windowWidth !== null) {
			setWindowExists(true);
		}
	}, [windowWidth]);

	return (
		<>
			{windowExists && windowWidth && windowWidth > 767 ? (
				<nav className={`ml-auto flex items-center`}>
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
			) : (
				<Sheet>
					<SheetTrigger>
						<FontAwesomeIcon
							className="h-6 w-6"
							icon={faBars}
						/>
					</SheetTrigger>
					<SheetContent className="w-1/2">
						<nav className={`absolute inset-x-0 mt-4 flex flex-col bg-neutral-950 shadow-2xl transition duration-200`}>
							{routes.map((route) => {
								return (
									<NavLink
										className="w-full"
										href={route.href}
										key={route.key}
										text={route.name}
										router={router}
									/>
								);
							})}
						</nav>
					</SheetContent>
				</Sheet>
			)}
		</>
	);
};

const NavLink = ({ href, text, router, className }: { href: string; text: string; router: NextRouter; className?: string }) => {
	const isActive = router.asPath === href || (router.asPath.includes(href) && href !== "/");

	return (
		<Link
			href={href}
			className={cn("md:animated-underline font-lora mr-4 border-b-2 border-b-neutral-700 px-4 py-4 font-serif text-lg font-medium text-white transition-colors after:bg-red-800 last:mr-0 last:border-none hover:text-red-700 md:border-none", isActive && "text-red-500", className)}
		>
			{text}
		</Link>
	);
};

export default Navigation;

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { v4 as uuid4 } from "uuid";
import { type NextRouter, useRouter } from "next/router";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import useOutsideClick from "@/hooks/useOutsideClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { atom, useAtom } from "jotai";
export const navIsOpenAtom = atom(false);

const routes = [
	{ name: "home", href: "/", key: uuid4() },
	{ name: "projects", href: "/projects", key: uuid4() },
	{ name: "contact", href: "/contact", key: uuid4() },
];

const Navigation = () => {
	const router = useRouter();

	const [navIsOpen, setNavIsOpen] = useAtom(navIsOpenAtom);

	const { windowWidth } = useWindowDimensions();

	// hydration error if this isn't here
	const [windowExists, setWindowExists] = useState(false);

	// hydration error if this isn't here
	useEffect(() => {
		if (windowWidth !== null) {
			setWindowExists(true);
		}
	}, [windowWidth]);

	const navRef = useRef<HTMLElement | null>(null);
	const navBtnRef = useRef<HTMLButtonElement | null>(null);

	useOutsideClick(navRef, (ev: MouseEvent) => {
		if (!navBtnRef.current?.contains(ev.target as HTMLElement)) {
			setNavIsOpen(false);
		}
	});

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
				<div>
					<button
						className="p-4"
						onClick={() => {
							setNavIsOpen(!navIsOpen);
						}}
						ref={navBtnRef}
					>
						<FontAwesomeIcon
							className="h-6 w-6"
							icon={faBars}
						/>
					</button>
					<nav
						className={`absolute inset-x-0 mt-4 flex flex-col bg-neutral-950 shadow-2xl transition duration-200 ${navIsOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
						ref={navRef}
					>
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
					<div className={`absolute inset-x-0 top-[300%] h-screen bg-black/60 transition duration-200 ${navIsOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} />
				</div>
			)}
		</>
	);
};

const NavLink = ({ href, text, router, className }: { href: string; text: string; router: NextRouter; className?: string }) => {
	const [showNav, setShowNav] = useAtom(navIsOpenAtom);

	const isActive = router.asPath === href || (router.asPath.includes(href) && href !== "/");

	return (
		<Link
			href={href}
			onClick={() => {
				setShowNav(false);
			}}
			className={`${isActive ? "text-red-500" : "text-white"} md:animated-underline mr-4 border-b-2 border-b-neutral-700 px-4 py-4 font-lora text-lg font-medium transition-colors after:bg-red-800 last:mr-0 last:border-none hover:text-red-700 md:border-none ${className}`}
		>
			{text}
		</Link>
	);
};

export default Navigation;

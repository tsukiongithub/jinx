import Link from "next/link";
import Navigation from "./Navigation";

const Header = ({ className }: { className?: string }) => {
	return (
		<header className={`${className} flex items-center bg-neutral-900/60 px-6 py-6`}>
			<Link href={"/"}>
				<h1 className="font-lora text-4xl">tsuki</h1>
			</Link>
			<Navigation />
		</header>
	);
};

export default Header;

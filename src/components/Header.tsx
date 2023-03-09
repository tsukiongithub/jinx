import Link from "next/link";
import Navigation from "./Navigation";

const Header = ({ className }: { className?: string }) => {
	return (
		<header className={`${className} fixed inset-x-0 top-0 flex items-center px-6 py-6`}>
			<Link
				href={"/"}
				tabIndex={-1}
			>
				<div className="text-5xl">tsuki</div>
			</Link>
			<Navigation />
		</header>
	);
};

export default Header;

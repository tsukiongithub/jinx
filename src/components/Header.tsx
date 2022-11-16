import Navigation from "./Navigation";

const Header = ({ className }: { className?: string }) => {
	return (
		<header className={`${className} flex items-center bg-neutral-900/60 px-6 py-6`}>
			<div className="font-lora text-4xl">tsuki</div>
			<Navigation />
		</header>
	);
};

export default Header;

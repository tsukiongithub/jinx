import type { MouseEvent } from "react";

const handleCardHover = (ev: MouseEvent<HTMLElement>) => {
	// responsible for the cool mouse hover effect
	const projectCards = ev.currentTarget.children;
	for (let i = 0; i < projectCards.length; i++) {
		const projectCard = projectCards[i] as HTMLElement;
		const rect = projectCard.getBoundingClientRect();
		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;
		projectCard.style.setProperty("--mouse-x", `${x}px`);
		projectCard.style.setProperty("--mouse-y", `${y}px`);
	}
};

export default handleCardHover;

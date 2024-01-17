import { useEffect, useState } from "react";

import handleCardHover from "@/common/handleCardHover";

const techProficiencies = [
	{
		id: 1,
		title: "html, css & js",
		description: "i have been teaching myself react for 2 years, and i've been loving evert second of it.",
		shortDescription: "i have been teaching myself react for 2 years, and i've been loving evert second of it.",
	},
	{
		id: 2,
		title: "react",
		description: "i have been teaching myself react for 2 years, and i've been loving evert second of it.",
		shortDescription: "i have been teaching myself react for 2 years, and i've been loving evert second of it.",
	},
	{
		id: 3,
		title: "tailwind css",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate quam repellendus voluptatibus atque nostrum ratione molestias obcaecati enim, repellat impedit minus blanditiis temporibus?",
		shortDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus culpa pariatur reprehenderit?",
	},
];

const generalProficiencies = [
	{
		id: 1,
		title: "ui/ux",
		description: "",
		shortDescription: "",
	},
];

const ProficienciesGrid = ({ variant, type }: { variant: "short" | "full"; type: "tech" | "general" }) => {
	const [proficienciesList, setProficienciesList] = useState<
		{
			id: number;
			title: string;
			description: string;
			shortDescription: string;
		}[]
	>([]);

	useEffect(() => {
		if (type === "tech") {
			setProficienciesList(techProficiencies);
		} else if (type === "general") {
			setProficienciesList(generalProficiencies);
		}
	}, [type]);

	return (
		<>
			<div
				className="card-grid"
				onMouseMove={handleCardHover}
			>
				{proficienciesList.map((proficiency) => {
					return (
						<div
							className="card"
							key={proficiency.id}
							id={`${proficiency.id}`}
						>
							<div className="card__content">
								<div>{proficiency.title}</div>
								<div>{variant === "full" ? proficiency.description : proficiency.shortDescription}</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ProficienciesGrid;

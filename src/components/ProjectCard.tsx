import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type ProjectCardProps = {
	project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<article className="card">
			<div className="card__content">
				<h4 className="mb-4 text-xl font-medium">{project.name}</h4>
				<p className="mb-4 overflow-hidden overflow-ellipsis">{project.description}</p>
				<Link
					className="group relative mt-auto w-fit underline underline-offset-2 transition-colors duration-100 hover:text-red-600"
					href={project.repoUrl}
					target="_blank"
				>
					<span>{project.repoUrlText}</span>
					<FontAwesomeIcon
						className="pointer-events-none absolute -right-5 top-0 h-3 w-3 bg-neutral-900 p-0.5 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
						icon={faArrowUpRightFromSquare}
					/>
				</Link>
			</div>
		</article>
	);
};

export default ProjectCard;

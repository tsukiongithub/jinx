import { MutableRefObject, useEffect } from "react";

const useOutsideClick = (ref: MutableRefObject<HTMLElement | null>, callback: Function) => {
	const handleClick = (ev: MouseEvent) => {
		if (ref.current && !ref.current.contains(ev.target as HTMLElement)) {
			callback(ev);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	});
};

export default useOutsideClick;

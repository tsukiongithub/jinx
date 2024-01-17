import { useState, useEffect } from "react";

const useWindowDimensions = () => {
	const hasWindow = typeof window !== "undefined";

	function getWindowDimensions() {
		const windowWidth = hasWindow ? window.innerWidth : null;
		const windowHeight = hasWindow ? window.innerHeight : null;
		return {
			windowWidth,
			windowHeight,
		};
	}

	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		if (hasWindow) {
			function handleResize() {
				setWindowDimensions(getWindowDimensions());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, [hasWindow]);

	return windowDimensions;
};

export default useWindowDimensions;

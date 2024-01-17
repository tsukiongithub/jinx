import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html>
			<Head>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
				<meta
					name="theme-color"
					content="#171717"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;

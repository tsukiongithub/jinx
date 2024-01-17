import { type AppType } from "next/dist/shared/lib/utils";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import "../styles/globals.css";

import { Inter, Lora } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-serif",
});

const MyApp: AppType = ({ Component, pageProps }) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<div className={`${lora.variable} ${inter.variable} flex min-h-screen flex-col bg-neutral-900 font-sans text-white`}>
				<Component {...pageProps} />
			</div>
		</QueryClientProvider>
	);
};

export default MyApp;

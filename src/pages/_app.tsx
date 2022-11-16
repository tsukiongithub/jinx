import { type AppType } from "next/dist/shared/lib/utils";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default MyApp;

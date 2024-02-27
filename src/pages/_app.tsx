import "~/styles/globals.css";
import type { AppProps } from "next/app";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "~/components/ui/toaster";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
          <Toaster />
      </QueryClientProvider>
  );
}

export default App;

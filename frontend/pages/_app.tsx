import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from '../wagmi.config'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

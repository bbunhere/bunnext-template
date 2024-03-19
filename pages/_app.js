import { ThemeProvider } from "next-themes"
import Head from 'next/head'
import "@/assets/globals.css"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>BunNext Landing Template</title>
                <meta
                    name="description"
                    content="Home page template built with NextJS and Tailwindcss. Make by @bunheree"></meta>
                <meta name="author" content="bunheree"></meta>
            </Head>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp

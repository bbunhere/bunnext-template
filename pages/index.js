import Footer from "@/components/Footer"
import HeroBanner from "@/components/HeroBanner"
import Navbar from "@/components/Navbar"

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container max-w-screen-2xl px-8 mx-auto">
                <HeroBanner />
                <Footer />
            </main>
        </>
    )
}

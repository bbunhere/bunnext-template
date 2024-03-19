import Footer from "@/components/Footer"
import HeroBanner from "@/components/HeroBanner"
import Navbar from "@/components/Navbar"

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container p-8 mx-auto xl:px-0">
                <HeroBanner />
                <Footer />
            </main>
        </>
    )
}

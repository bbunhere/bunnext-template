import Footer from "@/components/Footer"
import HeroBanner from "@/components/HeroBanner"
import Navbar from "@/components/Navbar"
import PopupWidget from "@/components/PopupWidget"

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="container max-w-screen-2xl px-8 mx-auto">
                <HeroBanner />
                {/* About Us */}
                {/* Services */}
                {/* The webinar will start in - countdown, register now */}
                {/* Our team */}
                {/* Testimonials */}
                {/* Faq */}
                {/* Contact form */}
                <PopupWidget />
                <Footer />
            </main>
        </>
    )
}

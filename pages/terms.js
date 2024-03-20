import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Terms() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8">
                <p className="py-8 dark:text-white">
                    <h1 className="text-3xl font-bold mb-4 text-main dark:text-main-dark">Terms of Service</h1>
                    <p className="mb-4">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        These Terms of Service ("Terms") govern your access to and use of our services,
                        including our website and any other products or services provided by us (collectively,
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                    </p>
                    <p className="mb-4">
                        Please read these Terms carefully before using our Services. If you do not agree
                        to these Terms, you may not access or use our Services.
                    </p>
                    <p className="mb-4">
                        These Terms may be updated by us from time to time without notice. It is your
                        responsibility to review these Terms periodically for changes. Your continued use
                        of our Services after any modifications to these Terms constitutes your acceptance
                        of the revised Terms.
                    </p>
                    <p className="mb-4">
                        If you have any questions about these Terms, please contact us at <a href="mailto:emma.ngo1110@gmail.com" className="text-sub dark:text-main-dark">emma.ngo1110@gmail.com</a>.
                    </p>
                </p>
                <Footer />
            </div>
        </>
    )
}

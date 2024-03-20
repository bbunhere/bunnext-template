import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Privacy() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8">
                <p className="py-8 dark:text-white">
                    <h1 className="text-3xl font-bold mb-4 text-main dark:text-main-dark">Privacy Policy</h1>
                    <p className="mb-4">
                        Your privacy is important to us. It is our policy to respect your privacy regarding
                        any information we may collect from you across our website and other sites we own
                        and operate.
                    </p>
                    <p className="mb-4">
                        We only ask for personal information when we truly need it to provide a service to you.
                        We collect it by fair and lawful means, with your knowledge and consent.
                    </p>
                    <p className="mb-4">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        We don't share any personally identifying information publicly or with third-parties,
                        except when required to by law.
                    </p>
                    <p className="mb-4">
                        Our website may link to external sites that are not operated by us. Please be aware
                        that we have no control over the content and practices of these sites, and cannot
                        accept responsibility or liability for their respective privacy policies.
                    </p>
                    <p className="mb-4">
                        Your continued use of our website will be regarded as acceptance of our practices
                        around privacy and personal information. If you have any questions about how we handle
                        user data and personal information, feel free to contact us at <a href="mailto:emma.ngo1110@gmail.com" className="text-sub dark:text-main-dark">emma.ngo1110@gmail.com</a>.
                    </p>
                </p>

                <Footer />
            </div>
        </>
    )
}

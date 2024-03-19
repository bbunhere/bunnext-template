import Link from "next/link"
import { HeroImage } from "./HeroImage"

export default function HeroBanner() {
    return (
        <div className="relative flex flex-wrap ">
            <div className="flex items-center w-full lg:w-1/2 z-10">
                <div className="max-w-2xl mb-8">
                    <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                        <span className="text-main dark:text-main-dark">BunNext</span> <span className="text-sub">Template</span>
                    </h1>
                    <p className="py-5 text-xl font-extralight leading-normal lg:text-xl xl:text-2xl dark:text-sub-dark">
                        Home page template built with NextJS and Tailwindcss. <br></br>
                        Make by <Link href="https://github.com/bunheree">@bunhere</Link>
                    </p>

                    <div
                        className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                        <a href="#vision-mission"
                            className="px-8 py-3 text-lg font-medium text-center rounded-full border-2 text-main border-main hover:bg-main hover:text-white dark:text-main-dark dark:border-main-dark dark:hover:bg-main-dark dark:hover:text-main">
                            Explore
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <HeroImage />
            </div>
        </div>
    )
}
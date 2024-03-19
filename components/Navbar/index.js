import "@/assets/Navbar/index.css"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { Disclosure } from "@headlessui/react"
import ThemeSwitch from "../ThemeSwitch"

// Menu data
import { navItem } from "@/utils/variables/menu"

export default function Navbar() {
    const pathname = usePathname()

    // Function to determine if a given path is active
    const isActive = (path) => {
        return pathname === path
    }

    return (
        <div className="w-full">
            <nav
                className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
                {/* Logo  */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                                <Link href="/">
                                    <span className="flex items-center space-x-2 text-xl font-medium text-main dark:text-gray-100">
                                        <span>
                                            <Image
                                                src="/logo.png"
                                                alt="N"
                                                width="32"
                                                height="32"
                                            />
                                        </span>
                                        <span>BunNext</span>
                                    </span>
                                </Link>

                                <Disclosure.Button
                                    aria-label="Toggle Menu"
                                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-main focus:text-main focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-main">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        {open && (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>

                                {/* Menu mobile */}
                                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                    <>
                                        {navItem.map((item, index) => (
                                            <Link key={index} href={item.link}
                                                className={`w-full px-4 py-2 -ml-4 text-main dark:text-gray-300 hover:font-bold  ${isActive(item.link) ? 'dark:bg-gray-800 border-b-2 border-main' : ''}`}>
                                                {item.name}
                                            </Link>
                                        ))}
                                        <Link href="https://bunnext.bunhere.com"
                                            target="_blank"
                                            className="w-full px-6 py-2 mt-3 text-center font-semibold border text-main border-main hover:bg-main hover:text-white rounded-full lg:ml-5">
                                            Join Us
                                        </Link>
                                    </>
                                </Disclosure.Panel>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* Menu Desktop  */}
                <div className="flex">
                    <div className="text-center hidden lg:flex lg:items-center">
                        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                            {navItem.map((menu, index) => (
                                <li className="mr-3 nav__item" key={index}>
                                    <Link href={menu.link}
                                        className={`inline-block px-4 py-2 text-lg font-normal text-main dark:text-gray-300 hover:border-b-2 border-main ${isActive(menu.link) ? "font-bold dark:bg-gray-800  border-b-2" : ""}`}>
                                        {menu.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                        <Link href="https://bunnext.bunhere.com" target="_blank" className="px-6 py-2 font-semibold border text-main border-main hover:bg-main hover:text-white rounded-full md:ml-5">
                            Join Us
                        </Link>

                        <ThemeSwitch />
                    </div>
                </div>
            </nav>
        </div>
    )
}

import styles from "@/styles/Footer.module.css"
import Link from "next/link"
import Image from "next/image"
import React from "react"
// Menu data
import { navItem, navSubItem } from "@/utils/variables/menu"
// components
import { Twitter } from "../Icons/Twitter"
import { Facebook } from "../Icons/Facebook"
import { Linkedin } from "../Icons/Linkedin"
import { Gibhub } from "../Icons/Github"

export default function Footer() {

    return (
        <div className="relative">
            <div
                className="grid grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-sub lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <div>
                        {" "}
                        <Link href="/"
                            className="flex items-center space-x-2 text-2xl font-medium text-dark-blue dark:text-gray-100">
                            <Image
                                src="/logo.png"
                                alt="N"
                                width="32"
                                height="32"
                            />
                            <span>BunNext</span>
                        </Link>
                    </div>

                    <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                        Home page template built with NextJS and Tailwindcss. Make by <Link href="https://github.com/bunheree">@bunhere</Link>
                    </div>
                </div>

                <div>
                    <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                        {navItem.map((item, index) => (
                            <Link key={index} href={item.link}
                                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-main dark:hover:text-main-dark ">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                        {navSubItem.map((item, index) => (
                            <Link key={index} href={item.link}
                                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-main dark:hover:text-main-dark">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="">
                    <div className="dark:text-main-dark">Follow us</div>
                    <div className="flex mt-5 space-x-5 text-main dark:text-main-dark">
                        <a className="hover:text-sub dark:hover:text-sub-dark"
                            href="https://twitter.com/bunhere_"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Twitter</span>
                            <Twitter />
                        </a>
                        <a className="hover:text-sub dark:hover:text-sub-dark"
                            href="#"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Facebook</span>
                            <Facebook />
                        </a>
                        <a className="hover:text-sub dark:hover:text-sub-dark"
                            href="#"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Linkedin</span>
                            <Linkedin />
                        </a>
                        <a className="hover:text-sub dark:hover:text-sub-dark"
                            href="https://github.com/bunheree/bunnext-template"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Gibhub</span>
                            <Gibhub />
                        </a>
                    </div>
                </div>
            </div>

            <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                Copyright © {new Date().getFullYear()}. Made by @bunheree.
            </div>
        </div>
    )
}

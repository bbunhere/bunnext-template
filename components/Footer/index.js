import "@/assets/Footer/index.css"

import Link from "next/link"
import Image from "next/image"
import React from "react"

export default function Footer() {
    const navigation = [
        "Events",
        "Hiring",
        "Igniters",
        "Contact",
    ]
    const legal = ["Terms", "Privacy"]
    return (
        <div className="relative">
            <div
                className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <div>
                        {" "}
                        <Link href="/"
                              className="flex items-center space-x-2 text-2xl font-medium text-dark-blue dark:text-gray-100">
                            <Image
                                src="/wtm.png"
                                alt="N"
                                width="32"
                                height="32"
                            />
                            <span>Women Techmakers</span>
                        </Link>
                    </div>

                    <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                        Women Techmakers Ho Chi Minh City was founded on October 20th, 2022. The organization is
                        passionate about building a community supporting women (and everyone) to thrive and lead in
                        technology.
                    </div>
                </div>

                <div>
                    <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                        {navigation.map((item, index) => (
                            <Link key={index} href="/"
                                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                        {legal.map((item, index) => (
                            <Link key={index} href="/"
                                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="">
                    <div className="dark:text-wtm-white">Follow us</div>
                    <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
                        <a
                            href="https://www.facebook.com/wtmhcmc/"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Facebook</span>
                            <Facebook/>
                        </a>
                        <a
                            href="https://discord.gg/pbKGjxwx"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Discord</span>
                            <Discord/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                Copyright © {new Date().getFullYear()}. Made by Women Techmkers HCMC Developers.
            </div>
        </div>
    )
}

const Twitter = ({size = 24}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path
            d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"/>
    </svg>
)

const Facebook = ({size = 24}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path
            d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/>
    </svg>
)
const Instagram = ({size = 24}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path
            d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
    </svg>
)

const Discord = ({size = 24}) => (
    <svg width={size}
         height={size}
         viewBox="0 0 198 199"
         fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path
            d="M99.0101 0.979553H98.5604C44.1438 0.979553 0.0305176 45.1059 0.0305176 99.5385V99.9884C0.0305176 154.421 44.1438 198.547 98.5604 198.547H99.0101C153.427 198.547 197.54 154.421 197.54 99.9884V99.5385C197.54 45.1059 153.427 0.979553 99.0101 0.979553Z"
            fill="#383D38"/>
        <path
            d="M148.21 54.4086C139.117 50.2348 129.374 47.1615 119.181 45.4034C118.995 45.3688 118.808 45.4519 118.718 45.6249C117.465 47.8537 116.074 50.7678 115.106 53.052C104.145 51.4115 93.2393 51.4115 82.4999 53.052C81.5242 50.7124 80.0849 47.8537 78.8255 45.6249C78.7286 45.4588 78.5418 45.3757 78.3619 45.4034C68.1761 47.1615 58.4262 50.2348 49.3337 54.4086C49.2576 54.4432 49.1884 54.4986 49.1399 54.5747C30.6504 82.2064 25.5851 109.16 28.0692 135.781C28.0831 135.912 28.1523 136.037 28.2561 136.113C40.4556 145.077 52.2746 150.517 63.872 154.124C64.0589 154.179 64.2526 154.11 64.3703 153.957C67.1105 150.213 69.5601 146.26 71.6567 142.1C71.7813 141.858 71.6567 141.567 71.4076 141.471C67.5256 139.996 63.8373 138.203 60.2806 136.168C59.9969 136.002 59.9762 135.601 60.2323 135.407C60.9796 134.846 61.7269 134.265 62.4396 133.677C62.5711 133.566 62.751 133.545 62.9032 133.614C86.2434 144.274 111.514 144.274 134.578 133.614C134.73 133.538 134.91 133.566 135.041 133.67C135.754 134.258 136.501 134.846 137.256 135.407C137.512 135.601 137.498 136.002 137.214 136.168C133.664 138.245 129.969 140.003 126.08 141.471C125.824 141.567 125.713 141.858 125.838 142.107C127.983 146.253 130.426 150.206 133.118 153.957C133.228 154.117 133.429 154.186 133.616 154.13C145.269 150.524 157.088 145.084 169.287 136.12C169.391 136.044 169.46 135.919 169.474 135.795C172.449 105.021 164.492 78.2887 148.389 54.5886C148.348 54.5125 148.286 54.4502 148.203 54.4156L148.21 54.4086ZM75.1303 119.57C68.0998 119.57 62.3151 113.119 62.3151 105.194C62.3151 97.2682 67.9961 90.8171 75.1303 90.8171C82.2645 90.8171 88.0633 97.3305 87.9456 105.194C87.9456 113.119 82.2645 119.57 75.1303 119.57ZM122.523 119.57C115.493 119.57 109.708 113.119 109.708 105.194C109.708 97.2682 115.389 90.8171 122.523 90.8171C129.658 90.8171 135.456 97.3305 135.339 105.194C135.339 113.119 129.72 119.57 122.523 119.57Z"
            fill="white"/>
    </svg>

)

const Linkedin = ({size = 24}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path
            d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
    </svg>
)

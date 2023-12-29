/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WxyNEB3KJ2A
 */
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-6 bg-gray-900 text-white p-6 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold">My Portfolio</h3>
                    <p className="text-sm mt-2">Building experiences for the web and beyond.</p>
                </div>
                <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <Link className="text-sm hover:underline" href="#">
                        Home
                    </Link>
                    <Link className="text-sm hover:underline" href="#">
                        About
                    </Link>
                    <Link className="text-sm hover:underline" href="#">
                        Services
                    </Link>
                    <Link className="text-sm hover:underline" href="#">
                        Projects
                    </Link>
                    <Link className="text-sm hover:underline" href="#">
                        Contact
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-4 md:mb-0">© 2023 by My Portfolio.</p>
                <div className="flex space-x-4">
                    <Link className="text-lg" href="#">
                        <FacebookIcon className="w-4 h-4" />
                    </Link>
                    <Link className="text-lg" href="#">
                        <TwitterIcon className="w-4 h-4" />
                    </Link>
                    <Link className="text-lg" href="#">
                        <LinkedinIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

function FacebookIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function LinkedinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function TwitterIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}

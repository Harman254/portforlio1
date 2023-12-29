import Link from "next/link"
import { Button } from "./ui/button"

export default function Hero() {
    return (
        <section className="w-full min-h-[70vh] py-20 ">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                        Haman Malova
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg font-semibold text-muted-foreground">Next.js 14 Developer</p>
                </div>
                <div className="max-w-md mx-auto text-gray-600 dark:text-gray-400 text-lg">
                    <p className="text-xl mb-5">
                        Specializing in building highly scalable and performant web applications using Next.js. With my expertise, I
                        can turn your ideas into a reality.
                    </p>
                </div>
                <div className="space-x-4">
                    <Link href="/projects">
                        <Button
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-8 py-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        >
                            View Projects
                        </Button>
                    </Link>
                    <Button className="text-primary dark:text-gray-200 hover:underline" variant="link">
                        Contact Me
                    </Button>
                </div>
            </div>
        </section>
    )
}


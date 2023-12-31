
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Skills() {
    return (
        <section className="w-full container mx-auto py-12 md:py-24 lg:py-32 xl:py-48  md:mx-6">
            <div className="container px-4 md:px-6">
                <h2 className="text-2xl font-bold text-center tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none mb-6">
                    My Tech Stack
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="html logo"
                            className="rounded-full"
                            height="50"
                            src="/html.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">HTML</p>
                    </div>
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="css logo"
                            className="rounded-full"
                            height="50"
                            src="/css.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">css</p>
                    </div>
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="javascript logo"
                            className="rounded-full"
                            height="50"
                            src="/javascript.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">Javascript</p>
                    </div>
                    <div className="flex items-center  shadow-md rounded-md p-4">
                        <Image
                            alt="typescript logo"
                            className="rounded-full"
                            height="50"
                            src="/typescript.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">TypeScript</p>
                    </div>
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="react logo"
                            className="rounded-full"
                            height="50"
                            src="/react.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">React</p>
                    </div>
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="nextjs logo"
                            className="rounded-full"
                            height="50"
                            src="/nextjs.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">NextJs</p>
                    </div>
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="tailwind logo"
                            className="rounded-full"
                            height="50"
                            src="/tailwind.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">Tailwind</p>
                    </div>
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="database logo"
                            className="rounded-full"
                            height="50"
                            src="/database.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">SQL</p>
                    </div>
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="mongoDB logo"
                            className="rounded-full"
                            height="50"
                            src="/mongodb.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">MongoDB</p>
                    </div>
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="supabase logo"
                            className="rounded-full"
                            height="50"
                            src="/supabase.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">Supabase</p>
                    </div>
                    <div className="flex items-center shadow-md rounded-md p-4">
                        <Image
                            alt="prisma logo"
                            className="rounded-full"
                            height="50"
                            src="/prisma.png"
                            style={{
                                aspectRatio: "50/50",
                                objectFit: "cover",
                            }}
                            width="50"
                        />
                        <p className="ml-4 text-lg font-medium dark:text-gray-300">Prisma</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


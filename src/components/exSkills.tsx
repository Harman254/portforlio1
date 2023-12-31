
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Skills() {
    return (
        <>
            <h1 className="text-center text-3xl font-bold py-6">My Skills</h1>
            <div className="w-full h-2 bg-gray-300 rounded-full">
                <div className="h-full w-3/5 bg-green-400 rounded-full" />
            </div>
            <main className="container mx-auto px-6 md:px-8 lg:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/html.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">HTML</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/css.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">CSS</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/javascript.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">JavaScript</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/react.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">React</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/nextjs.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">Next.js</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/typescript.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">TypeScript</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/database.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">SQL</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/tailwind.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">Tailwind</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/mongodb.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">MongoDB</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/supabase.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">Supabase</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/git.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">Git</p>
                </Card>
                <Card className="flex flex-col items-center p-4">
                    <Image
                        width={80}
                        height={80}
                        alt="HTML logo"
                        className="block mb-2"
                        src="/prisma.png"
                        style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                        }}

                    />
                    <p className="text-center font-semibold">Prisma</p>
                </Card>
            </main>
        </>
    )
}


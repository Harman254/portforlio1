
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'My Projects - Harman Malova',
    description: 'projects done by Harman Malova',
}

export default function Page() {
    return (
        <main className="container min-h-screen mx-auto p-4 md:p-6 lg:p-8 space-y-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-center">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl lg:text-2xl  font-bold">Project 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <img
                            alt="Project 1"
                            className="w-full h-auto"
                            height="200"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-2">
                            This is a brief description about Project 1.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link className="text-blue-500 hover:underline" href="#">
                            Learn more
                        </Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">Project 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <img
                            alt="Project 2"
                            className="w-full h-auto"
                            height="200"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-2">
                            This is a brief description about Project 2.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link className="text-blue-500 hover:underline" href="#">
                            Learn more
                        </Link>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">Project 3</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <img
                            alt="Project 3"
                            className="w-full h-auto"
                            height="200"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <p className="text-sm md:text-base lg:text-lg text-gray-500 mt-2">
                            This is a brief description about Project 3.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link className="text-blue-500 hover:underline" href="#">
                            Learn more
                        </Link>
                    </CardFooter>
                </Card>
            </div>
            <div className="flex justify-center">
                <Button className="bg-primary text-md text-white px-4 py-2 rounded-md">Load More</Button>
            </div>
        </main>
    )
}


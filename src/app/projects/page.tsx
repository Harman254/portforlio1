import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import { Project } from "@/types/types"
import { getData } from "@/lib/utils"
import { urlFor } from "@/lib/sanity"

export const dynamic = "force-dynamic";
export const revalidate = 0
export const metadata: Metadata = {
    title: 'My Projects - Harman Malova',
    description: 'projects done by Harman Malova',
}

export default async function Page() {
    const data: Project[] = await getData();
    return (
        <main className="container min-h-screen mx-auto p-4 md:p-6 lg:p-8 space-y-8">
            <h1 className="text-2xl md:text-3xl tracking-tighter lg:text-4xl font-bold text-primary text-center">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data && data.length > 0 ? (
                    data.map((project: Project) => {
                        return (
                            <Card key={project._id} className="group bg-white dark:bg-gray-800/50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                                <Link href={project.link}>
                                    <CardHeader>
                                        <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">{project.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <img
                                            alt={`Project ${project.name}`}
                                            className="w-full h-auto object-cover aspect-video"
                                            src={urlFor(project.image).url()}
                                        />
                                        <p className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 mt-2 line-clamp-6">{project.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        {/* Add any additional project details here */}
                                    </CardFooter>
                                </Link>
                            </Card>)
                    })
                ) : (
                    <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
                        No projects found
                    </div>
                )}
            </div>
            <div className="flex justify-center">
                <Button className="bg-primary text-md text-white px-4 py-2 rounded-md">Load More</Button>
            </div>
        </main>
    )
}


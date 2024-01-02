
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import { sanityClient, urlFor } from "@/lib/sanity"

interface Project {
    image: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    _createdAt: string;
    _rev: string;
    link: string;
    description: string;
    _updatedAt: string;
    date: string;
    _type: 'project';
    name: string;
    _id: string;
    slug: {
        _type: 'slug';
        current: string;
    };
}

export const dynamic = "force-dynamic";
export const revalidate = 0
export const metadata: Metadata = {
    title: 'My Projects - Harman Malova',
    description: 'projects done by Harman Malova',
}



async function getData() {
    try {
        const query = "*[_type == 'project']";
        const data = await sanityClient.fetch(query);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export default async function Page() {
    const data: Project[] = await getData();
    return (
        <main className="container min-h-screen mx-auto p-4 md:p-6 lg:p-8 space-y-8">
            <h1 className="text-2xl md:text-3xl tracking-tighter lg:text-4xl font-bold text-primary text-center">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data ? (
                    data.map((project: Project) => {

                        return (
                            <Card key={project._id}>
                                <CardHeader>
                                    <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">{project.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <img
                                        alt={`Project ${project.name}`}
                                        className="w-full h-auto"
                                        height="200"
                                        src={urlFor(project.image).url()}
                                        style={{
                                            aspectRatio: '200/200',
                                            objectFit: 'cover',
                                        }}
                                        width="200"
                                    />
                                    <p className="text-sm md:text-base line-clamp-6	 lg:text-lg text-gray-500 mt-2">{project.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link className="text-blue-500 hover:underline" href={project.link}>
                                        Learn more
                                    </Link>
                                </CardFooter>
                            </Card>)
                    })
                ) : (
                    <div className="text-center">No projects found</div>
                )}

            </div>
            <div className="flex justify-center">
                <Button className="bg-primary text-md text-white px-4 py-2 rounded-md">Load More</Button>
            </div>
        </main>
    )
}


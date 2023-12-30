
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Me - Harman Malova - Modern web Portfolio',
    description: 'Portfolio of Harman Malova',
}

export default function Page() {
    return (
        <div className="container mx-auto">
            <header className="px-4 sm:px-6 py-4  flex items-center justify-between">
                <div className="text-2xl sm:text-3xl text-foreground font-bold">Harman Malova</div>
            </header>
            <main className="px-4 sm:px-6 py-12 space-y-6 sm:space-y-12">
                <section className="space-y-2 sm:space-y-4">
                    <h1 className="text-3xl sm:text-4xl text-primary font-bold">About Me</h1>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Brief description introducing yourself, including who you are, what you do, and your areas of expertise.
                    </p>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
                    <div className="flex flex-wrap gap-2 sm:space-x-4">
                        <Badge>JavaScript</Badge>
                        <Badge>React</Badge>
                        <Badge>Python</Badge>
                        <Badge>Django</Badge>
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
                    <div className="space-y-2">
                        <Card>
                            <CardHeader>
                                <h3 className="font-bold">Job Title at Company</h3>
                                <p className="text-gray-600">Dates of Employment</p>
                            </CardHeader>
                            <CardContent>
                                <p>Brief description of your roles and responsibilities.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h3 className="font-bold">Internship Title at Company</h3>
                                <p className="text-gray-600">Dates of Internship</p>
                            </CardHeader>
                            <CardContent>
                                <p>Brief description of your roles and responsibilities.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
                    <div className="flex items-center space-x-2">
                        <Avatar />
                        <div className="space-y-1">
                            <h3 className="font-bold">Name of the Institution</h3>
                            <p className="text-gray-600">Degree or Certification, Year of Completion</p>
                        </div>
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">Portfolio</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader>
                                <h3 className="font-bold">Project Name</h3>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <img
                                        alt="Project Screenshot"
                                        height="200"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "200/200",
                                            objectFit: "cover",
                                        }}
                                        width="200"
                                    />
                                    <p>Project description.</p>
                                    <Link className="underline text-blue-600" href="#">
                                        Link to live website or GitHub repository
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h3 className="font-bold">Project Name</h3>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <img
                                        alt="Project Screenshot"
                                        height="200"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "200/200",
                                            objectFit: "cover",
                                        }}
                                        width="200"
                                    />
                                    <p>Project description.</p>
                                    <Link className="underline text-blue-600" href="#">
                                        Link to live website or GitHub repository
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">Testimonials</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                            <CardContent>
                                <p>Testimonial or review from a client, colleague, or professor.</p>
                            </CardContent>
                            <CardFooter>
                                <h3 className="font-bold">Name</h3>
                                <p className="text-gray-600">Title</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardContent>
                                <p>Testimonial or review from a client, colleague, or professor.</p>
                            </CardContent>
                            <CardFooter>
                                <h3 className="font-bold">Name</h3>
                                <p className="text-gray-600">Title</p>
                            </CardFooter>
                        </Card>
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4">
                        <Link className="underline text-blue-600" href="#">
                            your-email@example.com
                        </Link>
                        <Link className="underline text-blue-600" href="#">
                            LinkedIn
                        </Link>
                        <Link className="underline text-blue-600" href="#">
                            GitHub
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}



import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card, CardFooter, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Metadata } from "next"
import { sanityClient, urlFor } from "@/lib/sanity"
import { Project } from "@/types/types"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'About Me - Harman Malova - Modern web Portfolio',
    description: 'Portfolio of Harman Malova',
}

async function getData() {
    try {
        const query = "*[_type == 'project']";
        const data = await sanityClient.fetch(query);
        const result = data.slice(0, 2)
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const revalidate = 0;
export const dynamic = "force-dynamic"

export default async function Page() {
    const data: Project[] = await getData();
    console.log(data);
    return (
        <div className="container mx-auto">
            <header className="px-4 sm:px-6 py-4  flex items-center justify-between">
                <div className="text-2xl sm:text-3xl text-foreground font-bold">Hello I'm <span className="text-primary">Harman Malova</span></div>
            </header>
            <main className="px-4 sm:px-6 py-12 space-y-6 sm:space-y-12">
                <section className="space-y-2 sm:space-y-4">
                    <h1 className="text-3xl sm:text-4xl text-primary font-bold">About Me</h1>
                    <p className="text-gray-600 text-base sm:text-lg">

                        I'm Haman Malova, a software developer with Next.js 14. I specialize in crafting modern, scalable, and full-stack applications. With access to cutting-edge tools, I help clients future-proof their websites.
                    </p>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
                    <div className="flex flex-wrap gap-2 sm:space-x-4">
                        <Badge>Strong Communication skills</Badge>
                        <Badge>HTML</Badge>
                        <Badge>CSS</Badge>
                        <Badge>JavaScript</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>React</Badge>
                        <Badge>NextJs</Badge>
                        <Badge>SQL</Badge>
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl tracking-tighter text-primary sm:text-3xl font-bold">Experience</h2>
                    <div className="space-y-2">
                        <Card>
                            <CardHeader>
                                <h3 className="font-bold">Human Resource Intern, Nairobi City County</h3>
                                <p className="text-gray-600">May-Sep, 2021</p>
                            </CardHeader>
                            <CardContent>
                                <p>Assisting in the recruitment process by screening resumes and coordinating interviews.
                                    Participating in onboarding activities for new hires, facilitating a smooth integration into the organization.
                                    Managing and updating employee records, ensuring accuracy and confidentiality.
                                    Assisting in the implementation of HR policies and procedures.
                                    Contributing to the organization of training and development programs for staff.
                                    Collaborating with team members on various HR projects, gaining valuable hands-on experience.
                                    Providing administrative support to the HR department in day-to-day operations.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h3 className="font-bold">Data training Agent,Sama AI</h3>
                                <p className="text-gray-600">July 2023 - Present</p>
                            </CardHeader>
                            <CardContent>
                                <p>Precision Annotation: Ensuring accuracy and precision in labeling diverse datasets to train and improve AI models.
                                    Quality Control: Conducting thorough quality checks to maintain high standards of annotated data.
                                    Collaboration: Working closely with the data science and engineering teams to understand project requirements and provide valuable insights.
                                    Continuous Learning: Staying updated on annotation guidelines and methodologies to contribute effectively to evolving projects.
                                    Timely Delivery: Meeting deadlines and contributing to the efficient and timely delivery of annotated datasets for model training.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl text-primary tracking-tighter sm:text-3xl font-bold">Education</h2>
                    <div className="flex items-center space-x-2">
                        <Avatar />
                        <div className="space-y-1">
                            <h3 className="font-bold">Jomo Kenyatta University of Agriculture and Technology</h3>
                            <p className="text-gray-600">Bachelor of Science in Human Resource Management</p>
                        </div>
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl text-primary tracking-tighter font-bold">Portfolio</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {data && data.map((project: Project) => (
                            <Card key={project._id}>
                                <CardHeader>
                                    <CardTitle>{project.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-4 border-y py-4">
                                    <Image
                                        alt={project.name}
                                        className="w-full aspect-[3/2] object-cover"
                                        height={200}
                                        src={urlFor(project.image).url()}
                                        width={300}
                                    />
                                    <Link className="text-blue-500 hover:underline" href={project.link}>
                                        View Project
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl text-primary tracking-tighter font-bold">Testimonials</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                            <CardContent>
                                <p>
                                    "Collaborating with Harman during our time at Nairobi City County Government was truly enlightening. He demonstrated exceptional leadership and a keen understanding of HR processes. His ability to navigate complex situations, coupled with his dedication to fostering a positive work environment, made a significant impact on our team. He provided invaluable insights and guidance, reflecting his deep knowledge and commitment to the field of human resources. It was a pleasure working with Harman, and I would highly recommend his expertise to any organization.</p>
                            </CardContent>
                            <CardFooter className="space-x-4">
                                <h3 className="font-bold">Nelly Odanga</h3>
                                <p className="text-gray-600">Ass. Human Resource Director</p>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardContent>
                                <p>"It was a pleasure to have Harman as a student. He demonstrated a strong commitment to academic excellence and enriched class discussions with insightful contributions. Harman possesses a remarkable blend of analytical skills and creativity. I have no doubt that he will continue to excel in his professional journey."</p>
                            </CardContent>
                            <CardFooter className="space-x-4">
                                <h3 className="font-bold">Lydia Mark</h3>
                                <p className="text-gray-600">Senior Lecturer, School of Business and Entrepreneurship.</p>
                            </CardFooter>
                        </Card>
                    </div>
                </section>
                <section className="space-y-2 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl text-primary tracking-tighter font-bold">Contact</h2>
                    <div className="flex  flex-col sm:flex-row items-center space-y-2 sm:space-x-4">
                        <Link className="underline text-blue-600" href="#">
                            Harmanmalova@gmail.com
                        </Link>
                        <Link className="underline text-blue-600" href="https://x.com/_harman254">
                            Twitter
                        </Link>
                        <Link className="underline text-blue-600" href="https://github.com/harman254">
                            GitHub
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}


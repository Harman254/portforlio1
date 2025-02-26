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

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text dark:from-purple-400 dark:to-blue-400">
                About Me
            </h1>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Profile Section */}
                <Card className="md:col-span-1 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                    <Image
                        src="/Profile.jpg"
                        alt="Your Name"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-lg mb-6 hover:scale-[1.02] transition-transform duration-300 ring-2 ring-purple-500/20 dark:ring-purple-400/20"
                    />
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Harman Malova</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Web Developer & Designer</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center group">
                            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <span className="ml-3 text-gray-800 dark:text-gray-200">Based in Nairobi, Kenya</span>
                        </div>
                        
                        <div className="flex items-center group">
                            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <span className="ml-3 text-gray-800 dark:text-gray-200">Harmanmalova@gmail.com</span>
                        </div>
                    </div>
                </Card>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    <Card className="p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">My Story</h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p className="leading-relaxed">
                                Hello! I'm Harman Malova, a passionate web developer and designer with experience in creating
                                beautiful and functional websites. My journey in tech began with a deep curiosity about how websites work.
                            </p>
                            <p className="leading-relaxed">
                                I specialize in front-end development, UI/UX design, and building modern web applications. My approach
                                to web development focuses on creating intuitive and efficient solutions.
                            </p>
                            <p className="leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.
                            </p>
                        </div>
                    </Card>

                    <Card className="p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {["JavaScript", "React", "Node.js", "HTML/CSS", "UI/UX Design", "Git"].map((skill) => (
                                <div 
                                    key={skill} 
                                    className="bg-white dark:bg-gray-800 rounded-lg px-4 py-3 text-center 
                                        border border-purple-100 dark:border-purple-900 hover:shadow-md 
                                        hover:border-purple-300 dark:hover:border-purple-700 
                                        hover:bg-purple-50 dark:hover:bg-purple-900/30
                                        transition-all duration-300
                                        text-gray-800 dark:text-gray-200"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Experience & Education</h2>
                        <div className="space-y-6">
                            <div className="border-l-2 border-purple-300 dark:border-purple-600 pl-6 relative">
                                <div className="absolute w-3 h-3 bg-purple-400 dark:bg-purple-500 rounded-full -left-[7px] top-2 ring-4 ring-purple-100 dark:ring-purple-900"></div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Web Developer at TechCorp</h3>
                                <p className="text-gray-600 dark:text-gray-400">2020 - Present</p>
                                <p className="mt-2 text-gray-700 dark:text-gray-300">Brief description of your role and key achievements.</p>
                            </div>
                            
                            <div className="border-l-2 border-purple-300 dark:border-purple-600 pl-6 relative">
                                <div className="absolute w-3 h-3 bg-purple-400 dark:bg-purple-500 rounded-full -left-[7px] top-2 ring-4 ring-purple-100 dark:ring-purple-900"></div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">BS in Computer Science</h3>
                                <p className="text-gray-600 dark:text-gray-400">University Name, Graduated 2019</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}


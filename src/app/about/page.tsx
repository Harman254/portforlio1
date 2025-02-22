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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                About Me
            </h1>

            <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Profile Section */}
                <Card className="md:col-span-1 p-6 bg-white/50 backdrop-blur-sm border border-gray-200">
                    <Image
                        src="/Profile.jpg"
                        alt="Your Name"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-lg mb-6 hover:scale-[1.02] transition-transform duration-300"
                    />
                    <h2 className="text-2xl font-semibold mb-2">Harman Malova</h2>
                    <p className="text-gray-600 mb-6">Web Developer & Designer</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center group">
                            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-purple-100 transition-colors duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-600 group-hover:text-purple-600"
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
                            <span className="ml-3">Based in Nairobi, Kenya</span>
                        </div>
                        
                        <div className="flex items-center group">
                            <div className="p-2 rounded-full bg-gray-100 group-hover:bg-purple-100 transition-colors duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-600 group-hover:text-purple-600"
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
                            <span className="ml-3">Harmanmalova@gmail.com</span>
                        </div>
                    </div>
                </Card>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    <Card className="p-8 bg-white/50 backdrop-blur-sm border border-gray-200">
                        <h2 className="text-2xl font-semibold mb-6">My Story</h2>
                        <div className="space-y-4 text-gray-700">
                            <p className="leading-relaxed">
                                Hello! I'm [Your Name], a passionate web developer and designer with [X] years of experience in creating
                                beautiful and functional websites. My journey in tech began [brief background on how you started].
                            </p>
                            <p className="leading-relaxed">
                                I specialize in [your main areas of expertise, e.g., front-end development, UI/UX design, etc.]. My approach
                                to web development is [your philosophy or approach to your work].
                            </p>
                            <p className="leading-relaxed">
                                When I'm not coding, you can find me [your hobbies or interests outside of work]. I believe that [a personal
                                belief or value related to your work or life].
                            </p>
                        </div>
                    </Card>

                    <Card className="p-8 bg-white/50 backdrop-blur-sm border border-gray-200">
                        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {["JavaScript", "React", "Node.js", "HTML/CSS", "UI/UX Design", "Git"].map((skill) => (
                                <div 
                                    key={skill} 
                                    className="bg-white rounded-lg px-4 py-3 text-center shadow-sm border border-gray-100 
                                    hover:shadow-md hover:border-purple-200 transition-all duration-300"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-8 bg-white/50 backdrop-blur-sm border border-gray-200">
                        <h2 className="text-2xl font-semibold mb-6">Experience & Education</h2>
                        <div className="space-y-6">
                            <div className="border-l-2 border-purple-200 pl-6 relative">
                                <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[7px] top-2"></div>
                                <h3 className="font-semibold text-lg">Web Developer at TechCorp</h3>
                                <p className="text-gray-600">2020 - Present</p>
                                <p className="mt-2">Brief description of your role and key achievements.</p>
                            </div>
                            
                            <div className="border-l-2 border-purple-200 pl-6 relative">
                                <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[7px] top-2"></div>
                                <h3 className="font-semibold text-lg">BS in Computer Science</h3>
                                <p className="text-gray-600">University Name, Graduated 2019</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}


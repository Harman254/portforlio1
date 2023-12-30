
export default function MySkills() {
    return (
        <main className="container mx-auto p-6">
            <section id="myProjects" />
            <section className="mt-12" id="skills">
                <div className="space-y-6">
                    <h2 className="text-5xl font-extrabold text-primary text-center">My Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <CodeIcon className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-medium">TypeScript</h3>
                                    <div className="w-full h-2 bg-gray-300 rounded-full">
                                        <div className="h-full w-3/4 bg-green-400 rounded-full" />
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <DatabaseIcon className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-medium">SQL</h3>
                                    <div className="w-full h-2 bg-gray-300 rounded-full">
                                        <div className="h-full w-2/3 bg-green-400 rounded-full" />
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <CloudIcon className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-medium">Cloud Computing</h3>
                                    <div className="w-full h-2 bg-gray-300 rounded-full">
                                        <div className="h-full w-1/2 bg-green-400 rounded-full" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <UserIcon className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-medium">UI/UX Design</h3>
                                    <div className="w-full h-2 bg-gray-300 rounded-full">
                                        <div className="h-full w-3/5 bg-green-400 rounded-full" />
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <PiIcon className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-medium">APIs and API testing</h3>
                                    <div className="w-full h-2 bg-gray-300 rounded-full">
                                        <div className="h-full w-4/5 bg-green-400 rounded-full" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <ComputerIcon className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-medium">Machine Learning</h3>
                                    <div className="w-full h-2 bg-gray-300 rounded-full">
                                        <div className="h-full w-2/3 bg-green-400 rounded-full" />
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <ComponentIcon className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-medium">React.js</h3>
                                    <div className="w-full h-2 bg-gray-300 rounded-full">
                                        <div className="h-full w-5/6 bg-green-400 rounded-full" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

function CloudIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    )
}


function CodeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}


function ComponentIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
            <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
            <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
            <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
        </svg>
    )
}


function ComputerIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="8" x="5" y="2" rx="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" />
            <path d="M6 18h2" />
            <path d="M12 18h6" />
        </svg>
    )
}


function DatabaseIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    )
}


function PiIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="9" x2="9" y1="4" y2="20" />
            <path d="M4 7c0-1.7 1.3-3 3-3h13" />
            <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
        </svg>
    )
}


function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}

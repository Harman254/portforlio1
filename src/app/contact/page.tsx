"use client"

import { useRef } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { contactAction } from "@/actions/contact"
import { toast } from "sonner"


export default function Page() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        const result = await contactAction(formData);
        if (result.success) {
            toast("Email sent successfully");
            formRef.current?.reset();
        } else {
            toast("Not sent");
        }
    };

    return (
        <main className="p-6 md:p-12 container mx-auto min-h-screen">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 max-w-6xl mx-auto">
                <div className="w-full md:w-1/2 space-y-8">
                    <h1 className="text-4xl text-primary font-bold">Contact Me</h1>
                    <form 
                        ref={formRef}
                        action={handleSubmit} 
                        className="space-y-4"
                    >
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input name="name" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" placeholder="Enter your email" type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea className="min-h-[100px]" name="message" placeholder="Enter your message" />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl text-primary font-bold">My Contact Info</h2>
                    <Card>
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage alt="Your Name" src="/placeholder.svg?height=36&width=36" />
                                    <AvatarFallback>HM</AvatarFallback>
                                </Avatar>
                                <div className="text-lg font-bold">Harman Malova</div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <MailboxIcon className="w-4 h-4" />
                                    <Link className="underline text-blue-500" href="#">
                                        Harmanmalova@gmail.com
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PhoneIcon className="w-4 h-4" />
                                    <Link className="underline text-blue-500" href="#">
                                        +254700000000
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}

function MailboxIcon(props: any) {
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
            <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
            <polyline points="15,9 18,9 18,11" />
            <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
            <line x1="6" x2="7" y1="10" y2="10" />
        </svg>
    )
}


function PhoneIcon(props: any) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}

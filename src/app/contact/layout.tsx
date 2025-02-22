import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Harman Malova ',
    description: 'this page contains contact information on  Harman Malova',
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 
"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Component() {
    const router = useRouter()
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <h2 className="mt-6 text-9xl font-extrabold text-gray-900 dark:text-gray-100">404</h2>
                <h3 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100">Page Not Found</h3>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    Oops! The page you are looking for does not exist. You might have mistyped the address or the page may have
                    been removed.
                </p>
                <Button
                    className="mt-8 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    variant="outline"
                    onClick={() => router.push("/")}
                >
                    Go back to Homepage
                </Button>
            </div>
        </section>
    )
}


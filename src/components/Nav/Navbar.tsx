"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { ModeToggle } from "../ModeToggle"

export default function NavBar() {
    const router = useRouter()
    return (
        <header className="flex h-20 w-full shrink-0 items-center container mx-auto px-4 md:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="lg:hidden" size="icon" variant="outline">
                        <MenuIcon className="h-6 w-6 " />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetClose asChild>
                        <Link href="/">
                            <MountainIcon className="h-6 w-6" />
                            <span className="sr-only">Portfolio</span>
                        </Link>
                    </SheetClose>
                    <ModeToggle />
                    <div className="grid gap-2 py-6">
                        <SheetClose asChild>
                            <Button variant="link" className="flex w-full items-center py-2 text-lg font-semibold" onClick={() => {
                                router.push("/about")
                            }} >
                                About
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button variant="link" className="flex w-full items-center py-2 text-lg font-semibold" onClick={() => {
                                router.push("/projects")
                            }} >
                                Projects
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button variant="link" className="flex w-full items-center py-2 text-lg font-semibold" onClick={() => {
                                router.push("/contact")
                            }} >
                                Contact
                            </Button>
                        </SheetClose>

                    </div>
                </SheetContent>
            </Sheet>
            <Link className="mr-6 hidden lg:flex" href="/">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Portfolio</span>
            </Link>
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    <ModeToggle />
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                            href="/about"
                        >
                            About
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                            href="/projects"
                        >
                            Projects
                        </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-primary focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="ml-auto">
                <Button onClick={() => router.push("/contact")}>Get in Touch</Button>
            </div>
        </header>
    )
}

function MenuIcon(props: any) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon(props: any) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}

"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { ModeToggle } from "../ModeToggle"
import { Menu, Mountain } from "lucide-react"

// Define icons as components
const MenuIcon = Menu
const MountainIcon = Mountain

export default function NavBar() {
    const router = useRouter()
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="lg:hidden" size="icon" variant="ghost">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className="flex items-center gap-2">
                                <MountainIcon className="h-6 w-6" />
                                <span className="font-bold">Portfolio</span>
                            </Link>
                            <div className="grid gap-2">
                                <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold">
                                    About
                                </Link>
                                <Link href="/projects" className="flex w-full items-center py-2 text-lg font-semibold">
                                    Projects
                                </Link>
                                <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold">
                                    Contact
                                </Link>
                                <Link href="/dashboard" className="flex w-full items-center py-2 text-lg font-semibold">
                                    Dashboard
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <ModeToggle />
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>

                <div className="mr-4 hidden lg:flex">
                    <Link className="mr-6 flex items-center space-x-2" href="/">
                        <MountainIcon className="h-6 w-6" />
                        <span className="font-bold inline-block">Portfolio</span>
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuLink asChild>
                                <Link
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                    href="/about"
                                >
                                    About
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                    href="/projects"
                                >
                                    Projects
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                    href="/dashboard"
                                >
                                    Dashboard
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <div className="hidden lg:flex items-center">
                            <ModeToggle />
                        </div>
                    </div>
                    <nav className="flex items-center">
                        <Link href="/contact" passHref>
                            <Button>Get in Touch</Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

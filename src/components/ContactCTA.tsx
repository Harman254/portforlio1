import { Button } from "./ui/button";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-10 dark:opacity-20" />
      <div className="relative px-6 py-12 sm:px-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Work Together
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Have a project in mind? I'm always open to discussing new opportunities and ideas.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
} 
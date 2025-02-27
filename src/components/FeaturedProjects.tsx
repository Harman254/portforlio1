import { Project } from "@/types/types";
import { getData } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

export default async function FeaturedProjects() {
  const projects: Project[] = await getData();
  console.log(projects);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects && projects.length > 0 ? (
        projects.slice(0, 3).map((project, index) => (
          <Card 
            key={project._id} 
            className="group bg-white dark:bg-gray-800/50 rounded-lg shadow-md overflow-hidden 
                     transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <Link href={project.link}>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                  <Image
                    alt={`Project ${project.name}`}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    src={urlFor(project.image).url()}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <p className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))
      ) : (
        // Loading state
        Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded mb-4 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse" />
              </div>
              <div className="mt-4">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
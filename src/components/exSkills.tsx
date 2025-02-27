"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/card"
import Image from "next/image"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90, icon: "/react.png" },
      { name: "Next.js", level: 85, icon: "/nextjs.png" },
      { name: "TypeScript", level: 85, icon: "/typescript.png" },
      { name: "Tailwind CSS", level: 90, icon: "/tailwind.png" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80, icon: "/nodejs.png" },
      { name: "MongoDB", level: 85, icon: "/mongodb.png" },
      { name: "PostgreSQL", level: 80, icon: "/postgresql.png" },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90, icon: "/git.png" },
      { name: "Supabase", level: 75, icon: "/supabase.png" },
      { name: "Docker", level: 70, icon: "/docker.png" },
      { name: "Prisma", level: 80, icon: "/prisma.png" },
    ]
  }
]

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (categoryIndex * 4 + index) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-6 h-6">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: (categoryIndex * 4 + index) * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}


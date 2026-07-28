"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/projectCard/ProjectCard";
import projects from "../../../public/data/projects";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const categories = [
    "All Projects",
    ...Array.from(
      new Set(
        projects
          .map((project) => project.category)
          .filter((c) => c !== "Mobile App")
      )
    ),
  ];

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-8">
        <motion.div
          className="container mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <Tabs defaultValue="All Projects" className="mb-12">
            <div className="text-center">
              <TabsList className="inline-flex mx-auto flex-col sm:flex-row space-y-2 sm:space-y-0 sm:border rounded-full sm:inline-flex w-full max-w-[300px] sm:max-w-none sm:w-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    className="w-full sm:w-[160px] px-4"
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={fadeInUp} layout>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

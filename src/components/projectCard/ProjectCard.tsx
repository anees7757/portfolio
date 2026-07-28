import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  tags: string[];
  githubLink: string;
  liveLink: string;
  category: string;
  features: string[];
  date: string;
  duration: string;
  client: string;
  role: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    // h-full has to be threaded down every level — Swiper stretches the slide,
    // but the chain breaks at any element that doesn't pass the height on, and
    // the Card's own h-full then resolves against an auto-height parent.
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.id}`}
        className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Card className="flex h-full flex-col overflow-hidden border shadow-none transition-all duration-300">
          <CardHeader className="p-0">
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col p-6">
            {/* One line always, so every title occupies identical height and the
                copy below stays aligned — no min-h needed once it can't wrap.
                Long titles ellipsis; the full name is on the project's page. */}
            <h3 className="mb-2 line-clamp-1 text-lg font-semibold">
              {project.title}
            </h3>
            <p className="mb-4 line-clamp-2 leading-relaxed text-muted-foreground">
              {project.shortDescription}
            </p>
            {/* Not a Link: the whole card is already an anchor, and nesting one
                <a> inside another is invalid HTML that React flags at hydration. */}
            <span className="mt-auto inline-flex items-center text-sm font-medium text-primary group-hover:underline">
              Learn More <ArrowRight size={16} className="ml-2" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
export default ProjectCard;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Calendar,
  Clock,
  User,
  Tag,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import projects from "../../../../public/data/projects";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  React.useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, currentImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-8 py-12">
        <motion.div {...fadeInUp} className="mb-8 max-w-4xl mx-auto">
          <Link href="/projects" passHref>
            <Button variant="link" className="pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </motion.div>

        <motion.article {...fadeInUp} className="max-w-4xl mx-auto">
          <header className="mb-8">
            <motion.h1
              {...fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.p
              {...fadeInUp}
              className="text-lg text-muted-foreground mb-6"
            >
              {project.description}
            </motion.p>
            <motion.div {...fadeInUp} className="flex flex-wrap gap-4 mb-6">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </motion.div>
            {/* Projects leave date/duration as "" when they shouldn't be shown,
                so each row is guarded and the whole strip drops out when both
                are empty — otherwise a bare calendar or clock icon is left
                sitting next to nothing. */}
            {(project.date || project.duration) && (
              <motion.div
                {...fadeInUp}
                className="flex flex-wrap items-center text-muted-foreground mb-6 gap-6"
              >
                {project.date && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{project.date}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{project.duration}</span>
                  </div>
                )}
              </motion.div>
            )}
            <motion.div {...fadeInUp} className="flex gap-4">
              {project.liveLink && (
                <Button asChild>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button variant="outline" asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </a>
                </Button>
              )}
            </motion.div>
          </header>

          <motion.section {...fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="cursor-pointer overflow-hidden border rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    width={400}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.section>

          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl border-t pt-8 font-bold mb-6">
              Interested in working together?
            </h2>
            <Button size="lg" asChild>
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.article>
      </main>
      <Footer />
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-lg"
              onClick={closeLightbox}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-lg"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-lg"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tabular-nums">
              {currentImage + 1} / {project.images.length}
            </div>

            <Image
              src={project.images[currentImage]}
              alt={`${project.title} - Image ${currentImage + 1}`}
              width={1200}
              height={800}
              objectFit="contain"
              className="max-h-[90vh] w-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

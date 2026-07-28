"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Smartphone, Brain } from "lucide-react";

const services = [
  {
    number: "01",
    icon: <Smartphone className="h-6 w-6" />,
    title: "Flutter App Development",
    description:
      "Designing and shipping polished mobile apps with Flutter and Dart for Android and iOS.",
    tags: ["Flutter", "Dart", "Mobile UI"],
  },
  {
    number: "02",
    icon: <Code className="h-6 w-6" />,
    title: "Web & Product Development",
    description:
      "Building responsive web experiences and product interfaces with modern frontend tools.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    number: "03",
    icon: <Cpu className="h-6 w-6" />,
    title: "API & Backend Integration",
    description:
      "Connecting apps to dependable services and APIs so products feel smooth and data-driven.",
    tags: ["REST", "Python", "APIs"],
  },
  {
    number: "04",
    icon: <Brain className="h-6 w-6" />,
    title: "AI & Automation",
    description:
      "Bringing AI, machine learning, and automation ideas into practical, useful workflows.",
    tags: ["AI", "ML", "Automation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="md:py-24 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Services
            </h2>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              What I bring to the table, from mobile apps to full-stack web
              solutions.
            </p>
          </div>

          <div className="divide-y divide-border">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center gap-6 py-8 hover:bg-secondary/30 -mx-4 px-4 rounded-xl transition-colors duration-300 cursor-default"
              >
                <span className="text-xs text-muted-foreground w-8 flex-shrink-0">
                  {service.number}
                </span>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {service.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

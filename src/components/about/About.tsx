"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Zap,
  User2,
  PhoneCall,
  MailIcon,
  MapPin,
  Briefcase,
  Code2,
  Headphones,
  Gamepad,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/** Renders a monochrome (white-on-transparent) PNG glyph tinted to the brand
 *  colour by using it as a CSS mask. Chess and Cricket are raster icons, so
 *  unlike the lucide SVGs they can't inherit `text-brand` directly. */
const MaskIcon = ({ src, label }: { src: string; label: string }) => (
  <span
    role="img"
    aria-label={label}
    className="block h-4 w-4 bg-brand"
    style={{
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
    }}
  />
);

const PUBLIC_EMAIL = process.env.NEXT_PUBLIC_EMAIL_USER || "anees7757@gmail.com";
const PUBLIC_PHONE = process.env.NEXT_PUBLIC_PHONE || "+92 340 519 7763";
const PUBLIC_PHONE_HREF = (process.env.NEXT_PUBLIC_PHONE || "+923405197763").replace(/\s+/g, "");

const infoData = [
  { icon: <User2 size={20} />, text: "Muhammad Anees" },
  {
    icon: <PhoneCall size={20} />,
    text: PUBLIC_PHONE,
    href: `tel:${PUBLIC_PHONE_HREF}`,
  },
  {
    icon: <MailIcon size={20} />,
    text: PUBLIC_EMAIL,
    href: `mailto:${PUBLIC_EMAIL}`,
  },
  { icon: <MapPin size={20} />, text: "Rawalpindi, Pakistan", href: undefined },
];

const skills = [
  { name: "Flutter / Dart", icon: <Smartphone size={20} />, category: "Mobile" },
  { name: "Python", icon: <Code size={20} />, category: "Backend / AI" },
  { name: "AI / ML", icon: <Sparkles size={20} />, category: "Innovation" },
  { name: "Mobile App Development", icon: <Zap size={20} />, category: "Product" },
  { name: "Web Development", icon: <Code2 size={20} />, category: "Frontend" },
  { name: "Automation", icon: <Workflow size={20} />, category: "Workflow" },
];

const tools = [
  { name: "Git", svg: "/svgs/git.svg" },
  { name: "Visual Studio Code", svg: "/svgs/visualstudio.svg" },
  { name: "Postman", svg: "/svgs/postman.svg" },
  { name: "Pycharm", svg: "/svgs/pycharm.svg" },
  { name: "Xcode", svg: "/svgs/xcode.png" },
  { name: "Android Studio", svg: "/svgs/android-studio.svg" },
  { name: "Antigravity", svg: "/svgs/antigravity.svg" },
  { name: "Shorebird", svg: "/svgs/shorebird.png" },
  { name: "Figma", svg: "/svgs/figma.svg" },
];

const experiences = [
  {
    company: "TheXSol",
    role: "Sr. Flutter Developer | Team Lead",
    duration: "Nov 2024 - Present",
    summary:
      "Leading the development of high-quality mobile solutions across multiple industries, with a focus on user engagement and scalable delivery.",
  },
  {
    company: "Sprinsoft",
    role: "Flutter Developer",
    duration: "July 2024 - Nov 2024",
    summary:
      "Delivered polished mobile products and collaborated closely with clients to align technical work with business goals.",
  },
  {
    company: "LinkHR",
    role: "Flutter Developer Associate",
    duration: "Nov 2023 - Feb 2024",
    summary:
      "Optimized performance and modernized app architecture while integrating advanced APIs and improving maintainability.",
  },
  {
    company: "Freelancer",
    role: "Flutter Developer",
    duration: "Jan 2021 - Present",
    summary:
      "Built performant Flutter applications for clients, maintaining a strong record of on-time delivery and quality work.",
  },
];

const certifications = [
  {
    title: "Flutter Mobile Application Development",
    issuer: "Jawan Pakistan",
    year: "2021",
    link: "https://drive.google.com/file/d/1RKHx_xwFvARX-XCBl2G38RedGPxoUlHK/view",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function About() {
  const interests = [
    { icon: <MaskIcon src="/svgs/chess-white.png" label="Chess" />, text: "Chess" },
    { icon: <Gamepad size={20} />, text: "Gaming" },
    { icon: <MaskIcon src="/svgs/cricket-white.png" label="Cricket" />, text: "Cricket" },
    { icon: <Headphones size={20} />, text: "Poetry" },
  ];
  return (
    <section id="about" className="md:py-28 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            About me
          </motion.h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <motion.div
              className="w-full lg:w-[34%] lg:sticky lg:top-28 flex flex-col items-center lg:items-start text-center lg:text-left"
              variants={fadeInUp}
            >

              <h3 className="text-2xl font-bold mb-2">
                Flutter Developer
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Mobile App Development & AI
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                I&apos;m a developer focused on turning ideas into polished digital products, with experience building mobile apps and AI-assisted solutions that feel practical and user-friendly.
              </p>
            </motion.div>
            <motion.div className="flex-1 w-full" variants={fadeInUp}>
              <Tabs defaultValue="qualifications" className="w-full">
                <div className="text-center lg:text-start">
                  <TabsList className="lg:flex lg:flex-row w-full flex-col space-y-1 lg:space-y-0 mb-12">
                    <TabsTrigger className="w-full lg:w-auto" value="qualifications">
                      Experience
                    </TabsTrigger>
                    <TabsTrigger className="w-full lg:w-auto" value="skills">
                      Skills
                    </TabsTrigger>
                    <TabsTrigger className="w-full lg:w-auto" value="certifications">
                      Certifications
                    </TabsTrigger>
                    <TabsTrigger className="w-full lg:w-auto" value="personal">
                      Personal Info
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div>
                  <TabsContent value="qualifications">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-center lg:text-start">
                        My Journey
                      </h3>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-3 items-center text-base">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand [&_svg]:h-[18px] [&_svg]:w-[18px]">
                            <Briefcase />
                          </span>
                          <h4 className="capitalize font-medium">
                            Professional Experience
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {experiences.map((experience, index) => (
                            <div
                              key={index}
                              className="flex gap-x-8 group items-stretch"
                            >
                              <div className="w-[1px] bg-border relative ml-2 self-stretch">
                                <div className="w-[11px] h-[11px] rounded-full bg-brand absolute -left-[5px] top-0 group-hover:scale-125 transition-transform duration-300"></div>
                              </div>
                              <div className="pb-2">
                                <div className="font-medium text-base leading-none mb-2">
                                  {experience.company}
                                </div>
                                <div className="text-sm text-muted-foreground mb-2">
                                  {experience.role}
                                </div>
                                <div className="text-sm font-medium mb-2">
                                  {experience.duration}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                                  {experience.summary}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="certifications">
                    <div className="text-center lg:text-start">
                      <h3 className="text-xl md:text-2xl font-bold mb-4">
                        Certifications
                      </h3>
                      <p className="text-muted-foreground mb-8 border-b pb-2">
                        Professional credentials
                      </p>
                      <div className="space-y-4">
                        {certifications.map((certification, index) => (
                          <div
                            key={index}
                            className="rounded-xl border border-border/60 bg-secondary/20 p-4 text-left"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <div>
                                <p className="font-semibold text-foreground">
                                  {certification.title}
                                </p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                  {certification.issuer} • {certification.year}
                                </p>
                              </div>
                              <a
                                href={certification.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-brand transition-colors hover:text-brand/80"
                              >
                                View Certificate
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="personal">
                    <div className="text-center lg:text-start">
                      {/* <h3 className="text-xl md:text-2xl font-bold mb-4">
                        More Than Just Code
                      </h3>
                      <p className="text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                        I'm passionate about creating digital experiences that
                        make a difference.
                      </p> */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-10">
                        {infoData.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-x-3 p-3 rounded-xl border border-border/60 bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300"
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand [&_svg]:h-[18px] [&_svg]:w-[18px]">
                              {item.icon}
                            </div>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-sm font-medium text-foreground break-all transition-colors hover:text-brand"
                              >
                                {item.text}
                              </a>
                            ) : (
                              <div className="text-sm font-medium text-foreground">
                                {item.text}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 border-b pb-2">
                        Interests & Hobbies
                      </p>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                        {interests.map((interest, index) => (
                          <div
                            key={index}
                            className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/20 px-4 py-2 transition-colors duration-200 hover:border-brand/40 hover:bg-secondary/40"
                          >
                            <span className="flex h-4 w-4 items-center justify-center text-brand [&_img]:h-4 [&_img]:w-4 [&_svg]:h-4 [&_svg]:w-4">
                              {interest.icon}
                            </span>
                            <span className="text-sm font-medium text-foreground">
                              {interest.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="skills">
                    <div className="text-center lg:text-start">
                      <h3 className="text-xl md:text-2xl font-bold mb-4">
                        Expertise Overview
                      </h3>
                      <p className="text-muted-foreground mb-8 border-b pb-2">
                        Core Tech Stack
                      </p>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
                        {skills.map((skill, index) => (
                          <div
                            key={index}
                            className="group flex items-start gap-3 rounded-xl border border-border/60 bg-secondary/20 p-3.5 text-left transition-colors duration-200 hover:border-brand/40 hover:bg-secondary/40"
                          >
                            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand [&_svg]:h-[18px] [&_svg]:w-[18px]">
                              {skill.icon}
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold leading-snug text-foreground">
                                {skill.name}
                              </p>
                              <p className="mt-0.5 text-xs text-muted-foreground">
                                {skill.category}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-8 border-b pb-2">
                        Tools I Use
                      </p>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                        {tools.map((tool, index) => (
                          <div key={index} className="flex justify-center">
                            <Image
                              src={tool.svg}
                              alt={tool.name}
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

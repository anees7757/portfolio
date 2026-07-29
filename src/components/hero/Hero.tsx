"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Facebook,
  ChevronDown,
  FacebookIcon,
  LucideFacebook,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/anees7757", icon: Github },
  { href: "https://linkedin.com/in/anees7757", icon: Linkedin },
  { href: "https://fb.com/muhammadanees.85", icon: Facebook },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-start overflow-hidden pb-28 pt-28 lg:justify-center lg:pt-10"
    >
      {/* He stands bottom-right and bleeds off the edge, passing behind the
          copy. The glow is baked into the PNG rather than drawn in CSS — see
          the .hero-portrait comment in globals.css for why. The offsets look
          large because ~14% of the image's width is transparent padding
          holding that glow. */}
      {/* On phones the copy is anchored to the top (justify-start on the
          section) so the CTA stack clears his head; he stays substantial in
          the bottom-right rather than shrunk into a corner. Larger breakpoints
          center the copy and are unchanged. */}
      <div className="pointer-events-none absolute -right-[24%] bottom-0 z-0 aspect-[1256/1435] h-[46vh] sm:-right-[20%] sm:h-[74vh] lg:-right-[11%] lg:h-[min(96vh,53rem)] xl:-right-[6%]">
        {/* Portrait: replace /public/mefr.png with your own transparent PNG
            (keep the baked-in glow padding — see globals.css .hero-portrait). */}
        <Image
          src="/mefr.png"
          alt="Muhammad Anees"
          width={1256}
          height={1435}
          priority
          sizes="(max-width: 640px) 48vh, (max-width: 1024px) 65vw, 47vw"
          className="hero-portrait w-full select-none"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-brand">Muhammad</span> Anees
        </motion.h1>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 text-xs uppercase tracking-[0.2em] text-brand"
        >
          Flutter Developer · Mobile Apps · AI & ML
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          I build polished mobile and web experiences with Flutter, Dart, Python, and AI-driven ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          {/* Drop your CV at /public/Muhammad_Anees.pdf (or update this path). */}
          <a href="/Muhammad_Anees.pdf" download>
            <Button size="lg" className="group w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </Button>
          </a>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="w-full shadow-none sm:w-auto"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex gap-5"
        >
          {socialLinks.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-200 hover:text-brand"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground/60 transition-colors hover:text-brand"
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.button>
    </section>
  );
}

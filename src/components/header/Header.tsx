"use client";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#projects", label: "My Projects", id: "projects" },
  { href: "/#services", label: "Services", id: "services" },
  // { href: "/#reviews", label: "Reviews", id: "reviews" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If scrolled to the bottom, the last section may be too short to reach
      // the top of the viewport, so activate it explicitly.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      // Otherwise pick the last section whose top has scrolled past the marker.
      const scrollPosition = window.scrollY + 150;
      let current = navItems[0].id;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };
    if (pathname === "/") {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection(pathname.substring(1));
    }
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      if (sectionId === "home") {
        router.push("/");
      } else {
        router.push(`/#${sectionId}`);
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 w-full"
      >
        <div className="mx-auto max-w-6xl px-4 pt-3 md:pt-4">
          <div
            className={`flex h-14 items-center justify-between rounded-2xl border px-4 md:px-6 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${
              scrolled
                ? "border-border bg-card/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.28)]"
                : "border-border/80 bg-card/70 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.22)]"
            }`}
          >
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl tracking-tight">MA</span>
              <span
                className="w-1.5 h-1.5 rounded-full ml-0.5 -mt-3 inline-block"
                style={{ backgroundColor: "#6B9E78" }}
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <NavLinks
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              />
            </nav>
            <div className="md:hidden flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-background z-50 flex flex-col"
          >
            <div className="flex justify-between items-center h-20 px-6 border-b">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-bold text-2xl tracking-tight">MA</span>
                <span
                  className="w-1.5 h-1.5 rounded-full ml-0.5 -mt-3 inline-block"
                  style={{ backgroundColor: "hsl(138 32% 60%)" }}
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-3xl font-semibold transition-colors ${
                    activeSection === item.id
                      ? "text-brand"
                      : "text-foreground hover:text-brand"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLinks({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}) {
  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.id);
          }}
          className="relative flex items-center text-sm font-medium transition-colors group"
        >
          <span
            className={`transition-colors duration-200 ${
              activeSection === item.id
                ? "text-brand"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </span>
          <span
            className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-brand transition-all duration-300 ${
              activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </button>
      ))}
    </>
  );
}

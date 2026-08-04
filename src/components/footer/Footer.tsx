"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <span className="font-bold text-xl tracking-tight">
              MA
            </span>
            <span className="w-1.5 h-1.5 rounded-full ml-0.5 -mt-3 inline-block" style={{ backgroundColor: "hsl(138 32% 60%)" }} />
          </div>

          {/* <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-brand transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav> */}

          <p className="text-xs text-muted-foreground">
            &copy; {year || "2026"} Muhammad Anees
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

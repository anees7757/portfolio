"use client";
import React, { useState } from "react";
import { PhoneCall, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "../labelInput/LabelInput";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <PhoneCall size={16} />,
    label: "Phone",
    value: "+92 340 519 7763",
    href: "tel:+923405197763",
  },
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: "anees7757@gmail.com",
    href: "mailto:anees7757@gmail.com",
  },
  {
    icon: <MapPin size={16} />,
    label: "Location",
    value: "Rawalpindi, Pakistan",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage("Please fill out all fields.");
      setIsSuccess(false);
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Failed to send message.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("An error occurred. Please try again later.");
      setIsSuccess(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get in Touch
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left — contact info */}
            <div className="lg:w-1/3 space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium break-words transition-colors hover:text-brand"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium break-words">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — form */}
            <div className="lg:w-2/3">
              <div className="border border-border rounded-2xl p-8 md:p-10">
                <p className="text-2xl font-semibold mb-8 leading-relaxed">
                  Let&apos;s build something{" "}
                  <span className="text-brand italic">great together.</span>
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <FloatingLabelInput
                    label="Name *"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FloatingLabelInput
                    label="Email *"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <FloatingLabelInput
                    label="Message *"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Button size="lg" className="group shadow-none">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                {responseMessage && (
                  <p
                    className={`mt-4 text-sm ${
                      isSuccess ? "text-brand" : "text-destructive"
                    }`}
                  >
                    {responseMessage}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

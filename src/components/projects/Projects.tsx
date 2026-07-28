'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectCard from '@/components/projectCard/ProjectCard'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import projects from '../../../public/data/projects'

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

export default function Projects() {
    return (
        <section id='projects' className="py-24">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-[30%] lg:pt-12 text-center lg:text-start">
                        <motion.h2
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold mb-12"
                        >
                            Recent Projects
                        </motion.h2>
                        <p className="text-muted-foreground mb-8">
                            A few things I&apos;ve built recently: mobile apps, dashboards, and AI-driven tools, mostly for real clients.
                        </p>
                        <div className="w-full h-px bg-border mb-8"></div>
                        <Link href="/projects">
                            <Button variant="default">
                                All Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <div className="lg:w-[70%]">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            spaceBetween={32}
                            slidesPerView={1}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2,
                                },
                            }}
                            className='!pb-20'
                            style={{
                                // Swiper's bullets default to its own blue.
                                '--swiper-pagination-color': 'hsl(var(--brand))',
                                '--swiper-pagination-bullet-inactive-color': 'hsl(var(--muted-foreground))',
                            } as React.CSSProperties}
                        >
                            {projects.map((project) => (
                                // !h-auto lets the flex row stretch every slide to
                                // the tallest one. Swiper's own height:100% can't do
                                // it: the wrapper's height is itself content-derived.
                                <SwiperSlide key={project.id} className='!h-auto'>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, LucideArrowLeft } from 'lucide-react'
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
    const [swiper, setSwiper] = useState<any>(null)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const slidePrev = () => swiper?.slidePrev()
    const slideNext = () => swiper?.slideNext()
    const handleSlideChange = (swiperInstance: any) => {
        setIsBeginning(swiperInstance.isBeginning)
        setIsEnd(swiperInstance.isEnd)
    }

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
                        <div className="flex items-center justify-center lg:justify-start gap-8">

                            <Link href="/projects">
                                <Button variant="default">
                                    All Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <div className="flex gap-2">
                                <button 
                                    onClick={slidePrev}
                                    disabled={isBeginning}
                                    type="button"
                                    aria-label="Previous projects"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left h-5 w-5">
                                            <path d="m15 18-6-6 6-6"></path>
                                        </svg>
                                </button>
                                <button 
                                     onClick={slideNext}
                                    disabled={isEnd}
                                    type="button"
                                    aria-label="Next projects"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-40">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-chevron-left h-5 w-5">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>   
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[70%]">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            onSwiper={(swiperInstance) => {
                                setSwiper(swiperInstance)
                                handleSlideChange(swiperInstance)
                            }}
                            onSlideChange={handleSlideChange}
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
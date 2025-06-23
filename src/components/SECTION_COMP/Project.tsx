'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/UI_ELEMENT/carousel';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/UI_ELEMENT/card';

const projects = [
  {
    title: 'TimeSage',
     image: '/assets/DASBOARD.png',
    href: 'https://timesage.vercel.app',
    description: 'AI-driven productivity tracker & time insights dashboard.',
  },
  {
    title: 'TimeSage',
    image: '/assets/DASBOARD.png',
    href: 'https://timesage.vercel.app',
    description: 'AI-driven productivity tracker & time insights dashboard.',
  },
  {
    title: 'TimeSage',
    image: '/assets/DASBOARD.png',
    href: 'https://timesage.vercel.app',
    description: 'AI-driven productivity tracker & time insights dashboard.',
  },
  {
    title: 'TimeSage',
    image: '/assets/DASBOARD.png',
    href: 'https://timesage.vercel.app',
    description: 'AI-driven productivity tracker & time insights dashboard.',
  },
];

const Projects = () => {
  const [current, setCurrent] = useState<number>(1);

  return (
    <section id="projects" className="relative w-full bg-black py-32 px-4 xl:px-0 text-white">
      {/* Gradient Background */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 blur-[120px] opacity-20"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(129, 140, 248, 0.5), transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <span className="text-sm uppercase tracking-widest text-pink-500 font-semibold">
            ✨ Projects
          </span>
          <h2 className="mt-3 text-4xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Streamlined Digital Experiences
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-white/70 xl:text-lg">
            From intuitive interfaces to performance-optimized apps, here are some of the projects I’ve crafted with code and care.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-20">
          <Carousel
            setApi={(api) => {
              if (!api) return;
              api.on('select', () => {
                setCurrent(api.selectedScrollSnap() + 1);
              });
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.title} className="md:basis-1/2 xl:basis-1/3 px-4">
                  <Card className="overflow-hidden group relative shadow-xl transition-transform duration-300 hover:scale-[1.02] border border-white/10">
                    <CardHeader className="p-0">
                      <Link href={project.href} target="_blank">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={300}
                          quality={100}
                          className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                    </CardHeader>
                    <CardContent className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md text-white">
                      <CardTitle className="p-4 text-sm font-light tracking-tight">
                        {project.description}
                      </CardTitle>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center mt-6 space-x-6">
              <CarouselPrevious className="bg-white/10 hover:bg-white/20" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold">{current}</span> / {projects.length}
              </span>
              <CarouselNext className="bg-white/10 hover:bg-white/20" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;

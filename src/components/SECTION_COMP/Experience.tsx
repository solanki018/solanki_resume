import Container from "@/components/FEATURE_COMP/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import { Button } from "@/components/UI_ELEMENT//button";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/UI_ELEMENT//card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/UI_ELEMENT/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { Code, MonitorCheck, Palette, Rocket, ChevronRight } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const experiences = [
  {
    year: '2026',
    title: 'Head, Graphic Design',
    org: 'Advitya',
    desc: 'Led the creative direction and graphic design for one of the largest cultural fests, ensuring consistent visual storytelling across all platforms.',
  },
  {
    year: '2025',
    title: 'Coordinator',
    org: 'ARSC',
    desc: 'Coordinated key student activities and technical events, driving engagement and innovation in robotics and space tech.',
  },
  {
    year: '2025',
    title: 'Coordinator, Content Generation Team',
    org: 'CDPC',
    desc: 'Created and managed impactful content for placement and career development initiatives under CDPC.',
  },
  {
    year: '2024',
    title: 'Co-Head, Design Team',
    org: 'Zeitgeist',
    desc: 'Managed a team of designers for the Zeitgeist cultural fest, delivering a polished UI/UX experience and design assets with high visual appeal.',
  },
  {
    year: '2024',
    title: 'Media & Outreach Lead',
    org: 'GDG On Campus',
    desc: 'Handled branding and outreach for Google Developer Group campus events, boosting community growth and event visibility.',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      data-scroll-section
      className="relative w-full py-28 px-6 md:px-12 bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#0f0f0f]"
    >
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 clash-grotesk text-center">
          My Experiences
        </h2>
        <p className="mt-3 text-center text-white/70 text-lg">
          A glimpse of my journey through creativity, tech, and leadership.
        </p>

        <div className="mt-16 border-l border-white/20 relative">
          {experiences.map((item, index) => (
            <div key={index} className="mb-12 ml-4 relative">
              {/* Timeline Dot */}
              <span className="absolute -left-[10.5px] top-1.5 h-5 w-5 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 border-4 border-[#0f0f0f] shadow-md" />

              {/* Experience Card */}
              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-md shadow-md hover:shadow-xl transition duration-300">
                <p className="text-sm text-white/50">{item.year}</p>
                <h3 className="text-xl font-semibold text-white clash-grotesk mt-1">{item.title}</h3>
                <p className="text-sm text-white/70 italic">{item.org}</p>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

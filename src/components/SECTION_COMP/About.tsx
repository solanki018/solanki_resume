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




const About = () => {
  return (
    <section id="about" className="w-full py-20 px-4 xl:px-0 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col space-y-16">
        {/* Heading & Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-3xl">
            I’m a UI/UX designer and frontend developer passionate about building engaging digital experiences using{' '}
            <Link
              href="https://create.t3.gg/"
              target="_blank"
              className="underline underline-offset-4 hover:text-pink-400 transition"
            >
              Next.js, Tailwind, and TypeScript
            </Link>
            . Since 2021, I’ve worked with startups and design-led teams to bring ideas to life—right from ideation to pixel-perfect implementation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

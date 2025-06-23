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
            I'm a third-year Chemical Engineering undergraduate at IIT Ropar with a deep interest in crafting impactful digital products. 
            While my academic journey focuses on core engineering concepts, my passion lies in <strong className="text-white">UI/UX design</strong> 
            and <strong className="text-white">frontend development</strong>.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/80 max-w-3xl">
            Over the past few years, I’ve worked on diverse projects ranging from 
            <span className="text-pink-400"> research dashboards</span> and 
            <span className="text-pink-400"> educational platforms</span> to 
            <span className="text-pink-400"> collaborative coding tools</span>. I love using tools like{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              className="underline underline-offset-4 hover:text-pink-400 transition"
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              className="underline underline-offset-4 hover:text-pink-400 transition"
            >
              Tailwind CSS
            </Link>
            , and{" "}
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="underline underline-offset-4 hover:text-pink-400 transition"
            >
              TypeScript
            </Link>{" "}
            to build intuitive, fast, and scalable user interfaces.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/80 max-w-3xl">
            Outside of code, I enjoy exploring new design systems, solving DSA problems, and learning about machine learning, backend development, and system design. 
            I’m always excited to collaborate on meaningful projects that blend engineering, creativity, and impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;



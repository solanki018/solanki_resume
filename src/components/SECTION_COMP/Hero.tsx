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



const Hero = () => {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    async function getLocomotive() {
      const Locomotive = (await import('locomotive-scroll')).default;
      if (refScrollContainer.current) {
        new Locomotive({
          el: refScrollContainer.current,
          smooth: true,
        });
      }
    }


    function handleScroll() {
      let current = '';
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute('id') ?? '';
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove('nav-active');
        if (li.getAttribute('href') === `#${current}`) {
          li.classList.add('nav-active');
        }
      });
    }

    void getLocomotive();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);
    carouselApi.on('select', () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll('#tilt'));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      'max-glare': 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-screen w-full px-4 py-24 bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex gap-2 flex-wrap justify-center mb-6"
      >
        {['Next.js', 'TailwindCSS', 'React', 'UI/UX'].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs uppercase text-white border border-white/20 shadow"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white"
      >
        Hello, I'm
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 clash-grotesk">
          Sourabh Solanki
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 max-w-xl text-base md:text-lg text-muted-foreground text-white/80"
      >
        A passionate UI/UX designer and frontend developer who brings interfaces
        to life using React and modern design systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
        <Link href="mailto:sourabhsolanki@protonmail.com">
          <Button size="lg">
            Contact Me <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Button
          variant="outline"
          size="lg"
          onClick={() =>
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          View Work
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-6 flex items-center gap-5 text-white"
      >
        <Link href="https://www.linkedin.com/in/solankisourabh" target="_blank">
          <FaLinkedin className="h-6 w-6 hover:text-blue-400 transition" />
        </Link>
        <Link href="mailto:sourabhsolanki1694@gmail.com" target="_blank">
          <MdEmail className="h-6 w-6 hover:text-red-400 transition" />
        </Link>
        <Link href="https://www.instagram.com/_solanki018" target="_blank">
          <FaInstagram className="h-6 w-6 hover:text-pink-500 transition" />
        </Link>
        <Link href="https://github.com/solanki018" target="_blank">
          <FaGithub className="h-6 w-6 hover:text-gray-300 transition" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 0 : 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={cn(
          'mt-12 text-sm text-white flex items-center gap-1 transition-opacity duration-500',
          isScrolled && 'opacity-0'
        )}
      >
        Scroll to discover <TriangleDownIcon className="animate-bounce mt-1" />
      </motion.div>
    </section>
  );
};

export default Hero;
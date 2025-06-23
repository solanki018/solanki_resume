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




const projects = [
  {
    title: 'Codengo',
    image: '/projects/codengo.png',
    href: 'https://codengo.vercel.app',
    description: 'AI-powered collaborative code workspace with real-time features.',
  },
  {
    title: 'Sketch2CodeHub',
    image: '/projects/sketch2code.png',
    href: 'https://sketch2codehub.vercel.app',
    description: 'Convert dashboard sketches into real code with AI-powered parsing.',
  },
  {
    title: 'TimeSage',
    image: '/projects/timesage.png',
    href: 'https://timesage.vercel.app',
    description: 'AI-driven productivity tracker & time insights dashboard.',
  },
  {
    title: 'TimeSage',
    image: '/projects/timesage.png',
    href: 'https://timesage.vercel.app',
    description: 'AI-driven productivity tracker & time insights dashboard.',
  },
  {
    title: 'TimeSage',
    image: '/projects/timesage.png',
    href: 'https://timesage.vercel.app',
    description: 'AI-driven productivity tracker & time insights dashboard.',
  },
];

const services = [
  {
    service: "Full Stack Development",
    icon: Code,
    description:
      "From frontend interfaces to backend APIs, I build robust, scalable full-stack applications.",
  },
  {
    service: "UI/UX Design",
    icon: Palette,
    description:
      "Crafting pixel-perfect, accessible, and interactive designs that users love.",
  },
  {
    service: "Website Optimization",
    icon: MonitorCheck,
    description:
      "I optimize performance, SEO, and accessibility for high-impact digital experiences.",
  },
  {
    service: "AI-Powered Tools",
    icon: Rocket,
    description:
      "Integrating intelligent features with LLMs and ML for modern web applications.",
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        <section
          id="home"
          className="flex flex-col items-center justify-center text-center min-h-screen w-full px-4 py-24 bg-gradient-to-b from-black via-zinc-900 to-black"
        >
          {/* Tag Pills */}
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

          {/* Name & Title */}
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

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 max-w-xl text-base md:text-lg text-muted-foreground text-white/80"
          >
            A passionate UI/UX designer and frontend developer who brings interfaces
            to life using React and modern design systems.
          </motion.p>

          {/* Buttons */}
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


          {/* Scroll Down Hint */}
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



        <section id="projects" className="relative w-full bg-black py-32 px-4 xl:px-0 text-white">
          {/* Gradient Background */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 blur-[120px] opacity-20"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, rgba(129, 140, 248, 0.5), transparent 70%)',
            }}
          ></div>

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


        {/* My Experiences */}
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
              {[
                {
                  year: "2026",
                  title: "Head, Graphic Design",
                  org: "Advitya",
                  desc: "Led the creative direction and graphic design for one of the largest cultural fests, ensuring consistent visual storytelling across all platforms.",
                },
                {
                  year: "2025",
                  title: "Coordinator",
                  org: "ARSC",
                  desc: "Coordinated key student activities and technical events, driving engagement and innovation in robotics and space tech.",
                },
                {
                  year: "2025",
                  title: "Coordinator, Content Generation Team",
                  org: "CDPC",
                  desc: "Created and managed impactful content for placement and career development initiatives under CDPC.",
                },
                {
                  year: "2024",
                  title: "Co-Head, Design Team",
                  org: "Zeitgeist",
                  desc: "Managed a team of designers for the Zeitgeist cultural fest, delivering a polished UI/UX experience and design assets with high visual appeal.",
                },
                {
                  year: "2024",
                  title: "Media & Outreach Lead",
                  org: "GDG On Campus",
                  desc: "Handled branding and outreach for Google Developer Group campus events, boosting community growth and event visibility.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-12 ml-4 relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[10.5px] top-1.5 h-5 w-5 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 border-4 border-[#0f0f0f] shadow-md"></span>

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



        <section id="services" data-scroll-section className="py-32 bg-[#090909]">
          <div className="max-w-6xl mx-auto px-4 xl:px-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
              }}
              viewport={{ once: true }}
              className="grid gap-12 md:grid-cols-2 xl:grid-cols-3"
            >
              {/* Section Heading */}
              <div className="md:col-span-2 xl:col-span-1">
                <h2 className="text-4xl xl:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500">
                  Let's build something <br />
                  <span className="clash-grotesk font-bold">exceptional.</span>
                </h2>
                <p className="mt-4 text-white/70 tracking-tight">
                  Here’s what I bring to the table. From sleek UIs to smart systems, I help you craft digital experiences that stand out.
                </p>
              </div>

              {/* Service Cards */}
              {services.map((service, index) => (
                <motion.div
                  key={service.service}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full shadow-md">
                    <service.icon size={20} className="text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white tracking-tight">
                    {service.service}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 tracking-tight">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* Contact */}
        <section
          id="contact"
          data-scroll-section
          className="relative w-full py-28 px-6 md:px-12 overflow-hidden "
        >
          {/* Soft glow in background */}
          <div
            className="absolute -top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full  blur-[150px] opacity-30"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 clash-grotesk">
              Let’s Build Something Incredible Together
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
              I’m available for freelance, internships, or collaborative product design & development.
              Let’s connect and create something extraordinary.
            </p>
            <Link href="mailto:sourabhsolanki1694@gmail.com" passHref>
              <Button className="mt-8 rounded-full px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:from-pink-600 hover:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
                Send a Message
              </Button>
            </Link>
          </div>

          {/* Bottom subtle glowing line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50"></div>
        </section>

      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

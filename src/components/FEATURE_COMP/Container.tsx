import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn, scrollTo } from "@/lib/utils";
import { useState, useEffect } from "react";
import Footer from "@/components/FEATURE_COMP/Footer";
import { useRouter } from "next/router";
import Preloader from "@/components/FEATURE_COMP/Preloader";
import styles from "@/styles/Container.module.css";

type IconProps = {
  ["data-hide"]: boolean;
};

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.12 },
  }),
  hidden: { opacity: 0 },
};

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#experience", text: "Experience" }, // ✅ Corrected
  { href: "#services", text: "Services" },
];


function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  const href = e.currentTarget.getAttribute("href");
  if (href?.startsWith("#")) {
    e.preventDefault();
    const section = document.querySelector(href);
    scrollTo(section);
  }
}

function NavItem(props: NavProps) {
  return (
    <motion.li
      className={props.className}
      variants={variants}
      custom={props.i}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <a
        href={props.href}
        onClick={handleClick}
        className={cn(props.i === 0 && "nav-active", "nav-link")}
      >
        {props.text}
      </a>
    </motion.li>
  );
}

export default function Container(props: ContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: "Sourabh Solanki | Portfolio",
    description:
      "Creative UI/UX Designer and Full Stack Developer. Building elegant interfaces with React, Next.js, and TailwindCSS.",
    image: "/assets/sourabh-og.png",
    type: "website",
    ...customMeta,
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2200); // match with preloader duration
  }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`https://www.wendoj.codes${router.asPath}`} />
        <link rel="canonical" href={`https://www.wendoj.codes${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Sourabh Solanki" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sourabhsolanki" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>

      {/* Navigation */}
      <nav
        className={cn(
          styles.nav,
          isScrolled
            ? "bg-gradient-to-br from-background to-transparent shadow-md backdrop-blur transition"
            : "bg-transparent",
        )}
      >
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              styles.burger,
              "inline-flex items-center justify-center rounded-md p-2 focus:outline-none transition-all",
            )}
          >
            <span className="sr-only">Toggle menu</span>
            <MenuIcon data-hide={isOpen} />
            <CrossIcon data-hide={!isOpen} />
          </button>
        </div>

        <Link href="/">
          <span className="text-lg font-semibold">Sourabh</span>
        </Link>

        <ul className={styles["desktop-nav"]}>
          {navLinks.map((link, i) => (
            <NavItem key={link.href} {...link} i={i} className="text-base" />
          ))}
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed right-0 top-0 z-40 flex h-screen w-full flex-col bg-background"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            >
              <div className="flex h-20 items-center justify-between border-b px-6">
                <span className="text-base font-medium lowercase">Menu</span>
                <button onClick={() => setIsOpen(false)}>
                  <CrossIcon data-hide={!isOpen} />
                </button>
              </div>
              <ul className="flex flex-col items-start px-6 py-10 space-y-6">
                {navLinks.map((link, i) => (
                  <li key={link.href} onClick={() => setIsOpen(false)}>
                    <NavItem {...link} i={i} className="text-xl" />
                  </li>
                ))}
              </ul>
              <div className="px-6 py-6 text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sourabh Solanki. All rights reserved.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <style jsx global>{`
          html,
          body {
            overflow-y: ${isOpen ? "hidden" : "initial"};
            scrollbar-width: ${isOpen ? "none" : "auto"};
            -ms-overflow-style: ${isOpen ? "none" : "auto"};
            touch-action: ${isOpen ? "none" : "auto"};
          }
        `}</style>
      </nav>

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Main Content */}
     <main className={cn("w-full bg-background", props.className)}>{children}</main>
      <Footer />
    </>
  );
}

// Icons
function MenuIcon(props: IconProps) {
  return (
    <svg className="absolute h-5 w-5 text-neutral-100" viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M2.5 2.5H17.5M2.5 7.5H17.5M2.5 12.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CrossIcon(props: IconProps) {
  return (
    <svg className="absolute h-5 w-5 text-neutral-100" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

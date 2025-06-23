import Link from "next/link";
import { Button } from "@/components/UI_ELEMENT/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      const istTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric", // optional: add if you want seconds
      }).format(date);

      setTime(istTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-[#1a1a2e] to-transparent border-t border-muted mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground text-sm">
          <p>
            Designed & Built with 💡 by{" "}
            <Link
              href="https://github.com/solanki018"
              target="_blank"
              className="text-foreground font-medium hover:text-primary"
            >
              Sourabh Solanki
            </Link>
          </p>
          <span className="hidden md:block">|</span>
          <p>Local time: <span className="font-semibold text-white">{time} IST</span></p>
        </div>

        {/* Right Side */}
        <Link href="mailto:sourabhsolanki1694@gmail.com" passHref>
          <Button variant="ghost" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary">
            <MailIcon className="h-4 w-4" />
            <span>sourabhsolanki1694@gmail.com</span>
          </Button>
        </Link>
      </div>

      {/* Decorative line */}
      <div className="h-[2px] bg-[radial-gradient(circle,#8f94fb,#4e54c8,#302b63)] opacity-70 w-full" />
    </footer>
  );
}

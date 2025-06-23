'use client';

import { Button } from '@/components/UI_ELEMENT/button';
import Link from 'next/link';

const Contact = () => {
  return (
    <section
      id="contact"
      data-scroll-section
      className="relative w-full py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Soft glow background */}
      <div
        className="absolute -top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[150px] opacity-30 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500"
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

      {/* Bottom glowing line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50"></div>
    </section>
  );
};

export default Contact;

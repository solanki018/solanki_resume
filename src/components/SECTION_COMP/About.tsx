
import { motion } from "framer-motion";




const About = () => {
  return (
    <section id="about" className="relative w-full py-28 px-6 md:px-12 bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#0f0f0f]">
      <div className="max-w-6xl mx-auto flex flex-col space-y-16">
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
  I'm a passionate <strong className="text-white">UI/UX designer</strong> and 
  <strong className="text-white"> full stack developer</strong> who loves crafting seamless, user-centered digital experiences. 
  I’ve designed and built projects like <span className="text-pink-400">Codengo</span> and 
  <span className="text-pink-400">DriverForge</span>, focusing on intuitive interfaces, smooth interactions, 
  and scalable functionality. My toolkit includes <span className="text-pink-400">Next.js</span>, 
  <span className="text-pink-400">Tailwind CSS</span>, <span className="text-pink-400">TypeScript</span>, 
  and modern design systems that help transform ideas into polished products.
</p>

<p className="mt-4 text-lg leading-relaxed text-white/80 max-w-3xl">
  I thrive on blending design thinking with technical execution—researching user needs, 
  translating them into clean interfaces, and developing performant applications. 
  Beyond just aesthetics, I aim to create meaningful experiences that balance usability, 
  accessibility, and performance. Constantly exploring new frameworks and tools, 
  I enjoy collaborating on impactful projects that push creative and technical boundaries.
</p>

        </motion.div>
      </div>
    </section>
  );
};

export default About;

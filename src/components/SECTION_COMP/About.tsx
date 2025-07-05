
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
            I'm a third-year Chemical Engineering student at IIT Ropar with a strong passion for crafting seamless digital experiences. My focus lies in <strong className="text-white">UI/UX design</strong> and <strong className="text-white">full stack development</strong>, and I’ve worked on projects like <span className="text-pink-400">Codengo</span> and <span className="text-pink-400">DriverForge</span> that combine design, functionality, and performance. I enjoy building with tools like <span className="text-pink-400">Next.js</span>, <span className="text-pink-400">Tailwind CSS</span>, and <span className="text-pink-400">TypeScript</span>, and constantly experiment with new design systems and frameworks.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/80 max-w-3xl">
            My interests also extend to the intersection of <span className="text-pink-400">process control</span> and <span className="text-pink-400">machine learning</span> in chemical engineering, where I explore how data-driven approaches can optimize real-world systems. I thrive on hands-on learning, solving problems across tech and engineering domains, and collaborating on impactful, innovative projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

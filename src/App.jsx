import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ArrowRight, Code2, Sparkles } from "lucide-react";

// Fade + slide variant
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section = ({ children, id }) => (
  <section id={id} className="w-full max-w-5xl mx-auto px-6 py-20 md:py-28 scroll-mt-24 md:scroll-mt-28">
    {children}
  </section>
);

export default function AboutMeSite() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white text-slate-900 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 dark:text-slate-100">
      {/* Top Nav */}
      <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-300 border-white/20 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b dark:border-white/10">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-400 dark:bg-indigo-500/20">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>Kayla Burzese's Portfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-slate-200" onClick={() => scrollTo(aboutRef)}>About</Button>
            <Button variant="ghost" className="text-slate-200" onClick={() => scrollTo(skillsRef)}>Skills</Button>
            <Button variant="ghost" className="text-slate-200" onClick={() => scrollTo(projectsRef)}>Projects</Button>
            <Button variant="ghost" className="text-slate-200" onClick={() => scrollTo(contactRef)}>Contact</Button>
            <Button variant="ghost" className="text-slate-200" onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</Button>
          </div>
          <div className="md:hidden">
            {/* Mobile scroll buttons*/}
            <Button variant="outline" className="border-white/20 text-slate-300" onClick={() => scrollTo(contactRef)}>
              Contact
            </Button>
          </div>
        </nav>
      </div>

      {/* Opener */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-20%,rgba(99,102,241,0.18),rgba(0,0,0,0))]" />
        <Section id="home">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center">
            <p className="uppercase tracking-[0.2em] text-xs text-slate-900 dark:text-slate-400">Queen's Computing (Honours)</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
              Hi, I’m Kayla Burzese!
              <span className="block text-slate-900 dark:text-white ">Welcome to My Portfolio</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-slate-900 dark:text-slate-300">
              Aspiring software developer passionate about utilizing modern technology in an ever-changing industry. I thrive on leveraging emerging tools and frameworks to build polished, user-focused projects. </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button size="lg" className="group" onClick={() => scrollTo(projectsRef)}>
                See Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-black dark:border-white/20 dark:text-slate-300" onClick={() => scrollTo(contactRef)}>
                Contact Me
              </Button>
            </div>
          </motion.div>
        </Section>
      </header>

      {/* About */}
      <div ref={aboutRef}>
        <Section id="about">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">About Me</h2>
            <p className="mt-4 max-w-3xl text-slate-900 dark:text-slate-300">
              I’m a second‑year Computing student at Queen’s University, alongside an Artifical Intelligece sub-plan. I’m actively learning Python, HTML, CSS, Tailwind, JavaScript, and React. I also enjoy every opportunity to collaborate with the campus community!

            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { title: "Focus", body: "Continuously growing my skill-set to build meaningful projects." },
                { title: "Approach", body: "Consistency and an eagerness to expand." },
                { title: "Now", body: "Experimenting with various technologies to create seamless user experiences." },
              ].map((item) => (
                <Card key={item.title} className="bg-slate-100 border-slate-300 dark:bg-white/5 dark:border-white/10">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 dark:text-slate-300 text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-900 dark:text-slate-300">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </Section>
      </div>

      {/* Skills */}
      <div ref={skillsRef}>
        <Section id="skills">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Skills</h2>
            <p className="mt-4 text-slate-900 dark:text-slate-300">I'm Always Learning! Here’s what I’m using right now.</p>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { label: "HTML5", desc: "Scroll navigation, links, icons, text" },
                { label: "CSS3 / Tailwind", desc: "Dark mode appearance, design tokens, interactive animations, layout" },
                { label: "JavaScript", desc: "DOM, dark/light mode toggle, event handling" },
                { label: "React", desc: "Components, state management, library integration" },
                { label: "Vite", desc: "Fast development" },
                { label: "Design", desc: "Typography, spacing, aesthetics" },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-3 rounded-2xl border bg-slate-100 border-slate-300 dark:bg-white/5 dark:border-white/10 p-4">
                  <Code2 className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <div className="font-medium">{s.label}</div>
                    <div className="text-sm text-slate-900 dark:text-slate-300">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>
      </div>

      {/* Projects */}
      <div ref={projectsRef}>
        <Section id="projects">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Projects</h2>
            <div className="mt-6 grid md:grid-cols-1 gap-4">
              {/* Project 1 */}
              <Card className="bg-slate-100 border-slate-300 dark:bg-white/5 dark:border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-300">Personal Portfolio Site</h3>
                    <span className="text-xs text-slate-900 dark:text-slate-400"></span>
                  </div>
                  <p className="mt-2 text-sm text-slate-900 dark:text-slate-300">
                    This page was built with React, Tailwind CSS, JavaScript, and Framer Motion to create seamless navigation, animation, and a dark/light mode toggle.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline" className="border-white/20">Source</Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </motion.div>
        </Section>
      </div>

      {/* Contact */}
      <div ref={contactRef}>
        <Section id="contact">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Let’s Connect!</h2>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="mailto:kaylaburzese@gmail.com" className="inline-flex items-center"><Mail className="mr-2 h-4 w-4" /> Email</a>
              </Button>
              <Button variant="outline" className="border-slate-300 dark:border-white/20" asChild>
                <a href="https://github.com/kaylaburzese" target="_blank" rel="noreferrer" className="inline-flex items-center"><Github className="mr-2 h-4 w-4" /> GitHub</a>
              </Button>
              <Button variant="outline" className="border-slate-300 dark:border-white/20" asChild>
                <a href="https://www.linkedin.com/in/kaylaburzese/" target="_blank" rel="noreferrer" className="inline-flex items-center"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
              </Button>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-slate-900 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>Kayla Burzese • Built with React + JavaScript + Tailwind CSS + Framer Motion</span>
          <div className="flex items-center gap-2">
            <a className="hover:text-slate-200" href="#home">Back to top</a>
          </div>
        </div>
      </footer>

      {/* Let's chat */}
      <div className="fixed bottom-6 right-6">
        <Button className="shadow-xl" onClick={() => scrollTo(contactRef)}>
          Let’s talk <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

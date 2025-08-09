import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import image from "../img/pic1.jpeg"
import imgIllus from "../img/illustration1.png"

type ProjectProps = {
  title: string;
  desc: string;
  tags: string[];
  role: string;
}

type ProjectsArrProps = ProjectProps[]


type MarqueeItemProps = {
  project: ProjectProps;
};

const projects: ProjectsArrProps = [
  {
    title: "SSO Role Management",
    desc: "Integration of SSO roles and permissions across services.",
    tags: ["React", "Spring Boot", "GitLab"],
    role: "Frontend",
  },
  {
    title: "DMLS (Meeting Systems)",
    desc: "Design & implement meeting scheduling and notification flows.",
    tags: ["React", "Spring Boot", "Jenkins", "GitLab", "MySQL"],
    role: "Fullstack",
  },
  {
    title: "Payroll System",
    desc: "Full-stack payroll module with configurable rules.",
    tags: ["React", "Spring Boot", "Jenkins", "GitLab", "MySQL"],
    role: "Front-end",
  },
  {
    title: "Job Portal",
    desc: "Company job board + applicant tracking frontend.",
    tags: ["React", "Tailwind", "ShadCN", "TypeScript"],
    role: "Front-end",
  },
  {
    title: "Recipe Management System (RMS)",
    desc: "RMS features for smart factory production recipes.",
    tags: ["React", "Spring Boot", "Solace", "MSSQL", "BitBucket"],
    role: "Fullstack",
  },
  {
    title: "Company Profile",
    desc: "Frontend rebuild for company profile site using React.",
    tags: ["React", "Tailwind"],
    role: "Front-end",
  },
];

const MarqueeItem: React.FC<MarqueeItemProps> = ({ project }) => {
  return (
    <div className="flex items-center gap-3 bg-white/2 px-4 py-2 rounded shadow-sm">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <circle cx="12" cy="12" r="10" stroke="white" strokeOpacity="0.12" strokeWidth="1.2" />
        <path
          d="M8 12h8"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity="0.9"
        />
      </svg>
      <div>
        <div className="text-sm font-medium">{project.title}</div>
        <div className="text-xs opacity-70">Enterprise · {project.role}</div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3-second intro timeline
    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      duration: 0.6,
      opacity: 1,
      scale: 1,
      ease: "power3.out",
    })
      .to(overlayRef.current, { duration: 0.5 }, "+=0.6") // hold for ~2 seconds = total ~3
      .to(overlayRef.current, {
        duration: 0.6,
        y: -100,
        opacity: 0,
        pointerEvents: "none",
        ease: "power2.in",
      })
    // .from(heroRef.current, { duration: 0.8, y: 40, opacity: 0, ease: "power3.out" }, "-=.2");

    // Hero subtle parallax on mouse move
    const handleMove = (e: any) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX - w / 2) / (w / 2);
      const y = (e.clientY - h / 2) / (h / 2);
      gsap.to(heroRef.current, { x: x * 12, y: y * 8, duration: 0.6, ease: "power2.out" });
    };
    window.addEventListener("mousemove", handleMove);

    // Recycled scrolling marquee (loop)
    const marquee = marqueeRef.current;
    gsap.to(marquee, {
      xPercent: -50,
      duration: 18,
      ease: "none",
      repeat: -1,
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      tl.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-slate-100 font-sans">
      {/* Intro overlay (3 seconds) */}
      <div ref={overlayRef} className="fixed inset-0 bg-gradient-to-br from-gray-950 to-gray-600 flex items-center justify-center z-50 opacity-0 scale-95">
        <div className="text-center space-y-3">
          <img src={image} alt="logo" className="w-28 h-28 rounded-full mx-auto border-4 border-white/20 shadow-lg object-cover" />
          <h1 className="text-3xl font-semibold">Annas Sigit — Portfolio</h1>
          <p className="opacity-90">Building resilient enterprise apps · React + Java + Spring Boot</p>
        </div>
      </div>

      {/* Page content */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-sm font-medium">AS</div>
          <div>
            <div className="text-sm font-semibold">Annas Sigit</div>
            <div className="text-xs opacity-70">.NET/Java Developer — Smart Factory & Frontend</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm opacity-90">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="container mx-auto px-6 pb-24">
        {/* Hero */}
        <section ref={heroRef} className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Hi, I'm <span className="text-indigo-400">Annas</span> — building reliable enterprise apps and elegant frontends.</h2>
            <p className="text-lg opacity-80">Currently working on Recipe Management Systems for smart factories and rebuilding company frontends using React. I build SSO, Payroll modules, DMLS, and more.</p>
            <div className="flex gap-3">
              <a href="#projects" className="px-5 py-2 rounded-md bg-indigo-500/90 text-white text-sm font-medium shadow hover:brightness-105">See projects</a>
              <a href="#contact" className="px-5 py-2 rounded-md border border-white/5 text-sm">Get in touch</a>
            </div>
            <div className="mt-4 text-sm opacity-70">Skills: React · Spring Boot · Java · TypeScript · Tailwind</div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-lg">
              <img
                src={imgIllus}
                alt="Conceptual smart factory illustration"
                className="w-full h-72 object-cover"
              />
              <div className="p-4 bg-gradient-to-t from-black/50 text-sm">
                <div className="font-semibold">Featured — RMS Integration</div>
                <div className="opacity-80 text-xs">Led recipe management integration across MES and EIF systems.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Recycled scrolling animation (marquee of icons/text) */}
        <section className="mt-10 overflow-hidden">
          <div className="relative border-t border-white/5 pt-6">
            <div className="absolute inset-0 -z-10 opacity-10">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#4f46e5" stopOpacity="0.15" />
                    <stop offset="1" stopColor="#06b6d4" stopOpacity="0.07" />
                  </linearGradient>
                </defs>
                <rect width="1200" height="200" fill="url(#g)" />
              </svg>
            </div>

            <div className="whitespace-nowrap will-change-transform" style={{ overflow: 'hidden' }}>
              <div ref={marqueeRef} className="flex gap-8 text-sm items-center" style={{ width: '200%' }}>
                {/* Two copies for seamless loop */}
                {Array.from({ length: 2 }).map((_, block) => (
                  <div key={block} className="flex items-center gap-6 px-6">
                    {projects.map((p) => (
                      <MarqueeItem project={p} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-white/3 p-4 rounded-lg border border-white/6 hover:scale-[1.02] transition-transform">
              <div className="text-sm font-semibold">{p.title}</div>
              <p className="text-xs opacity-80 mt-2">{p.desc}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* About / Contact */}
        <section id="contact" className="mt-16 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold">About me</h3>
            <p className="mt-3 text-sm opacity-80">I graduated with Information Systems from Binus University (GPA 3.78). I work with smart factory systems (MES, RMS) and build enterprise-grade solutions using Java, Spring Boot, and React. I enjoy mentoring, improving onboarding, and building small UI libraries for consistent UX.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Contact</h3>
            <div className="mt-3 text-sm opacity-80 space-y-2">
              <div>Email: anassigit1998@gmail.com</div>
              <div>Phone: +62 899-1651-919</div>
              <div>LinkedIn: https://www.linkedin.com/in/annas-sigit-adityo-mulyo-1842b920a</div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-8 text-center text-sm opacity-80">© {new Date().getFullYear()} Annas Sigit — Built with React & GSAP</footer>
    </div>
  );
}


export default Home;
import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight, ArrowRight, Github, Linkedin, Mail,
  Menu, X, Code2, Cpu, Globe, Database, Terminal,
  Download, ExternalLink, Smartphone, Award, Briefcase,
  GraduationCap, Send, ChevronDown
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "La Vitrine du Faso",
    category: "Développement Web",
    description:
      "Une plateforme numérique dédiée à la découverte des régions du Burkina Faso, de leurs potentialités et de leurs richesses.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Globe,
    link: "https://romariclegrand.github.io/La-vitrine-du-faso/",
  },
  {
    number: "02",
    title: "Biblio_UNZ",
    category: "Application Web",
    description:
      "Une plateforme de gestion bibliothécaire universitaire intégrant la gestion des utilisateurs, du catalogue et des emprunts.",
    tags: ["Python", "Django", "SQLite"],
    icon: Database,
    link: "https://github.com/romariclegrand",
  },
  {
    number: "03",
    title: "Projet UNESCO — Médias & IA",
    category: "Hackathon · Prototype conceptuel",
    description:
      "Réflexion et conception d'une solution éducative pour aider à repérer les contenus trompeurs et sensibiliser à la désinformation et aux contenus générés par IA.",
    tags: ["IA", "Éducation aux médias", "Innovation"],
    icon: Cpu,
    link: "https://github.com/romariclegrand",
  },
  {
    number: "04",
    title: "Gapal — Points de vente",
    category: "Application mobile · Étude de projet",
    description:
      "Concept d'application pour présenter les produits d'une structure laitière et aider les clients à localiser les points de vente au Burkina Faso.",
    tags: ["Mobile", "Géolocalisation", "UX"],
    icon: Smartphone,
    link: "mailto:romaricyelkouni1@gmail.com?subject=Projet%20Gapal",
  },
  {
    number: "05",
    title: "Portail de gestion scolaire",
    category: "Application Web · Projet personnel",
    description:
      "Conception d'un portail numérique autour de la consultation et de la gestion des informations scolaires.",
    tags: ["Python", "Web", "Base de données"],
    icon: GraduationCap,
    link: "https://github.com/romariclegrand",
  },
];

const skills = [
  { name: "HTML / CSS / JavaScript / TypeScript", level: "Développement Web", icon: Globe },
  { name: "React", level: "Interfaces modernes", icon: Code2 },
  { name: "Python / Django", level: "Développement logiciel", icon: Terminal },
  { name: "Java / C", level: "Programmation", icon: Code2 },
  { name: "SQL / Bases de données", level: "Gestion des données", icon: Database },
  { name: "Intelligence artificielle", level: "IA & Machine Learning", icon: Cpu },
  { name: "IoT", level: "Objets connectés", icon: Smartphone },
  { name: "Linux / Git", level: "Environnement technique", icon: Terminal },
];

const services = [
  {
    icon: Globe,
    title: "Développement Web",
    description: "Création de sites web modernes, responsives et adaptés aux besoins des entreprises.",
  },
  {
    icon: Smartphone,
    title: "Applications numériques",
    description: "Conception de solutions applicatives pour répondre aux problématiques du quotidien.",
  },
  {
    icon: Cpu,
    title: "Solutions IA & IoT",
    description: "Exploration et développement de solutions intelligentes et connectées.",
  },
  {
    icon: Briefcase,
    title: "Accompagnement numérique",
    description: "Formation, initiation informatique et accompagnement dans la transformation numérique.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CONTACT = {
  // Remplace cette adresse par ton adresse professionnelle avant publication.
  email: "romaricyelkouni1@gmail.com",
};

function SectionTitle({ number, label, title, description }) {
  return (
    <motion.div
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="section-number">{number} / {label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Accueil", "#home"],
    ["À propos", "#about"],
    ["Compétences", "#skills"],
    ["Projets", "#projects"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        R<span>.</span>Y
      </a>

      <nav className={open ? "nav-links active" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
          Collaborons <ArrowUpRight size={16} />
        </a>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="availability">
            <span className="pulse-dot" />
            Disponible pour de nouvelles opportunités
          </div>

          <p className="hero-intro">Welcome on my portfolio</p>

          <h1>
            Romaric
            <br />
            <span>Yelkouni.</span>
          </h1>

          <h2 className="hero-role">
            Développeur informatique
            <span> & passionné d'innovation.</span>
            <span>Formateur en montage video avec capcut et génération de videos IA</span>
            <span>Consultant en développement de solution numérique</span>
          </h2>

          <p className="hero-description">
            Je conçois des expériences numériques et explore les
            possibilités offertes par le développement logiciel,
            l'intelligence artificielle et les objets connectés.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Découvrir mes projets <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Me contacter <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/romariclegrand" target="_blank" rel="noreferrer">
              <Github size={19} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={19} />
            </a>
            <span className="social-line" />
            <span>CODER · CRÉER · INNOVER</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="visual-glow" />
        <div className="profile-frame">
          <img className="profile-photo" src="/images/profile.jpeg" alt="Portrait de Romaric Yelkouni" />
        </div>
        <div className="floating-card card-top">
          <Code2 size={19} /> <span>Clean Code</span>
        </div>
        <div className="floating-card card-bottom">
          <Cpu size={19} /> <span>AI & IoT</span>
        </div>
        <div className="circle-decoration" />
      </motion.div>

      <a href="#about" className="scroll-indicator">
        SCROLL TO EXPLORE <ChevronDown size={16} />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section container">
      <SectionTitle
        number="01"
        label="À PROPOS"
        title="Derrière le code, une vision."
        description="Comprendre les besoins, imaginer des solutions et transformer les idées en expériences numériques."
      />

      <div className="about-grid">
        <div className="about-main">
          <span className="accent-label">QUI SUIS-JE ?</span>
          <h3>
            La technologie est mon terrain d'exploration.
          </h3>
          <p>
            Je suis Romaric Yelkouni,Ingénieur en informatique et aussi étudiant en Master Mathématiques
            et Informatique, option Informatique, Intelligence
            Artificielle et Internet des Objets (IA & IoT).
          </p>
          <p>
            Passionné par le numérique, je m'intéresse particulièrement
            au développement d'applications, à l'intelligence
            artificielle et à la création de solutions technologiques
            répondant à des besoins concrets.
          </p>
          <p>
            Mon ambition : mettre mes connaissances au service de
            l'innovation et contribuer à la transformation numérique.
          </p>
          <a href="#contact" className="text-link">
            Travaillons ensemble <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <GraduationCap size={25} />
            <strong>Master</strong>
            <span>Mathématiques & Informatique</span>
          </div>
          <div className="stat-card">
            <Cpu size={25} />
            <strong>IA & IoT</strong>
            <span>Spécialisation académique</span>
          </div>
          <div className="stat-card">
            <Award size={25} />
            <strong>Hackathons</strong>
            <span>Participation et innovation</span>
          </div>
          <div className="stat-card">
            <Briefcase size={25} />
            <strong>Freelance</strong>
            <span>Solutions numériques</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle
          number="02"
          label="COMPÉTENCES"
          title="Ma boîte à outils."
          description="Des technologies et des connaissances que je mobilise pour concevoir des solutions numériques."
        />

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                className="skill-card"
                key={skill.name}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <Icon size={27} />
                <div>
                  <h3>{skill.name}</h3>
                  <span>{skill.level}</span>
                </div>
                <ArrowUpRight className="skill-arrow" size={18} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionTitle
        number="03"
        label="PORTFOLIO"
        title="Quelques projets."
        description="Des idées transformées en réalisations numériques."
      />

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              className="project-card"
              key={project.number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                <Icon size={30} />
              </div>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                Explorer le projet <ExternalLink size={16} />
              </a>
            </motion.article>
          );
        })}
      </div>

      <a
        href="https://github.com/romariclegrand"
        target="_blank"
        rel="noreferrer"
        className="github-more"
      >
        Explorer mon GitHub <Github size={18} /> <ArrowUpRight size={18} />
      </a>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <SectionTitle
          number="04"
          label="SERVICES"
          title="Comment puis-je vous aider ?"
          description="Je mets mes compétences au service de vos idées et de vos projets."
        />

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                className="service-card"
                key={service.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon size={30} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Discutons de votre projet <ArrowUpRight size={16} /></a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section container">
      <SectionTitle
        number="05"
        label="PARCOURS"
        title="Apprendre, participer, évoluer."
        description="Quelques expériences qui enrichissent mon parcours académique et professionnel."
      />

      <div className="certification-card">
        <div className="cert-icon"><Award size={34} /></div>
        <div className="cert-content">
          <span className="accent-label">OCTOBRE 2026 · UNESCO</span>
          <h3>Youth Hackathon 2026</h3>
          <p>
            Attestation de participation à une initiative internationale
            autour de l'éducation aux médias et à l'information,
            de la lutte contre la désinformation et de l'innovation.
          </p>
          <span className="cert-badge">Attestation de participation</span>
        </div>
        <div className="cert-brand">UNESCO</div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionTitle
          number="06"
          label="CONTACT"
          title="Une idée ? Construisons-la ensemble."
          description="Vous avez un projet, une opportunité ou simplement envie d'échanger ? Je serais ravi de vous lire."
        />

        <div className="contact-box">
          <div>
            <span className="accent-label">FAISONS CONNAISSANCE</span>
            <h3>Votre prochain projet commence par une conversation.</h3>
          </div>
          <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
            Me contacter <Send size={18} />
          </a>
        </div>

        <div className="contact-links">
          <a href={`mailto:${CONTACT.email}`}><Mail size={18} /> Email</a>
          <a href="https://github.com/romariclegrand" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="logo">R<span>.</span>Y</a>
        <p>© {new Date().getFullYear()} Romaric Yelkouni. Tous droits réservés.</p>
        <a href="#home" className="back-top">Retour en haut ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
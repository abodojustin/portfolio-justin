"use client";
import Image from 'next/image';
import { Download, Cloud, Lock, Zap, BarChart, Monitor, Computer } from 'lucide-react';
import { FaLinkedin, FaMedium, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  en: {
    software: "Web & Mobile Development",
    infra: "Cloud & Infrastructure",
    devops: "DevOps & Automation",
    network: "Security & Network",
    monitor: "Monitoring & Optimization & Database",
    about: "About Me",
    resume: "Fullstack Developer, DevOps/Cloud Engineer, and Cybersecurity Engineer passionate about automating and securing infrastructure. I transform complex challenges into high-performance, resilient systems, leveraging extensive expertise with tools like AWS, Kubernetes, and Docker.",
    download: "Download my resume",
    skill: "Skills",
  },
  de: {
    software: "Web- & Mobile-Entwicklung",
    infra: "Cloud & Infrastruktur",
    devops: "DevOps & Automatisierung",
    network: "Sicherheit & Netzwerke",
    monitor: "Monitoring, Optimierung & Datenbanken",
    about: "Über mich",
    resume: "Fullstack-Entwickler, DevOps/Cloud Engineer und Cybersecurity Engineer mit Leidenschaft für die Automatisierung und Absicherung von Infrastrukturen. Ich verwandle komplexe Herausforderungen in leistungsstarke und resiliente Systeme und nutze dabei umfassende Expertise mit Technologien wie AWS, Kubernetes und Docker.",
    download: "Lebenslauf herunterladen",
    skill: "Fähigkeiten",
    },
};

// --- Data for links and skills ---
const socialLinks = [
    { icon: MdEmail, url: 'mailto:abodojustin@gmail.com', name: 'Email' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/justinawono', name: 'LinkedIn' },
    { icon: FaMedium, url: '#', name: 'Medium' },
    { icon: FaInstagram, url: 'https://www.instagram.com/francisabodo237', name: 'Instagram' },
];


export default function HomeTab() {

    const { language } = useLanguage();

    const skillCategories = [
    {
        icon: Computer,
        title: translations[language].software,
        skills: ["typescript", "nextjs", "javascript", "flutter", "nodejs", "php", "symfony"] 
    },
    {
        icon: Cloud,
        title: translations[language].infra,
        skills: ["aws", "kubernetes", "docker", "openstack", "azure", "google-cloud"] 
    },
    {
        icon: Zap,
        title: translations[language].devops,
        skills: ["terraform", "helm", "argocd", "github actions", "bash", "jenkins", "gitlab-ci"] 
    },
    {
        icon: Lock,
        title: translations[language].network,
        skills: ["vpn", "iam", "cisco", "pfsense"]
    },
    {
        icon: Monitor,
        title: translations[language].monitor,
        skills: ["prometheus", "grafana", "mysql", "mongodb", "postgresql", "firebase"]
    }
];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            
            {/* --- Left Column: “About Me” & Contact --- */}
            <div className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-3xl font-bold text-accent">{translations[language].about}</h2>
                <p className="text-secondary leading-relaxed">
                    {translations[language].resume}
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {socialLinks.map(link => (
                        <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" aria-label={link.name}
                           className="text-secondary hover:text-primary transition-colors">
                            <link.icon size={24} />
                        </a>
                    ))}
                </div>

                <a href="/Francis_Dev_FullStack.pdf" download
                   className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent font-semibold rounded-full border border-accent/30 hover:bg-accent/20 transition-colors">
                    <Download size={18} />
                    {translations[language].download}
                </a>
            </div>

            {/* --- Right Column: Skills --- */}
            <div className="lg:col-span-3 space-y-6">
                <h2 className="text-3xl font-bold text-accent text-center lg:text-left">{translations[language].skill}</h2>
                {skillCategories.map(category => (
                    <div key={category.title} className="p-6 bg-card-bg border border-border-color rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                           <category.icon className="w-6 h-6 text-accent" />
                           <h3 className="text-lg font-bold text-primary">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                           {category.skills.map(skill => (
                               <div key={skill} className="flex items-center justify-center p-2 bg-gray-700/30 rounded-full" title={skill.charAt(0).toUpperCase() + skill.slice(1)}>
                                   <Image 
                                     src={`/logos/${skill}.svg`} 
                                     alt={`Logo ${skill}`} 
                                     width={"37"} 
                                     height={37}
                                     className="object-contain"
                                   />
                               </div>
                           ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
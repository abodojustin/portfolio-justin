"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home as HomeIcon, Briefcase, Code, Award } from "lucide-react";

// Import all finalized tab components
import HomeTab from "./components/tabs/HomeTab";
import ExperienceTab from "./components/tabs/ExperienceTab";
import ProjectsTab from "./components/tabs/ProjectsTab";
// import CertificationsTab from "./components/tabs/CertificationsTab";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageToggle } from "./components/LanguageToggle";
import { useLanguage } from "@/app/context/LanguageContext";

const translations = {
  en: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    title: "JUSTIN FRANCIS AWONO ABODO",
    subtitle:
      "Software Engineer | Cloud & DevOps Engineer | Cybersecurity | Systems & Network Administrator",
  },
  de: {
    home: "Startseite",
    experience: "Berufserfahrung",
    projects: "Projekte",
    title: "JUSTIN FRANCIS AWONO ABODO",
    subtitle:
      "Softwareentwickler | Cloud & DevOps Engineer | Cybersicherheit | System- & Netzwerkadministrator",
  },
};


export default function Home() {

    const { language } = useLanguage();

    // The final table of tabs with all actual components
    const tabs = [
        { id: "home", label: translations[language].home, icon: HomeIcon, component: <HomeTab /> },
        { id: "experience", label: translations[language].experience, icon: Briefcase, component: <ExperienceTab /> },
        { id: "projects", label: translations[language].projects, icon: Code, component: <ProjectsTab /> },
        // { id: "certifications", label: "Certifications", icon: Award, component: <CertificationsTab /> },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    // Find the component to display based on the active tab
    const activeContent = tabs.find((tab) => tab.id === activeTab)?.component;

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
            {/* --- Theme Button --- */}
            <div className="absolute top-12 sm:top-5 right-5 z-50 flex items-center gap-3 sm:gap-4">
                <ThemeToggle />
                <LanguageToggle />
            </div>


            <div className="w-full max-w-5xl mx-auto">
                {/* --- Header/Profile Section --- */}
                <div className="flex flex-col items-center mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary">{translations[language].title}</h1>
                    <p className="text-base md:text-lg text-secondary mt-1">{translations[language].subtitle}</p>
                </div>

                {/* --- Tab Navigation Section (Responsive) --- */}
                <div className="flex justify-center mb-8">
                    <div className="flex space-x-1 sm:space-x-2 p-2 bg-black/20 rounded-full border border-white/10 backdrop-blur-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${activeTab === tab.id ? "" : "hover:text-white/60"} relative rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-base font-medium text-white transition focus-visible:outline-2`}
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                                {activeTab === tab.id && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 z-10 bg-white/10 border border-white/20"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-20 flex items-center gap-2">
                                    <tab.icon size={16}/>
                                    {/* The label is hidden on very small screens to save space. */}
                                    <span className="hidden sm:inline">{tab.label}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Section Tab Contents (Responsive) --- */}
                <div className="group relative w-full min-h-[400px] p-4 md:p-8 bg-black/30 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">
                    <div className="absolute -inset-px bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-70 transition duration-500" style={{ filter: 'blur(15px)' }}></div>
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeContent}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}
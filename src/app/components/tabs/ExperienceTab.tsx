// src/app/components/tabs/ExperienceTab.tsx
'use client';

import Image from 'next/image';
import { useLanguage } from "@/app/context/LanguageContext";
import { Badge } from '@/app/components/ui/Badge';

const translations = {
  en: {
    title: "Professional Experience",
    experiences: [
      {
        role: "DevSecOps Engineer & IT Trainer",
        company: "L2S Formation",
        location: "Remote, France",
        logo: "/logos/l2s_formation.jpeg",
        date: " ",
        tasks: [
          "Migrated an AWS architecture to Kubernetes",
          "Successfully migrated Modernization and Cloud-Native Deployment of E-Commerce Platform using EKS, Terraform, Helm, and Gitlab-CI",
          "Managed AWS cloud infrastructure",
          "Orchestrated applications with Kubernetes & Helm, monitored with Prometheus.",
          "Automated CI/CD deployments with GitHub Actions (reduced deployment times by 40%)",
          "Optimized cloud costs (-15% through Docker & Kubernetes containerization)",
          "Strengthened security with IAM, IPSec VPN, and advanced monitoring."
        ],
        tech: ["AWS", "Kubernetes", "Docker", "ReactJS", "Terraform", "Helm", "ArgoCD", "Prometheus", "CI/CD"]
      },
      {
        role: "Frontend Web Developer",
        company: "SolvR",
        location: "Remote, France",
        logo: "/logos/solvrfrance_logo.jpeg",
        date: " ",
        tasks: [
          "Development of an E-Commerce platform for a client in the aviation sector."
        ],
        tech: ["JavaScript", "WordPress", "Python"]
      },
      {
        role: "Web and Mobile Consultant",
        company: "Faseya France",
        location: "Remote, France",
        logo: "/logos/faseya.png",
        date: " ",
        tasks: [
          "Design and implementation of web and mobile applications for companies to improve their business."
        ],
        tech: ["AWS", "ReactJS", "NodeJS", "MongoDB", "JavaScript", "IT Consultant"]
      },
      {
        role: "IT Security Consultant",
        company: "SMART Corporation Sarl",
        location: "Douala, Cameroon",
        logo: "/logos/smart_corporation.jpeg",
        date: " ",
        tasks: [
          "Oversee and manage access and authentication mechanisms for information and IT infrastructure.",
          "Deployed a private OpenStack cloud.",
          "Talk with customers to identify potential threats to data, software, and hardware security.",
          "Installed and configured a pfSense captive portal.",
          "Draft, update, and archive documentation on security policies, response procedures, and tests related to IT risk management.",
          "Install, configure, and operate cybersecurity solutions."
        ],
        tech: ["OpenStack", "pfSense", "Proxmox", "Rack Servers"]
      }
    ]
  },
  de: {
    title: "Berufserfahrung",
    experiences: [
      {
        role: "DevSecOps Engineer & IT-Trainer",
        company: "L2S Formation",
        location: "Remote, Frankreich",
        logo: "/logos/l2s_formation.jpeg",
        date: " ",
        tasks: [
          "Migration einer AWS-Architektur zu Kubernetes",
          "Erfolgreiche Modernisierung und Cloud-native Bereitstellung einer E-Commerce-Plattform mit EKS, Terraform, Helm und Gitlab-CI",
          "Verwaltung der AWS-Cloud-Infrastruktur",
          "Orchestrierung von Anwendungen mit Kubernetes & Helm, überwacht mit Prometheus.",
          "Automatisierung von CI/CD-Deployments mit GitHub Actions (40 % schnellere Bereitstellung)",
          "Optimierung der Cloud-Kosten (-15 % durch Containerisierung mit Docker & Kubernetes)",
          "Stärkung der Sicherheit mit IAM, IPSec VPN und erweitertem Monitoring"
        ],
        tech: ["AWS", "Kubernetes", "Docker", "ReactJS", "Terraform", "Helm", "ArgoCD", "Prometheus", "CI/CD"]
      },
      {
        role: "Frontend Web-Entwickler",
        company: "SolvR",
        location: "Remote, Frankreich",
        logo: "/logos/solvrfrance_logo.jpeg",
        date: " ",
        tasks: [
          "Entwicklung einer E-Commerce-Plattform für einen Kunden aus der Luftfahrtbranche."
        ],
        tech: ["JavaScript", "WordPress", "Python"]
      },
      {
        role: "Web- und Mobile-Berater",
        company: "Faseya France",
        location: "Remote, Frankreich",
        logo: "/logos/faseya.png",
        date: " ",
        tasks: [
          "Design und Implementierung von Web- und mobilen Anwendungen für Unternehmen zur Optimierung ihres Geschäfts."
        ],
        tech: ["AWS", "ReactJS", "NodeJS", "MongoDB", "JavaScript", "IT-Berater"]
      },
      {
        role: "IT-Sicherheitsberater",
        company: "SMART Corporation Sarl",
        location: "Douala, Kamerun",
        logo: "/logos/smart_corporation.jpeg",
        date: " ",
        tasks: [
          "Überwachung und Verwaltung von Zugriffs- und Authentifizierungsmechanismen für Informations- und IT-Infrastrukturen.",
          "Bereitstellung einer privaten OpenStack-Cloud.",
          "Kundenberatung zur Identifizierung potenzieller Bedrohungen für Daten, Software und Hardware.",
          "Installation und Konfiguration eines pfSense-Captive-Portals.",
          "Erstellung, Aktualisierung und Archivierung von Dokumentationen zu Sicherheitsrichtlinien, Reaktionsverfahren und Tests im IT-Risikomanagement.",
          "Installation, Konfiguration und Betrieb von Cybersecurity-Lösungen."
        ],
        tech: ["OpenStack", "pfSense", "Proxmox", "Rack Servers"]
      }
    ]
  }
};

export default function ExperienceTab() {
  const { language } = useLanguage();
  const { title, experiences } = translations[language];

  return (
    <div>
      <h2 className="text-3xl font-bold text-accent mb-8 text-center">{title}</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 sm:gap-6">
            <div className="relative flex flex-col items-center">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-black/30 rounded-full border-2 border-border-color p-1">
                <Image
                  src={exp.logo || "/logos/default.svg"}
                  alt={`Logo ${exp.company}`}
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                />
              </div>
              {index < experiences.length - 1 && (
                <div className="flex-grow w-px bg-border-color mt-4"></div>
              )}
            </div>
            <div className="w-full">
              <div className="flex justify-between items-start mb-1 flex-col sm:flex-row">
                <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                <time className="text-sm font-normal text-secondary sm:ml-4 flex-shrink-0">{exp.date}</time>
              </div>
              <p className="text-base text-secondary mb-3">{exp.company} - {exp.location}</p>
              <ul className="list-disc list-inside space-y-1.5 text-secondary text-sm pl-2 mb-4">
                {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((techItem) => (
                  <Badge key={techItem} className="bg-gray-700/50 text-gray-300 border-gray-600">
                    {techItem}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Blocks,
  Brain,
  Code2,
  Gauge,
  Headphones,
  Layers3,
  LayoutDashboard,
  MessagesSquare,
  MonitorSmartphone,
  Palette,
  PenTool,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Store,
  TabletSmartphone,
  Target,
  Wrench,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type NavItem = {
  label: string;
  href: string;
};

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export const heroStats = [
  { value: 120, suffix: "+", label: "digital launches" },
  { value: 38, suffix: "+", label: "SaaS and app builds" },
  { value: 90, suffix: "+", label: "happy clients" },
  { value: 98, suffix: "%", label: "client satisfaction" },
];

export const services: IconItem[] = [
  {
    title: "UI/UX Design",
    description: "User journeys, prototypes, and polished interfaces that make complex products feel effortless.",
    icon: PenTool,
  },
  {
    title: "Brand Identity",
    description: "Strategic visual systems, logos, and typography that give your business a distinctive market presence.",
    icon: Palette,
  },
  {
    title: "Website Development",
    description: "Fast, secure, responsive websites built with clean architecture and future-ready stacks.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description: "From MVP to production, we design and build mobile products users return to daily.",
    icon: Smartphone,
  },
  {
    title: "SaaS Development",
    description: "Subscription products, multi-tenant platforms, billing flows, onboarding, and growth systems.",
    icon: Blocks,
  },
  {
    title: "App Publishing",
    description: "App Store and Google Play setup, compliance, release management, and launch-day publishing support.",
    icon: Store,
  },
  {
    title: "Frontend Development",
    description: "Pixel-accurate React interfaces, design systems, dashboards, and animated product experiences.",
    icon: AppWindow,
  },
  {
    title: "Backend Development",
    description: "Robust APIs, databases, authentication, integrations, and scalable cloud-ready infrastructure.",
    icon: Server,
  },
  {
    title: "Admin Dashboard",
    description: "Operational dashboards, analytics portals, and workflow tools built for clarity and control.",
    icon: LayoutDashboard,
  },
  {
    title: "Website Design",
    description: "Conversion-focused web experiences with cinematic layouts and carefully crafted interactions.",
    icon: MonitorSmartphone,
  },
  {
    title: "Flutter Development",
    description: "Beautiful cross-platform apps with native-feeling performance across iOS and Android.",
    icon: TabletSmartphone,
  },
  {
    title: "Maintenance & Support",
    description: "Performance monitoring, updates, feature iterations, and reliable long-term product care.",
    icon: Wrench,
  },
];

export const strengths: IconItem[] = [
  { title: "Creative Thinking", description: "We translate rough ideas into precise product direction and standout visuals.", icon: Brain },
  { title: "Modern Design", description: "Every interface is shaped with premium typography, motion, and usability.", icon: Sparkles },
  { title: "Scalable Development", description: "Clean foundations make your product easier to extend, maintain, and optimize.", icon: Layers3 },
  { title: "Fast Performance", description: "We obsess over load times, interaction quality, and technical reliability.", icon: Gauge },
  { title: "Business-Focused Solutions", description: "Strategy, design, and development decisions are tied to measurable outcomes.", icon: Target },
  { title: "Transparent Communication", description: "You get clear updates, visible progress, and direct collaboration from day one.", icon: MessagesSquare },
  { title: "Reliable Support", description: "After launch, Crevio IT stays close with improvements, fixes, and release support.", icon: Headphones },
  { title: "Future-Ready Technologies", description: "We choose stacks that help you ship faster today and scale tomorrow.", icon: Rocket },
];

export const categories = ["All", "Website", "Mobile App"];

export type PortfolioItem = {
  id: string;
  title: string;
  category: "Website" | "Mobile App" | "Dashboard" | "Branding" | "SaaS" | "Case Studies";
  year: string;
  description: string;
  metrics: string;
  image: string;
  link: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Travelfly - Travel Agency",
    category: "Website",
    year: "2025",
    description:
      "A modern travel booking website with seamless tour discovery, destination highlights, and an effortless booking experience.",
    metrics: "+45% booking increase",
    image: "/Project_1.png",
    link: "https://www.behance.net/gallery/252581297/Travel-Agency-Website-design",
  },
  {
    id: "2",
    title: "Prepmytype - PTE Preparation",
    category: "Website",
    year: "2025",
    description:
      "An interactive PTE preparation platform featuring practice tests, study resources, and progress tracking for better exam performance.",
    metrics: "10k+ active students",
    image: "/Project_2.png",
    link: "https://www.behance.net/gallery/252680139/AI-Powered-PTE-Preparation-Platform",
  },
  {
    id: "3",
    title: "Sleeknit - E-commerce",
    category: "Website",
    year: "2025",
    description:
      "A clean and responsive e-commerce website for all types products with intuitive navigation and a smooth shopping experience.",
    metrics: "+38% conversion rate",
    image: "/Project_1_Sleeknit.png",
    link: "https://sleeknit.com",
  },
  {
    id: "4",
    title: "Sleeknit - E-commerce Play Store",
    category: "Mobile App",
    year: "2025",
    description:
      "A clean and responsive e-commerce website for all types products with intuitive navigation and a smooth shopping experience.",
    metrics: "+38% conversion rate",
    image: "/Project_4.png",
    link: "https://play.google.com/store/apps/details?id=com.sleeknit.app&pcampaignid=web_share",
  },
  {
    id: "5",
    title: "Lyfuber - Ride Sharing",
    category: "Mobile App",
    year: "2025",
    description:
      "A clean and responsive e-commerce website for all types products with intuitive navigation and a smooth shopping experience.",
    metrics: "+38% conversion rate",
    image: "/Project_5.png",
    link: "https://www.gogodriver.us",
  },
  {
    id: "6",
    title: "Sleeknit - E-commerce App Store",
    category: "Mobile App",
    year: "2025",
    description:
      "A clean and responsive e-commerce website for all types products with intuitive navigation and a smooth shopping experience.",
    metrics: "+38% conversion rate",
    image: "/Project_3.png",
    link: "https://apps.apple.com/us/app/sleeknit/id6779087355",
  },
  {
    id: "7",
    title: "OOTMS - Track Load Platform",
    category: "Website",
    year: "2025",
    description:
      "A logistics management platform designed to simplify load tracking, shipment monitoring, and transportation workflows.",
    metrics: "28% faster dispatch",
    image: "/Project_6.png",
    link: "https://www.behance.net/gallery/252739655/Track-Driver-website",
  },
  {
    id: "8",
    title: "Coastal - Car Rental Website",
    category: "Website",
    year: "2025",
    description:
      "A sleek car rental website that makes browsing vehicles, checking availability, and booking rentals fast and hassle-free.",
    metrics: "4.8 user rating",
    image: "/Project_7.png",
    link: "https://moizmemon.vercel.app",
  },
];

export const processSteps = [
  { title: "Discovery", description: "We define goals, audiences, constraints, and the opportunity worth building for." },
  { title: "Research", description: "Competitive reviews, user insights, and product audits reveal the strongest path forward." },
  { title: "Strategy", description: "We shape scope, features, content, technical approach, and measurable success markers." },
  { title: "Design", description: "Wireframes, prototypes, visual systems, and responsive UI become a validated experience." },
  { title: "Development", description: "Frontend, backend, integrations, CMS, apps, and dashboards are built with clean delivery rhythm." },
  { title: "Testing", description: "We verify performance, usability, accessibility, responsiveness, and release readiness." },
  { title: "Launch", description: "Deployment, analytics, app publishing, SEO basics, and handover are handled carefully." },
  { title: "Support", description: "We continue improving, measuring, and expanding your product after the first release." },
];

export type TechItem = {
  name: string;
  icon: IconType;
  color: string;
};

export const technologies: TechItem[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Framer", icon: SiFramer, color: "#0055FF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

export const testimonials = [
  {
    name: "Maya Chen",
    role: "Founder, LumaPay",
    company: "Fintech SaaS",
    quote:
      "Crevio IT brought structure, taste, and technical confidence to our product. The redesign felt premium immediately and our onboarding completion improved within weeks.",
  },
  {
    name: "Daniel Brooks",
    role: "CEO, Northline Labs",
    company: "AI Operations",
    quote:
      "They understood the business behind the interface. Every screen had intent, every sprint shipped cleanly, and the final dashboard impressed our enterprise buyers.",
  },
  {
    name: "Ariana Patel",
    role: "Marketing Director, Vellum",
    company: "Lifestyle Brand",
    quote:
      "The brand system and website gave us the clarity we were missing. Crevio IT made the process calm, transparent, and genuinely exciting from start to finish.",
  },
  {
    name: "Jonas Reed",
    role: "Product Lead, MedFlow",
    company: "Healthcare Platform",
    quote:
      "Crevio IT rebuilt a complex experience into something patients and clinic teams could trust. Their UX thinking and development quality were exceptional.",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "For founders who need a refined brand presence or focused launch site.",
    features: ["Strategy workshop", "Up to 5 custom pages", "Responsive web design", "Core SEO setup", "2 weeks support"],
  },
  {
    name: "Growth",
    price: "$7,500",
    description: "For growing teams that need a premium product experience and conversion engine.",
    features: ["Product strategy", "UI/UX system", "Website or app build", "CMS or dashboard", "Analytics and QA", "30 days support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For ambitious platforms that need deep engineering, integrations, and long-term support.",
    features: ["Dedicated delivery team", "Frontend and backend", "SaaS architecture", "Cloud deployment", "App publishing", "Ongoing optimization"],
  },
];

export const faqs = [
  {
    question: "What types of projects does Crevio IT build?",
    answer:
      "We build brand identities, marketing websites, SaaS products, mobile apps, admin dashboards, frontend systems, backend APIs, and complete product launches.",
  },
  {
    question: "Can you work from only an idea?",
    answer:
      "Yes. Many clients start with a rough concept. We help define the product strategy, user flows, feature scope, design direction, and development roadmap before build begins.",
  },
  {
    question: "How long does a premium website take?",
    answer:
      "A focused website usually takes 3 to 6 weeks. More advanced platforms, dashboards, or apps can range from 8 to 16 weeks depending on scope and integrations.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer support for fixes, performance improvements, new features, app store releases, analytics, and ongoing product iteration.",
  },
  {
    question: "Do you design and develop in-house?",
    answer:
      "Yes. Strategy, UI/UX, branding, frontend, backend, Flutter development, QA, and launch support are handled by a coordinated Crevio IT team.",
  },
];

export const blogPosts = [
  {
    slug: "premium-saas-onboarding",
    title: "How premium SaaS onboarding turns first visits into active customers",
    excerpt: "The difference between a signup and a retained user often comes down to clarity, pacing, and the first three minutes.",
    category: "Product Strategy",
    date: "Feb 18, 2026",
  },
  {
    slug: "dashboard-design-decisions",
    title: "Design decisions that make complex dashboards feel calm",
    excerpt: "A practical look at hierarchy, density, motion, and information architecture for data-heavy products.",
    category: "UI/UX Design",
    date: "Jan 27, 2026",
  },
  {
    slug: "flutter-launch-checklist",
    title: "The mobile app launch checklist every founder should know",
    excerpt: "From store assets to privacy flows, these are the details that prevent last-minute publishing delays.",
    category: "Mobile Apps",
    date: "Jan 8, 2026",
  },
];

export const legalUpdated = "Updated January 2026";
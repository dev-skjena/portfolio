import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "telemedicine",
    category: "Healthcare",
    title: "Telemedicine Platform",
    src: "/assets/projects-screenshots/telemedicine/landing.png",
    screenshots: ["landing.png", "consultation.png", "dashboard.png"],
    live: "/projects/telemedicine",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive healthcare platform connecting patients with doctors
            through secure video consultations, appointment scheduling, and
            digital prescriptions. Experience modern healthcare with seamless
            virtual consultations and integrated health record management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Video Consultations</TypographyH3>
          <p className="font-mono mb-2">
            Secure, high-quality video calls between patients and healthcare
            providers with real-time chat and file sharing capabilities.
          </p>
          <SlideShow images={[`${BASE_PATH}/telemedicine/consultation.png`]} />
          <TypographyH3 className="my-4 mt-8">Patient Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive patient portal for managing appointments, viewing
            medical history, and accessing digital prescriptions.
          </p>
          <SlideShow images={[`${BASE_PATH}/telemedicine/dashboard.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Digital Prescriptions
          </TypographyH3>
          <p className="font-mono mb-2">
            Electronic prescription system with pharmacy integration for
            seamless medication management and delivery.
          </p>
        </div>
      );
    },
  },
  {
    id: "creatorhub",
    category: "Content Management",
    title: "CreatorHub Platform",
    src: "/assets/projects-screenshots/creatorhub/landing.png",
    screenshots: [
      "landing.png",
      "dashboard.png",
      "analytics.png",
      "monetization.png",
    ],
    live: "/projects/creatorhub",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Empowering content creators with a unified platform for managing
            their digital presence. Features include content scheduling,
            analytics dashboard, monetization tools, and community engagement
            features. Build your brand and connect with your audience like never
            before.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Content Scheduling</TypographyH3>
          <p className="font-mono mb-2">
            Plan and schedule your content across multiple platforms with our
            intuitive calendar interface and automated posting.
          </p>
          <SlideShow images={[`${BASE_PATH}/creatorhub/dashboard.png`]} />
          <TypographyH3 className="my-4 mt-8">Analytics Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Track your performance with detailed analytics, engagement metrics,
            and audience insights to optimize your content strategy.
          </p>
          <SlideShow images={[`${BASE_PATH}/creatorhub/analytics.png`]} />
          <TypographyH3 className="my-4 mt-8">Monetization Tools</TypographyH3>
          <p className="font-mono mb-2">
            Multiple revenue streams including subscriptions, donations,
            merchandise integration, and sponsored content management.
          </p>
          <SlideShow images={[`${BASE_PATH}/creatorhub/monetization.png`]} />
        </div>
      );
    },
  },
  {
    id: "eventmanagement",
    category: "Event Planning",
    title: "Event Management System",
    src: "/assets/projects-screenshots/eventmanagement/landing.png",
    screenshots: [
      "landing.png",
      "booking.png",
      "guests.png",
      "analytics.png",
      "tickets.png",
    ],
    live: "/projects/eventmanagement",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Streamline your event planning with our comprehensive management
            system. From venue booking and guest management to ticketing and
            real-time analytics, organize memorable events with ease. Perfect
            for corporate events, weddings, and large-scale conferences.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Venue Management</TypographyH3>
          <p className="font-mono mb-2">
            Browse and book venues with detailed information, availability
            calendars, and integrated payment processing.
          </p>
          <SlideShow images={[`${BASE_PATH}/eventmanagement/booking.png`]} />
          <TypographyH3 className="my-4 mt-8">Guest Management</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive guest list management with RSVP tracking, dietary
            preferences, and automated communication.
          </p>
          <SlideShow images={[`${BASE_PATH}/eventmanagement/guests.png`]} />
          <TypographyH3 className="my-4 mt-8">Ticketing System</TypographyH3>
          <p className="font-mono mb-2">
            Create and manage tickets with QR codes, different pricing tiers,
            and real-time sales tracking.
          </p>
          <SlideShow images={[`${BASE_PATH}/eventmanagement/tickets.png`]} />
          <TypographyH3 className="my-4 mt-8">Real-time Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Monitor event performance with live dashboards showing attendance,
            revenue, and engagement metrics.
          </p>
          <SlideShow images={[`${BASE_PATH}/eventmanagement/analytics.png`]} />
        </div>
      );
    },
  },
  {
    id: "attendance-ai",
    category: "AI/HR Technology",
    title: "Attendance Tracking System with AI Face Detection",
    src: "/assets/projects-screenshots/attendance-ai/landing.png",
    screenshots: ["landing.png", "facedetection.png", "dashboard.png"],
    live: "/projects/attendance-ai",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Revolutionary attendance management powered by AI facial recognition
            technology. Eliminate buddy punching and ensure accurate time
            tracking with real-time face detection, automated reporting, and
            seamless integration with HR systems. The future of workforce
            management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">AI Face Recognition</TypographyH3>
          <p className="font-mono mb-2">
            Advanced facial recognition technology with 99.9% accuracy,
            anti-spoofing measures, and real-time detection capabilities.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/attendance-ai/facedetection.png`]}
          />
          <TypographyH3 className="my-4 mt-8">HR Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive dashboard for HR managers with attendance reports,
            employee analytics, and automated payroll integration.
          </p>
          <SlideShow images={[`${BASE_PATH}/attendance-ai/dashboard.png`]} />
          <TypographyH3 className="my-4 mt-8">Security Features</TypographyH3>
          <p className="font-mono mb-2">
            Multi-layer security with encrypted data storage, audit trails, and
            compliance with privacy regulations.
          </p>
        </div>
      );
    },
  },
  {
    id: "inventory",
    category: "Business Management",
    title: "Inventory Management System",
    src: "/assets/projects-screenshots/inventory/landing.png",
    screenshots: [
      "landing.png",
      "dashboard.png",
      "analytics.png",
      "suppliers.png",
    ],
    live: "/projects/inventory",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Optimize your business operations with our intelligent inventory
            management solution. Track stock levels, automate reordering, manage
            suppliers, and generate detailed reports. Reduce costs and improve
            efficiency with real-time inventory insights and predictive
            analytics.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Stock Management</TypographyH3>
          <p className="font-mono mb-2">
            Real-time stock tracking with low-stock alerts, batch tracking, and
            automated reorder points for seamless inventory control.
          </p>
          <SlideShow images={[`${BASE_PATH}/inventory/dashboard.png`]} />
          <TypographyH3 className="my-4 mt-8">Supplier Management</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive supplier database with performance tracking, automated
            purchase orders, and vendor comparison tools.
          </p>
          <SlideShow images={[`${BASE_PATH}/inventory/suppliers.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Analytics & Reporting
          </TypographyH3>
          <p className="font-mono mb-2">
            Advanced analytics with sales forecasting, inventory turnover
            reports, and cost optimization recommendations.
          </p>
          <SlideShow images={[`${BASE_PATH}/inventory/analytics.png`]} />
        </div>
      );
    },
  },
  {
    id: "ecommerce",
    category: "E-commerce",
    title: "Ecommerce Platform",
    src: "/assets/projects-screenshots/ecommerce/landing.png",
    screenshots: [
      "landing.png",
      "products.png",
      "checkout.png",
      "admin.png",
      "analytics.png",
    ],
    live: "/projects/ecommerce",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-featured ecommerce solution built for modern businesses.
            Features include product catalog management, secure payment
            processing, order tracking, customer reviews, and advanced
            analytics. Scale your online business with our robust and
            user-friendly platform.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Product Catalog</TypographyH3>
          <p className="font-mono mb-2">
            Advanced product management with categories, variants, inventory
            tracking, and SEO optimization for better discoverability.
          </p>
          <SlideShow images={[`${BASE_PATH}/ecommerce/products.png`]} />
          <TypographyH3 className="my-4 mt-8">Secure Checkout</TypographyH3>
          <p className="font-mono mb-2">
            Streamlined checkout process with multiple payment gateways, guest
            checkout, and abandoned cart recovery.
          </p>
          <SlideShow images={[`${BASE_PATH}/ecommerce/checkout.png`]} />
          <TypographyH3 className="my-4 mt-8">Admin Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive admin panel for managing orders, customers, inventory,
            and business analytics with intuitive controls.
          </p>
          <SlideShow images={[`${BASE_PATH}/ecommerce/admin.png`]} />
          <TypographyH3 className="my-4 mt-8">Business Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Detailed sales reports, customer insights, and performance metrics
            to help grow your business strategically.
          </p>
          <SlideShow images={[`${BASE_PATH}/ecommerce/analytics.png`]} />
        </div>
      );
    },
  },
];
export default projects;

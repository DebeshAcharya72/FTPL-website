import ftcsLogo from '../assets/brands/Ftcs.png';
import bootup360Logo from '../assets/brands/BootUp360_tm.png';
import jsjLogo from '../assets/brands/jsj_logo.png';
import byerLogo from '../assets/brands/byer.png';

export { ftcsLogo, bootup360Logo, jsjLogo, byerLogo };

export const brandsData = [
  {
    id: "ftcs",
    name: "Flasho Tech Consultancy Services",
    shortName: "FTCS",
    category: "Consulting Wing",
    tagline: "Business and technology consulting",
    homeSummary: "Our consulting wing provides business and technology services for startups and small and medium enterprises.",
    description: "FTCS works with startups and SMEs on business growth planning, market research, digital marketing, marketplace listing support, website and software development, and AI solutions. It also works on predictive maintenance and machine failure detection for manufacturing operations.",
    externalUrl: "https://www.ftcs.in/",
    logo: ftcsLogo,
    primaryCta: {
      label: "Visit FTCS",
      href: "https://www.ftcs.in/",
      external: true
    },
    secondaryCta: {
      label: "View Consulting Services",
      to: "/services"
    },
    accentColor: "brandBlue",
    icon: "Briefcase"
  },
  {
    id: "bootup360",
    name: "BootUp360",
    shortName: "BootUp360",
    category: "Training Initiative",
    tagline: "Practical training and skills development",
    homeSummary: "Practical training and workshops for students, professionals, and teams.",
    description: "BootUp360 delivers training and workshops that help students, professionals, and teams develop skills they can use in the workplace. Institutions can get in touch to discuss workshops and training needs.",
    externalUrl: "https://www.bootup360.com/",
    logo: bootup360Logo,
    primaryCta: {
      label: "Visit BootUp360",
      href: "https://www.bootup360.com/",
      external: true
    },
    secondaryCta: {
      label: "Enquire About Training",
      to: "/contact?interest=training"
    },
    accentColor: "brandRed",
    icon: "GraduationCap"
  },
  {
    id: "jsj-card",
    name: "JSJ Card",
    shortName: "JSJ Card",
    category: "Digital Product",
    tagline: "Digital identity for businesses and individuals",
    homeSummary: "A digital identity card for businesses and individuals to share their profiles and contact details.",
    description: "JSJ Card lets businesses and individuals share their profile and contact details through a digital identity card. Use it when introducing your business, meeting customers, or exchanging professional details.",
    externalUrl: "https://www.jsjcard.com/",
    logo: jsjLogo,
    primaryCta: {
      label: "Visit JSJ Card",
      href: "https://www.jsjcard.com/",
      external: true
    },
    secondaryCta: {
      label: "Ask About JSJ Card",
      to: "/contact?interest=jsj"
    },
    accentColor: "brandBlue",
    icon: "CreditCard"
  },
  {
    id: "byer",
    name: "BYER",
    shortName: "BYER",
    category: "B2B Platform",
    tagline: "Building the Future of B2B Distribution",
    homeSummary: "A B2B distribution platform connecting suppliers with foodservice operators, retailers, and emerging businesses.",
    description: "BYER connects brands, manufacturers, and suppliers with restaurants, cloud kitchens, caterers, retailers, and emerging businesses through one integrated B2B distribution network.",
    externalUrl: "https://byer.in/",
    logo: byerLogo,
    primaryCta: {
      label: "Visit BYER",
      href: "https://byer.in/",
      external: true
    },
    secondaryCta: {
      label: "Explore byer.in",
      href: "https://byer.in/",
      external: true
    },
    accentColor: "emerald",
    icon: "Truck"
  }
];

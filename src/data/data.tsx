import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import CodewarsIcon from '../components/Icon/CodewarsIcon';
import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import finance from '../images/portfolio/finance.jpg';
import kanban from '../images/portfolio/kanban.jpg';
import quote from '../images/portfolio/quote.jpg';
import yesLogistics from '../images/portfolio/yesLogistics.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import currencyConverter from '../images/portfolio/currencyConverter.png';
import unicarta from '../images/portfolio/unicarta.png';
import chatbot from '../images/portfolio/chatbot.png';
import trainBooking from '../images/portfolio/trainBooking.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sumit',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sumit Kumar Sinha.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        As a <strong className="text-stone-100">Full Stack Software Engineer </strong> based in Ranchi, I bring a wealth
        of experience from my tenure at MissCallPay, where I contributed to the development of impactful web
        applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside the realm of coding, I find joy in engaging <strong className="text-stone-100">Chess</strong>, matches
        during my leisure moments.{' '}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Sumit Kumar Sinha, a dynamic Full Stack Software Engineer based in Ranchi. My professional journey has been shaped by my impactful contributions at MissCallPay, where I played a pivotal role in shaping robust web applications.

  Outside the world of coding, you'll find me exploring diverse interests, from delving into strategic board games to unwinding with a good book. Always enthusiastic about embracing new challenges and constantly pushing the boundaries of what's possible in the tech realm!`,
  aboutItems: [
    {label: 'Location', text: 'Ranchi, Jharkhand', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Chess,Hiking,Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'National Institute of Technology Mizoram', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Former MissCallPay', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages ',
    skills: [
      {
        name: 'Javascript',
        level: 10,
      },
      {
        name: 'C++',
        level: 9,
      },
      {
        name: 'Silvaco',
        level: 8,
      },
      {
        name: 'Verilog',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Angular',
        level: 10,
      },
      {
        name: 'Next.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Express.js',
        level: 10,
      },
      {
        name: 'MongoDB',
        level: 9,
      },
    ],
  },
  {
    name: 'Tools/FrameWorks',
    skills: [
      {
        name: 'RxJS',
        level: 9,
      },
      {
        name: 'Socket.io',
        level: 7,
      },
      {
        name: 'OAuth',
        level: 5,
      },
      {
        name: 'Angular Material',
        level: 8,
      },
      {
        name: 'AppWrite',
        level: 8,
      },
      {
        name: 'Bootstrap',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Expense Tracker ',
    description:
      'Crafting sophisticated enterprise solutions for expense tracking, our mission is to empower businesses with insightful data extracted from bank statements, fostering informed decision-making and strategic choices.',
    url: 'https://github.com/sum1275/expence_tracker_frontend.git',
    image: finance,
  },
  {
    title: 'Kanban App',
    description:
      'Revolutionizing task management with our Kanban app, we provide a streamlined platform for efficient workflow visualization, task organization, and collaboration.',
    url: 'https://github.com/sum1275/Kanban-App.git',
    image: kanban,
  },
  {
    title: 'Fancy Quote Generator',
    description:
      'Unleash creativity with our Fancy Quote Generator, a vibrant tool allowing users to customize and share visually appealing quotes in an instant.',
    url: 'https://github.com/sum1275/final-polaris.git',
    image: quote,
  },
  {
    title: 'Yes Logistics Website',
    description:
      "Designed a sleek and responsive Yes Logistics website using React, Vite, and Tailwind CSS, combining seamless functionality with modern aesthetics. The website offers an intuitive user experience, reflecting the efficiency and innovation of Yes Logistics' services. Elevating the brand's online presence through a dynamic and visually appealing React-based interface.",
    url: 'https://yes-logistics.vercel.app/',
    image: yesLogistics,
  },

  {
    title: 'Unicarta e-commerce',
    description:
      "Designed and implemented a dynamic e-commerce platform featuring user-centric functionalities including 'Add to Cart' for seamless product selection and a 'Checkout' process with discount code validation. Incorporated special offers such as a 10% discount code for every nth order, enhancing customer engagement. On the administrative side, the system auto-generates discount codes post-nth orders and offers comprehensive analytics on sales, total revenue, discount usage, and overall discount impact, providing valuable insights for business optimization.",
    url: 'https://unicarta.vercel.app/',
    image: unicarta,
  },

  {
    title: 'Train Seat Booking System ',
    description:
      'The project offers an effective train seat booking system for an 80-seat coach, optimizing seat assignments to ensure groups of up to seven can sit together in consecutive rows. It allows for multiple bookings until full and provides instant updates on seat availability and selections. This user-friendly solution streamlines the booking process and efficiently addresses seat distribution challenges, enhancing passenger convenience.',
    url: 'https://unstop-frontend-one.vercel.app/',
    image: trainBooking,
  },
  {
    title: 'Chatbot flow builder ',
    description:
      'This project is focused on building a simple Chatbot Flow Builder using React. The goal is to create a tool that allows users to visually construct the flow of a chatbot by connecting messages together, determining the sequence of interactions. The design aims for extensibility, facilitating the easy addition of new features and node types in the future.',
    url: 'https://chatbot-flow-builder-six.vercel.app/',
    image: chatbot,
  },
  {
    title: 'Currency Converter ',
    description:
      "Built with React Vite and Tailwind CSS, this currency converter app offers a sleek, responsive user interface for instant currency exchange rate calculations. It leverages the latest web technologies for fast, efficient conversions across a wide range of currencies. The app's intuitive design ensures a smooth, user-friendly experience for global users.",
    url: 'https://currency-converter-sum1275.vercel.app/',
    image: currencyConverter,
  },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2022',
    location: 'National Institute of Technology Mizoram',
    title: 'B.Tech in Electronics and Communication',
    content: <p></p>,
  },
  {
    date: 'May 2017',
    location: 'Gossner College',
    title: 'Senior Secondary Examination',
    content: <p></p>,
  },
  {
    date: 'May 2015',
    location: 'St Jagat Gyan Sr. Secondary Public School',
    title: 'Matriculation',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022- August 2023',
    location: 'MissCallPay',
    title: 'FullStack Developer',
    content: (
      <p>
        • Developed the login panel for MissCallPay.<br></br>• Integrated Axis Bank's BBPS, expanding MissCallPay's
        utility and potential revenue streams.<br></br>• Created a mobile backend merchant registration system for
        MissCallPay, enabling merchants to conduct transactions.<br></br>• Designed the P2OM onboarding for other
        platform merchants such as GPay and PhonePay, expanding MissCallPay's user base.<br></br>• Developed a biller
        reconciliation system for MissCallPay, ensuring accurate payment processing and reducing errors.<br></br>
      </p>
    ),
  },
  {
    date: 'December 2019 - February 2020',
    location: 'Yes Logistics',
    title: 'Web Developer Intern',
    content: (
      <p>
        • Developed Company Website<br></br>• Implemented analytics and error reporting
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'sumit.btech.ece@nitmz.ac.in',
      href: 'mailto:sumit.btech.ece@nitmz.ac.in',
    },
    {
      type: ContactType.Location,
      text: 'Ranchi Jharkhand, India',
      href: '#',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'sum1275',
      href: 'https://github.com/sum1275',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sum1275'},
  //  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sumit-kumar-sinha-320108188/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Sumitku01036495'},
  // {label: 'Codewars', Icon: CodewarsIcon, href: 'https://www.codewars.com/users/sum1275'},
];

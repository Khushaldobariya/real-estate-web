import { ProjectProps, TeamMember } from "./type";

export const ProjectTypes = ["Apartment", "Villa", "Plot", "Commercial"];

export const Configurations = [
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "5 BHK",
  "Office Space",
  "Shop",
  "NA",
];

export const PriceRanges = [
  "10L - 25L",
  "20L - 35L",
  "40L - 60L",
  "45L - 65L",
  "50L - 1Cr",
  "70L - 90L",
  "80L - 1.2Cr",
  "1.5Cr - 2Cr",
  "2Cr - 3Cr",
];

export const Locations = [
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Delhi",
  "Chennai",
  "Goa",
  "Jaipur",
  "Ahmedabad",
  "Kolkata",
];

export const ServiceData = [
  {
    title: "Ghar Ho Toh Aisa",
    description:
      "Revolutionizing flat interiors to maximize space utilization. With zero wastage design, every corner is purposefully crafted, ensuring that you get the most out of your living space.",
    link: "#",
  },
  {
    title: "Apne Dam Par",
    description:
      "Designed to revolutionize home financing. 'Apne Dam Par' is all about smart home loan planning, easing the financial burden on our customers.",
    link: "#",
  },
  {
    title: "Growth Partner",
    description:
      "Tailored for investors seeking safe and assured returns. This unique plan offers a floor-to-floor partnership model, ensuring a secure and lucrative investment opportunity.",
    link: "#",
  },
];

export const LocationsArea = [
  "Mira Road",
  "Vasai",
  "Nalasopara",
  "Thane",
  "Naigaon",
];

export const Testimonials = [
  {
    name: "Parag Dubey",
    role: "Complex Customer",
    review:
      "After some projects, I have seen one of the best projects in the prime location Mira Road, loyal employees and amenities are awesome. Transparent information ghar ho to aisa a well-known brand.",
    date: "Mar 18, 2023",
    rating: null,
  },
  {
    name: "Adarsh Jaiswal",
    role: "Complex Customer",
    review:
      "After some projects, I have seen one of the best projects in the prime location Mira Road, loyal employees and amenities are awesome. Transparent information ghar ho to aisa a well-known brand.",
    date: "Mar 18, 2023",
    rating: null,
  },
  {
    name: "Shruti",
    role: "Customer",
    review:
      "Since I was turned down for a home loan. I had all but given up on ever owning my own house. Only the “Apne Dam Par” Payment Plan from Ghar Ho To Aisa made my dream come true.",
    date: "Mar 18, 2023",
    rating: 4,
  },
  {
    name: "Shruti",
    role: "Customer",
    review:
      "Since I was turned down for a home loan. I had all but given up on ever owning my own house. Only the “Apne Dam Par” Payment Plan from Ghar Ho To Aisa made my dream come true.",
    date: "Mar 18, 2023",
    rating: 4,
  },
];

export const News_Blog = [
  {
    image: "/assets/images/blog1.png",
    title: "Rashmi Group's Visionary Move: Unveiling the Future",
    description: "Commitment to Growth and Innovation.",
    link: "#",
    label: "Featured",
  },
  {
    image: "/assets/images/blog2.png",
    title: "Ghar Ho To Aisa’s Swapnapuri Ganesh Temple Inauguration",
    description: "Unites Tradition in Vasai.",
    link: "#",
  },
  {
    image: "/assets/images/blog3.png",
    title: "Unleashing the Power of Strategic Investment",
    description: "Embracing Growth Partner Strategies.",
    link: "#",
  },
  {
    image: "/assets/images/blog4.png",
    title: "Unleashing the Power of Strategic Investment",
    description: "Embracing Growth Partner Strategies.",
    link: "#",
  },
];

export const FooterData = {
  address:
    "6th Flr, Classic Pentagon, W.E. Highway, Next to Bisleri Factory, Andheri (East), Mumbai - 400 099.",
  contact: {
    phone: "+91 22 42275700",
    email: "info@gharhotoaisa.com",
  },
  companyLinks: [
    "About",
    "Investors",
    "Innovation",
    "Projects",
    "Blogs",
    "Contact",
  ],
  socialLinks: [
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Youtube", url: "#" },
  ],
};

export const Partners_Bank = [
  "/assets/images/partner/1.svg",
  "/assets/images/partner/4.svg",
  "/assets/images/partner/5.svg",
  "/assets/images/partner/6.svg",
  "/assets/images/partner/7.svg",
  "/assets/images/partner/8.svg",
  "/assets/images/partner/9.svg",
  "/assets/images/partner/10.svg",
  "/assets/images/partner/11.svg",
  "/assets/images/partner/12.svg",
];

// export const Store_Timeline = [
//   {
//     year: 2024,
//     title: "Launch of ‘Horizon Complex’",
//     description:
//       "Introducing our 50th project in our home ground of Mira Road, where the next generation paves the way forward. Join us as we continue our legacy of innovation and excellence, creating homes that redefine modern living.",
//     icon: "Building2",
//     lat: 19.2952,
//     lng: 72.8544,
//   },
//   {
//     year: 2024,
//     title: "Mandir Inauguration at Vasai",
//     description:
//       "Join us for the grand inauguration of our Mandir in Vasai, a testament to our belief in fostering a thriving community. Together, let's celebrate the spirit of togetherness and unity.",
//     icon: "Landmark",
//     lat: 19.3650,
//     lng: 72.8328, // Vasai
//   },
//   {
//     year: 2023,
//     title: "Horizon Complex, Mira Road, construction starts.",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//     icon: "TrendingUp",
//     lat: 19.2952,
//     lng: 72.8544, // Mira Road
//   },
//   {
//     year: 2017,
//     title: "Started Hospital in Naigaon",
//     description:
//       "Providing healthcare facilities to the community with modern medical infrastructure.",
//     icon: "Hospital",
//     lat: 19.4251,
//     lng: 72.8310, // Naigaon
//   },
//   {
//     year: 2016,
//     title: "Started Secondary School in Naigaon",
//     description: "Building a strong foundation for education in the community.",
//     icon: "School",
//     lat: 19.4251,
//     lng: 72.8310, // Naigaon
//   },
//   {
//     year: 2015,
//     title: "Mandir inauguration at Naigaon",
//     description: "A spiritual landmark fostering community togetherness.",
//     icon: "Landmark",
//     lat: 19.4251,
//     lng: 72.8310, // Naigaon
//   },
//   {
//     year: 2015,
//     title: "Rashmi Classic & Heights, 12 buildings, Vasai",
//     description:
//       "Developing quality housing solutions in Vasai with a focus on modern living.",
//     icon: "Home",
//     lat: 19.3650,
//     lng: 72.8328, // Vasai
//   },
//   {
//     year: 2006,
//     title: "Mandir inauguration at Mira Road",
//     description: "A place of worship and peace for the community.",
//     icon: "Landmark",
//     lat: 19.2952,
//     lng: 72.8544, // Mira Road
//   },
//   {
//     year: 2006,
//     title: "Started Primary School in Mira Road",
//     description: "Providing education for the younger generation.",
//     icon: "School",
//     lat: 19.2952,
//     lng: 72.8544, // Mira Road
//   },
//   {
//     year: 2004,
//     title: "Started Primary School in Mira Road",
//     description: "Creating an early learning foundation for students.",
//     icon: "School",
//     lat: 19.2952,
//     lng: 72.8544, // Mira Road
//   },
//   // {
//   //   year: 2000,
//   //   title: "Started Our Journey",
//   //   description: "Marking the beginning of our legacy in real estate.",
//   //   icon: "MapPin",
//   //   lat: null,
//   //   lng: null, // No specific location provided
//   // },
// ];

export const Store_Timeline = [
  {
    year: 2024,
    title: "Launch of ‘Horizon Complex’",
    description:
      "Introducing our 50th project in our home ground of Mira Road, where the next generation paves the way forward.",
    icon: "Building2",
    lat: 19.2952,
    lng: 72.8544, // Mira Road
  },
  {
    year: 2024,
    title: "Mandir Inauguration at Vasai",
    description:
      "Join us for the grand inauguration of our Mandir in Vasai, a testament to our belief in fostering a thriving community.",
    icon: "Landmark",
    lat: 19.365,
    lng: 72.8328, // Vasai
  },
  {
    year: 2023,
    title: "Horizon Complex, Mira Road, construction starts.",
    description:
      "Construction begins on Horizon Complex in Mira Road, pushing forward innovation in real estate.",
    icon: "TrendingUp",
    lat: 19.2952,
    lng: 72.8544, // Mira Road
  },
  {
    year: 2017,
    title: "Started Hospital in Naigaon",
    description:
      "Providing healthcare facilities to the community with modern medical infrastructure.",
    icon: "Hospital",
    lat: 19.4251,
    lng: 72.831, // Naigaon
  },
  {
    year: 2016,
    title: "Started Secondary School in Naigaon",
    description: "Building a strong foundation for education in the community.",
    icon: "School",
    lat: 19.4251,
    lng: 72.831, // Naigaon
  },
  {
    year: 2015,
    title: "Mandir inauguration at Naigaon",
    description: "A spiritual landmark fostering community togetherness.",
    icon: "Landmark",
    lat: 19.4251,
    lng: 72.831, // Naigaon
  },
  {
    year: 2015,
    title: "Rashmi Classic & Heights, 12 buildings, Vasai",
    description:
      "Developing quality housing solutions in Vasai with a focus on modern living.",
    icon: "Home",
    lat: 19.365,
    lng: 72.8328, // Vasai
  },
  {
    year: 2006,
    title: "Mandir inauguration at Mira Road",
    description: "A place of worship and peace for the community.",
    icon: "Landmark",
    lat: 19.2952,
    lng: 72.8544, // Mira Road
  },
  {
    year: 2006,
    title: "Started Primary School in Mira Road",
    description: "Providing education for the younger generation.",
    icon: "School",
    lat: 19.2952,
    lng: 72.8544, // Mira Road
  },
  {
    year: 2004,
    title: "Started Primary School in Mira Road",
    description: "Creating an early learning foundation for students.",
    icon: "School",
    lat: 19.2952,
    lng: 72.8544,
  },
  {
    year: 2000,
    title: "Started Our Journey",
    description: "Marking the beginning of our legacy in real estate.",
    icon: "MapPin",
    lat: 19.2952,
    lng: 72.8544,
  },
];

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "VASAI-E",
    image: "/assets/images/project/project1.webp",
  },
  {
    id: 2,
    title: "Project 2",
    image: "/assets/images/project/project2.webp",
  },
  {
    id: 3,
    title: "Project 3",
    image: "/assets/images/project/project3.webp",
  },
  {
    id: 4,
    title: "Project 4",
    image: "/assets/images/project/project4.webp",
  },
];

export const TeamMembers_list: TeamMember[] = [
  {
    name: "Ram",
    title: "Chief Creative Officer",
    image: "/assets/images/teamMember/chiefCreativeOfficer.webp",
  },
  {
    name: "Shyam",
    title: "Chief Talent Officer",
    image: "/assets/images/teamMember/ChiefTalentOfficer.webp",
  },
  {
    name: "Adarsh",
    title: "Chief Marketing Officer",
    image: "assets/images/teamMember/ChiefMarketingOfficer.webp",
  },
];

export const NavLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "gallery",
    path: "/gallery",
  },
  {
    title: "properties",
    subLink: [
      {
        title: "Commercial",
        path: "/commercial",
      },
      {
        title: "residence",
        path: "/residence",
      },
    ],
  },
  {
    title: "blog",
    path: "/blog",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

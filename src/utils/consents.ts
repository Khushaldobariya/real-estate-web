import { About_Project, Project, ProjectDataType, ProjectProps, TeamMember } from "./type";
import {
  Building2,
  Landmark,
  School,
  Hospital,
  MapPin,
  Home,

} from "lucide-react";

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

export const PriceRanges = [  "35L - 60L",
  "45L - 65L",
  "50L - 1Cr",
  "70L - 90L",
  "80L - 1.2Cr",
  "1.5Cr - 2Cr",
  "2Cr above",
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
  "Hyderabad"
];

export const Testimonials = [
  {
    name: "Parag Dubey",
    role: "Complex Customer",
    review:
      "After some projects, I have seen one of the best projects in the prime location Mira Road, loyal employees and amenities are awesome. Transparent information ghar ho to aisa a well-known brand.",
    date: "Mar 18, 2023",
    rating: 5,
  },
  {
    name: "Adarsh Jaiswal",
    role: "Complex Customer",
    review:
      "After some projects, I have seen one of the best projects in the prime location Mira Road, loyal employees and amenities are awesome. Transparent information ghar ho to aisa a well-known brand.",
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
    time:"10 min read",
    image: "/assets/images/blog/blog1.webp",
    title: "Rashmi Group's Visionary Move: Unveiling the Future Growth Hub in Mumbai's Naigaon, Vasai, and Virar",
    description: "Rashmi Group's commitment to Growth and Innovation",
    link: "#",
    label: "Featured",
  },
  {
    time:"10 min read",
    image: "/assets/images/blog/blog4.webp",
    title: "Ghar Ho To Aisa’s Swapnapuri Ganesh Temple Inauguration",
    description: "Ghar Ho To Aisa’s Swapnapurti Ganesh Temple inauguration in Vasai.",
    link: "#",
  },
  {
    time:"10 min read",
    image: "/assets/images/blog/blog3.webp",
    title: "Unleashing the Power of Strategic Investment",
    description: " Growth Partner by Ghar Ho To Aisa",
    link: "#",
  },
  {
    time:"12 min read",
    image: "/assets/images/blog/blog2.webp",
    title: "Unleashing the Power of Strategic Investment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
  "/assets/images/partner/13.svg",
];






export const About_project :About_Project[] = [
  {
    year: 2024,
    title: "Launch of ‘Horizon Complex’",
    description:
      "Introducing our 50th project in our home ground of Mira Road, where the next generation paves the way forward.",
    icon: Building2,
  },
  {
    year: 2024,
    title: "Mandir Inauguration at Vasai",
    description:
      "Join us for the grand inauguration of our Mandir in Vasai, a testament to our belief in fostering a thriving community.",
    icon: Landmark,
  },
  {
    year: 2023,
    title: "Horizon Complex, Mira Road, construction starts.",
    description:
      "Construction begins on our latest residential project at Mira Road.",
    icon: Building2,
  },
  {
    year: 2017,
    title: "Started Hospital in Naigaon",
    description:
      "Providing healthcare facilities to the community with modern medical infrastructure.",
    icon: Hospital,
  },
  {
    year: 2016,
    title: "Started Secondary School in Naigaon",
    description: "Building a strong foundation for education in the community.",
    icon: School,
  },
  {
    year: 2015,
    title: "Mandir inauguration at Naigaon",
    description: "A spiritual landmark fostering community togetherness.",
    icon: Landmark,
  },
  {
    year: 2015,
    title: "Rashmi Classic & Heights, 12 buildings, Vasai",
    description:
      "Developing quality housing solutions in Vasai with a focus on modern living.",
    icon: Home,
  },
  {
    year: 2006,
    title: "Mandir inauguration at Mira Road",
    description: "A place of worship and peace for the community.",
    icon: Landmark,
  },
  {
    year: 2006,
    title: "Started Primary School in Mira Road",
    description: "Providing education for the younger generation.",
    icon: School,
  },
  {
    year: 2004,
    title: "Started Primary School in Mira Road",
    description: "Creating an early learning foundation for students.",
    icon: School ,
  },
  {
    year: 2000,
    title: "Started Our Journey",
    description: "Marking the beginning of our legacy in real estate.",
    icon: MapPin,
  },
];

export const AllCompleteProjects: Project[] = [
  // 2014 Projects
  {
    name: "Rashmi Swastik Sadan",
    image:"/assets/images/project/complete/",
    location: "Bhayander",
    description: "Inaugurated in 2014, Rashmi Swastik Sadan stood tall with its single wing structure spanning up to G+9 floors, offering residents meticulously designed 1 and 2BHK residences with zero wastage flats.",
    year: 2014,
    lat: 19.308179266392184,
    lng: 72.86309738351184,
  },
  {
    image:"/assets/images/project/complete/",
    name: "Rashmi Star City Phase 1",
    location: "Vasai",
    description: "Completed in 2014, Rashmi Star City Phase 1 comprised 8 buildings, each rising to G+4 storeys, offering meticulously designed 1BHK residences with zero wastage flats.",
    year: 2014,
    lat: 19.3605473,
    lng: 72.8637378,
  },
  {
    image:"/assets/images/project/complete/Rashmi's-Divya-Complex.png",
    name: "Rashmi's Divya Complex",
    location: "Vasai",
    description: "Completed in 2014, Rashmi's Divya Complex comprised 8 buildings spanning up to G+4 storeys, offering meticulously designed 1BHK residences with zero wastage flats.",
    year: 2014,
    lat: 19.40691677512836,
    lng: 72.8268355498407,
  },

  // 2011 Projects
  {
    image:"/assets/images/project/complete/rashmi-pride-raw-house(vasai).png",
    name: "Rashmi Pride Rowhouse",
    location: "Vasai",
    description: "Rashmi Pride Rowhouse, featuring 2 stunning rowhouses with Steel+2 structure, was completed in 2011, offering unparalleled elegance and comfort in its design.",
    year: 2011,
    lat: 19.410608235817012,
    lng: 72.82926815690391,
  },

  // 2010 Projects
  {
    image:"/assets/images/project/complete/Rashmi hetal 2.png",
    name: "Rashmi Hetal 2",
    location: "Mira Road",
    description: "Inaugurated in 2010, Rashmi Hetal 2 featured 6 wings, rising gracefully up to G+7 storeys, offering a blend of 1 and 2BHK residences with zero wastage flats.",
    year: 2010,
    lat: 19.295551464058143,
    lng: 72.8715335999999,
  },
  {
    image:"/assets/images/project/complete/Rashmi-pride-(vasai).png",
    name: "Rashmi Pride",
    location: "Mira Road",
    description: "Inaugurated in 2010, Rashmi Pride stood tall with its 2 wings, each soaring to G+9 storeys, presenting a blend of 2 and 3BHK residences, characterized by zero wastage flats.",
    year: 2010,
    lat: 19.372008615871074,
    lng: 72.86851023043491,
  },
  {
    image:"/assets/images/project/complete/rashmi-pride-raw-house(vasai).png",
    name: "Rashmi Pride Rowhouse",
    location: "Mira Road",
    description: "In 2010, Rashmi Pride Rowhouse project was completed, featuring 8 rowhouses built over two stories each.",
    year: 2010,
    lat: 19.35091423654598,
    lng: 72.86884142290342,
  },
  {
    image:"/assets/images/project/complete/rashmi-regency-1.png",
    name: "Rashmi Garden",
    location: "Vasai",
    description: "Inaugurated in 2010, Rashmi Garden boasted 5 wings standing tall at G+7 storeys, featuring meticulously crafted 1 & 2BHK residences with zero wastage flats.",
    year: 2010,
    lat: 19.414092977227824,
    lng: 72.83552282324203,
  },
  {
    image:"/assets/images/project/complete/Rashmi-Complex-A-To-I-Vasai.png",
    name: "Rashmi Complex A To I",
    location: "Vasai",
    description: "Constructed in 2010, Rashmi Complex A To I boasted 9 wings, each rising up to G+4 storeys, featuring thoughtfully crafted 1 and 2BHK residences, ensuring zero wastage flats.",
    year: 2010,
    lat: 19.3919,
    lng: 72.8335,
  },

  {
    image:"/assets/images/project/complete/rashmi-vila.png",
    name: "Rashmi's Hill View",
    location: "Vasai",
    description: "Rashmi's Hill View, completed in 2010, boasted 3 wings rising up to G+7 storeys, presenting a range of 1&2BHK residences, featuring zero wastage flats for optimal living space.",
    year: 2010,
    lat: 19.50709518154385,
    lng: 72.8296122151419,
  },
  { 
    image:"/assets/images/project/complete/rashmi-regency-2.png",
    name: "Rashmi Regency 2",
    location: "Vasai",
    description: "In the year 2010, Rashmi Regency 2, with its 4 wings towering up to G+7 storeys, presented flawlessly crafted 1 and 2BHK residences, featuring zero wastage flats.",
    year: 2010,
    lat: 19.411042794957346,
    lng: 72.82539110869922,
  },

  {
    image:"/assets/images/project/complete/Rashmi's-Yug.png",
    name: "Rashmi's Yug",
    location: "Malad",
    description: "Inaugurated in 2010, Rashmi's Yug stood tall with its single wing, featuring G+7 storeys of 2BHK residences, each meticulously crafted with zero wastage flats.",
    year: 2010,
    lat: 19.305299570118645,
    lng: 72.85051845165682,
  },

  // 2009 Projects
  {
    image:"/assets/images/project/complete/Rashmi's-Dhruvita-Park.png",
    name: "Rashmi's Dhruvita Park",
    location: "Vasai East",
    description: "Inaugurated in 2009 with eight wings standing tall at G+7 storeys.",
    year: 2009,
    lat: 19.414495622367017,
    lng: 72.82446194259852,
  },
  {
    image:"/assets/images/project/complete/rashmi-regency-1.png",
    name: "Rashmi Regency 1",
    location: "Vasai",
    description: "Inaugurated in 2009, Rashmi Regency 1 featured 4 wings, each rising to G+7 storeys, presenting a range of meticulously crafted 1 and 2BHK residences with zero wastage flats.",
    year: 2009,
    lat: 19.40630976330119,
    lng: 72.82651289150589,
  },
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi Siddharth",
    location: "Mira Road",
    description: "Inaugurated in 2009, Rashmi Siddharth boasted 3 wings rising up to G+7 floors, featuring meticulously crafted 1&2BHK residences, ensuring zero wastage flats.",
    year: 2009,
    lat: 19.29581173279236,
    lng: 72.86953937972649,
  },

  // 2008 Projects
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi Utsav",
    location: "Mira Road",
    description: "Inaugurated in 2008, Rashmi Utsav boasted 4 wings reaching up to G+7 storeys, presenting a range of thoughtfully crafted 1&2BHK residences, each featuring zero wastage flats.",
    year: 2008,
    lat: 19.277868346750186,
    lng: 72.8743363638148,
  },
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi's Pride",
    location: "Vasai",
    description: "In 2008, Rashmi's Pride featured two buildings each soaring to G+7 storeys with modern designs.",
    year: 2008,
    lat: 19.294455920910597,
    lng: 72.87013449616866,
  },

  // 2007 Projects
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi Pride 2",
    location: "Mira Road",
    description: "In 2007, Rashmi Pride 2, a singular wing with G+7 storeys, presented lavish 4BHK residences, boasting zero wastage flats, marking the completion of another successful project.",
    year: 2007,
    lat: 19.290653784930303,
    lng: 72.87494191570522,
  },
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi's Residency",
    location: "Vasai",
    description: "Inaugurated in 2007, Rashmi's Residency boasted 14 wings rising majestically to G+7 storeys, featuring meticulously crafted 1 and 2BHK residences with zero wastage flats.",
    year: 2007,
    lat: 19.769770340280587,
    lng: 72.7840133525573,
  },

  // 2006 Projects
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi's Harsh",
    location: "Mira Road",
    description: "Inaugurated in 2006, Rashmi's Harsh boasted 6 wings across G+4/7 storeys, presenting a range of 1&2BHK residences with zero wastage flats, setting new benchmarks in modern living.",
    year: 2006,
    lat: 19.357777196069573,
    lng: 72.86261462880456,
  },
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi Villa - Nityanand Nagar",
    location: "Mira Road",
    description: "Rashmi Villa - Nityanand Nagar, consisting of 11 villas with Steal+2 structures, was completed in the year 2006, offering a serene living experience.",
    year: 2006,
    lat: 19.275639931687177,
    lng: 72.87372924240968,
  },
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi's Laxmi Sadan",
    location: "Bhayander",
    description: "Inaugurated in 2006, Rashmi's Laxmi Sadan boasted 8 buildings rising to G+4 storeys, presenting a range of thoughtfully crafted 1 and 2BHK residences, featuring zero wastage flats.",
    year: 2006,
    lat: 19.312457695875736,
    lng: 72.85448006642552,
  },
  {
    image:"/assets/images/project/complete/rashmi-vila.png",
    name: "Rashmi's Villa",
    location: "Vasai",
    description: "In 2006, Rashmi's Villa, featuring three luxurious villas, was completed, boasting stunning architecture and a serene environment.",
    year: 2006,
    lat: 19.411903767783528,
    lng: 72.82926863727428,
  },

  // 2005 Projects
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi's Prime Corner",
    location: "Mira Road",
    description: "Rashmi's Prime Corner, completed in 2005, featured three buildings reaching up to G+7 storeys, offering a range of 1, 2, and 3BHK residences with zero wastage flats.",
    year: 2005,
    lat: 19.292174985796102,
    lng: 72.8709016550435,
  },
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi Complex",
    location: "Mira Road",
    description: "Rashmi Complex, with its 6 wings and G+4 storeys, offered 2BHK residences completed in 2005. Each unit boasted zero wastage flats, ensuring optimal space utilization.",
    year: 2005,
    lat: 19.37357724549025,
    lng: 72.87279908051278,
  },

  // 2003 Projects
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi' Hetal",
    location: "Mira Road",
    description: "Inaugurated in 2003, Rashmi Hetal stands tall with its 6 wings, G+4 storeys, and efficient 1BHK layouts, offering zero wastage flats for optimal living.",
    year: 2003,
    lat: 19.29529418757147,
    lng: 72.87103352680742,
  },

  // 2002 Projects
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi's Mangal Nagar",
    location: "Mira Road",
    description: "Inaugurated in 2002, Rashmi's Mangal Nagar featured 6 wings with G+4 storeys, offering a range of meticulously designed 1 and 2BHK residences, characterized by zero wastage flats.",
    year: 2002,
    lat: 19.4101779136513,
    lng: 72.84996752050384,
  },

  // 2000 Projects
  {
    image:"/assets/images/project/complete/Rashmi's-Residency-1.png",
    name: "Rashmi's Crystal",
    location: "Mira Road",
    description: "Inaugurated in the year 2000, Rashmi's Crystal boasted two wings with up to G+7 storeys, offering an array of meticulously crafted 1 and 2BHK residences, characterized by zero wastage flats.",
    year: 2000,
    lat: 19.35830185528764,
    lng: 72.85522769843742,
  },
];


export const AllComingProjects: Project[] = [
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Star City Phase 5",
    location: "Naigaon",
    lat: 19.3906,
    lng: 72.8485,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Lata",
    location: "Bhayander, Mumbai",
    lat: 19.3062,
    lng: 72.8511,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Snehdeep",
    location: "Ghatkopar, Mumbai",
    lat: 19.0866,
    lng: 72.9083,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Star City Phase 3",
    location: "Vasai, Mumbai",
    lat: 19.3919,
    lng: 72.8333,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Star City Phase 2",
    location: "Vasai, Mumbai",
    lat: 19.3919,
    lng: 72.8333,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Amara",
    location: "Vasai, Mumbai",
    lat: 19.3919,
    lng: 72.8333,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Horizon Heights",
    location: "Vasai, Mumbai",
    lat: 19.3919,
    lng: 72.8333,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Sarvesh",
    location: "Thane, Mumbai",
    lat: 19.2183,
    lng: 72.9781,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Horizon Complex",
    location: "Mira Road, Mumbai",
    lat: 19.2853,
    lng: 72.8688,
    year: null,
    description: "Under Construction",
  },
]


export const NaigaonComingProject: Project[] = [
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Star City Phase 5",
    location: "Naigaon",
    lat: 19.3906,
    lng: 72.8485,
    year: null,
    description: "Under Construction",
  },
];

export const BhayanderComingProject: Project[] = [
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Lata",
    location: "Bhayander, Mumbai",
    lat: 19.3062,
    lng: 72.8511,
    year: null,
    description: "Under Construction",
  },
];

export const GhatkoparComingProject: Project[] = [
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Snehdeep",
    location: "Ghatkopar, Mumbai",
    lat: 19.0866,
    lng: 72.9083,
    year: null,
    description: "Under Construction",
  },
];

export const VasaiComingProject: Project[] = [
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Star City Phase 3",
    location: "Vasai, Mumbai",
    lat: 19.3919,
    lng: 72.8333,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Star City Phase 2",
    location: "Vasai, Mumbai",
    lat: 19.3919,
    lng: 72.8333,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Amara",
    location: "Vasai, Mumbai",
    lat: 19.3919,
    lng: 72.8333,
    year: null,
    description: "Under Construction",
  },
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Horizon Heights",
    location: "Vasai, Mumbai",
    lat: 19.3919,
    lng: 72.8333,
    year: null,
    description: "Under Construction",
  },
];

export const ThaneComingProject: Project[] = [
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Rashmi Sarvesh",
    location: "Thane, Mumbai",
    lat: 19.2183,
    lng: 72.9781,
    year: null,
    description: "Under Construction",
  },
];

export const MiraRoadComingProject: Project[] = [
  {
    image:"/assets/images/projects/coming/Coming-Soon-1.png",
    name: "Horizon Complex",
    location: "Mira Road, Mumbai",
    lat: 19.2853,
    lng: 72.8688,
    year: null,
    description: "Under Construction",
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
    image: "/assets/images/teamMember/ChiefCreativeOfficer.webp",
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
  // {
  //   title: "gallery",
  //   path: "/gallery",
  // },
  {
    title: "innovations",
    path: "/innovations",
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

export const CompleteProject: ProjectDataType[] = [
  {
    id: 1,
    image: "assets/images/project/Image.webp",
    title: "Rashmi's Hetal",
    project_type: "Residential",
    address: "Mira Road, Mumbai, India",
    description:
      "Inaugurated in 2003, Rashmi Hetal stands tall with its 6 wings, G+4 storeys, and efficient 1BHK layouts, offering zero wastage flats for optimal living.",
    project_status: "Completed",
  },
  {
    id: 2,
    title: "Rashmi Star City Phase 1",
    project_type: "Residential",
    address: "Vasai, Mumbai, India",
    description:
      "Completed in 2014, Rashmi Star City Phase 1 comprised 8 buildings, each rising to G+4 storeys, offering meticulously designed 1BHK residences with zero wastage flats.",
    project_status: "Completed",
  },
  {
    id: 3,
    title: "Rashmi’s Sarvesh",
    project_type: "Residential",
    image: "assets/images/project/Image1.webp",
    address: "Thane, Mumbai, India",
    description: "Under Construction.",
    project_status: "Current",
  },
  {
    id: 4,
    title: "Rashmi Star City Phase 1",
    project_type: "Residential",
    address: "Vasai, Mumbai, India",
    description:
      "Completed in 2014, Rashmi Star City Phase 1 comprised 8 buildings, each rising to G+4 storeys, offering meticulously designed 1BHK residences with zero wastage flats.",
    project_status: "Completed",
  },
  {
    id: 5,
    title: "Rashmi’s Sarvesh",
    project_type: "Residential",
    image: "assets/images/project/Image2.webp",
    address: "Thane, Mumbai, India",
    description: "Under Construction.",
    project_status: "Current",
  },
  {
    id: 6,
    title: "Rashmi’s Residency",
    project_type: "Residential",
    image: "assets/images/project/Image3.webp",
    address: "Vasai, Mumbai, India",
    description:
      "Inaugurated in 2007, Rashmi's Residency boasted 14 wings rising majestically to G+7 storeys, featuring meticulously crafted 1 and 2BHK residences with zero wastage flats.",
    project_status: "Completed",
  },
  {
    id: 7,
    title: "Rashmi’s Divya Complex",
    project_type: "Residential",
    image: "assets/images/project/Image4.webp",
    address: "Vasai, Mumbai, India",
    description:
      "Completed in 2014, Rashmi's Divya Complex comprised 8 buildings spanning up to G+4 storeys, offering meticulously designed 1BHK residences with zero wastage flats.",
    project_status: "Completed",
  },
  {
    id: 8,
    title: "Rashmi’s Laxmi Sadan",
    project_type: "Residential",
    image: "assets/images/project/Image.webp",
    address: "Vasai, Mumbai, India",
    description:
      "Inaugurated in 2006, Rashmi's Laxmi Sadan boasted 8 buildings rising to G+4 storeys, presenting a range of thoughtfully crafted 1 and 2BHK residences, featuring zero wastage flats.",
    project_status: "UpComing",
  },
];

export const InnovationsData = [
  {
    number: "1st",
    title: "Ghar Ho Toh Aisa",
    description:
      "Introducing 'Ghar Ho Toh Aisa' - where your home truly feels like a dream. Our first innovation approach to flat interiors that maximizes space usability. Our zero wastage design ensures every inch serves a purpose, reducing unnecessary costs for our customers. Say goodbye to paying for unused areas and hello to a cost-effective yet luxurious living experience.",
    points: [
      "Zero Wastage Design",
      "Top Notch Interior Design",
      "Pocket Centric Approach",
    ],
    image: "/assets/images/innovations1.png",
  },
  {
    number: "2nd",
    title: "Apne Dam Par",
    description:
      "A solution to streamline home financing. With traditional home loans burdening customers with hefty interest payments over 15 years, our plan divides the flat cost into three parts: 30-40-30. You pay 30% as a down payment, 40% in interest-free monthly installments until possession, and the remaining 30% upon possession. This strategic approach reduces the loan amount from 100% to 30% at the end, significantly cutting interest and shortening the repayment period.",
    points: [
      "0% interest-free EMI",
      "Loan Tenure Reduces to 15 years",
      "Save Min 8-12Lac on Home Loan",
    ],
    image: "/assets/images/innovations1.png",
  },
];

export const SocialMediaData = [
  {
    image: "/assets/images/social/social2.png",
    platform: "Instagram",
    username: "@rashmigroupofficial_",
  },
  {
    image: "/assets/images/social/social1.png",
    platform: "Facebook",
    username: "@Rashmigroupmumbai",
  },
  {
    image: "/assets/images/social/social.png",
    platform: "Youtube",
    username: "@GharHoToAisa",
  },
];

export const Home_Images_SLider: string[] = [
  "/assets/images/home/horizonHeights.webp",
  "/assets/images/home/rashmiAmara.webp",
  "/assets/images/home/rashmiHorizonComplex.webp",
  "/assets/images/home/view4.webp",
];


export const StatsData = [
  { value: "25", label: "Years", size: "text-5xl" },
  { value: "14K+", label: "Customers", size: "text-4xl" },
  { value: "07", label: "Cities", size: "text-4xl" },
  { value: "1CR", label: "Landbank", size: "text-4xl" }
];

export const blogData = [
  {
    id: 1,
    date: "February 3, 2024",
    readTime: "5 min read",
    title: "Rashmi Group Revolutionizes Housing Landscape with 'Char Ho To Aisa and Apne Dam Par' Initiative - A Game Changer in Accessible Housing",
    description:
      "In the realm of housing, Rashmi Group has emerged as a pioneer with its groundbreaking initiative, “Ghar Ho To Aisa and Apne Dam Par.” This transformative approach not only redefines the landscape of housing but also empowers individuals to take.",
  },
  {
    id: 2,
    date: "October 12, 2023",
    readTime: "5 min read",
    title: "Mira Road Property: The Only Blog You Need To Read",
    description:
      "Mira Road, which is famous for its salt pans, is now famous for its properties. 10 years ago, properties here sold for 10 lacs are now sold for 1CR, and the price keeps increasing, but buying a property at Mira",
  },
  {
    id: 3,
    date: "November 23, 2023",
    readTime: "5 min read",
    title: "1BHK & 2BHK in Mira Road: Best Deal of the Year",
    description:
      "2023 is complex, but it is the best, like life. But, to make it more memorable for homebuyers, we as “Ghar Ho To Aisa – Rashmi Group” come up with our best offer, and that’s “1BHK Ki Price Mein 2BHK.”",
  },
  {
    id: 4,
    date: "September 12, 2023",
    readTime: "5 min read",
    title: "Why Buy a 2 BHK in Mira Road Right Now",
    description:
      "Introduction: Hey, Mumbaikar! Are you considering buying a 2 BHK home in Mira Road? Prepare to feel excited! In this blog, we have five great reasons that will make you want to grab those house keys as fast as you",
  },
  {
    id: 5,
    date: "August 29, 2023",
    readTime: "10 min read",
    title: "Finding Comfort & Style: The Allure of 2 Bedroom Flats in Mumbai Real Estate",
    description:
      "Introduction: Have you ever dreamed of living in the heart of the vibrant city of Mumbai? Well, the allure of 2 BHK flats might make that dream come true. These 2 BHK apartments have a combination of comfort and style.",
  },
  {
    id: 6,
    date: "August 17, 2023",
    readTime: "5 min read",
    title: "Growth Partner – Everything you need to know about",
    description:
      "Growth Partner is the latest innovation of Rashmi Group (Ghar Ho To Aisa). This plan is inspired by America’s real estate industry, where investors can only buy one floor. This allows investors to invest a smaller amount rather than a",
  },
  {
    id: 7,
    date: "August 8, 2023",
    readTime: "10 min read",
    title: "Is It Apne Dam Par Legit?",
    description:
      "When it looks too good, it’s a scam. It’s said that Apne Dam Par (ADP) can save you up to 40% of your home loan interest. If we put this word into numbers, it’s more than 15 lacs! So, is",
  },
  {
    id: 8,
    date: "July 7, 2023",
    readTime: "5 min read",
    title: "Buying a Home: 9 Factors for a Connected Living Experience",
    description:
      "“Home is not just a place, it’s a feeling of belonging where cherished memories are made and dreams take root.” Introduction Are you thinking of buying a home, because it looks good? It’s not only about the physical aspects. Social",
  },
  {
    id: 9,
    date: "July 16, 2023",
    readTime: "10 min read",
    title: "Apne Dam Par Payment Plan: Your Money Saver!",
    description:
      "“Every problem create an opportunity; just identify it.” Why Apne Dam Par Payment Plan Exist? What if I tell you, you’ve to pay almost 40% more for your home, and you don’t have any other option? Injustice? Right? This is",
  },
];
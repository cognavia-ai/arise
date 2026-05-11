import type {
  ClinicInfo,
  DoctorInfo,
  NavLink,
  OperatingHour,
  Service,
  Stat,
  TeamMember,
  Testimonial,
} from "@/types";

// ---------------------------------------------------------------------------
// Clinic Information
// ---------------------------------------------------------------------------

export const CLINIC_INFO: ClinicInfo = {
  name: "Arise Medical Centre",
  tagline: "The Place Where Healing Starts",
  mission:
    "To nurture a healthy and happy community by providing quality health care through integrated and compassionate services.",
  vision:
    "A world without diseases — focusing on early detection of preventable non-communicable diseases following WHO standards and ICMR protocols.",
  phone: "+91 85920 20242",
  whatsapp: "https://wa.me/918592020242",
  email: "premmbbs@gmail.com",
  address:
    "Near Higher Secondary School, Villadom, Villadam, Thrissur, Kerala 680631, India",
  mapUrl:
    "https://maps.google.com/maps?q=Sukrithi+Family+Health+Centre+Villadom+Thrissur+Kerala+680631&t=&z=15&ie=UTF8&iwloc=&output=embed",
  fee: "From ₹500",
  paymentMethods: ["Cash", "UPI"],
};

// ---------------------------------------------------------------------------
// Operating Hours
// ---------------------------------------------------------------------------

export const OPERATING_HOURS: OperatingHour[] = [
  { day: "Monday", hours: "7:00 AM – 7:00 PM" },
  { day: "Tuesday", hours: "7:00 AM – 7:00 PM" },
  { day: "Wednesday", hours: "7:00 AM – 7:00 PM" },
  { day: "Thursday", hours: "7:00 AM – 7:00 PM" },
  { day: "Friday", hours: "7:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 7:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

// ---------------------------------------------------------------------------
// Doctor Information
// ---------------------------------------------------------------------------

export const DOCTOR_INFO: DoctorInfo = {
  name: "Dr. K S Premlal",
  fullTitle:
    "Dr. K S Premlal, MBBS, MD (Community Medicine), PGDFM, CCEBDM, BCCPM",
  qualifications: [
    {
      degree: "MBBS",
      institution: "Mahatma Gandhi Medical College and Research Institute, Pondicherry (Pondicherry University)",
      year: "2008",
    },
    {
      degree: "MD (Community Medicine)",
      institution: "Meenakshi Medical College and Research Institute, Kanchipuram",
      year: "2014",
    },
    {
      degree: "PGDFM (Post Graduate Diploma in Family Medicine)",
      institution: "CMC Vellore",
      year: "2024",
    },
    {
      degree: "CCEBDM (Certificate Course in Evidence Based Diabetes Management)",
      institution: "Public Health Foundation of India & Dr. Mohan's Diabetes Education Academy",
    },
    {
      degree: "BCCPM (Basic Certificate Course in Palliative Medicine)",
      institution: "WHO",
      year: "2021",
    },
    {
      degree: "MSc (Counselling and Psychotherapy)",
    },
    {
      degree: "Training for Cancer Screening",
      institution: "ICMR (National Institute of Cancer Prevention and Research)",
      year: "2021",
    },
    {
      degree: "Accredited for Diabetic Foot Care & Footwear Expert",
      institution: "CMC (Christian Medical College)",
    },
  ],
  registration: {
    number: "TMC 85605",
    council: "Tamil Nadu Medical Council",
  },
  experience: "Since 2009",
  practiceStartYear: 2009,
  languages: ["English", "Malayalam", "Hindi", "Tamil"],
  specializations: [
    "Community & Family Medicine",
    "Diabetology & Diabetic Foot Care",
    "Diabetic Wound Care Without Amputation",
    "Diabetic Reversal Program",
    "Preventive Oncology / Cancer Screening",
    "Pain Management & Palliative Care",
    "Counselling & Psychotherapy",
    "Preventive Cardiology",
  ],
  academicPosition:
    "Consultant Community and Family Physician, Arise Medical Centre | Former Professor, Kannur Medical College",
  profileImage: "/v1/images/doctor/dr-premlal.jpg",
};

// ---------------------------------------------------------------------------
// Team Members
// ---------------------------------------------------------------------------

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Sruthi MV",
    experience: "14 years",
    qualifications: "MBBS, MD",
    specialization: "Oncology, Primary Care",
    image: "/v1/images/team/dr-sruthi.jpg",
  },
  {
    name: "Dr. Prem K",
    experience: "10 years",
    qualifications: "MBBS, MD",
    specialization: "Diabetology, Primary Care",
    image: "/v1/images/team/dr-prem-k.jpg",
  },
];

// ---------------------------------------------------------------------------
// Testimonials (from Google Reviews)
// ---------------------------------------------------------------------------

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Vipindev Adat Vasudevan",
    text: "Really liked their approach to diabetes reversal. The approach of minimal medication, exercise, and diet plan helped me to bring down my Hba1c from 9.2 to 6.5 in less than three months. The FBS and PPBS values were down to normal level.",
    rating: 5,
    date: "2025-11-01",
    highlight: "HbA1c from 9.2 to 6.5 in 3 months",
  },
  {
    name: "Deepak MJ",
    text: "I have had an excellent experience with Dr. Premlal at Sukrithi Family Health Centre. He listens with patience, explains every concern clearly, and gives confidence to the patient. His approach is simple, practical, and very effective.",
    rating: 5,
    date: "2025-11-01",
    highlight: "Simple, practical, and very effective",
  },
  {
    name: "Binil Ns",
    text: "Dr Premlal and all the staffs are very good at what they are doing... Their service is also good. Clinic is very clean and clear.",
    rating: 5,
    date: "2026-02-01",
    highlight: "Clinic is very clean and clear",
  },
  {
    name: "Shaina K Thamban",
    text: "I have been an ulcerative colitis patient since 2012. When it was first detected, I was diagnosed with Grade 2 ulcerative colitis. Every year, I had to take steroids to control the disease, which affected my life a lot. Dr. Premlal's treatment made a significant difference.",
    rating: 5,
    date: "2025-12-01",
    highlight: "Treatment for ulcerative colitis",
  },
  {
    name: "Google Reviewer",
    text: "Best Diabetic Doctor in the city, friendly staff, good atmosphere.",
    rating: 5,
    date: "2025-10-01",
    highlight: "Best Diabetic Doctor in the city",
  },
  {
    name: "Google Reviewer",
    text: "Really Appreciated With The Service Of Doctors & Nurses. Excellent care and attention to every patient.",
    rating: 5,
    date: "2025-09-01",
    highlight: "Excellent care and attention",
  },
  {
    name: "Google Reviewer",
    text: "Best Infrastructure for healthcare needs and Good Medical Quality. Highly recommended for anyone seeking quality healthcare.",
    rating: 5,
    date: "2025-08-01",
    highlight: "Best Infrastructure for healthcare",
  },
];

// ---------------------------------------------------------------------------
// Statistics
// ---------------------------------------------------------------------------

export const STATS: Stat[] = [
  {
    label: "Years Experience",
    value: new Date().getFullYear() - 2009,
    suffix: "+",
  },
  { label: "Google Reviews", value: 387, suffix: "+" },
  { label: "Star Rating", value: 4.9, suffix: "/5" },
  { label: "Patients Treated", value: 10000, suffix: "+" },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export const SERVICES: Service[] = [
  {
    id: "diabetic-care-reversal",
    title: "Diabetic Care & Reversal",
    shortDescription:
      "Patients have reduced HbA1c from 9.2 to 6.5 in 3 months. Our CCEBDM-accredited program uses personalised diet, exercise, and minimal medication.",
    icon: "/icons/diabetes.svg",
    slug: "diabetic-care-reversal",
  },
  {
    id: "wound-care",
    title: "Diabetic Wound Care Without Amputation",
    shortDescription:
      "Before you consider amputation, consider us. CMC-accredited foot care that has saved limbs others deemed untreatable.",
    icon: "/icons/wound-care.svg",
    slug: "wound-care",
  },
  {
    id: "preventive-health",
    title: "Preventive Health",
    shortDescription:
      "Catch diabetes, heart disease, and cancer risks early — when a simple lifestyle change can replace a major intervention.",
    icon: "/icons/preventive.svg",
    slug: "preventive-health",
  },
  {
    id: "cancer-screening",
    title: "Cancer Screening",
    shortDescription:
      "ICMR-certified early detection following NICPR protocols. When cancer is caught early, survival rates improve dramatically.",
    icon: "/icons/cancer-screening.svg",
    slug: "cancer-screening",
  },
  {
    id: "pain-palliative-care",
    title: "Pain & Palliative Care",
    shortDescription:
      "WHO-certified care focused on reducing suffering and preserving dignity. Home visits available for bedridden patients.",
    icon: "/icons/palliative.svg",
    slug: "pain-palliative-care",
  },
  {
    id: "counselling",
    title: "Counselling & Psychotherapy",
    shortDescription:
      "Diabetes affects more than blood sugar. MSc-qualified counselling that treats the emotional weight of living with chronic illness.",
    icon: "/icons/counselling.svg",
    slug: "counselling",
  },
  {
    id: "tele-consultation",
    title: "Video / Tele Consultation",
    shortDescription:
      "Expert diabetic care from anywhere in India. Ideal for follow-ups, NRI patients, and ongoing management via secure video call.",
    icon: "/icons/teleconsult.svg",
    slug: "tele-consultation",
  },
];

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Academics", href: "/academics" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ---------------------------------------------------------------------------
// Social Links
// ---------------------------------------------------------------------------

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/sukrithihealth/",
  facebook: "https://www.facebook.com/sukrithihealth/",
} as const;

// ---------------------------------------------------------------------------
// Blog Categories
// ---------------------------------------------------------------------------

export const BLOG_CATEGORIES: string[] = [
  "Diabetes Management & Reversal",
  "Diabetic Foot Care & Wound Prevention",
  "Diet & Lifestyle for Diabetics",
  "Preventive Health Tips",
  "Cancer Awareness & Screening",
  "Mental Health & Chronic Disease",
  "Research Publication",
];

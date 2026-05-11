export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  date: string;
  highlight: string;
}

export interface TeamMember {
  name: string;
  experience: string;
  qualifications: string;
  specialization: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  slug: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface OperatingHour {
  day: string;
  hours: string;
}

export interface Qualification {
  degree: string;
  institution?: string;
  year?: string;
}

export interface DoctorInfo {
  name: string;
  fullTitle: string;
  qualifications: Qualification[];
  registration: {
    number: string;
    council: string;
  };
  experience: string;
  practiceStartYear: number;
  languages: string[];
  specializations: string[];
  academicPosition: string;
  profileImage: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  mission: string;
  vision: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapUrl: string;
  fee: string;
  paymentMethods: string[];
}

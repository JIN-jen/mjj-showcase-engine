export type IntakeLanguage = "Chinese" | "English" | "Swahili";

export type ClientIntakeImage = {
  alt?: string;
  name: string;
  type?: string;
  url?: string;
};

export type ClientIntake = {
  address: string;
  city: string;
  clientName: string;
  companyDescription: string;
  country: string;
  email: string;
  facebook: string;
  googleMaps: string;
  images: ClientIntakeImage[];
  industry: string;
  instagram: string;
  languages: IntakeLanguage[];
  linkedin: string;
  logo: string;
  phone: string;
  products: string[];
  services: string[];
  template: string;
  website: string;
  whatsapp: string;
};

export const intakeLanguages: IntakeLanguage[] = ["Chinese", "English", "Swahili"];

export const emptyClientIntake: ClientIntake = {
  address: "",
  city: "",
  clientName: "",
  companyDescription: "",
  country: "",
  email: "",
  facebook: "",
  googleMaps: "",
  images: [],
  industry: "",
  instagram: "",
  languages: [],
  linkedin: "",
  logo: "",
  phone: "",
  products: [],
  services: [],
  template: "",
  website: "",
  whatsapp: "",
};

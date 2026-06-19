export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const contactConfig = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? "",
};

export function getWhatsappHref(message?: string) {
  if (!contactConfig.whatsapp) {
    return "#";
  }

  const cleanNumber = contactConfig.whatsapp.replace(/[^+\d]/g, "");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${cleanNumber.replace(/^\+/, "")}${query}`;
}

export function getEmailHref(subject?: string) {
  if (!contactConfig.email) {
    return "#";
  }

  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";

  return `mailto:${contactConfig.email}${query}`;
}

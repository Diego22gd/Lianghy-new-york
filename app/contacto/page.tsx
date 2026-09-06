import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact | Book Lianghy Makeup & Hair Studio NYC",
  description:
    "Get in touch with Lianghy Beauty Studio in New York City. Bookings for bridal makeup, hairstyling, editorial campaigns, and private clients.",
  openGraph: {
    title: "Contact | Book Lianghy Makeup & Hair Studio NYC",
    description:
      "Get in touch with Lianghy Beauty Studio in New York City. Bookings for bridal, editorial, and private clients.",
    images: [
      {
        url: "https://res.cloudinary.com/dqcpmau9i/image/upload/q_auto/f_auto/v1788720438/Rolando.Acunam_RileyR155_lubr1v.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Lianghy Studio",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
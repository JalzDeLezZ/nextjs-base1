import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "This is the contact page.",
    keywords: ["contact", "reach out", "get in touch"],
};

export default function ContactPage() {
  return <>
    <h1 className="text-7xl">Contact</h1>
    <p>This is the about page.</p>
  </>;
}

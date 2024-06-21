import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "This is the about page.",
    keywords: ["about", "information", "details"],
}

export default function AboutPage() {
  return <>
    <h1 className="text-sm">About</h1>
    <p>This is the about page.</p>
  </>;
}

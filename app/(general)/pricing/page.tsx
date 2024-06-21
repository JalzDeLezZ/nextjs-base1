import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "This is the pricing page.",
    keywords: ["pricing", "cost", "price"],
};

export default function PricingPage() {
  return <>
    <h1 className="text-7xl">Pricing</h1>
    <p>This is the about page.</p>
  </>;
}

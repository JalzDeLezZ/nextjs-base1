import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <span className="text-5xl">Hello world!!!</span>
      <Link href="/about">About Page</Link>
    </main>
  );
}

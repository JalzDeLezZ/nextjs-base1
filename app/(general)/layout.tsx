import { Navbar } from '../../components/navbar/Navbar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar/>
      <main>
        <h1 className="text-7xl bg-red-600">Lorem ipsum.</h1>
        {children}
      </main>
    </>
  );
}

import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import { ResponsiveNavbar } from "@/components/responsiveNavbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
    <ResponsiveNavbar />
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      {children}
    </main>
  </div>
  );
}

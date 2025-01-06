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
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
        title="nextui.org homepage"
      >
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">NextUI</p>
      </Link>
    </footer>
  </div>
  );
}

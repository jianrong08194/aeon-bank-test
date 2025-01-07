import { ResponsiveNavbar } from "@/components/responsiveNavbar";

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="relative flex flex-col h-screen">
        <ResponsiveNavbar />
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-screen">
          {children}
        </div>
      </section>
    );
  }
  
export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-screen">
        <div className="inline-block max-w-lg text-center justify-center bg-white p-8 rounded-lg shadow-lg">
          {children}
        </div>
      </section>
    );
  }
  
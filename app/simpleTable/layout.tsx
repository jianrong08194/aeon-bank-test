export default function SimpleTableLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 h-screen">
        <div className="inline-block max-w-lg text-center justify-center w-full">
          {children}
        </div>
      </section>
    );
  }
  
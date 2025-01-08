export default function SimpleTableLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const columns = [
      { key: 'date', label: 'Date' },
      { key: 'reference_id', label: 'Reference ID' },
      { key: 'to', label: 'To' },
      { key: 'transaction_type', label: 'Transaction Type' },
      { key: 'amount', label: 'Amount' },
  ];

    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 h-screen">
        <div className="inline-block max-w-lg text-center justify-center w-full">
          {children }
        </div>
      </section>
    );
  }
  
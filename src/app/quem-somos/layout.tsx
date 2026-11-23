export default function QuemSomosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-background scroll-smooth">
      {children}
    </div>
  );
}

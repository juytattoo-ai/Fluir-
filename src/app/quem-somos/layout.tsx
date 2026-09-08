import QuemSomosHeader from "./QuemSomosHeader";

export default function QuemSomosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-background scroll-smooth">
      <QuemSomosHeader />
      {children}
    </div>
  );
}

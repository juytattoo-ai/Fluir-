import { redirect } from 'next/navigation';

export const metadata = {
  title: "Sobre nós | FLUIR+",
  description: "Conheça a história, missão e valores da egrégora FLUIR+.",
};

export default function QuemSomosPage() {
  redirect('/quem-somos/organograma');
}


import type { Route } from "./+types/home";
import { Calculator } from "../components/Calculator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Calculateur de Justice Sociale" },
    { name: "description", content: "Simulateur de réaffectation des salaires politiques vers le secteur de la santé." },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-500/30">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 lg:py-24">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Simulateur d'Impact
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-500 pb-2">
            La Justice Sociale <br className="hidden sm:block" />
            <span className="text-emerald-400">En Chiffres</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Découvrez combien de médecins en spécialisation pourraient être financés simplement en ajustant le salaire des élus de la République.
          </p>
        </div>

        {/* Calculator Component */}
        <Calculator />
      </div>
    </main>
  );
}

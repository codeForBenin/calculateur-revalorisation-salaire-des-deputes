import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Coins, HeartPulse, Scale, TrendingUp } from "lucide-react";

interface ResultCardProps {
  economies: number;
  doctorSalary: number;
  smigRatio: number;
}

export function ResultCard({ economies, doctorSalary, smigRatio }: ResultCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR").format(Math.round(amount)) + " FCFA";
  };

  const isPositive = economies > 0;

  return (
    <Card className="h-full flex flex-col justify-center bg-zinc-950/40 border-zinc-800 backdrop-blur-md shadow-2xl relative overflow-hidden group">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      <CardHeader className="text-center pb-8 border-b border-zinc-800/50">
        <div className="mx-auto w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
          <Scale className="w-6 h-6 text-emerald-400" />
        </div>
        <CardTitle className="text-3xl font-bold tracking-tight text-zinc-100">
          L'Impact Réel
        </CardTitle>
        <CardDescription className="text-zinc-400 text-base mt-2">
          Voici ce que cette réévaluation salariale permettrait de financer mensuellement
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-around gap-8 p-8">
        <div className="flex flex-col items-center text-center group/item hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center gap-2 text-zinc-400 mb-2">
            <Coins className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-medium text-zinc-300">Économies Réalisées</h3>
          </div>
          <p className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 tracking-tight">
            {isPositive ? formatCurrency(economies) : "0 FCFA"}
          </p>
          <p className="text-sm text-zinc-500 mt-2">Par mois, réaffectables immédiatement</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <div className="flex flex-col items-center text-center group/item hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center gap-2 text-zinc-400 mb-2">
            <HeartPulse className="w-5 h-5 text-rose-400" />
            <h3 className="text-lg font-medium text-zinc-300">Rémunération par Médecin</h3>
          </div>
          <p className="text-4xl md:text-5xl font-black text-rose-100 tracking-tight">
            {isPositive ? formatCurrency(doctorSalary) : "0 FCFA"}
          </p>
          <p className="text-sm text-zinc-500 mt-2">Mensuel pour chaque médecin en spécialisation</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <div className="flex flex-col items-center text-center group/item hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center gap-2 text-zinc-400 mb-2">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-medium text-zinc-300">Valeur d'un Médecin en SMIG</h3>
          </div>
          <div className="relative inline-flex items-center justify-center">
            <p className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-500 tracking-tighter">
              {isPositive ? smigRatio.toFixed(1) : "0"}x
            </p>
          </div>
          <p className="text-sm text-zinc-500 mt-2">Le SMIG national par mois</p>
        </div>
      </CardContent>
    </Card>
  );
}

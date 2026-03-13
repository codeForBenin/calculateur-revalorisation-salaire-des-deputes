import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Ambulance, Bed, Stethoscope, Activity, Helicopter } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

interface InfraImpactCardProps {
  economies: number;
}

export function InfraImpactCard({ economies }: InfraImpactCardProps) {
  // Coûts estimatifs en FCFA
  const INFRA_COSTS = {
    ambulance: 35000000,
    echographe: 15000000,
    reaKit: 5000000,
    bed: 1500000,
    helicopter: 2000000000, // 2 Milliards FCFA
  };

  const isPositive = economies > 0;

  const countItems = (cost: number) => {
    if (!isPositive) return 0;
    return Math.floor(economies / cost);
  };

  const countAnnualItems = (cost: number) => {
    if (!isPositive) return 0;
    return Math.floor((economies * 12) / cost);
  };

  return (
    <Card className="flex flex-col bg-zinc-950/40 border-zinc-800 backdrop-blur-md shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      <CardHeader className="text-center pb-6 border-b border-zinc-800/50">
        <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
          <Activity className="w-6 h-6 text-blue-400" />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight text-zinc-100">
          Alternatives d'Investissement
        </CardTitle>
        <CardDescription className="text-zinc-400 text-sm mt-2">
          À la place, ces économies pourraient financer chaque mois au choix (cliquez pour plus d'infos) :
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-full flex flex-col items-center text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/80 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
                <Ambulance className="w-8 h-8 text-rose-400 mb-3" />
                <span className="text-3xl font-black text-white mb-1">
                  {countItems(INFRA_COSTS.ambulance)}
                </span>
                <span className="text-sm font-medium text-zinc-300">Ambulances médicalisées</span>
                <span className="text-xs text-zinc-500 mt-1">~35M FCFA l'unité</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-950 border-zinc-800 text-zinc-100">
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2 text-xl">
                  <Ambulance className="w-6 h-6 text-rose-400" />
                  Ambulances Médicalisées
                </AlertDialogTitle>
                <AlertDialogDescription className="text-zinc-400 text-base leading-relaxed mt-4">
                  Une ambulance médicalisée (Type B ou C) est essentielle pour la prise en charge pré-hospitalière et le transfert inter-hospitalier des urgences vitales.
                  <br /><br />
                  <strong>Pourquoi c'est utile :</strong> Elle permet aux médecins en spécialisation (notamment urgentistes et réanimateurs) d'intervenir rapidement sur le terrain ou de recevoir des patients dans des conditions optimales, réduisant drastiquement la mortalité avant même l'arrivée à l'hôpital.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="bg-transparent border-t-zinc-800">
                <AlertDialogCancel className="bg-emerald-600 border-none text-white hover:bg-emerald-700 hover:text-white mt-0 hover:border-none">Compris</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-full flex flex-col items-center text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/80 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <Activity className="w-8 h-8 text-blue-400 mb-3" />
                <span className="text-3xl font-black text-white mb-1">
                  {countItems(INFRA_COSTS.echographe)}
                </span>
                <span className="text-sm font-medium text-zinc-300">Échographes portables</span>
                <span className="text-xs text-zinc-500 mt-1">~15M FCFA l'unité</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-950 border-zinc-800 text-zinc-100">
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2 text-xl">
                  <Activity className="w-6 h-6 text-blue-400" />
                  Échographes Portables
                </AlertDialogTitle>
                <AlertDialogDescription className="text-zinc-400 text-base leading-relaxed mt-4">
                  Un échographe portable est un appareil d'imagerie compact permettant de réaliser des diagnostics rapides au lit du patient.
                  <br /><br />
                  <strong>Pourquoi c'est utile :</strong> Il est devenu le "stéthoscope moderne". Pour un médecin DES en garde, pouvoir poser un diagnostic immédiat en salle d'urgence ou en réanimation grâce à l'échographie change radicalement la prise en charge et sauve des vies au quotidien, sans avoir à déplacer le patient.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="bg-transparent border-t-zinc-800">
                <AlertDialogCancel className="bg-emerald-600 border-none text-white hover:bg-emerald-700 hover:text-white mt-0 hover:border-none">Compris</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-full flex flex-col items-center text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/80 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                <Stethoscope className="w-8 h-8 text-emerald-400 mb-3" />
                <span className="text-3xl font-black text-white mb-1">
                  {countItems(INFRA_COSTS.reaKit)}
                </span>
                <span className="text-sm font-medium text-zinc-300">Kits de réanimation</span>
                <span className="text-xs text-zinc-500 mt-1">~5M FCFA l'unité</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-950 border-zinc-800 text-zinc-100">
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2 text-xl">
                  <Stethoscope className="w-6 h-6 text-emerald-400" />
                  Kits de Réanimation
                </AlertDialogTitle>
                <AlertDialogDescription className="text-zinc-400 text-base leading-relaxed mt-4">
                  Un kit de réanimation complet inclut généralement défibrillateur, matériel d'intubation, obus d'oxygène et chariot d'urgence.
                  <br /><br />
                  <strong>Pourquoi c'est utile :</strong> C'est l'outil de base indispensable de la médecine d'urgence. Avoir ces kits en nombre suffisant et fonctionnels dans tous les services permet aux jeunes médecins d'intervenir efficacement lors d'arrêts cardiaques ou de détresses respiratoires aigües.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="bg-transparent border-t-zinc-800">
                <AlertDialogCancel className="bg-emerald-600 border-none text-white hover:bg-emerald-700 hover:text-white mt-0 hover:border-none">Compris</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-full flex flex-col items-center text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/80 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                <Bed className="w-8 h-8 text-amber-400 mb-3" />
                <span className="text-3xl font-black text-white mb-1">
                  {countItems(INFRA_COSTS.bed)}
                </span>
                <span className="text-sm font-medium text-zinc-300">Lits d'hospitalisation</span>
                <span className="text-xs text-zinc-500 mt-1">~1.5M FCFA l'unité</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-950 border-zinc-800 text-zinc-100">
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2 text-xl">
                  <Bed className="w-6 h-6 text-amber-400" />
                  Lits d'Hospitalisation Modernes
                </AlertDialogTitle>
                <AlertDialogDescription className="text-zinc-400 text-base leading-relaxed mt-4">
                  Il s'agit de lits médicalisés articulés (électriques ou mécaniques) favorisant le confort du patient et la prévention d'escarres.
                  <br /><br />
                  <strong>Pourquoi c'est utile :</strong> Les pavillons d'hospitalisation surchargés et sous-équipés sont une réalité difficile. Rajouter des lits de qualité améliore drastiquement l'hygiène, le travail infirmier, et les conditions dans lesquelles les médecins examinent et gardent les patients en observation.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="bg-transparent border-t-zinc-800">
                <AlertDialogCancel className="bg-emerald-600 border-none text-white hover:bg-emerald-700 hover:text-white mt-0 hover:border-none">Compris</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-full  !md:col-span-2 flex flex-col items-center text-center p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/30 hover:bg-indigo-900/40 transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:col-span-2">
                <Helicopter className="w-8 h-8 text-indigo-400 mb-3" />
                <span className="text-3xl font-black text-white mb-1">
                  {countAnnualItems(INFRA_COSTS.helicopter)}
                </span>
                <span className="text-sm font-medium text-zinc-300">Hélicoptères d'Urgences (Par An)</span>
                <span className="text-xs text-zinc-500 mt-1">~2 Milliards FCFA l'unité</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-950 border-zinc-800 text-zinc-100">
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2 text-xl">
                  <Helicopter className="w-6 h-6 text-indigo-400" />
                  Hélicoptères d'Urgences (Financement Annuel)
                </AlertDialogTitle>
                <AlertDialogDescription className="text-zinc-400 text-base leading-relaxed mt-4">
                  Un hélicoptère médicalisé (Hélistation) permet l'évacuation sanitaire rapide des patients polytraumatisés ou en détresse vitale depuis les zones éloignées vers un centre hospitalier de référence.
                  <br /><br />
                  <strong>Pourquoi c'est utile :</strong> Dans un pays où le réseau routier peut allonger considérablement le temps de trajet, l'hélicoptère d'urgence réduit les délais de prise en charge et désenclave les régions. Les économies cumulées sur <strong>12 mois</strong> permettent d'envisager ce type d'infrastructure lourde.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="bg-transparent border-t-zinc-800">
                <AlertDialogCancel className="bg-emerald-600 border-none text-white hover:bg-emerald-700 hover:text-white mt-0 hover:border-none">Compris</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </div>
      </CardContent>
    </Card>
  );
}

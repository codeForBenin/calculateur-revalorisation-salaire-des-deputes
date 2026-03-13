import { useState } from "react";
import { ResultCard } from "./ResultCard";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Slider } from "~/components/ui/slider";
import { Card, CardContent } from "~/components/ui/card";
import CardRevalorisation from "./CardRevalo";
import { InfraImpactCard } from "./InfraImpactCard";

export function Calculator() {
  const deputiesCount = 109; // Fixe, comme demandé
  const [currentDeputySalary, setCurrentDeputySalary] = useState<number | string>(5000000);
  const [targetDeputySalary, setTargetDeputySalary] = useState<number | string>(1800000);
  const [doctorsCount, setDoctorsCount] = useState<number | string>(1500);
  const [smigAmount, setSmigAmount] = useState<number | string>(52000);

  // Calculations
  const currentSal = Number(currentDeputySalary) || 0;
  const targetSal = Number(targetDeputySalary) || 0;
  const docsCount = Number(doctorsCount) || 0;
  const smig = Number(smigAmount) || 0;

  const economies = Math.max(0, (currentSal - targetSal) * deputiesCount);
  const doctorSalary = docsCount > 0 ? economies / docsCount : 0;
  const smigRatio = smig > 0 ? doctorSalary / smig : 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto items-start">

      {/* Form Section */}
      <Card className="lg:col-span-5 bg-zinc-900/50 border-zinc-800/80 shadow-xl backdrop-blur-sm p-6 lg:p-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">Paramètres</h2>
            <p className="text-zinc-400 text-sm">Ajustez les curseurs ou entrez vos valeurs</p>
          </div>

          <div className="space-y-6">
            {/* Deputy Params */}
            <div className="space-y-4 p-5 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
              <div>
                <Label className="text-zinc-300 font-medium flex justify-between">
                  <span>Effectif des députés</span>
                  <span className="text-emerald-400 font-bold">{deputiesCount} députés (fixe)</span>
                </Label>
              </div>

              <div className="pt-2 border-t border-zinc-800/50"></div>

              <div>
                <Label className="text-zinc-300 font-medium">Salaire actuel des députés (FCFA)</Label>
                <Input
                  type="number"
                  value={currentDeputySalary}
                  onChange={(e) => setCurrentDeputySalary(e.target.value)}
                  className="mt-2 text-lg font-medium bg-zinc-900 border-zinc-700 text-zinc-100"
                />
              </div>

              <div>
                <Label className="text-emerald-400 font-medium">Nouveau salaire proposé (FCFA)</Label>
                <Input
                  type="number"
                  value={targetDeputySalary}
                  onChange={(e) => setTargetDeputySalary(e.target.value)}
                  className="mt-2 text-lg font-medium bg-zinc-900 border-emerald-900/50 text-zinc-100 focus-visible:ring-emerald-500"
                />
              </div>
            </div>

            {/* Doctor & SMIG Params */}
            <div className="space-y-4 p-5 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
              <div>
                <Label className="text-zinc-300 font-medium flex justify-between">
                  <span>Effectif des médecins (cibles)</span>
                  <span className="text-zinc-100 font-bold">{docsCount} médecins</span>
                </Label>
                <div className="mt-4 flex gap-4 items-center">
                  <Slider
                    max={5000}
                    min={1}
                    step={10}
                    value={[docsCount]}
                    onValueChange={(val) => {
                      const num = Array.isArray(val) ? val[0] : val;
                      setDoctorsCount(Number(num));
                    }}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={doctorsCount}
                    onChange={(e) => setDoctorsCount(e.target.value)}
                    className="w-24 bg-zinc-900 border-zinc-700 h-9 shrink-0 text-right font-mono text-zinc-100"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800/50"></div>

              <div>
                <Label className="text-zinc-300 font-medium">Montant du SMIG (FCFA)</Label>
                <Input
                  type="number"
                  value={smigAmount}
                  onChange={(e) => setSmigAmount(e.target.value)}
                  className="mt-2 text-lg font-medium bg-zinc-900 border-zinc-700 text-zinc-100"
                />
              </div>
            </div>

            <CardRevalorisation
              currentDeputySmigRatio={smig > 0 ? currentSal / smig : 0}
              targetDeputySmigRatio={smig > 0 ? targetSal / smig : 0}
            />

          </div>
        </div>
      </Card>

      {/* Result Section */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <ResultCard
          economies={economies}
          doctorSalary={doctorSalary}
          smigRatio={smigRatio}
        />
        <InfraImpactCard economies={economies} />
      </div>

    </div>
  );
}

type CardRevalorisationProps = {
    currentDeputySmigRatio: number;
    targetDeputySmigRatio: number;
}

export default function CardRevalorisation({ currentDeputySmigRatio, targetDeputySmigRatio }: CardRevalorisationProps) {

    return (
        <>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 group/item hover:bg-zinc-800/50 transition-colors">
                    <h4 className="text-sm font-medium text-zinc-400 mb-2">Député Actuel</h4>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-zinc-200">{currentDeputySmigRatio.toFixed(1)}x</span>
                        <span className="text-xs text-zinc-500">le SMIG</span>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/30 group/item hover:bg-emerald-900/40 transition-colors">
                    <h4 className="text-sm font-medium text-emerald-400/80 mb-2">Député Réévalué</h4>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-emerald-400">{targetDeputySmigRatio.toFixed(1)}x</span>
                        <span className="text-xs text-emerald-600">le SMIG</span>
                    </div>
                </div>
            </div>
        </>
    )
}
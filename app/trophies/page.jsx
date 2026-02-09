import trophiesData from '@/data/trophies.json';

export default function TrophiesPage() {
    return (
        <main className="min-h-screen bg-black text-white p-10">
            <h1 className="text-4xl font-bold mb-12 text-center">Победители крупнейших турниров</h1>
            
            <div className="max-w-5xl mx-auto space-y-12">
                {trophiesData.map((tournament) => (
                    <div key={tournament.id} className="space-y-4">
                        
                        <h2 className="text-2xl font-black text-blue-500 flex items-center gap-3 border-b border-white/10 pb-2 uppercase italic">
                            <span>{tournament.icon}</span> {tournament.title}
                        </h2>

                        <div className="grid grid-cols-1 gap-3">
                            
                            {tournament.winners.map((winner, idx) => (
                                <div 
                                    key={idx} 
                                    className="flex items-center justify-between bg-white/5 p-5 rounded-xl border border-white/5 hover:bg-white/10 transition-all"
                                >
                                    <span className="text-2xl font-bold">
                                        {winner.club}
                                    </span>
                                    <span className="text-3xl font-black text-gray-700 italic">
                                        {winner.year}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
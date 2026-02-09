import playersData from '@/data/players.json';


async function getPlayer(id) {
    return playersData.find(p => p.id === id);
}

export default async function PlayerPage({ params }) {
    
    const { id } = await params; 
    const player = await getPlayer(id);

    
    if (!player) return <div className="p-20 text-white text-center">Игрок не найден!</div>;

    return (
        <main className="min-h-screen bg-black text-white p-10">
            <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10">
                
                <span className="text-green-400 font-bold uppercase tracking-widest text-sm">
                    {player.position}
                </span>
                
                
                <h1 className="text-6xl font-black mt-2 mb-6 uppercase italic">
                    {player.name}
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-green-400 border-b border-white/10 pb-2 flex items-center gap-2">
                            🏆 ТРОФЕИ
                        </h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {player.trophies?.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>
                    </div>

                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-blue-400 border-b border-white/10 pb-2 flex items-center gap-2">
                            🗺️ КАРЬЕРА
                        </h2>
                        <div className="space-y-2">
                            {player.history?.map((h, i) => (
                                <p key={i} className="text-gray-300">
                                    <span className="text-blue-400 font-mono font-bold">{h.year}:</span> {h.team}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
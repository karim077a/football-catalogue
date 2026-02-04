<<<<<<< HEAD


async function getPlayerById(id) {
=======
async function getPlayer(id) {
>>>>>>> 09ee043 (Исправлены ошибки и обновлен дизайн игроков и клубов)
    const res = await fetch('http://localhost:3000/data/players.json', { cache: 'no-store' });
    if (!res.ok) return null;
    const players = await res.json();
    return players.find(p => p.id === id);
}

export default async function PlayerPage({ params }) {
<<<<<<< HEAD
  

  const playerId = params.id; 
  
  const player = await getPlayerById(playerId);
=======
    const { id } = await params; // Исправленная строка из прошлого шага
    const player = await getPlayer(id);
>>>>>>> 09ee043 (Исправлены ошибки и обновлен дизайн игроков и клубов)

    if (!player) {
        return (
            <main className="flex items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-3xl font-bold text-red-500 animate-pulse">Игрок не найден! 😥</h1>
            </main>
        );
    }

<<<<<<< HEAD

  return (
    <main className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-5xl font-bold mb-4 text-green-400">{player.name}</h1>
   
      
      <h2 className="text-3xl font-semibold mt-8 mb-3 border-b border-gray-700 pb-2">🏅 Трофеи</h2>
      <ul className="list-disc ml-6 space-y-1">
        {player.trophies && player.trophies.map((trophy, index) => <li key={index}>{trophy}</li>)}
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-3 border-b border-gray-700 pb-2">🗺️ История Карьеры</h2>
      <ul className="space-y-2">
        {player.history && player.history.map((item, index) => (
          <li key={index} className="bg-gray-900 p-3 rounded-lg border border-gray-800"> 
            <span className="font-bold text-yellow-400">{item.year}</span>: играл за {item.team}
          </li>
        ))}
      </ul>
    </main>
  );
}
=======
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-6 md:p-20">
            {/* Верхняя карточка с именем */}
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <span className="px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold tracking-wider uppercase">
                            {player.position}
                        </span>
                        <h1 className="text-6xl font-black mt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                            {player.name}
                        </h1>
                        <p className="text-2xl text-gray-400 mt-2 flex items-center gap-2">
                            <span>🏟️</span> {player.club}
                        </p>
                    </div>
                    
                    <div className="text-right">
                        <div className="text-5xl font-bold text-white/20">#10</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Секция трофеев */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-green-500/50 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span>🏆</span> Достижения
                        </h2>
                        <ul className="space-y-3">
                            {player.trophies?.map((t, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Секция карьеры */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-blue-500/50 transition-colors">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span>🗺️</span> Карьерный путь
                        </h2>
                        <div className="space-y-4">
                            {player.history?.map((h, i) => (
                                <div key={i} className="relative pl-6 border-l-2 border-white/10">
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
                                    <span className="text-blue-400 font-bold text-sm">{h.year}</span>
                                    <p className="text-gray-200">{h.team}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Кнопка назад */}
            <div className="max-w-4xl mx-auto mt-10">
                <a href="/players" className="text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                    ← Вернуться к списку
                </a>
            </div>
        </main>
    );
}
>>>>>>> 09ee043 (Исправлены ошибки и обновлен дизайн игроков и клубов)

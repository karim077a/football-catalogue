import Link from 'next/link';

import playersData from '@/data/players.json';

export default function PlayersPage() {
  

 
  if (!playersData) {
    return (
        <main className="p-8 bg-black min-h-screen text-white text-center">
            <h1 className="text-4xl font-bold mb-8 text-red-500">
                Ошибка загрузки игроков! Файл players.json не найден.
            </h1>
        </main>
    );
  }

  return (
    <main className="p-8 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-green-400">
        ⚽️ Каталог Игроков
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playersData.map((player) => (
          
          <Link key={player.id} href={`/players/${player.id}`} className="block">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300">
              <h2 className="text-2xl font-bold text-white mb-2">{player.name}</h2>
              <p className="text-sm text-gray-400">{player.position} | {player.club}</p>
              
              <div className="mt-3 text-sm text-yellow-400">
                {/* Твоя логика вывода первых двух трофеев */}
                {player.trophies && player.trophies.slice(0, 2).join(', ')}... 
              </div>
            </div>
          </Link>

        ))}
      </div>
    </main>
  );
}
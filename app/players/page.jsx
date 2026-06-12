import Link from 'next/link';

import { query } from '@/data/db';

export default async function PlayersPage() {
  
  
  const result = await query(`
    SELECT p.*, c.name AS club_name 
    FROM players p
    JOIN clubs c ON p.club_id = c.id;
  `);
  const players = result.rows;

  return (
    <main className="p-8 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-green-400">
        ⚽️ Каталог Игроков
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Link key={player.id} href={`/players/${player.id}`} className="block">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300">
              <h2 className="text-2xl font-bold text-white mb-2">{player.name}</h2>
              
              <p className="text-sm text-gray-400">{player.position} | {player.club_name}</p>
              
              <div className="mt-3 text-sm text-yellow-400">
                {player.trophies && player.trophies.slice(0, 2).join(', ')}
                {player.trophies && player.trophies.length > 2 && '...'}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
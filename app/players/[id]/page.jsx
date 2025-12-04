

async function getPlayerById(id) {
    const res = await fetch('http://localhost:3000/data/players.json', { cache: 'no-store' });
    if (!res.ok) { return null; }
    const players = await res.json();
    return players.find(p => p.id === id); 
}

export default async function PlayerPage({ params }) {
  

  const playerId = params.id; 
  
  const player = await getPlayerById(playerId);

  if (!player) {
    return <main className="p-10 bg-black min-h-screen text-white text-center">
        <h1 className="text-4xl font-bold text-red-500">Игрок "{playerId}" не найден! 😥</h1>
    </main>;
  }


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

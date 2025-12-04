
async function getTrophies() {
  
  const res = await fetch('http://localhost:3000/data/trophies.json', { cache: 'no-store' });
  
  if (!res.ok) {
   
    return null;
  }
  return res.json();
}

export default async function TrophiesPage() {
  
  const trophiesData = await getTrophies();

 
  if (!trophiesData) {
    return (
        <main className="p-8 bg-black min-h-screen text-white text-center">
            <h1 className="text-4xl font-bold mb-8 text-red-500">
                Ошибка! Файл trophies.json не найден в public/data.
            </h1>
        </main>
    );
  }

  return (
    <main className="p-8 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        🏆 Главные Трофеи
      </h1>

      <div className="space-y-10">
       
        {trophiesData.map((trophy) => (
          
          <div key={trophy.id} className="p-6 border border-gray-700 rounded-xl bg-gray-900 shadow-xl">
            
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <span className="mr-3 text-4xl">{trophy.icon}</span>
              {trophy.title}
            </h2>

            <h3 className="text-xl mt-4 mb-2 border-b border-gray-700 pb-1 text-gray-400">
                Победители:
            </h3>

            <ul className="list-disc ml-6 space-y-1">
              {trophy.winners.map((winner, index) => (
                <li key={index} className="text-lg">
                  <span className="font-bold text-yellow-400">{winner.year}</span>: {winner.club}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
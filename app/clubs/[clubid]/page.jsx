
import * as fs from 'fs/promises';
import path from 'path';

async function getClubById(id) {
    
   
    const filePath = path.join(process.cwd(), 'public', 'data', 'clubs.json');
    
    try {
      
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const clubs = JSON.parse(fileContent);
        
      
        return clubs.find(c => c.id === id); 
    } catch (error) {
        console.error("Ошибка чтения clubs.json:", error);
        return null;
    }
}

export default async function ClubPage({ params }) {
  

  const clubId = params.clubid; 
  
  const club = await getClubById(clubId);


  if (!club) {
    return <main className="p-10 bg-black min-h-screen text-white text-center">
        <h1 className="text-4xl font-bold text-red-500">Клуб "{clubId}" не найден! 😥</h1>
    </main>;
  }

  return (
    <main className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-5xl font-bold mb-4 text-blue-400">{club.name}</h1>
      <p className="text-xl text-gray-400 mb-6">Страна: {club.country} | Стадион: {club.stadium}</p>
      
     
      <h2 className="text-3xl font-semibold mt-8 mb-3 border-b border-gray-700 pb-2">📜 История и Составы</h2>
      
      {club.history && club.history.map((era, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Состав {era.year} года</h3>
              <p>Игроки: {era.squad.join(', ')}</p>
          </div>
      ))}

    </main>
  );
}

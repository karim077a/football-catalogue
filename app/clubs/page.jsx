
import Link from 'next/link';


async function getClubs() {
    const res = await fetch('http://localhost:3000/data/clubs.json', { cache: 'no-store' });
    if (!res.ok) {
        
        return [];
    }
    return res.json();
}


export default async function ClubsPage() {
    const clubsData = await getClubs();

    return (
        <main className="p-10 bg-black min-h-screen text-white">
            <h1 className="text-4xl font-bold mb-8 text-blue-400">Каталог Клубов 🏆</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubsData.map((club) => (
                  
                    <Link key={club.id} href={`/clubs/${club.id}`} className="block">
                        <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                            <h2 className="text-3xl font-semibold mb-2">{club.name}</h2>
                            <p className="text-gray-400">{club.country}</p>
                            <p className="mt-4 text-sm text-green-400">Нажми, чтобы увидеть историю и состав</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
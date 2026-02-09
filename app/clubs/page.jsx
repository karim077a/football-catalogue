import Link from 'next/link';

import clubsData from '@/data/clubs.json';

export default function ClubsPage() {
  
  const clubs = clubsData;

  return (
    <main className="p-8 bg-black min-h-screen text-white">
      
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        Каталог Клубов 🏆
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <Link key={club.id} href={`/clubs/${club.id}`} className="block">
            <div className="group relative overflow-hidden p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300 shadow-2xl">
              
              <div className="absolute -right-4 -bottom-4 text-9xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">
                🏟️
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-black text-white mb-2 group-hover:translate-x-1 transition-transform">
                  {club.name}
                </h2>
                <p className="text-gray-400 font-medium">
                  <span className="text-blue-500 opacity-50 text-xs uppercase tracking-tighter mr-2">Home:</span>
                  {club.stadium}
                </p>
                
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                    View Squad
                  </span>
                  <span className="text-blue-500 transform group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
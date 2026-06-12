
import { query } from '@/data/db';

async function getClubData(id) {
    
    const clubResult = await query('SELECT * FROM clubs WHERE id = $1;', [id]);
    const club = clubResult.rows[0]; // Берем первую найденную строку

    if (!club) return null;

    
    const playersResult = await query('SELECT * FROM players WHERE club_id = $1;', [id]);
    const playersList = playersResult.rows;

    
    const goalkeepers = playersList.filter(p => p.position.toLowerCase() === 'вратарь' || p.position.toLowerCase() === 'goalkeeper').map(p => p.name);
    const defenders = playersList.filter(p => p.position.toLowerCase() === 'защитник' || p.position.toLowerCase() === 'defender').map(p => p.name);
    const midfielders = playersList.filter(p => p.position.toLowerCase() === 'полузащитник' || p.position.toLowerCase() === 'midfielder').map(p => p.name);
    const forwards = playersList.filter(p => p.position.toLowerCase() === 'нападающий' || p.position.toLowerCase() === 'forward').map(p => p.name);

    return {
        ...club,
        players: {
            goalkeepers,
            defenders,
            midfielders,
            forwards
        }
    };
}

function PositionGroup({ title, players, icon, accentColor }) {
    if (!players || players.length === 0) return null;
    return (
        <div className="mb-10">
            <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${accentColor}`}>
                <span className="text-2xl">{icon}</span> {title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {players.map((name, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-all">
                        <p className="font-medium text-gray-200">{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default async function ClubPage({ params }) {
    const { clubid } = await params; 
    
    const club = await getClubData(clubid);

    if (!club) return <div className="p-20 text-white text-center font-bold">Клуб не найден! 🏟️</div>;

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-16">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        {club.name.toUpperCase()}
                    </h1>
                    <p className="text-gray-400 mt-2 flex items-center gap-2 text-lg">
                        <span className="opacity-50 text-sm">HOME STADIUM:</span> {club.stadium}
                    </p>
                </header>

                <section>
                    <PositionGroup title="ВРАТАРИ" players={club.players?.goalkeepers} icon="🧤" accentColor="text-yellow-500" />
                    <PositionGroup title="ЗАЩИТНИКИ" players={club.players?.defenders} icon="🛡️" accentColor="text-blue-500" />
                    <PositionGroup title="ПОЛУЗАЩИТНИКИ" players={club.players?.midfielders} icon="🧠" accentColor="text-green-500" />
                    <PositionGroup title="НАПАДАЮЩИЕ" players={club.players?.forwards} icon="⚡" accentColor="text-red-500" />
                </section>
            </div>
        </main>
    );
}
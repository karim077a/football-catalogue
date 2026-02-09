const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function main() {
  
  const prisma = new PrismaClient();

  try {
    console.log('🚀 Начинаем импорт данных...');
    
   
    await prisma.$connect();
    console.log('📡 Соединение с PostgreSQL установлено!');

    
    console.log('🧹 Очистка таблиц...');
    await prisma.winner.deleteMany({});
    await prisma.tournament.deleteMany({});
    await prisma.player.deleteMany({});
    await prisma.club.deleteMany({});

    
    const clubsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/clubs.json'), 'utf-8'));
    console.log(`🏢 Импорт клубов: ${clubsData.length}`);
    for (const club of clubsData) {
      await prisma.club.create({ data: { id: club.id, name: club.name, stadium: club.stadium } });
    }

    const playersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/players.json'), 'utf-8'));
    console.log(`⚽ Импорт игроков: ${playersData.length}`);
    for (const p of playersData) {
      await prisma.player.create({
        data: { id: p.id, name: p.name, position: p.position, club: p.club, trophies: p.trophies || [], history: p.history || [] }
      });
    }

    const trophiesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/trophies.json'), 'utf-8'));
    console.log(`🏆 Импорт турниров: ${trophiesData.length}`);
    for (const t of trophiesData) {
      await prisma.tournament.create({
        data: { title: t.title, icon: t.icon, winners: { create: (t.winners || []).map(w => ({ year: w.year, club: w.club })) } }
      });
    }

    console.log('✅ Данные успешно загружены!');
  } catch (err) {
    console.error('❌ Произошла ошибка:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
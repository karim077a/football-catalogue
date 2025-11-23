export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Главная страница</h1>
      <p>Каталог футболистов</p>

      <ul>
        <li><a href="/players">Игроки</a></li>
        <li><a href="/clubs">Клубы</a></li>
        <li><a href="/trophies">Трофеи</a></li>
      </ul>
    </div>
  );
}
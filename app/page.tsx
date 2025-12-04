export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold text-blue-500 mb-6">
        Football Catalog ⚽️
      </h1>

      <p className="text-xl text-gray-300 text-center max-w-2xl">
        Добро пожаловать в твою футбольную базу данных! 
        Здесь мы храним информацию о лучших клубах, легендарных игроках и великих победах.
      </p>

      <div className="mt-10 p-6 border border-gray-700 rounded-xl bg-gray-900">
        <p className="text-gray-400">
          👆 Жми на кнопки в меню сверху, чтобы перейти к разделам
        </p>
      </div>

    </main>
  );
}
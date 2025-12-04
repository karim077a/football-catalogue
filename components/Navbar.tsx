"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-blue-600 text-white font-bold shadow-lg">
      <Link href="/">Главная</Link>
      <Link href="/players">Игроки</Link>
      <Link href="/trophies">Трофеи</Link>
      <Link href="/clubs">Клубы</Link>
    </nav>
  );
}
"use client"; // обязательно для Client Component

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link href="/">Главная</Link> |{" "}
      <Link href="/players">Игроки</Link> |{" "}
      <Link href="/trophies">Трофеи</Link> |{" "}
      <Link href="/clubs">Клубы</Link>
    </nav>
  );
}

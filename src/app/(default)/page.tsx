import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <Link href="/about">About (no loading)</Link>
      <Link href="/news">News (loading)</Link>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <Link href="/about2">About2 (with prefetch)</Link>
      <Link prefetch={false} href="/about">About (no prefetch)</Link>
      <Link prefetch={false} href="/news">News (no metadata)</Link>
    </main>
  );
}

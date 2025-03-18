import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="mt-4">
        <li>
          <Link href="/week-2" className="text-blue-500 hover:underline">
            Go to Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-3" className="text-blue-500 hover:underline">
            Go to Week 3 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}

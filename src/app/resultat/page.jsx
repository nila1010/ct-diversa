import Image from "next/image";
import Link from "next/link";
import { dummyData } from "@/data/dummy";
import { score } from "@/lib/CalcRating";
/* export const revalidate = 1800; */

export default async function Report() {
  /*  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json(); */
  const data = dummyData;

  //find længe på de 3 arrays
  const violations = data.violations;
  const lenghtVio = violations.length;
  // For at få alle fejle ud så mapper vi violations

  //lav samlet score
  const total = score(data);

  return (
    <main>
      <h1>Report for {data.url}</h1>
      <p>Found {data.violations.length} issues</p>
      {/*  Link til slug side */}
      <Link href={`/regler/${data.violations[0].id}`}>link</Link>
    </main>
  );
}

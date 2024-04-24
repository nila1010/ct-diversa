import { reglerData } from "@/data/reglerData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return reglerData.map((regl) => ({
    slug: regl.name,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const filterData = reglerData.filter((regel) => regel.name === slug);
  const data = filterData[0];
  if (!data) return notFound();
  return {
    title: data.name,
    description: `Here is ${data.name}`,
  };
}

export default async function Regl({ params }) {
  const { slug } = params;

  const filterData = reglerData.filter((regel) => regel.name === slug);
  const data = filterData[0];

  if (!data) return notFound();

  return <h1>{data.name}</h1>;
}

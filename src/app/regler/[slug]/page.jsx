import { reglerData } from "@/data/reglerData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Bar from "@/components/Bar";

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
    title: `Dervise - ${data.name}`,
    description: data.shortDesc,
  };
}

export default async function Regl({ params }) {
  const { slug } = params;

  const filterData = reglerData.filter((regel) => regel.name === slug);
  const data = filterData[0];

  if (!data) return notFound();

  return (
    <section className="p-10">
      <h1 className="text-xl">{`${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`}</h1>
      <Bar impact={data.impact} />
      <div>
        <h2 className="text-md">Hvem det påvirker:</h2>
        <ul className="flex gap-2">
          {data.affect.map((one, index) => {
            return (
              <li className="text-sm" key={index}>
                {one}
              </li>
            );
          })}
        </ul>
      </div>
      <article className="mt-10">
        <h2 className="text-lg">Beskrivelse:</h2>
        <p className="text-sm max-w-prose">{data.longDesc}</p>
      </article>
      <article className="mt-10">
        <h2 className="text-lg">Hvorfor er det vigtigt?</h2>
        <p className="text-sm max-w-prose">{data.whyDesc}</p>
      </article>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
        <div>
          <h3 className="text-md text-center mb-2">Hvad ingen desc ser</h3>
          <Image src={data.imgPath} alt={data.imgAlt} width={1920} height={1080} />
        </div>
        <div>
          <h3 className="text-md text-center mb-2">Hvad du ikke ser</h3>
          <Image src={data.imgPath2} alt={data.imgAlt2} width={1920} height={1080} />
        </div>
      </section>
    </section>
  );
}

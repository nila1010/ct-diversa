import { reglerData } from "@/data/reglerData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Bar from "@/components/Bar";
import Heading from "@/components/Headings";

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
      <Heading as="h1" customClass="mb-3">{`${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`}</Heading>
      <Bar impact={data.impact} />
      <div className="mt-10">
        <Heading as="h2"  >Hvem det påvirker:</Heading>
        <ul className="flex gap-2 flex-wrap">
          {data.affect.map((one, index) => {
            return (
              <li className="relative top-2 text-sm text-center rounded w-40 secondary-color outline outline-[2px] outline-primary-color pl-2 pr-2" key={index}>
                {one}
              </li>
            );
          })}
        </ul>
      </div>
      <article className="mt-7">
        <Heading as="h2">Beskrivelse:</Heading>
        <p className="text-sm max-w-prose">{data.longDesc}</p>
      </article>
      <article className="mt-7">
        <Heading as="h2">Hvorfor er det vigtigt?</Heading>

        <p className="text-sm max-w-prose">{data.whyDesc}</p>
      </article>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
        <div>
          <Heading as="h3" customClass="text-center mb-2">
          Visuel skærmoplevelse
          </Heading>

          <Image src={data.imgPath} alt={data.imgAlt} width={1920} height={1080} />
        </div>
        <div>
          <Heading as="h3" customClass="text-center mb-2">
          Tilgængelig skærmoplevelse
          </Heading>

          <Image src={data.imgPath2} alt={data.imgAlt2} width={1920} height={1080} />
        </div>
      </section>
    </section>
  );
}

"use client";
import Butten from "@/components/Butten";
import Image from "next/image";
function Error() {
  return (
    <section className="bg-state-3 p-10 grid text-center sm:grid-cols-[2fr_1fr] sm:text-left">
      <div className="content-end">
        <h1 className="text-2xl">Kan ikke hente data</h1>
        <p className="text-md max-w-[45ch] mb-10">Opstår, når den ønskede webside eller ressource ikke findes på serveren. Error code 500</p>
        <div className="relative z-0">
          <Butten variant="primary" path="/">
            Tilbage til forsiden
          </Butten>
        </div>
      </div>
      <div className="mt-5 place-self-center sm:mt-0">
        <Image src="/error_icon.png" alt="Logo der viser fejl" width={320} height={320} />
      </div>
    </section>
  );
}

export default Error;

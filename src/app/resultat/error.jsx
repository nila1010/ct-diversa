"use client";
import Butten from "@/components/Butten";
import Image from "next/image";
function Error() {
  return (
    <section className="bg-state-3 p-10 grid text-center sm:grid-cols-[2fr_1fr] sm:text-left">
      <div className="content-end">
        <h1 className="text-xl mb-10">ERROR CODE 500</h1>
        <p className="text-md max-w-[45ch] mb-6">En generel fejlkode for server-problemer, som forhindrer serveren i at udføre en anmodning.</p>
        <Butten variant="error" path="/">
          Tilbage til forsiden
        </Butten>
      </div>
      <div className="mt-5 place-self-center sm:mt-0 sm:place-self-auto">
        <Image src="/error_icon.png" alt="Logo der viser fejl" width={320} height={320} />
      </div>
    </section>
  );
}

export default Error;

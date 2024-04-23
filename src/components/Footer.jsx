import Image from "next/image";
import LinkNavigation from "./LinkNavigation";
function Footer() {
  return (
    <section className="bg-primary-color flex items-center justify-between px-10 py-5">
      <div className="justify-items-start">
        <Image alt="Diverse logo" src="logo/icon.svg" width={94} height={94} />
      </div>
      <div>
        <ul className="text-error-color text-[1rem] flex gap-3">
          <LinkNavigation path="/#">Vi tilbyder</LinkNavigation>
          <LinkNavigation path="/#">Artikler</LinkNavigation>
          <LinkNavigation path="/#">Priser</LinkNavigation>
          <LinkNavigation path="/#">Om os</LinkNavigation>
          <LinkNavigation path="/#">Kontakt</LinkNavigation>
        </ul>
        <ul className="flex justify-center gap-5 mt-5">
          <LinkNavigation path="/#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#ffffff" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </LinkNavigation>
          <LinkNavigation path="/#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#ffffff" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </LinkNavigation>
        </ul>
      </div>
      <div className="w-[10%]"></div>
    </section>
  );
}

export default Footer;

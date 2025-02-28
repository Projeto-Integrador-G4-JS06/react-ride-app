import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-center  bg-[#293241] text-white">
      {/* Footer Responsivo (Mobile e Desktop) */}
      <div className="container mx-auto max-md:flex-col px-4 flex flex-row justify-between items-center py-4">
        <img
          className="h-[8vh] mr-1 max-md:h-[5vh]"
          src="https://ik.imagekit.io/3ov0fr7b9/usuarios/BORA%20AI.svg?updatedAt=1740689358462"
          alt="PeopleHub Logo"
        />

        <p className="text-sm md:text-base xl:text-lg py-2">
          BoraAí | Copyright: {date}
        </p>

        <section className="flex gap-3 py-1">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo
              className="font-medium w-7 h-7 md:w-[40px] md:h-[40px] hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo
              className="font-medium w-7 h-7 md:w-[40px] md:h-[40px] hover:text-blue-500 transition-colors"
              aria-label="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogo
              className="font-medium w-7 h-7 md:w-[40px] md:h-[40px] hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;

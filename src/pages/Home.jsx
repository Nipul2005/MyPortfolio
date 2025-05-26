import SocialIcons from "../icons/SocialIcons";

function Home() {
  return (
      <section
        className="w-full h-full bg-cover bg-center flex  justify-center items-center px-4"
        style={{ backgroundImage: "url(turtlabs.webp)" }}
      >
        <div className="sm:container sm:mx-auto sm:max-w-3/6 flex sm:flex-row flex-col justify-between sm:items-center items:start backdrop-blur-xl border border-white/2 rounded-lg px-5 py-8 gap-y-5 w-full relative">
          <div className="flex-2 self-stretch">
            <h2 className="sm:text-md text-white mb-10 text-md font-light">
              We Dive Deep Into What You Need...
            </h2>
            <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-6xl text-white">
              The <br />
              <span>Turtlabs</span>
            </h1>
            <p className="sm:text-md text-white mt-10 font-extralight">
              We build responsive web and mobile applications with seamless user
              experiences and scalable backend systems. Our solutions combine
              modern frontend interfaces with intuitive UI/UX and secure,
              high-performance backend architectures tailored for long-term
              growth.
            </p>
          </div>
          <div className="flex-1 flex flex-row sm:flex-col sm:justify-between justify-start items-center gap-x-3 sm:gap-y-16  ">
            <SocialIcons
              link="https://wa.me/9205470224"
              icons="ri-whatsapp-line"
            />
            <SocialIcons
              link="https://www.linkedin.com/in/nipul-pandit-649937282"
              icons="ri-linkedin-line"
            />
            <SocialIcons
              linkType="mailto:"
              link="turtlabs@gmail.com"
              icons="ri-mail-line"
            />
            <SocialIcons
              linkType="tel:"
              link="9205470224"
              icons="ri-phone-line"
            />
          </div>
        </div>

        <p className="fixed bottom-5 text-white text-sm font-extralight">
          &copy; {new Date().getFullYear()} Turtlabs, All Rights Reserved
        </p>
      </section>
  );
}

export default Home;

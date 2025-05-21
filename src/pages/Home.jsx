import SocialIcons from "../icons/SocialIcons";

function Home() {
  return (
    <section
      className="w-full h-full bg-cover bg-center flex  justify-center items-center px-4"
      style={{ backgroundImage: "url(turtlabs.jpg)" }}
    >
      <div className="sm:container sm:mx-auto sm:max-w-3/6 flex sm:flex-row flex-col justify-between items-start backdrop-blur-xs bg-black/30 border border-white/5 rounded-lg px-5 py-8 gap-y-5">
        <div className="flex-2 self-stretch">
          <h2 className="sm:text-lg text-white mb-1 text-md">
            We Dive Deep Into What You Need
          </h2>
          <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-6xl text-white">
            The Turtlabs
          </h1>
          <p className="sm:text-md text-white/80 mt-10 text-sm italic">
            We specialize in crafting responsive, high-performance web and
            mobile applications using modern technologies including React,
            Next.js, Node.js, MongoDB, and React Native. Our focus is on clean,
            maintainable code, exceptional UI/UX design, and scalable, secure
            backend solutions.
          </p>
        </div>
        <div className="flex-1 flex flex-row sm:flex-col sm:justify-between justify-start items-center gap-x-3 self-stretch ">
          <SocialIcons
            link="https://wa.me/9205470224"
            icons="ri-whatsapp-line"
          />
          <SocialIcons
            link="https://www.linkedin.com/in/nipul-pandit-649937282"
            icons="ri-linkedin-line"
          />
          <SocialIcons
            link="https://github.com/Nipul2005"
            icons="ri-github-line"
          />
          <SocialIcons
            link="https://www.instagram.com/nipul2005_/"
            icons="ri-instagram-line"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

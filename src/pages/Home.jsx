import SocialIcons from "../icons/SocialIcons";

function Home() {
  return (
    <section className="w-full h-full bg-[url(bg.jpg)] bg-cover bg-center flex  justify-center items-center px-4">
      <div className="sm:container sm:mx-auto sm:max-w-3/6 flex sm:flex-row flex-col justify-between items-start backdrop-blur-xs bg-black/30 border border-white/5 rounded-lg px-5 py-8 gap-y-5">
        <div className="flex-2 self-stretch">
          <p className="sm:text-lg text-white mb-1 text-md">FullStack Developer</p>
          <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-white">Nipul Pandit</h1>
          <p className="sm:text-md text-white/80 mt-12 text-sm">
            I specialize in building responsive, high-performance web
            applications using modern technologies like React, Node.js, and
            MongoDB. I focus on clean code, strong UI/UX, and scalable backend
            solutions.
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

import { Helmet } from "react-helmet-async";
import SocialIcons from "../icons/SocialIcons";

function Home() {
  return (
    <>
      <Helmet>
        {/* ✅ Primary Meta Tags */}
        <title>Turtlabs — Web & Mobile App Development Solutions</title>
        <meta
          name="description"
          content="Turtlabs builds fast, responsive, and scalable web and mobile applications using React, Next.js, Node.js, MongoDB, and React Native."
        />
        <meta
          name="keywords"
          content="Turtlabs, web development, mobile app development, React, Next.js, Node.js, MongoDB, React Native, UI UX design, full stack solutions, startup websites"
        />
        <meta name="author" content="Turtlabs" />
        <link rel="canonical" href="https://turtlabs.vercel.app/" />

        {/* ✅ Open Graph (Facebook & LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Turtlabs — Web & Mobile App Development Solutions"
        />
        <meta
          property="og:description"
          content="Custom web and mobile development services using modern tech like React, Next.js, Node.js, and MongoDB. Clean code, scalable solutions."
        />
        <meta property="og:url" content="https://turtlabs.vercel.app/" />
        <meta
          property="og:image"
          content="https://turtlabs.vercel.app/turtlabs.jpg"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Turtlabs — Web & Mobile App Development Solutions"
        />
        <meta
          name="twitter:description"
          content="We create fast, responsive web and mobile apps tailored to business needs using React, Node.js, MongoDB, and React Native."
        />
        <meta
          name="twitter:image"
          content="https://turtlabs.vercel.app/turtlabs.jpg"
        />

        {/* ✅ Viewport for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Turtlabs",
            url: "https://turtlabs.vercel.app/",
            logo: "https://turtlabs.vercel.app/turtlabs.jpg",
            description:
              "Turtlabs offers scalable, modern web and mobile app development using React, Next.js, Node.js, MongoDB, and React Native.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "India",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "9205470224",
              email: "pnipul7678gmail.com",
              availableLanguage: ["English", "Hindi"],
            },
          })}
        </script>
      </Helmet>
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
              Next.js, Node.js, MongoDB, and React Native. Our focus is on
              clean, maintainable code, exceptional UI/UX design, and scalable,
              secure backend solutions.
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
    </>
  );
}

export default Home;

import React from "react";
import { Helmet } from "react-helmet-async";

function Seo({ title, desc, keywords }) {
  return (
    <Helmet>
      <title>Turtlabs — Web & Mobile App Development Solutions{title}</title>
      <meta
        name="description"
        content={`"Turtlabs builds fast, responsive, and scalable web and mobile applications using React, Next.js, Node.js, MongoDB, and React Native."${desc}`}
      />
      <meta
        name="keywords"
        content={`"Turtlabs, web development, mobile app development, React, Next.js, Node.js, MongoDB, React Native, UI UX design, full stack solutions, startup websites" ${keywords}`}
      />
      <meta name="author" content="Turtlabs" />
      <link rel="canonical" href="https://turtlabs.vercel.app/" />

      {/* ✅ Open Graph (Facebook & LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Custom web and mobile development services using modern tech like React, Next.js, Node.js, and MongoDB. Clean code, scalable solutions."
      />
      <meta property="og:url" content="https://turtlabs.vercel.app/" />
      <meta
        property="og:image"
        content="https://turtlabs.vercel.app/turtlabs.webp"
      />

      {/* ✅ Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="We create fast, responsive web and mobile apps tailored to business needs using React, Node.js, MongoDB, and React Native."
      />
      <meta
        name="twitter:image"
        content="https://turtlabs.vercel.app/turtlabs.webp"
      />

      {/* ✅ JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Turtlabs",
          url: "https://turtlabs.vercel.app/",
          logo: "https://turtlabs.vercel.app/turtlabs.webp",
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
  );
}

export default Seo;

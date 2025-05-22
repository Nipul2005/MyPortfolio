import React from "react";
import { Helmet } from "react-helmet-async";

function Seo({ title, desc, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Turtlabs" />
      <link rel="canonical" href="https://turtlabs.vercel.app/" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

      {/* ✅ Open Graph (Facebook & LinkedIn) */}
      <meta
        property="og:title"
        content="Turtlabs – Modern Web & Mobile App Development"
      />
      <meta
        property="og:description"
        content="We craft scalable, fast web and mobile apps using React, Next.js, Node.js, and more. Perfect for startups and growing businesses."
      />
      <meta
        property="og:image"
        content="https://turtlabs.vercel.app/turtlabs.webp"
      />
      <meta property="og:url" content="https://turtlabs.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Turtlabs" />

      {/* ✅ Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta
        name="twitter:image"
        content="https://turtlabs.vercel.app/turtlabs.webp"
      />
      <meta name="twitter:site" content="@turtlabs" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Turtlabs" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {/* ✅ JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Turtlabs",
          url: "https://turtlabs.vercel.app/",
          logo: "https://turtlabs.vercel.app/turtlabs.webp",
          description:` ${ desc }`,
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

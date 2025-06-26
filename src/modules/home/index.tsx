"use client"

import type { FC } from "react"
import { motion } from "framer-motion"
import BitrixForm from "../../components/bitrix-form/bitrix-form.tsx"
import Building from "../../assets/building.jpg"
import { Helmet } from "react-helmet"
import "../../index.css"

export type Program = {
  id: string
  name: string
  duration: number
  price: number
  field_lang: string
  curriculum?: {
    file_path: string
  }
}

const MBAFormWithInfo: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-black"
    >
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Osiyo Texnologiyalar Universiteti - Ta'lim Yo'nalishlari | Bakalavr va Magistratura Dasturlari</title>
        <meta
          name="description"
          content="Osiyo Texnologiyalar Universitetida bakalavr va magistratura ta'lim yo'nalishlari haqida ma'lumot. Kunduzgi, kechki va sirtqi dasturlar narxlari va davomiyligi. Kompyuter injiniringi, axborot texnologiyalari va boshqa yo'nalishlar."
        />
        <meta
          name="keywords"
          content="Osiyo Texnologiyalar Universiteti, bakalavr, magistratura, ta'lim yo'nalishlari, Uzbekistan education, kompyuter injiniringi, axborot texnologiyalari, dasturiy injiniring, universitet qabul, ta'lim narxlari"
        />
        <meta name="author" content="Osiyo Texnologiyalar Universiteti" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="uz" />
        <meta name="geo.region" content="UZ" />
        <meta name="geo.placename" content="Tashkent, Uzbekistan" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://qabul.asianuniversity.uz/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Osiyo Texnologiyalar Universiteti - Ta'lim Yo'nalishlari" />
        <meta
          property="og:description"
          content="Bakalavr va magistratura dasturlari haqida to'liq ma'lumot. Narxlar, davomiylik va ta'lim shakllari bilan tanishing. Kompyuter injiniringi, axborot texnologiyalari va boshqa zamonaviy yo'nalishlar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qabul.asianuniversity.uz/" />
        <meta property="og:image" content="https://qabul.asianuniversity.uz/assets/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Osiyo Texnologiyalar Universiteti Logo" />
        <meta property="og:site_name" content="Osiyo Texnologiyalar Universiteti" />
        <meta property="og:locale" content="uz_UZ" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Osiyo Texnologiyalar Universiteti - Ta'lim Yo'nalishlari" />
        <meta
          name="twitter:description"
          content="Bakalavr va magistratura dasturlari haqida to'liq ma'lumot. Narxlar, davomiylik va ta'lim shakllari bilan tanishing."
        />
        <meta name="twitter:image" content="https://qabul.asianuniversity.uz/assets/logo.png" />
        <meta name="twitter:image:alt" content="Osiyo Texnologiyalar Universiteti Logo" />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#080AA6" />
        <meta name="msapplication-TileColor" content="#080AA6" />
        <meta name="application-name" content="Osiyo Texnologiyalar Universiteti" />
        <meta name="apple-mobile-web-app-title" content="OTU Qabul" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Osiyo Texnologiyalar Universiteti",
            alternateName: "Asian University of Technology",
            url: "https://qabul.asianuniversity.uz/",
            logo: "https://qabul.asianuniversity.uz/assets/logo.png",
            description:
              "Osiyo Texnologiyalar Universitetida bakalavr va magistratura ta'lim yo'nalishlari haqida ma'lumot",
            address: {
              "@type": "PostalAddress",
              addressCountry: "UZ",
              addressLocality: "Tashkent",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "admissions",
              url: "https://qabul.asianuniversity.uz/",
            },
            sameAs: ["https://asianuniversity.uz/"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Ta'lim dasturlari",
              itemListElement: [
                {
                  "@type": "Course",
                  name: "Bakalavr dasturlari",
                  description: "4-5 yillik bakalavr ta'lim dasturlari",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "Osiyo Texnologiyalar Universiteti",
                  },
                },
                {
                  "@type": "Course",
                  name: "Magistratura dasturlari",
                  description: "2 yillik magistratura ta'lim dasturlari",
                  provider: {
                    "@type": "EducationalOrganization",
                    name: "Osiyo Texnologiyalar Universiteti",
                  },
                },
              ],
            },
          })}
        </script>

        {/* Additional Meta Tags for Better Indexing */}
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="expires" content="never" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </Helmet>

      <div className="flex-col flex items-stretch lg:flex-row md:flex-row ">
        <div className="w-full max-w-[1000px]  object-contain hidden lg:block transfer-hero">
          <img
            src={Building || "/placeholder.svg"}
            alt="building"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="w-full lg:w-1/2 p-2 lg:p-8 flex justify-center items-center ">
          <div className="w-full max-w-md">
            <BitrixForm />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default MBAFormWithInfo

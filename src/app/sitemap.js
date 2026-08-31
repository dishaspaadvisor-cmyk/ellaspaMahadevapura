export const dynamic = "force-static";

const BASE_URL = "https://oviawellnessspa.in";

export default function sitemap() {
  const services = [
    "swedish-massage-Thrissur",
    "deep-tissue-massage",
    "aromatherapy-massage",
    "thai-massage",
    "couples-massage",
    "head-shoulder-massage",
    "foot-reflexology",
    "signature-spa-thrissur",
    "b2b-massage-thrissur",
    "nuru-massage-thrissur",
    "sandwich-massage-thrissu",
    "happy-ending-massage-thrissur",
  ];

  const pages = [
    {
      url: BASE_URL,
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/about`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/services`,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/gallery`,
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/offers`,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/contact`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: `${BASE_URL}/terms`,
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];

  const servicePages = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...pages, ...servicePages].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
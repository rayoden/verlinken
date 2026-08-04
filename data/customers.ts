export type Customer = {
  slug: string;
  name: string;
  tagline: string;
  emoji?: string;
  rating?: string;
  reviews?: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  googleReview: string;
  instagram?: string;
  whatsapp: string;
  color?: "emerald" | "blue" | "violet" | "orange" | "rose" | "teal";
};

export const customers: Record<string, Customer> = {
  "top-job-bern": {
    slug: "top-job-bern",
    name: "Top Job Bern",
    tagline: "Gartenpflege • Hauswartung • Reinigung",
    emoji: "🌿",
    rating: "5.0",
    reviews: "19+",
    address: "Waldeckweg 11, 3053 Münchenbuchsee",
    phone: "+41 31 301 01 25",
    email: "info@top-job-bern.ch",
    website: "https://www.top-job-bern.ch",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJv0Lkcoo7jkcRl4iwtof2pyo",
    instagram: "https://www.instagram.com/top_4_saison_job?igsh=Yms0MnEya3pkYTB5",
    whatsapp: "https://wa.me/41313010125",
    color: "emerald",
  },
};
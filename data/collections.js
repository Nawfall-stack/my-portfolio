// ==============================
// COLLECTION CATEGORIES
// ==============================
export const COLLECTION_CATEGORIES = [
  { key: "logo", label: "Logo" },
  { key: "poster", label: "Poster" },
  { key: "illustration", label: "Illustration" },
  { key: "socmed", label: "Social Media" },
  { key: "thumbnail", label: "Thumbnail" },
  { key: "font", label: "Font" },
];

// ==============================
// CATEGORY META
// ==============================
export const CATEGORY_META = {
  logo: {
    title: "Logo Collection",
  },
  poster: {
    title: "Poster Collection",
  },
  illustration: {
    title: "Illustration Collection",
  },
  socmed: {
    title: "Social Media Design",
  },
  thumbnail: {
    title: "Thumbnail Design",
  },
  font: {
    title: "Font & Typography",
  },
};

// ==============================
// HELPER: GENERATE 10 DUMMY ITEMS
// ==============================
const generateItems = (prefix, category) =>
  Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `${prefix} ${i + 1}`,
    image: `/images/dummy/placeholder-${(i % 5) + 1}.jpg`,
    category,
    year: 2020 + (i % 5),
  }));

// ==============================
// COLLECTION DATA (DUMMY)
// ==============================
export const COLLECTIONS = {
  logo: generateItems("Logo Concept", "logo"),

  poster: generateItems("Poster Design", "poster"),

  illustration: generateItems("Illustration Artwork", "illustration"),

  socmed: generateItems("Social Media Post", "socmed"),

  thumbnail: generateItems("Video Thumbnail", "thumbnail"),

  font: generateItems("Font Exploration", "font"),
};

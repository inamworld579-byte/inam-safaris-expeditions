import volcanoesImg from "@/assets/volcanoes-gorilla.jpg";
import akageraImg from "@/assets/akagera.jpg";
import nyungweImg from "@/assets/nyungwe.jpg";
import lakeKivuImg from "@/assets/lake-kivu.jpg";
import kigaliTourImg from "@/assets/kigali-tour.jpg";
import kingsPalaceImg from "@/assets/kings-palace.jpg";

export type Destination = {
  slug: string;
  name: string;
  region: string;
  coords: string;
  img: string;
  gallery: string[];
  tag: string;
  intro: string;
  story: string;
  experiences: string[];
  bestTime: string;
  duration: string;
  type: "park" | "city" | "lake" | "heritage" | "forest";
};

export const destinations: Destination[] = [
  {
    slug: "volcanoes",
    name: "Volcanoes National Park",
    region: "Northern Province",
    coords: "1.4833° S, 29.5000° E",
    img: volcanoesImg,
    gallery: [volcanoesImg, nyungweImg],
    tag: "Where giants walk among the mist",
    intro: "Home to the world's endangered mountain gorillas.",
    story:
      "Sitting in the cradle of the Virunga massif, Volcanoes National Park is one of only three places on Earth where you can sit, in silence, an arm's length from a wild mountain gorilla. Forests of bamboo and Hagenia, peaks vanishing into cloud, and a story of conservation — Dian Fossey's story — still being written by Rwandan rangers today.",
    experiences: [
      "Mountain Gorilla Trekking",
      "Golden Monkey Tracking",
      "Dian Fossey Tomb Hike",
      "Iby'Iwacu Cultural Village",
      "Mount Bisoke Volcano Climb",
    ],
    bestTime: "June – September · December – February",
    duration: "2 – 4 days",
    type: "park",
  },
  {
    slug: "akagera",
    name: "Akagera National Park",
    region: "Eastern Province",
    coords: "1.8794° S, 30.7064° E",
    img: akageraImg,
    gallery: [akageraImg],
    tag: "Rwanda's Big Five savannah",
    intro: "Open plains, papyrus swamps and the return of the Big Five.",
    story:
      "Once nearly lost, Akagera is one of Africa's greatest conservation comebacks. Today, lion, rhino, elephant, buffalo and leopard once again roam these golden plains beside the Akagera river system. Game drives at dawn, sundowners on the lakeshore, and night safaris under uncountable stars.",
    experiences: [
      "Game Drives",
      "Boat Safari on Lake Ihema",
      "Night Game Drive",
      "Behind-the-Scenes Conservation Tour",
      "Birding (over 480 species)",
    ],
    bestTime: "Year round · Best June – September",
    duration: "2 – 3 days",
    type: "park",
  },
  {
    slug: "nyungwe",
    name: "Nyungwe Forest National Park",
    region: "Western Province",
    coords: "2.5000° S, 29.2000° E",
    img: nyungweImg,
    gallery: [nyungweImg],
    tag: "Canopy of ancient rainforest",
    intro: "One of Africa's oldest montane rainforests.",
    story:
      "Nyungwe is a green cathedral — 1,000 km² of primary rainforest sheltering 13 species of primates, including habituated chimpanzees and the largest troops of black-and-white colobus in Africa. Walk the famous canopy bridge suspended 70 metres above the forest floor and listen to a forest that has been listening back since long before us.",
    experiences: [
      "Chimpanzee Trekking",
      "Canopy Walk",
      "Colobus Monkey Tracking",
      "Waterfall Hike",
      "Tea Plantation Tour",
    ],
    bestTime: "June – September · December – February",
    duration: "2 – 3 days",
    type: "forest",
  },
  {
    slug: "lake-kivu",
    name: "Lake Kivu",
    region: "Western Province",
    coords: "2.0403° S, 29.2207° E",
    img: lakeKivuImg,
    gallery: [lakeKivuImg],
    tag: "Inland sea of silver light",
    intro: "Rwanda's Riviera — boat rides, beaches and island lunches.",
    story:
      "Lake Kivu stretches like a quiet sea between Rwanda and the Democratic Republic of Congo. Fishermen sing on traditional pirogues at dusk, coffee islands rise from morning mist, and the volcanic shoreline is dotted with quiet beach towns — Rubavu, Kibuye, Rusizi — each its own world.",
    experiences: [
      "Boat Cruises",
      "Napoleon Island Visit",
      "Coffee Island Tour",
      "Kayaking & Stand-up Paddling",
      "Fishermen Sunset Sail",
    ],
    bestTime: "Year round",
    duration: "2 – 4 days",
    type: "lake",
  },
  {
    slug: "kigali",
    name: "Kigali",
    region: "Capital",
    coords: "1.9577° S, 30.1127° E",
    img: kigaliTourImg,
    gallery: [kigaliTourImg, kigaliTourImg],
    tag: "A capital that remembers, and rises",
    intro: "Africa's cleanest, safest and most thoughtful capital.",
    story:
      "Kigali drapes itself across a thousand hills — galleries, jazz bars, coffee roasters, and a memorial that holds the heart of Rwanda's story. By day, walk markets and craft cooperatives; by night, the city glows like a constellation along its ridges.",
    experiences: [
      "Kigali Genocide Memorial",
      "City Walking Tour",
      "Coffee Roastery Visit",
      "Inema Arts Centre",
      "Kimironko Market",
    ],
    bestTime: "Year round",
    duration: "1 – 2 days",
    type: "city",
  },
  {
    slug: "nyanza",
    name: "King's Palace · Nyanza",
    region: "Southern Province",
    coords: "2.3500° S, 29.7400° E",
    img: kingsPalaceImg,
    gallery: [kingsPalaceImg],
    tag: "Heritage of the Rwandan monarchy",
    intro: "The traditional seat of the Rwandan kings.",
    story:
      "At Nyanza, the reconstructed royal palace stands beside the long-horned Inyambo cattle — bred and sung to for generations. Here is where Rwanda's monarchy lived, where dancers practised the umushagiriro, and where you can step into a history that predates the colonial map.",
    experiences: [
      "Royal Palace Museum",
      "Inyambo Cattle Ceremony",
      "Intore Dance Performance",
      "Traditional Hut Tour",
      "Local Craft Cooperative",
    ],
    bestTime: "Year round",
    duration: "Half-day to 1 day",
    type: "heritage",
  },
  {
    slug: "lake-kivu-rwanda",
    name: "Lake Kivu · Karongi Shore",
    region: "Western Province · Karongi",
    coords: "2.0500° S, 29.3500° E",
    img: lakeKivuImg,
    gallery: [lakeKivuImg],
    tag: "Quiet beaches and floating coffee",
    intro: "The slower, southern shores of Kivu.",
    story:
      "The Karongi stretch of Lake Kivu is where many travellers find their slowest, sweetest days — quiet hotels with hammocks over water, evening boat rides past coffee islands, and grilled tilapia eaten with your fingers as the sun melts into Congo.",
    experiences: [
      "Coffee Island Visit",
      "Boat to Napoleon Island",
      "Sunset Cruise",
      "Local Village Walk",
      "Swimming & Kayaking",
    ],
    bestTime: "Year round",
    duration: "2 – 3 days",
    type: "lake",
  },
  {
    slug: "nyungwe-deep",
    name: "Nyungwe Deep · Uwinka",
    region: "Western Province · Nyungwe NP",
    coords: "2.4700° S, 29.2200° E",
    img: nyungweImg,
    gallery: [nyungweImg],
    tag: "Heart of the rainforest",
    intro: "The Uwinka reception in the deep forest interior.",
    story:
      "From the Uwinka visitor centre, trails radiate into the heart of Nyungwe — to the Igishigishigi canopy walk, to thundering Kamiranzovu waterfall, to silent ridges where the only sound is the call of a great blue turaco.",
    experiences: [
      "Canopy Walkway",
      "Kamiranzovu Waterfall Hike",
      "Igishigishigi Trail",
      "Birding (310+ species)",
      "Forest Bathing",
    ],
    bestTime: "June – September · December – February",
    duration: "2 – 3 days",
    type: "forest",
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

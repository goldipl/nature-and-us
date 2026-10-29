import type { StaticImageData } from "next/image";
import newsSectionImg01 from "./../../public/img/home/news_section/news-section01.jpg";
import newsSectionImg02 from "./../../public/img/home/news_section/news-section02.jpg";
import newsSectionImg03 from "./../../public/img/home/news_section/news-section03.jpg";
import newsSectionImg04 from "./../../public/img/home/news_section/news-section04.jpg";

export type Region = "local" | "national" | "global";

export interface Article {
  slug: string;
  title: string;
  date: string;
  label: string;
  region: Region;
  image: StaticImageData;
  excerpt: string;
  // Paragraphs; entries starting with "## " are rendered as subheadings
  content: string[];
}

export const regions: { value: Region; label: string }[] = [
  { value: "local", label: "Local" },
  { value: "national", label: "National" },
  { value: "global", label: "Global" },
];

// Order matters: 0-3 feed the main news grid, 4-7 and 8-11 the square sections on the home page
export const articles: Article[] = [
  {
    slug: "the-healing-power-of-forest-bathing",
    title: "The Healing Power of Forest Bathing",
    date: "12.06.2024",
    label: "Poland",
    region: "local",
    image: newsSectionImg01,
    excerpt:
      "Discover how spending time in forests can boost your mental and physical well-being. Learn about the science behind forest bathing and its benefits.",
    content: [
      "Forest bathing, known in Japan as shinrin-yoku, is the simple practice of spending unhurried time among trees and paying attention to what you see, hear and smell. It is not hiking and it is not exercise: the point is to slow down and let the forest do the work.",
      "## What the research says",
      "Studies carried out over the last two decades link regular time in forests with lower levels of the stress hormone cortisol, a calmer heart rate and lower blood pressure. Researchers also point to phytoncides, the aromatic compounds released by trees, which appear to support the activity of natural killer cells in our immune system.",
      "The mental benefits are just as notable. Participants in forest walks report less anxiety and fatigue and better mood and concentration than people who walk the same distance in a city environment.",
      "## How to start",
      "You do not need a guide or special equipment. Choose a quiet path in a nearby forest, leave your phone in your pocket and walk slowly for at least twenty minutes. Stop often. Touch the bark of a tree, listen for birds, notice the light coming through the canopy.",
      "Our foresters run free guided forest bathing sessions every weekend from May to September. Check the Announcements page for the current schedule and meeting points.",
    ],
  },
  {
    slug: "protecting-our-forests-a-global-initiative",
    title: "Protecting Our Forests: A Global Initiative",
    date: "11.01.2024",
    label: "Wildlife",
    region: "global",
    image: newsSectionImg02,
    excerpt:
      "Over forty organizations have joined forces to protect the world's remaining old-growth forests and the wildlife that depends on them.",
    content: [
      "At the start of the year more than forty conservation organizations, research institutes and local communities signed a joint commitment to protect the world's remaining old-growth forests. Nature & Us is proud to be one of the founding partners.",
      "## Why old-growth forests matter",
      "Old-growth forests store far more carbon than younger stands and provide habitat for species that cannot survive anywhere else: lichens that need centuries-old bark, beetles that live only in dead wood, and birds that nest in large tree cavities.",
      "Yet less than a quarter of the world's forests can still be described as intact. Logging, road building and agricultural expansion continue to fragment them every year.",
      "## What the initiative will do",
      "The partners will map remaining old-growth areas with satellite data and field surveys, support communities that protect them, and share monitoring methods so that results from different countries can be compared.",
      "Our team will contribute data from long-term plots in Central Europe and lead the working group on deadwood biodiversity.",
    ],
  },
  {
    slug: "the-role-of-forests-in-combating-climate-change",
    title: "The Role of Forests in Combating Climate Change",
    date: "22.05.2024",
    label: "Forests news",
    region: "global",
    image: newsSectionImg03,
    excerpt:
      "Forests absorb roughly a third of the carbon dioxide released by burning fossil fuels each year. Here is how they do it and why it is not guaranteed.",
    content: [
      "Every year the world's forests absorb a large share of the carbon dioxide that human activity releases into the atmosphere. Trees take carbon in through photosynthesis and lock it away in wood, roots and the soil beneath them.",
      "## A sink that can turn into a source",
      "This service is not guaranteed. Drought, fires, pests and deforestation can turn a forest from a carbon sink into a carbon source. Parts of the Amazon and some boreal forests are already showing signs of this shift.",
      "## Healthy forests store more",
      "Diverse, well-structured forests are more resilient than monocultures. Mixing species, leaving deadwood and protecting soils all help a forest keep storing carbon even as the climate changes.",
      "Planting trees helps, but protecting existing forests helps more and faster. A mature forest holds decades or centuries of stored carbon that would be released if it were cleared.",
    ],
  },
  {
    slug: "wildlife-conservation-in-forest-habitats",
    title: "Wildlife Conservation in Forest Habitats",
    date: "10.02.2024",
    label: "Forests habitats",
    region: "national",
    image: newsSectionImg04,
    excerpt:
      "From lynx corridors to bat boxes, a look at the national projects helping forest wildlife recover.",
    content: [
      "Forests are home to most of the land-based species on the planet. Protecting them means protecting the whole web of life that depends on trees, from fungi in the soil to predators at the top of the food chain.",
      "## Reconnecting habitats",
      "Many forest animals need large territories. Our national programme is restoring green corridors between isolated forest patches so that lynx, wolves and deer can move safely between them. Wildlife crossings over busy roads are a key part of this work.",
      "## Small actions, big effects",
      "Not every project is large. Volunteers have installed more than two thousand bat and bird boxes this year, and foresters now leave standing dead trees wherever it is safe to do so, because they provide nesting sites for woodpeckers and owls.",
      "If you would like to help, take a look at our volunteer opportunities. No experience is needed, just curiosity and a pair of good boots.",
    ],
  },
  {
    slug: "exploring-the-depths-of-ancient-forests",
    title: "Exploring the Depths of Ancient Forests",
    date: "11.01.2022",
    label: "Forests",
    region: "national",
    image: newsSectionImg01,
    excerpt:
      "Some of the trees in our national reserves started growing before the first printed book. A journey into the oldest forests in the country.",
    content: [
      "Walking into an ancient forest feels different. The light is softer, the air is cooler and the ground is covered with moss, fallen trunks and seedlings competing for a gap in the canopy.",
      "## Living history",
      "Some oaks and limes in our national reserves are more than five hundred years old. Their trunks record centuries of climate in their growth rings, and researchers use them to reconstruct droughts and cold periods long before written records.",
      "## Life in deadwood",
      "Up to a third of forest species depend on dead or dying trees. In ancient forests, fallen trunks are left to decay naturally, feeding fungi, insects and the birds that eat them.",
      "Several of these reserves can be visited on marked trails. Please stay on the paths: the forest floor is more fragile than it looks.",
    ],
  },
  {
    slug: "urban-forests-green-spaces-in-cityscapes",
    title: "Urban Forests: Green Spaces in Cityscapes",
    date: "21.05.2022",
    label: "Urban News",
    region: "local",
    image: newsSectionImg02,
    excerpt:
      "City trees cool our streets, clean the air and make neighbourhoods healthier. Here is how Forest City is growing its urban forest.",
    content: [
      "An urban forest is every tree in a city: in parks, along streets, in back gardens and on school grounds. Together they make a measurable difference to the quality of city life.",
      "## Cooler, cleaner streets",
      "On hot days, streets lined with mature trees can be several degrees cooler than those without. Trees also capture dust and pollutants and soak up rainwater that would otherwise overload drains.",
      "## Our plan for Forest City",
      "Together with the city council we are planting two thousand new trees this year, choosing species that cope well with heat and drought. Residents can adopt a tree and help water it during its first summers.",
      "Want a tree on your street? Get in touch through our contact page and we will add your suggestion to the planting map.",
    ],
  },
  {
    slug: "the-economic-value-of-sustainable-forestry",
    title: "The Economic Value of Sustainable Forestry",
    date: "24.04.2023",
    label: "Hot news",
    region: "national",
    image: newsSectionImg03,
    excerpt:
      "Sustainable forestry supports thousands of jobs while keeping forests healthy for future generations. A new report puts numbers on it.",
    content: [
      "A new national report estimates that sustainably managed forests support tens of thousands of jobs, from timber harvesting and carpentry to tourism, research and education.",
      "## More than timber",
      "The report also values services that rarely appear on a balance sheet: clean water, flood protection, pollination, recreation and carbon storage. Taken together, these are worth several times more than the timber itself.",
      "## Long-term thinking pays",
      "Forests managed for the long term, with selective cutting, natural regeneration and mixed species, produce steadier income and are less vulnerable to storms and pests than clear-cut plantations.",
      "The full report is available in our library and on the Publications page.",
    ],
  },
  {
    slug: "forest-adventures-hiking-trails-and-outdoor-activities",
    title: "Forest Adventures: Hiking Trails and Outdoor Activities",
    date: "29.12.2023",
    label: "Outdoor Activities",
    region: "local",
    image: newsSectionImg04,
    excerpt:
      "Our pick of the best local trails for every season, plus tips for exploring the forest safely and responsibly.",
    content: [
      "The forests around Forest City offer more than 120 kilometres of marked trails, from short family loops to full-day hikes across the hills.",
      "## Trails worth trying",
      "The Green Loop (4 km) is flat and suitable for strollers. The Ridge Path (11 km) climbs to a viewpoint over the river valley. The Old Oak Trail (7 km) passes some of the oldest trees in the region.",
      "## Explore responsibly",
      "Stay on marked paths, take your rubbish home and keep dogs on a lead during the nesting season from March to July. Fires are only allowed in designated places, and never during periods of high fire risk.",
      "Trail maps are available at the Nature Office and on the Locations page.",
    ],
  },
  {
    slug: "how-rivers-shape-forest-ecosystems",
    title: "How Rivers Shape Forest Ecosystems",
    date: "03.03.2024",
    label: "Rivers",
    region: "national",
    image: newsSectionImg01,
    excerpt:
      "Floodplain forests are among the richest habitats in Europe. We look at the close relationship between rivers and the trees that line them.",
    content: [
      "Where rivers are allowed to flood, they create some of the most species-rich forests in Europe. Willows, poplars, alders and ashes thrive on the wet, fertile soils left behind by high water.",
      "## A partnership in both directions",
      "Rivers feed the forest with water and nutrients. In return, trees stabilise riverbanks, shade the water to keep it cool for fish, and drop leaves and branches that feed aquatic insects.",
      "## Restoring natural floodplains",
      "Many rivers have been straightened and embanked over the past century. Our restoration projects reconnect old river channels and give floodplain forests room to recover, which also reduces flood risk for towns downstream.",
    ],
  },
  {
    slug: "birdwatching-for-beginners",
    title: "Birdwatching for Beginners: Forest Edition",
    date: "18.04.2024",
    label: "Wildlife",
    region: "local",
    image: newsSectionImg02,
    excerpt:
      "Spring is the perfect time to start birdwatching. Here is what you need, where to go and which species to look for first.",
    content: [
      "In spring the forest is full of song. Birds are defending territories and looking for mates, which makes them easier to hear and to see before the leaves fully open.",
      "## What you need",
      "A pair of binoculars and a simple field guide are enough to start. A notebook helps you remember what you saw. Many beginners also use free apps that recognise bird song.",
      "## Species to start with",
      "Look for the great spotted woodpecker drumming on trunks, the chaffinch with its rattling song, the robin, the nuthatch moving head-first down tree trunks, and the jay with its bright blue wing feathers.",
      "Join our monthly beginner walks, led by volunteers from the local ornithology club. Dates are published on the Announcements page.",
    ],
  },
  {
    slug: "mountain-forests-under-pressure",
    title: "Mountain Forests Under Pressure",
    date: "07.07.2023",
    label: "Mountains",
    region: "global",
    image: newsSectionImg03,
    excerpt:
      "Warmer winters and bark beetle outbreaks are changing mountain forests across the world. Scientists are looking for ways to help them adapt.",
    content: [
      "Mountain forests protect valleys from avalanches, landslides and floods, and supply clean water to millions of people. They are also among the ecosystems most exposed to climate change.",
      "## Beetles and drought",
      "Warmer winters allow bark beetles to survive in larger numbers, while summer droughts weaken spruce trees and make them easier to attack. Large areas of mountain forest have died back in recent years.",
      "## Helping forests adapt",
      "Researchers are testing ways to make mountain forests more diverse, mixing spruce with beech, fir and maple, which cope better with heat and pests. Natural regeneration after disturbance often produces more resilient forests than replanting a single species.",
    ],
  },
  {
    slug: "volunteering-with-nature-and-us",
    title: "Volunteering with Nature & Us",
    date: "15.09.2023",
    label: "Community",
    region: "local",
    image: newsSectionImg04,
    excerpt:
      "Last year our volunteers planted 15,000 trees and cleaned 60 km of trails. Meet the people behind the numbers and find out how to join them.",
    content: [
      "Volunteers are at the heart of everything we do. Last year more than four hundred people gave their time to plant trees, survey wildlife, maintain trails and run activities for children.",
      "## Meet our volunteers",
      "Anna, a retired teacher, leads school groups through the forest every week. Tomasz, a software developer, spends his weekends counting bats. Maria and her two children have planted more than three hundred trees together.",
      "## How to join",
      "You can volunteer once a year or every week, alone or with your company or school. We provide training, tools and insurance. Visit our Volunteer Opportunities page or contact the Nature Office to sign up.",
    ],
  },
  {
    slug: "high-fire-risk-in-forests",
    title: "High Fire Risk in Forests: What You Need to Know",
    date: "20.06.2024",
    label: "Alert",
    region: "local",
    image: newsSectionImg03,
    excerpt:
      "Extremely dry weather has raised the fire risk in local forests to the highest level. Here is how to stay safe and help prevent fires.",
    content: [
      "After several weeks without rain, the fire risk in forests around Forest City has been raised to the highest level. A single spark can now start a fire that spreads quickly through dry grass and undergrowth.",
      "## What is not allowed",
      "Until further notice, campfires, barbecues and fireworks are banned in and near all forests, including at designated fire sites. Smoking in the forest is prohibited, and cigarette ends must never be thrown from car windows.",
      "## If you see a fire",
      "Move away from the fire, ideally upwind, and call the emergency number 112 immediately. Give the location as precisely as possible: trail markings, forest road numbers and GPS coordinates all help fire crews find it quickly.",
      "## Forest access",
      "Some forest areas may be temporarily closed to visitors. Closures are marked with signs at forest entrances and published on the Announcements page.",
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);

export const articleHref = (slug: string) => `/articles/${slug}`;

// Dates are stored as DD.MM.YYYY
export const dateToTime = (date: string) => {
  const [day, month, year] = date.split(".").map(Number);
  return new Date(year, month - 1, day).getTime();
};

export const sortedArticles = [...articles].sort(
  (a, b) => dateToTime(b.date) - dateToTime(a.date)
);

export const articleCategories = Array.from(
  new Set(articles.map((article) => article.label))
).sort();

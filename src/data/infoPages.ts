export interface InfoSection {
  id: string;
  title: string;
  description: string;
}

export interface InfoPage {
  slug: string;
  title: string;
  section: string;
  intro: string;
  details?: string[];
  faqs?: { question: string; answer: string }[];
}

export const infoSections: InfoSection[] = [
  {
    id: "management",
    title: "Management",
    description:
      "Nature & Us is run by a small management team supported by foresters, scientists and hundreds of volunteers. Together we look after more than 40,000 hectares of forest, wetland and meadow.",
  },
  {
    id: "committees",
    title: "Committees",
    description:
      "Our committees bring together members, experts and partner organizations to advise on strategy, science and community work. Committee meetings are open to all registered members.",
  },
  {
    id: "register",
    title: "Register",
    description:
      "Registered members receive our bulletin, can vote at the annual meeting and take part in committees, courses and field projects.",
  },
  {
    id: "financial-matters",
    title: "Financial Matters",
    description:
      "Nature & Us is a non-profit organization. We are funded by membership fees, donations, public grants and project partners, and we publish our accounts every year.",
  },
  {
    id: "postgraduate-education",
    title: "Postgraduate Education",
    description:
      "We run accredited postgraduate courses for foresters, ecologists, teachers and land managers who want to deepen their knowledge of forest ecosystems and conservation practice.",
  },
  {
    id: "law",
    title: "Law",
    description:
      "Forests are protected by a wide range of national and international regulations. This section explains the most important rules for visitors, landowners and members.",
  },
  {
    id: "library",
    title: "Library",
    description:
      "The Nature & Us library holds more than 12,000 books, journals, maps and reports about forests, wildlife and the environment. It is open to members and the public.",
  },
  {
    id: "our-office",
    title: "Our Office",
    description:
      "The Nature Office in Forest City is the place to ask questions, pick up maps and publications, and meet our team in person.",
  },
  {
    id: "forest-management",
    title: "Forest Management",
    description:
      "We manage forests for people and for nature: protecting habitats, monitoring forest health and working closely with local communities.",
  },
  {
    id: "research",
    title: "Research Initiatives",
    description:
      "Our research team works with universities across Europe to understand how forests respond to climate change and how we can help them stay healthy.",
  },
  {
    id: "education",
    title: "Education & Outreach",
    description:
      "We believe that people protect what they understand and love. Our education programmes reach thousands of children and adults every year.",
  },
  {
    id: "resources",
    title: "Resources",
    description:
      "Reports, guides and research papers produced by Nature & Us and our partners, free to read and share.",
  },
  {
    id: "updates",
    title: "Updates",
    description:
      "News from Nature & Us: announcements, events and meetings. For longer stories, see our Nature News section.",
  },
  {
    id: "explore",
    title: "Explore",
    description:
      "Everything you need to get out into the forest, learn more about our planet and join our team.",
  },
  {
    id: "nature-topics",
    title: "Nature Topics",
    description:
      "Short introductions to the ecosystems and ideas at the heart of our work. Follow the links in each topic to find related news and projects.",
  },
];

export const infoPages: InfoPage[] = [
  // Management
  {
    slug: "management",
    title: "Management",
    section: "management",
    intro:
      "Our management team sets the strategy for protecting and restoring the forests in our care, balancing conservation, research and public access.",
    details: [
      "Director: Dr. Eva Green",
      "Head of Forestry: Mark Woods",
      "Head of Research: Dr. Lena Brook",
      "Head of Education: Paul Fields",
    ],
  },
  {
    slug: "forestry-team",
    title: "Forestry Team",
    section: "management",
    intro:
      "Our foresters look after the day-to-day health of the forests: planning work, marking trees, maintaining trails and keeping visitors safe.",
  },
  {
    slug: "volunteers",
    title: "Volunteers",
    section: "management",
    intro:
      "More than four hundred volunteers help us plant trees, survey wildlife, guide visitors and run events. Volunteers are coordinated by a dedicated team at the Nature Office.",
  },
  {
    slug: "conservation-projects",
    title: "Conservation Projects",
    section: "management",
    intro:
      "From restoring peat bogs to reconnecting wildlife corridors, our conservation projects protect the most valuable habitats in the region.",
    details: [
      "Floodplain forest restoration on the Green River",
      "Lynx and wolf corridors between northern forest complexes",
      "Peat bog rewetting in the Misty Hills",
      "Deadwood and old-growth protection zones",
    ],
  },
  {
    slug: "research-initiatives",
    title: "Research Initiatives",
    section: "management",
    intro:
      "Long-term research plots, satellite monitoring and citizen science help us understand how our forests are changing and what they need.",
  },
  // Committees
  {
    slug: "committees",
    title: "Committees",
    section: "committees",
    intro:
      "Four standing committees advise the management team: Science, Community, Finance and Ethics. Each is chaired by an elected member.",
  },
  {
    slug: "meeting-schedules",
    title: "Meeting Schedules",
    section: "committees",
    intro:
      "Committee meetings take place at the Nature Office and online. Members are welcome to attend as observers.",
    details: [
      "Science Committee: first Monday of the month, 17:00",
      "Community Committee: second Wednesday of the month, 18:00",
      "Finance Committee: quarterly, last Thursday of the quarter, 16:00",
      "Annual General Meeting: second Saturday of March",
    ],
  },
  {
    slug: "advisory-board",
    title: "Advisory Board",
    section: "committees",
    intro:
      "Our Advisory Board brings together independent experts in ecology, law, education and finance who review our strategy and major projects.",
  },
  {
    slug: "partners",
    title: "Partners",
    section: "committees",
    intro:
      "We work with universities, national parks, local councils, schools and businesses who share our commitment to healthy forests.",
  },
  {
    slug: "key-personnel",
    title: "Key Personnel",
    section: "committees",
    intro:
      "Meet the people who coordinate our committees, projects and day-to-day operations, and find out how to reach them.",
  },
  // Register
  {
    slug: "register",
    title: "Register",
    section: "register",
    intro:
      "Joining Nature & Us takes a few minutes. Fill in the registration form at the Nature Office or send us a message through the contact page.",
  },
  {
    slug: "membership",
    title: "Membership",
    section: "register",
    intro:
      "Membership is open to everyone who cares about forests. Members support our work, receive the quarterly bulletin and have a say in how the organization is run.",
    details: [
      "Individual membership",
      "Family membership (up to 2 adults and children)",
      "Student membership",
      "Corporate and school partnership",
    ],
  },
  {
    slug: "professional-conduct",
    title: "Professional Conduct",
    section: "register",
    intro:
      "Our code of conduct sets out how members, staff and volunteers treat each other, the public and the natural world.",
  },
  {
    slug: "legal-documents",
    title: "Legal Documents",
    section: "register",
    intro:
      "Our statute, privacy policy, membership rules and annual reports are available to read at the Nature Office and on request.",
  },
  {
    slug: "faqs",
    title: "FAQs",
    section: "register",
    intro: "Answers to the questions we hear most often from new members.",
    faqs: [
      {
        question: "Who can become a member?",
        answer:
          "Anyone over 16 can join as an individual member. Younger people are welcome as part of a family membership.",
      },
      {
        question: "How long does registration take?",
        answer:
          "Most registrations are processed within five working days. You will receive a confirmation by email.",
      },
      {
        question: "Can I cancel my membership?",
        answer:
          "Yes, at any time. Send us a message and we will close your membership at the end of the current period.",
      },
      {
        question: "Do I need any experience to volunteer?",
        answer:
          "No. We provide all the training and equipment you need, and you can choose activities that suit you.",
      },
    ],
  },
  // Financial matters
  {
    slug: "financial-matters",
    title: "Financial Matters",
    section: "financial-matters",
    intro:
      "We are committed to spending every donation and fee carefully. More than 80% of our income goes directly to conservation and education.",
  },
  {
    slug: "membership-fees",
    title: "Membership Fees",
    section: "financial-matters",
    intro: "Fees are paid once a year and help fund our conservation work.",
    details: [
      "Individual: 120 per year",
      "Family: 180 per year",
      "Student: 40 per year",
      "Corporate: from 1,000 per year",
    ],
  },
  {
    slug: "grants",
    title: "Grants",
    section: "financial-matters",
    intro:
      "We offer small grants to schools, community groups and researchers for projects that protect forests or help people connect with nature.",
  },
  {
    slug: "aid",
    title: "Aid",
    section: "financial-matters",
    intro:
      "Members facing financial difficulties can apply for a reduced fee or a fee waiver. All applications are treated confidentially.",
  },
  // Postgraduate education
  {
    slug: "postgraduate-education",
    title: "Postgraduate Education",
    section: "postgraduate-education",
    intro:
      "Our postgraduate programmes combine classroom learning with field work in our forests and are taught by practitioners and university lecturers.",
  },
  {
    slug: "recruitment",
    title: "Recruitment",
    section: "postgraduate-education",
    intro:
      "Recruitment for courses starting in October opens on 1 May. Places are limited, so we recommend applying early.",
  },
  {
    slug: "specialization-courses",
    title: "Specialization Courses",
    section: "postgraduate-education",
    intro:
      "Two-year specialization courses in forest ecology, conservation management and environmental education.",
  },
  {
    slug: "qualification-courses",
    title: "Qualification Courses",
    section: "postgraduate-education",
    intro:
      "Short courses that lead to recognized qualifications, such as wildlife surveyor, nature guide or arborist.",
  },
  {
    slug: "specialist-courses",
    title: "Specialist Courses",
    section: "postgraduate-education",
    intro:
      "One- to three-day workshops on specific skills: bat detection, tree health assessment, GIS mapping and more.",
  },
  {
    slug: "interested-individuals",
    title: "Interested Individuals",
    section: "postgraduate-education",
    intro:
      "Not sure which course is right for you? Leave your details and our education team will contact you with tailored advice.",
  },
  {
    slug: "training-plans",
    title: "Training Plans",
    section: "postgraduate-education",
    intro:
      "Detailed plans for every course, including modules, field days, assessment methods and recommended reading.",
  },
  {
    slug: "registered-entities",
    title: "Registered Entities",
    section: "postgraduate-education",
    intro:
      "A list of universities and training providers accredited to run courses in partnership with Nature & Us.",
  },
  {
    slug: "smk",
    title: "SMK",
    section: "postgraduate-education",
    intro:
      "SMK is our online course management system, where students register for courses, download materials and track their progress.",
  },
  {
    slug: "postgraduate-faqs",
    title: "Postgraduate FAQs",
    section: "postgraduate-education",
    intro: "Common questions about our postgraduate programmes.",
    faqs: [
      {
        question: "Do I need a degree in forestry?",
        answer:
          "No. Our courses are open to graduates of any field, although some specialist modules assume basic knowledge of biology.",
      },
      {
        question: "Can I study while working?",
        answer:
          "Yes. Most courses run on weekends, with field days planned well in advance.",
      },
      {
        question: "Are the courses recognized abroad?",
        answer:
          "Our specialization courses are accredited by partner universities and recognized across the European Union.",
      },
    ],
  },
  // Law
  {
    slug: "law",
    title: "Law",
    section: "law",
    intro:
      "A plain-language guide to the laws that protect forests, wildlife and the people who enjoy them.",
  },
  {
    slug: "rights-and-obligations",
    title: "Rights and Obligations",
    section: "law",
    intro:
      "Everyone has the right to enjoy the forest, and everyone shares the responsibility to protect it.",
    details: [
      "You may walk, cycle and pick berries and mushrooms for personal use in most public forests.",
      "Fires are only allowed in designated places and never during periods of high fire risk.",
      "Motor vehicles are not allowed on forest roads without permission.",
      "Disturbing nesting birds and protected animals is prohibited.",
    ],
  },
  {
    slug: "current-legal-acts",
    title: "Current Legal Acts",
    section: "law",
    intro:
      "An up-to-date list of national acts and EU directives on forests, nature protection and environmental impact assessment.",
  },
  // Library
  {
    slug: "library",
    title: "Library",
    section: "library",
    intro:
      "Our library is open Tuesday to Friday at the Nature Office. Members can borrow up to five items at a time.",
  },
  {
    slug: "usage-regulations",
    title: "Usage Regulations",
    section: "library",
    intro:
      "Items can be borrowed for four weeks and renewed twice. Rare books and maps are available for reading on site only.",
  },
  {
    slug: "book-collection",
    title: "Book Collection",
    section: "library",
    intro:
      "From field guides and children's books to scientific monographs, our collection covers every aspect of forest life.",
  },
  {
    slug: "ibuk-libra",
    title: "IBUK Libra",
    section: "library",
    intro:
      "Members have free access to IBUK Libra, an online reading platform with thousands of e-books on biology, ecology and environmental science.",
  },
  // Office
  {
    slug: "information-and-education-center",
    title: "Information & Education Center",
    section: "our-office",
    intro:
      "Our center hosts exhibitions, talks and workshops about the forests of the region. Entry is free for everyone.",
  },
  {
    slug: "office-location",
    title: "Office Location",
    section: "our-office",
    intro: "The Nature Office is a short walk from the Forest City railway station.",
    details: [
      "Address: 123 Greenway, Forest City",
      "Phone: (123) 456-7890",
      "Monday: no visitors day",
      "Tuesday: 10:00-18:00",
      "Wednesday-Friday: 8:00-16:00",
    ],
  },
  {
    slug: "downloadable-files",
    title: "Downloadable Files",
    section: "our-office",
    intro:
      "Registration forms, trail maps, course plans and annual reports. Printed copies are also available at the Nature Office.",
  },
  // Forest management
  {
    slug: "forest-monitoring",
    title: "Forest Monitoring",
    section: "forest-management",
    intro:
      "We track tree health, deadwood, soil moisture and wildlife on more than 300 permanent monitoring plots.",
  },
  {
    slug: "wildlife-protection",
    title: "Wildlife Protection",
    section: "forest-management",
    intro:
      "Our rangers protect nesting sites, run anti-poaching patrols and work with farmers to reduce conflicts with wildlife.",
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    section: "forest-management",
    intro:
      "We involve local residents in decisions about the forests they live next to, through open meetings, surveys and joint projects.",
  },
  // Research
  {
    slug: "ecological-studies",
    title: "Ecological Studies",
    section: "research",
    intro:
      "Field studies of forest communities, from soil fungi to large mammals, help us understand how our forests work.",
  },
  {
    slug: "climate-impact",
    title: "Climate Impact",
    section: "research",
    intro:
      "We study how drought, heat and storms affect our forests and test management methods that help them adapt.",
  },
  {
    slug: "biodiversity-projects",
    title: "Biodiversity Projects",
    section: "research",
    intro:
      "Projects that map and protect rare species, including forest orchids, saproxylic beetles and cavity-nesting birds.",
  },
  // Education
  {
    slug: "workshops-and-seminars",
    title: "Workshops & Seminars",
    section: "education",
    intro:
      "Practical workshops and expert seminars for adults, held at the Information & Education Center and in the forest.",
  },
  {
    slug: "school-programs",
    title: "School Programs",
    section: "education",
    intro:
      "Outdoor lessons for kindergartens and schools, linked to the national curriculum and led by trained educators.",
  },
  {
    slug: "public-lectures",
    title: "Public Lectures",
    section: "education",
    intro:
      "Free monthly lectures by scientists, foresters and photographers. Recordings are available for members.",
  },
  {
    slug: "volunteer-opportunities",
    title: "Volunteer Opportunities",
    section: "education",
    intro:
      "Tree planting, wildlife surveys, trail maintenance, event support and more. Pick an activity and join us.",
  },
  // Resources
  {
    slug: "publications",
    title: "Publications",
    section: "resources",
    intro:
      "Our annual reports, field guides and the quarterly Nature & Us bulletin.",
  },
  {
    slug: "research-papers",
    title: "Research Papers",
    section: "resources",
    intro:
      "Peer-reviewed papers by our staff and partners, with plain-language summaries.",
  },
  {
    slug: "guidelines",
    title: "Guidelines",
    section: "resources",
    intro:
      "Practical guidelines for landowners, schools and volunteers on topics such as tree planting, deadwood and nest boxes.",
  },
  // Updates
  {
    slug: "announcements",
    title: "Announcements",
    section: "updates",
    intro:
      "Short notices about forest closures, events, office hours and changes to our services.",
    details: [
      "High fire risk: campfires and barbecues are banned in all forests until further notice.",
      "Guided forest bathing sessions every Saturday at 10:00, May to September.",
      "Beginner birdwatching walks on the first Sunday of every month.",
    ],
  },
  {
    slug: "conferences-and-meetings",
    title: "Conferences & Meetings",
    section: "updates",
    intro:
      "Our annual Forest Futures conference brings together researchers, foresters and the public. Smaller meetings run throughout the year.",
  },
  // Explore
  {
    slug: "locations",
    title: "Locations",
    section: "explore",
    intro:
      "Explore the forests, reserves and trails in our care, from the ancient oaks of the Old Forest to the floodplains of the Green River.",
    details: [
      "Old Forest Reserve: ancient oaks and limes, 7 km Old Oak Trail",
      "Green River Floodplain: boardwalks and bird hides",
      "Misty Hills: Ridge Path viewpoint and peat bogs",
      "Forest City Park: urban forest and family Green Loop",
    ],
  },
  {
    slug: "earths-climate",
    title: "Earth's Climate",
    section: "explore",
    intro:
      "How the climate is changing, what it means for forests and what each of us can do about it.",
  },
  {
    slug: "job-agency",
    title: "Job Agency",
    section: "explore",
    intro:
      "Current job openings at Nature & Us and partner organizations, from field ranger to education coordinator.",
  },
  {
    slug: "bulletin",
    title: "Bulletin",
    section: "explore",
    intro:
      "The quarterly Nature & Us bulletin, with stories from our forests, project updates and upcoming events. Sent free to all members.",
  },
  // Nature topics (also used by the footer accordions)
  {
    slug: "forests",
    title: "Forests",
    section: "nature-topics",
    intro:
      "Forests are vital for the health of our planet. They act as the lungs of the Earth, absorbing carbon dioxide and releasing oxygen. Forests are home to a diverse array of wildlife and provide resources such as timber, medicine, and food. They also play a crucial role in water cycle regulation and soil conservation.",
  },
  {
    slug: "rivers",
    title: "Rivers",
    section: "nature-topics",
    intro:
      "Rivers are crucial waterways that sustain both human and ecological communities. They provide water for drinking, agriculture, and industry. Rivers also support a rich biodiversity, offering habitats for various species of fish, birds, and other wildlife. Additionally, rivers are important for recreation and cultural activities.",
  },
  {
    slug: "mountains",
    title: "Mountains",
    section: "nature-topics",
    intro:
      "Mountains are majestic landforms that offer a range of ecological and cultural benefits. They provide habitats for unique flora and fauna and are sources of fresh water through glaciers and rivers. Mountains also attract tourists and adventure enthusiasts, contributing to local economies. Moreover, they hold cultural and spiritual significance for many communities around the world.",
  },
  {
    slug: "oceans",
    title: "Oceans",
    section: "nature-topics",
    intro:
      "Oceans cover over 70% of the Earth's surface and are essential for global climate regulation. They absorb carbon dioxide and heat, playing a key role in mitigating climate change. Oceans are also rich in biodiversity, supporting marine life from tiny plankton to large whales. They provide food, transportation routes, and recreational opportunities for humans.",
  },
  {
    slug: "deserts",
    title: "Deserts",
    section: "nature-topics",
    intro:
      "Deserts are unique ecosystems characterized by their arid conditions and sparse vegetation. Despite their harsh environment, deserts support a variety of life adapted to extreme conditions. Deserts are also important for their mineral resources and cultural heritage. They offer stunning landscapes and are popular destinations for tourism and scientific research.",
  },
  {
    slug: "wildlife-conservation",
    title: "Wildlife Conservation",
    section: "nature-topics",
    intro:
      "Wildlife conservation is the practice of protecting animal species and their habitats. It involves efforts to prevent species from becoming endangered or extinct. Conservation strategies include habitat preservation, anti-poaching measures, and breeding programs. Protecting wildlife ensures biodiversity and the health of ecosystems, which are vital for human survival.",
  },
  {
    slug: "national-parks",
    title: "National Parks",
    section: "nature-topics",
    intro:
      "National parks are protected areas established to conserve natural landscapes and wildlife. They provide spaces for recreation, education, and scientific research. National parks help preserve biodiversity, protect endangered species, and maintain ecological processes. They also offer opportunities for people to connect with nature and enjoy outdoor activities.",
  },
  {
    slug: "botanical-gardens",
    title: "Botanical Gardens",
    section: "nature-topics",
    intro:
      "Botanical gardens are institutions dedicated to the collection, cultivation, and display of a wide variety of plants. They play a significant role in plant conservation, research, and education. Botanical gardens serve as living repositories of plant diversity, providing resources for scientific study and public enjoyment. They also promote awareness about the importance of plant conservation.",
  },
  {
    slug: "environmental-protection",
    title: "Environmental Protection",
    section: "nature-topics",
    intro:
      "Environmental protection involves measures taken to preserve and improve the natural environment. This includes reducing pollution, conserving natural resources, and protecting ecosystems. Environmental protection is essential for maintaining the health of the planet and ensuring sustainable development. It involves the cooperation of governments, organizations, and individuals.",
  },
  {
    slug: "sustainable-practices",
    title: "Sustainable Practices",
    section: "nature-topics",
    intro:
      "Sustainable practices are methods of using resources in a way that meets current needs without compromising the ability of future generations to meet theirs. This includes practices such as reducing waste, using renewable energy, and promoting sustainable agriculture. Adopting sustainable practices helps protect the environment, conserve resources, and support long-term ecological balance.",
  },
];

export const getInfoPageBySlug = (slug: string) =>
  infoPages.find((page) => page.slug === slug);

export const getInfoSection = (id: string) =>
  infoSections.find((section) => section.id === id);

export const getInfoPagesBySection = (id: string) =>
  infoPages.filter((page) => page.section === id);

export const infoHref = (slug: string) => `/info/${slug}`;

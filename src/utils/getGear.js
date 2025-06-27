// utils/getGear.js

// utils/getGear.js

const dummyGearData = [
  {
    slug: '2025-travel-backpack-portfolio-expert-review',
    title: 'The 2025 Travel Backpack Portfolio: An Expert Review of 7 Must-Have Packs',
    description: 'An in-depth expert review of 2025\'s top 7 travel backpacks, analyzing comfort, security, style, and long-term value for every type of traveler.',
    image: '/gear/backpack-portfolio-main.webp', // Main image for the overall review
    category: 'backpacks',
    publishedAt: '2025-06-27',
    rating: 9.2,
    // NEW: Author information
    author: {
      name: 'TravelCardInsider Editorial Team',
      bio: 'Our team of travel and finance experts meticulously researches and reviews the best gear to enhance your journeys. We combine real-world experience with in-depth analysis to provide trustworthy recommendations.',
      image: '/authors/tci-editorial-team.webp', // Placeholder for author image
      link: '/about/who-we-are' // Link to about page or author's profile
    },
    // NEW: Separate content into introduction and conclusion
    introContent: `
      <h2>Part I: The Anatomy of a Sound Travel Investment</h2>
      <p>Choosing a travel backpack in 2025 is a strategic investment in your travel efficiency and comfort. The right pack is a durable asset; the wrong one is a liability, costing you in physical pain or surprise airline fees. This review analyzes 2025’s top backpacks not just on features, but on their long-term value. We'll break down the core pillars of a smart investment: comfort, security, style, and overall value.</p>

      <h3>The Comfort Equation</h3>
      <p>Comfort is your most valuable asset. It’s a science of ergonomic design and load distribution. Today's market is dominated by two philosophies: hiking-derived suspension systems and streamlined urban harnesses. Hiking-style packs, like the Osprey Farpoint 40, use robust hip belts to transfer up to 80% of the weight from your shoulders to your hips—a game-changer for long walks [Osprey.com, Farpoint 40 Product Page]. Urban packs, like the Aer Travel Pack 3, prioritize a sleek profile for shorter journeys between airports and hotels [AerSF.com, Travel Pack 3 Product Page]. Your first step is to honestly assess your travel style. If you walk a lot, prioritize suspension. If you mainly use transport, an organized urban pack is a better fit.</p>

      <h3>Fortress on Your Back</h3>
      <p>Modern security is a multi-layered system. It starts with a rugged, weather-resistant shell, like the durable tarpaulin on The North Face Base Camp Voyager [TheNorthFace.com, Base Camp Voyager Product Page] or the waterproof sailcloth on the Tortuga Travel Backpack Pro [TortugaBackpacks.com, Travel Backpack Pro 40L Product Page]. Next is access control. Lockable YKK zippers are standard, but leaders like Cotopaxi and Peak Design add anti-theft loops to deter pickpockets. Finally, intelligent design adds another layer. The Aer Travel Pack 3 has a hidden pocket for a smart tracker, a brilliant security boost. Be mindful of carry-on compliance; some bags push the size limits, creating a risk on stricter international airlines.</p>

      <h3>Style and Function</h3>
      <p>A backpack's look reflects its function. Aer perfects the sleek, urban minimalist aesthetic. Cotopaxi’s Del Día collection offers vibrant, one-of-a-kind designs that champion sustainability [Cotopaxi.com, Del Día Collection]. Brands like The North Face and Osprey have a rugged, utilitarian look that signals adventure-readiness. Peak Design and Nomatic offer a tech-inspired, hybrid style for creatives and hyper-organized professionals.</p>

      <h3>The Value Proposition</h3>
      <p>True value is the total cost of ownership, weighing price against durability and warranty. A strong lifetime warranty from brands like Osprey, Peak Design, and Tortuga is a financial safety net [Osprey.com, All Mighty Guarantee]. Versatility is a value multiplier. The Peak Design Travel Backpack’s ability to change size makes it three bags in one, lowering its cost-per-use [PeakDesign.com, Travel Backpack 45L Product Page].</p>
    `,
    conclusionContent: `
      <h2>Part III: The Final Verdict: Your Persona-Based Recommendation</h2>
      <ul>
        <li><strong>For the Digital Nomad:</strong> The Aer Travel Pack 3 is your greatest asset for protecting and organizing your mobile office.</li>
        <li><strong>For the Adventurer Who Walks for Miles:</strong> The Osprey Farpoint 40 or Tortuga Pro 40L are your blue-chip investments in comfort. Choose Osprey for value or Tortuga for maximum durability.</li>
        <li><strong>For the Versatile Traveler:</strong> The Peak Design Travel Backpack 45L is your diversified mutual fund, ready for any trip you can imagine.</li>
        <li><strong>For the Style-Conscious Explorer:</strong> The Cotopaxi Allpa 35L perfectly aligns with your values and need for order, combining function with vibrant personality.</li>
        <li><strong>For the No-Nonsense Weekender:</strong> The North Face Base Camp Voyager 35L offers the best dividend yield—a tough, reliable asset at an accessible price.</li>
        <li><strong>For the Ultimate Organizer:</strong> The Nomatic Travel Bag 40L is a speculative but potentially high-reward play. If its hyper-compartmentalized system matches your style, the returns in efficiency will be immense.</li>
      </ul>
    `,
    backpacks: [
      {
        order: 1,
        name: 'Aer Travel Pack 3',
        slug: 'aer-travel-pack-3',
        image: '/gear/aer-travel-pack-3.webp',
        subTitle: 'The Blue-Chip Tech Stock',
        persona: 'The tech-savvy urbanist and business professional.',
        bottomLine: 'A premium investment in organization and professional style. Its durable materials and lifetime warranty deliver exceptional long-term value for the tech-centric traveler.',
        testimonial: '"Exactly what I was looking for. I am planning a backpacking trip in Europe... Travel pack 3 is the perfect one. It fits all the essential items without needing a roller." - Ming C., Verified Reviewer [AerSF.com, Customer Reviews]'
      },
      {
        order: 2,
        name: 'Osprey Farpoint 40',
        slug: 'osprey-farpoint-40',
        image: '/gear/osprey-farpoint-40.webp',
        subTitle: 'The Long-Term Growth Fund',
        persona: 'The comfort-seeking adventurer and world traveler who walks for miles.',
        bottomLine: 'Backed by Osprey\'s legendary "All Mighty Guarantee," the Farpoint 40 offers an unbeatable return on investment for any traveler who prioritizes comfort above all else.',
        testimonial: '"This backpack worked great for a 17 day Europe trip with many train rides and stairs. I would pack less next time but it held my overpacking and lots of comfort gear for the plane." - Elise, Verified Buyer'
      },
      {
        order: 3,
        name: 'Cotopaxi Allpa 35L',
        slug: 'cotopaxi-allpa-35l',
        image: '/gear/cotopaxi-allpa-35l.webp',
        subTitle: 'The Socially Responsible Investment',
        persona: 'The conscious, colorful, and hyper-organized explorer.',
        bottomLine: 'The Allpa 35L is an investment in joyful organization and sustainable design. Its 100% recycled fabrics and lifetime warranty make it a purchase you can feel good about [Cotopaxi.com, Allpa 35L Product Page].',
        testimonial: '"I am still in awe over how much stuff I can fit into this backpack and how well organized everything fits. Its compartments separate and are functionally thoughtful. Worth every penny." - Manny M., Verified Buyer'
      },
      {
        order: 4,
        name: 'Peak Design Travel Backpack 45L',
        slug: 'peak-design-travel-backpack-45l',
        image: '/gear/peak-design-travel-backpack-45l.webp',
        subTitle: 'The Diversified Mutual Fund',
        persona: 'The ultimate generalist—photographer one day, business traveler the next.',
        bottomLine: 'Arguably the most versatile travel bag on the market. Its ability to adapt, combined with a lifetime guarantee, provides incredible long-term value for the traveler who does it all.',
        testimonial: '"It rained so much in Central America, however the material held up and everything remained dry inside... 10/10 would recommend for regular travel, business travel and to school/work!!!" - Mr. Anderson, Verified Reviewer'
      },
      {
        order: 5,
        name: 'Tortuga Travel Backpack Pro 40L',
        slug: 'tortuga-travel-backpack-pro-40l',
        image: '/gear/tortuga-travel-backpack-pro-40l.webp',
        subTitle: 'The Gilt-Edged Bond',
        persona: 'The hardcore one-bag purist demanding peak performance.',
        bottomLine: 'While expensive, this is an investment in absolute confidence. For travelers facing unpredictable weather or heavy loads, its extreme durability and comfort provide outstanding value.',
        testimonial: '"Love this backpack. The exterior feels rugged and tough like a tank. While the interior is smart and feels luxurious like a Mercedes." - David, Verified Buyer'
      },
      {
        order: 6,
        name: 'The North Face Base Camp Voyager 35L',
        slug: 'the-north-face-base-camp-voyager-35l',
        image: '/gear/north-face-base-camp-voyager-35l.webp',
        subTitle: 'The High-Yield Stock',
        persona: 'The rugged weekender and practical adventurer needing a durable, no-fuss bag.',
        bottomLine: 'This pack offers a tremendous return, delivering iconic durability in a travel-friendly format with smart features. It represents excellent value for years of adventure.',
        testimonial: '"Comfortable, useful pocket design. Excellent travel backpack for a weekend or as a supplemental bag to a roller... The pocket configuration is great and there is no wasted space." - Ian, Verified Buyer'
      },
      {
        order: 7,
        name: 'Nomatic Travel Bag 40L',
        slug: 'nomatic-travel-bag-40l',
        image: '/gear/nomatic-travel-bag-40l.webp',
        subTitle: 'The Speculative Tech IPO',
        persona: 'The hyper-organized professional who wants a pocket for everything.',
        bottomLine: 'A high-reward investment in a unique organizational system. For those whose packing style aligns with its feature-dense layout, it can be a game-changer. For others, it may feel overly complex.',
        testimonial: '"I bought the NOMATIC Travel Bag 40L in 2017, and it\'s been a game-changer! ...What really stands out is NOMATIC\'s lifetime warranty and customer service... If you\'re on the fence, trust me—it\'s worth every penny!" - Carl L., Verified Buyer [Nomatic.com, Customer Reviews]'
      }
    ]
  },
  {
    slug: 'osprey-farpoint-55',
    title: 'Osprey Farpoint 55 Travel Pack',
    description: 'A versatile and comfortable travel backpack, perfect for long trips and backpacking adventures. Features a detachable daypack.',
    image: '/gear/osprey-farpoint-55.webp',
    category: 'backpacks',
    publishedAt: '2025-05-01',
    rating: 9.5,
    author: { // Example author for other items
      name: 'Jane Doe',
      bio: 'An avid traveler and gear tester with years of experience backpacking across continents.',
      image: '/authors/jane-doe.webp',
      link: '/authors/jane-doe'
    },
    content: `
      <h2>Osprey Farpoint 55 Overview</h2>
      <p>The Osprey Farpoint 55 is a popular choice for backpackers and travelers due to its comfortable carry system and practical features. It's designed to meet carry-on size restrictions for most airlines while offering ample space.</p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Stowaway Harness and Hipbelt:</strong> Provides a comfortable carry and can be stowed for checking luggage.</li>
        <li><strong>Detachable Daypack:</strong> A convenient smaller pack for daily excursions.</li>
        <li><strong>Panel Loading:</strong> Easy access to main compartment.</li>
        <li><strong>Lightweight Design:</strong> Ideal for keeping your overall luggage weight down.</li>
      </ul>
      <p>This pack is highly recommended for those looking for a versatile and reliable travel solution.</p>
    `,
  },
  {
    slug: 'bose-quietcomfort-45',
    title: 'Bose QuietComfort 45 Noise-Cancelling Headphones',
    description: 'Immerse yourself in your travels with industry-leading noise cancellation. Perfect for flights, trains, and noisy environments.',
    image: '/gear/bose-qc45.webp',
    category: 'electronics',
    publishedAt: '2025-04-15',
    rating: 9.0,
    author: {
      name: 'John Smith',
      bio: 'A tech enthusiast and frequent flyer who tests gadgets in real-world travel scenarios.',
      image: '/authors/john-smith.webp',
      link: '/authors/john-smith'
    },
    content: `
      <h2>Bose QuietComfort 45 Overview</h2>
      <p>The Bose QuietComfort 45 headphones are renowned for their world-class noise cancellation, making them an essential travel companion for peace and quiet on the go. They offer a comfortable fit for long listening sessions.</p>
      <h3>Highlights:</h3>
      <ul>
        <li><strong>Exceptional Noise Cancellation:</strong> Blocks out engine hum, chatter, and urban noise.</li>
        <li><strong>Aware Mode:</strong> Lets you hear your surroundings when needed.</li>
        <li><strong>Comfortable Design:</strong> Plush earcups and a secure fit for extended wear.</li>
        <li><strong>Long Battery Life:</strong> Enjoy hours of listening on a single charge.</li>
      </ul>
      <p>For travelers seeking an immersive audio experience and tranquility, the QC45s are a top pick.</p>
    `,
  },
  {
    slug: 'peak-design-travel-tripod',
    title: 'Peak Design Travel Tripod (Aluminum)',
    description: 'Compact, robust, and lightning-fast to deploy. Ideal for photographers who prioritize portability without compromising stability.',
    image: '/gear/peak-design-tripod.webp',
    category: 'photography',
    publishedAt: '2025-03-20',
    rating: 8.8,
    author: {
      name: 'Sarah Lee',
      bio: 'Professional travel photographer and gear reviewer, always seeking the best tools for the job.',
      image: '/authors/sarah-lee.webp',
      link: '/authors/sarah-lee'
    },
    content: `
      <h2>Peak Design Travel Tripod Overview</h2>
      <p>The Peak Design Travel Tripod redefines portability without sacrificing stability. Its unique design allows it to pack down incredibly small, making it perfect for photographers who need a reliable tripod that won't weigh them down.</p>
      <h3>Features:</h3>
      <ul>
        <li><strong>Compact Design:</strong> Packs down to the diameter of a water bottle.</li>
        <li><strong>Quick Deploy:</strong> Fast setup and breakdown.</li>
        <li><strong>Robust Construction:</strong> Made from high-quality aluminum for durability.</li>
        <li><strong>Integrated Phone Mount:</strong> Convenient for mobile photography.</li>
      </ul>
      <p>A game-changer for serious travel photographers.</p>
    `,
  },
  {
    slug: 'collapsible-water-bottle',
    title: 'Collapsible Silicone Water Bottle',
    description: 'Stay hydrated on the go with this space-saving, leak-proof, and BPA-free collapsible water bottle. Essential for eco-conscious travelers.',
    image: '/gear/collapsible-bottle.webp',
    category: 'accessories',
    publishedAt: '2025-02-10',
    rating: 8.0,
    author: {
      name: 'Eco Explorer',
      bio: 'Focused on sustainable travel and practical solutions for responsible adventurers.',
      image: '/authors/eco-explorer.webp',
      link: '/authors/eco-explorer'
    },
    content: `
      <h2>Collapsible Silicone Water Bottle Overview</h2>
      <p>A must-have for eco-conscious and minimalist travelers, a collapsible silicone water bottle saves space when empty and helps reduce plastic waste. They are typically leak-proof and durable.</p>
      <h3>Benefits:</h3>
      <ul>
        <li><strong>Space-Saving:</strong> Folds down when not in use.</li>
        <li><strong>Eco-Friendly:</strong> Reusable and reduces reliance on single-use plastic bottles.</li>
        <li><strong>Leak-Proof Design:</strong> Secure cap prevents spills.</li>
        <li><strong>BPA-Free:</strong> Safe for drinking.</li>
      </ul>
      <p>An essential item for staying hydrated sustainably on your travels.</p>
    `,
  },
];

export function getAllGearItems() {
  return dummyGearData.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getGearItemBySlug(slug) {
  return dummyGearData.find(item => item.slug === slug);
}

export function getUniqueGearFilterValues(field) {
  const values = new Set();
  dummyGearData.forEach(item => {
    if (Array.isArray(item[field])) {
      item[field].forEach(tag => values.add(tag));
    } else if (item[field]) {
      values.add(item[field]);
    }
  });
  return Array.from(values).sort();
}
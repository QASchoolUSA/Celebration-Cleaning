export interface City {
    name: string;
    slug: string;
    region: string;
    county: string;
    description: string;
    neighborhoods: string[];
    housingContext: string;
    cleaningPriorities: string[];
    faqs: { question: string; answer: string }[];
}

export interface Service {
    name: string;
    slug: string;
    keywords: string[];
    description: string;
    image: string;
    icon?: string;
}

export const cities: City[] = [
    {
        name: "Miami",
        slug: "miami",
        region: "South Florida",
        county: "Miami-Dade",
        description: "House, condo, and office cleaning in Miami—built for salt air, elevator access, and homes that see a lot of indoor-outdoor traffic.",
        neighborhoods: ["Brickell", "Coconut Grove", "Little Havana", "Edgewater"],
        housingContext: "Miami cleaning plans need to work for high-rise condos, older bungalows, waterfront apartments, and busy multi-generational homes. Building access, elevator reservations, salt air, and frequent indoor-outdoor traffic can all change the scope of a visit.",
        cleaningPriorities: ["Condo access and loading instructions", "Tile and hard-floor care", "Balcony-door glass and salt film", "Humidity-prone bathrooms"],
        faqs: [
            { question: "Can cleaners work in Miami high-rise buildings?", answer: "Yes. Share the building's parking, elevator, front-desk, and certificate-of-insurance requirements before the visit so access time can be planned correctly." },
            { question: "What cleaning schedule suits a Miami condo?", answer: "Biweekly service is a practical baseline for occupied condos, while homes with pets, frequent guests, or balcony traffic may benefit from weekly attention." },
        ],
    },
    {
        name: "Orlando",
        slug: "orlando",
        region: "Central Florida",
        county: "Orange",
        description: "Recurring home cleans and vacation-rental turnovers in Orlando, timed around school weeks, guest stays, and Florida pollen season.",
        neighborhoods: ["Lake Nona", "College Park", "Baldwin Park", "Conway"],
        housingContext: "Orlando includes downtown apartments, established mid-century neighborhoods, newer planned communities, and vacation-oriented properties. Cleaning priorities often shift with school schedules, guest stays, pollen, and the heavy use of air conditioning.",
        cleaningPriorities: ["Entry floors after summer rain", "Ceiling fans and return vents", "Guest-ready kitchens and baths", "Recurring care for busy households"],
        faqs: [
            { question: "Do you clean both Orlando homes and vacation rentals?", answer: "Yes. Residential visits focus on comfortable day-to-day living, while turnover service follows a time-sensitive guest-ready checklist and can include restocking instructions." },
            { question: "Which Orlando neighborhoods can request service?", answer: "Service is available across Orlando-area neighborhoods including Lake Nona, College Park, Baldwin Park, and Conway, subject to schedule and address confirmation." },
        ],
    },
    {
        name: "Tampa",
        slug: "tampa",
        region: "Tampa Bay",
        county: "Hillsborough",
        description: "Steady house and condo cleaning across Tampa Bay—historic bungalows, waterfront units, and suburban homes with pets and hard floors.",
        neighborhoods: ["Hyde Park", "Seminole Heights", "Westchase", "Channelside"],
        housingContext: "Tampa's housing ranges from historic bungalows and townhomes to waterfront condos and suburban family homes. Porch traffic, pets, hard floors, and humid bathrooms are common reasons residents choose a consistent maintenance plan.",
        cleaningPriorities: ["Historic trim and detail dusting", "Condo access coordination", "Pet hair on upholstery and floors", "Kitchen grease and bathroom moisture"],
        faqs: [
            { question: "Can a Tampa bungalow be cleaned without damaging older finishes?", answer: "Yes. Point out original wood, specialty tile, or delicate fixtures during booking so the team can use appropriate products and avoid abrasive methods." },
            { question: "How should Tampa condo owners prepare for a clean?", answer: "Confirm guest parking, elevator procedures, concierge access, and any restricted service hours before arrival." },
        ],
    },
    {
        name: "Jacksonville",
        slug: "jacksonville",
        region: "North Florida",
        county: "Duval",
        description: "Dependable residential cleaning across Jacksonville, from Riverside bungalows to larger Mandarin family homes on flexible schedules.",
        neighborhoods: ["Riverside", "San Marco", "Mandarin", "Southside"],
        housingContext: "Jacksonville covers a large area with historic homes near the urban core, apartments around Southside, and larger family homes toward Mandarin. A useful cleaning plan reflects floor type, commute-driven schedules, and the amount of outdoor dust entering the home.",
        cleaningPriorities: ["Large-home zone planning", "Older-home baseboards and trim", "Hard-floor grit removal", "Flexible recurring schedules"],
        faqs: [
            { question: "Do Jacksonville cleaning quotes account for travel and home size?", answer: "The exact address, square footage, bathrooms, condition, and requested scope should be confirmed before scheduling because Jacksonville covers a broad service area." },
            { question: "Is weekly or biweekly cleaning better for a Jacksonville family home?", answer: "Weekly is useful for pets, children, or heavy kitchen use. Biweekly often works for smaller households that maintain surfaces between visits." },
        ],
    },
    {
        name: "Naples",
        slug: "naples",
        region: "Southwest Florida",
        county: "Collier",
        description: "Seasonal arrival cleans and regular upkeep for Naples condos, golf-community homes, and larger properties—careful with stone and specialty finishes.",
        neighborhoods: ["Old Naples", "Park Shore", "Pelican Bay", "Golden Gate Estates"],
        housingContext: "Naples properties include seasonal condos, coastal homes, golf-community residences, and larger estates. Owners often need careful finish handling, arrival cleans before seasonal occupancy, and dependable coordination when they are away.",
        cleaningPriorities: ["Seasonal arrival and departure cleans", "Natural stone and specialty finishes", "Lanai and sliding-door tracks", "Detailed care for low-occupancy homes"],
        faqs: [
            { question: "Can you prepare a Naples home before a seasonal owner arrives?", answer: "Yes. Provide access instructions and a priority list; an arrival clean can focus on dust, bathrooms, kitchen surfaces, floors, and rooms that have been closed for weeks." },
            { question: "How are marble and natural-stone surfaces handled?", answer: "Identify specialty materials before service. Cleaners should use non-acidic, surface-appropriate products and avoid assuming every hard surface can take the same cleaner." },
        ],
    },
    {
        name: "Boca Raton",
        slug: "boca-raton",
        region: "South Florida",
        county: "Palm Beach",
        description: "Gated-community and waterfront home cleaning in Boca Raton, with gate coordination and guest-suite prep when you need it.",
        neighborhoods: ["Mizner Park", "Boca West", "Boca Del Mar", "East Boca"],
        housingContext: "Boca Raton combines gated communities, condos, townhomes, and waterfront residences. Cleaning visits often require gate coordination, careful floor care, and a plan that can scale up before guests or seasonal returns.",
        cleaningPriorities: ["Gate and concierge coordination", "Tile and stone floor care", "Guest-suite preparation", "Dust control in lightly used rooms"],
        faqs: [
            { question: "Can cleaners enter a gated Boca Raton community?", answer: "Yes, when the resident provides the gate list, call-box, parking, and vendor-access instructions in advance." },
            { question: "What is included in a pre-guest clean?", answer: "A pre-guest visit can prioritize bathrooms, guest bedrooms, kitchen touchpoints, floors, and visible living areas; add-on details should be agreed before arrival." },
        ],
    },
    {
        name: "Palm Beach",
        slug: "palm-beach",
        region: "South Florida",
        county: "Palm Beach",
        description: "Discreet residential cleaning in Palm Beach for seasonal homes and estates—zone-based checklists so we focus on rooms you actually use.",
        neighborhoods: ["Midtown", "North End", "South End", "Estate Section"],
        housingContext: "Palm Beach homes frequently include formal entertaining rooms, guest suites, specialty surfaces, and periods of seasonal occupancy. A room-by-room scope prevents time from being spent in closed areas while high-use spaces need attention.",
        cleaningPriorities: ["Discreet access and security procedures", "Specialty-surface instructions", "Formal-room detail dusting", "Seasonal home-opening cleans"],
        faqs: [
            { question: "Can a Palm Beach cleaning plan focus only on rooms in use?", answer: "Yes. A zone-based checklist can prioritize occupied bedrooms, kitchens, baths, and entertaining spaces while rotating lower-use rooms." },
            { question: "What access details should an estate manager provide?", answer: "Share arrival contacts, security or gate procedures, parking, alarm instructions, approved products, and rooms that are out of scope." },
        ],
    },
    {
        name: "Fort Lauderdale",
        slug: "fort-lauderdale",
        region: "South Florida",
        county: "Broward",
        description: "Home, apartment, and rental cleaning in Fort Lauderdale—extra attention on sliding doors, tracks, and waterfront salt residue.",
        neighborhoods: ["Victoria Park", "Las Olas", "Flagler Village", "Coral Ridge"],
        housingContext: "Fort Lauderdale includes waterfront homes, downtown apartments, older low-rise buildings, and seasonal rentals. Sand, salt film, pet traffic, and balcony doors often need more attention than a generic inland checklist provides.",
        cleaningPriorities: ["Sliding glass and track buildup", "Waterfront salt residue", "Apartment access logistics", "Turnover-ready bathrooms and kitchens"],
        faqs: [
            { question: "Do waterfront Fort Lauderdale homes need special cleaning?", answer: "They often need more frequent attention at entryways, glass doors, tracks, and outdoor-adjacent floors where salt and fine grit collect." },
            { question: "Can you clean a Fort Lauderdale rental between guests?", answer: "Yes. Turnover cleaning should include the guest-ready checklist, access window, linen plan, and restocking responsibilities agreed before the booking." },
        ],
    },
    {
        name: "Sarasota",
        slug: "sarasota",
        region: "Southwest Florida",
        county: "Sarasota",
        description: "Condo and seasonal-home cleaning in Sarasota, with clear scopes for lanai traffic, coastal grit, and homes that sit empty between visits.",
        neighborhoods: ["Downtown Sarasota", "Gulf Gate", "St. Armands", "Palmer Ranch"],
        housingContext: "Sarasota's mix of condos, ranch homes, planned communities, and seasonal residences creates varied cleaning needs. Coastal grit, lanai traffic, and long periods between visits make clear scopes especially important.",
        cleaningPriorities: ["Lanai-adjacent floors and tracks", "Seasonal occupancy resets", "Condo entry coordination", "Dust and humidity control"],
        faqs: [
            { question: "Can you clean a Sarasota home while the owner is away?", answer: "Yes, with confirmed access, alarm, contact, and lock-up instructions. The requested checklist and any photo documentation should be agreed in advance." },
            { question: "How often should a seasonal Sarasota residence be cleaned?", answer: "Many owners schedule an arrival clean, periodic checks during occupancy, and a departure clean. The right cadence depends on use, pets, guests, and how long the home sits closed." },
        ],
    },
    {
        name: "Coral Gables",
        slug: "coral-gables",
        region: "South Florida",
        county: "Miami-Dade",
        description: "Residential cleaning in Coral Gables that respects older tile, woodwork, and Mediterranean finishes—plus modern homes and condos.",
        neighborhoods: ["Golden Triangle", "Coral Gate", "South Gables", "Riviera"],
        housingContext: "Coral Gables is known for older Mediterranean-influenced homes alongside updated residences and condos. Original tile, woodwork, arches, and mature landscaping call for careful product choices and extra attention at entries.",
        cleaningPriorities: ["Older tile and wood finishes", "Detailed trim and arch dusting", "Leaf and soil tracking at entries", "Humidity-aware bathroom care"],
        faqs: [
            { question: "How do you protect historic finishes in a Coral Gables home?", answer: "Homeowners should identify original wood, tile, stone, or specialty coatings so cleaners can avoid harsh or abrasive products and follow material-specific instructions." },
            { question: "Is deep cleaning useful before recurring service?", answer: "Yes. A first deep clean can address accumulated detail work, then weekly or biweekly visits maintain the new baseline more efficiently." },
        ],
    },
    {
        name: "Winter Park",
        slug: "winter-park",
        region: "Central Florida",
        county: "Orange",
        description: "House and apartment cleaning in Winter Park—wood floors, older trim, lake-area entries, and post-renovation dust resets when you need them.",
        neighborhoods: ["Hannibal Square", "College Quarter", "Orwin Manor", "Windsong"],
        housingContext: "Winter Park includes historic cottages, lake-adjacent homes, apartments, and newer infill construction. Older trim, wood floors, renovation dust, and shaded entryways benefit from a more deliberate checklist.",
        cleaningPriorities: ["Wood-floor product selection", "Older-home detail dusting", "Renovation and fine-dust resets", "Lake-area entry and window tracks"],
        faqs: [
            { question: "Can you clean older Winter Park homes with original wood floors?", answer: "Yes. Identify the floor finish and any owner-approved product before the visit; excess water and one-product-fits-all methods should be avoided." },
            { question: "Do you offer cleaning after a Winter Park renovation?", answer: "Post-construction cleaning is available for settled dust and finish work after contractors have completed dust-producing tasks and removed major debris." },
        ],
    },
    {
        name: "Windermere",
        slug: "windermere",
        region: "Central Florida",
        county: "Orange",
        description: "Large-home and gated-community cleaning in Windermere, planned by zone so daily-use rooms and guest wings get the right amount of time.",
        neighborhoods: ["Keene's Pointe", "Isleworth", "Butler Bay", "Downtown Windermere"],
        housingContext: "Windermere includes lakefront estates, gated communities, and large family homes with multiple living zones. Efficient service starts with access planning and a rotation that distinguishes daily-use rooms from formal or guest spaces.",
        cleaningPriorities: ["Large-home zone schedules", "Gate and vendor access", "Lake-entry floors and glass", "Guest-wing preparation"],
        faqs: [
            { question: "How is a large Windermere home cleaned efficiently?", answer: "Use a core checklist for kitchens, occupied bedrooms, baths, and living areas, then rotate formal rooms, guest wings, and detailed tasks according to use." },
            { question: "Can cleaning be scheduled before guests arrive?", answer: "Yes. Share the arrival date and priority rooms early so guest beds, bathrooms, entertaining areas, and kitchen surfaces can be completed in the right order." },
        ],
    },
    {
        name: "Coral Springs",
        slug: "coral-springs",
        region: "South Florida",
        county: "Broward",
        description: "Recurring family-home cleaning in Coral Springs—kitchens, bathrooms, pet hair, and tile floors that show school-week traffic.",
        neighborhoods: ["The Walk", "Eagle Trace", "Maplewood", "Heron Bay"],
        housingContext: "Coral Springs is largely residential, with family homes, townhomes, gated communities, and busy school-week routines. Recurring service commonly focuses on kitchens, bathrooms, pet hair, and tile floors that show daily traffic.",
        cleaningPriorities: ["Family kitchen maintenance", "Pet hair and high-traffic floors", "Bathroom moisture control", "Predictable school-week scheduling"],
        faqs: [
            { question: "What cleaning frequency works for a Coral Springs family home?", answer: "Weekly service suits homes with children, pets, or frequent cooking. Biweekly is often enough for smaller households that handle quick resets between visits." },
            { question: "Can the checklist change from visit to visit?", answer: "The core rooms should remain consistent, while rotating priorities such as baseboards, guest rooms, or extra dusting can be noted before each visit." },
        ],
    },
    {
        name: "Wellington",
        slug: "wellington",
        region: "South Florida",
        county: "Palm Beach",
        description: "Residential cleaning in Wellington for planned-community homes and equestrian properties—mudrooms, entries, and dust from outdoor days.",
        neighborhoods: ["Aero Club", "Palm Beach Point", "Olympia", "VillageWalk"],
        housingContext: "Wellington cleaning needs range from planned-community family homes to larger equestrian properties. Outdoor activity can bring dust and tracked soil into mudrooms, entries, laundry areas, and hard-floor living spaces.",
        cleaningPriorities: ["Entry and mudroom floors", "Dust from outdoor activity", "Large-home zone planning", "Guest and event preparation"],
        faqs: [
            { question: "How do you plan cleaning for a Wellington equestrian property?", answer: "The house-cleaning scope should be separate from barns or animal facilities, with clear attention to entries, mudrooms, laundry areas, floors, and dust-prone indoor zones." },
            { question: "Can service be scheduled before an event or seasonal arrival?", answer: "Yes. Book early and identify guest rooms, entertaining areas, kitchens, baths, and any specialty surfaces that need priority." },
        ],
    },
];

export const services: Service[] = [
    {
        name: "House Cleaning",
        slug: "house-cleaning",
        keywords: ["residential cleaning", "maid service", "home cleaners", "professional house cleaning", "local house cleaners"],
        description: "Regular house cleaning—dust, vacuum, mop, kitchens, and baths—so your home stays livable between busy Florida weeks.",
        image: "/images/house-cleaning.jpg",
    },
    {
        name: "Apartment Cleaning",
        slug: "apartment-cleaning",
        keywords: ["condo cleaning", "apartment maid service", "loft cleaning", "studio cleaning"],
        description: "Apartment and condo cleaning that works with elevators, tight square footage, and shared-building access rules.",
        image: "/images/apartment-cleaning.jpg",
    },
    {
        name: "Turnover Cleaning",
        slug: "turnover-cleaning",
        keywords: ["property turnover cleaning", "unit turnover cleaners", "rental turnover cleaning", "apartment turnover service"],
        description: "Checklist-driven turnover cleaning for rentals and managed units—ready for the next tenant or guest, with photo verification when you ask.",
        image: "/images/turnover-cleaning.jpg",
    },
    {
        name: "Move-Out Cleaning",
        slug: "move-out-cleaning",
        keywords: ["move out cleaning", "end of tenancy clean", "empty house cleaning", "deposit recovery cleaning"],
        description: "Empty-home move-out cleaning: cabinets, appliances, baseboards, and the details landlords check before returning a deposit.",
        image: "/images/move-out-cleaning.jpg",
    },
    {
        name: "Post-Construction Cleaning",
        slug: "post-construction-cleaning",
        keywords: ["construction cleanup", "builder dust cleaning", "renovation cleaning", "post remodel cleaning"],
        description: "Post-construction cleanup for drywall dust, debris, and residue after the contractors leave—so the space is actually usable.",
        image: "/images/post-construction-cleaning.jpg",
    },
    {
        name: "Airbnb Cleaning",
        slug: "airbnb-cleaning",
        keywords: ["vacation rental turnover", "vrbo cleaning", "short term rental cleaner", "turnaround cleaning"],
        description: "Airbnb and vacation-rental turnovers on a guest-ready checklist—beds, baths, restocking notes, and a quick reset between checkouts.",
        image: "/images/airbnb-cleaning.jpg",
    },
    {
        name: "Commercial Cleaning",
        slug: "commercial-cleaning",
        keywords: ["business cleaners", "janitorial services", "workspace cleaning", "commercial janitorial Florida"],
        description: "Commercial cleaning for retail and small business spaces—floors, restrooms, and customer-facing areas on a schedule that fits your hours.",
        image: "/images/commercial-cleaning.jpg",
    },
    {
        name: "Office Cleaning",
        slug: "office-cleaning",
        keywords: ["office cleaning", "office janitorial", "workspace sanitation", "after hours office cleaners"],
        description: "After-hours office cleaning for desks, restrooms, kitchens, and shared spaces so the team walks into a workable workspace.",
        image: "/images/office-cleaning.jpg",
    },
    {
        name: "Restaurant & Cafe Cleaning",
        slug: "restaurant-cafe-cleaning",
        keywords: ["restaurant cleaning", "cafe cleaning", "kitchen deep clean", "dining room sanitation"],
        description: "Restaurant and cafe cleaning for dining rooms, restrooms, and kitchen-adjacent zones, timed around service—not during it.",
        image: "/images/restaurant-cleaning.jpg",
    },
];

/** Phase 1 core + sub-entities for schema about/mentions */
export const coreEntities = [
    { name: "Florida Professional Cleaning Services", type: "Service" as const },
    { name: "Residential House Cleaning", type: "Service" as const },
    { name: "Short-Term Rental Turnover Cleaning", type: "Service" as const },
    { name: "Move-Out Cleaning", type: "Service" as const },
    { name: "Commercial Office Cleaning", type: "Service" as const },
    { name: "Florida Metro Service Areas", type: "Place" as const },
];

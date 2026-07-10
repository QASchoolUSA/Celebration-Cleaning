export interface City {
    name: string;
    slug: string;
    region: string;
    county: string;
    description: string;
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
        description: "Premier cleaning services for homes and businesses in vibrant Miami, offering spotless results for your coastal lifestyle.",
    },
    {
        name: "Orlando",
        slug: "orlando",
        region: "Central Florida",
        county: "Orange",
        description: "Top-rated cleaning services in Orlando. We keep your home or vacation rental sparkling clean year-round.",
    },
    {
        name: "Tampa",
        slug: "tampa",
        region: "Tampa Bay",
        county: "Hillsborough",
        description: "Professional and reliable cleaning services across Tampa Bay, dedicated to maintaining your pristine spaces.",
    },
    {
        name: "Jacksonville",
        slug: "jacksonville",
        region: "North Florida",
        county: "Duval",
        description: "Expert cleaning solutions in Jacksonville, providing thorough and dependable service for every neighborhood.",
    },
    {
        name: "Naples",
        slug: "naples",
        region: "Southwest Florida",
        county: "Collier",
        description: "Luxury cleaning services for the distinguished homes of Naples. Meticulous attention to detail for your estate or condo.",
    },
    {
        name: "Boca Raton",
        slug: "boca-raton",
        region: "South Florida",
        county: "Palm Beach",
        description: "Exclusive cleaning services tailored for Boca Raton residences, delivering an unparalleled level of cleanliness and care.",
    },
    {
        name: "Palm Beach",
        slug: "palm-beach",
        region: "South Florida",
        county: "Palm Beach",
        description: "Elite home and estate cleaning services in Palm Beach, where perfection and discretion meet.",
    },
    {
        name: "Fort Lauderdale",
        slug: "fort-lauderdale",
        region: "South Florida",
        county: "Broward",
        description: "Comprehensive home and commercial cleaning in Fort Lauderdale. Enjoy a spotless interior to match the beautiful outdoors.",
    },
    {
        name: "Sarasota",
        slug: "sarasota",
        region: "Southwest Florida",
        county: "Sarasota",
        description: "Premium cleaning services in Sarasota. We ensure your home shines as brightly as our Gulf Coast beaches.",
    },
    {
        name: "Coral Gables",
        slug: "coral-gables",
        region: "South Florida",
        county: "Miami-Dade",
        description: "White-glove residential cleaning in Coral Gables. Preserving the beauty and elegance of your historic or modern home.",
    },
    {
        name: "Winter Park",
        slug: "winter-park",
        region: "Central Florida",
        county: "Orange",
        description: "Bespoke cleaning services for Winter Park. We bring meticulous care to every home, mirroring the beauty of your community.",
    },
    {
        name: "Windermere",
        slug: "windermere",
        region: "Central Florida",
        county: "Orange",
        description: "Luxury cleaning for Windermere estates. Trust our expert team to maintain your home to the highest possible standards.",
    },
    {
        name: "Coral Springs",
        slug: "coral-springs",
        region: "South Florida",
        county: "Broward",
        description: "Trusted local cleaning services in Coral Springs, dedicated to keeping your family home healthy and spotless.",
    },
    {
        name: "Wellington",
        slug: "wellington",
        region: "South Florida",
        county: "Palm Beach",
        description: "Premier residential cleaning in Wellington. Exceptional service tailored for equestrian estates and family homes alike.",
    },
];

export const services: Service[] = [
    {
        name: "House Cleaning",
        slug: "house-cleaning",
        keywords: ["residential cleaning", "maid service", "home cleaners", "professional house cleaning", "local house cleaners"],
        description: "Comprehensive house cleaning services tailored to your family's needs. We sanitize, dust, vacuum, and mop to create a healthy, joyful living space.",
        image: "/images/house-cleaning.jpg",
    },
    {
        name: "Apartment Cleaning",
        slug: "apartment-cleaning",
        keywords: ["condo cleaning", "apartment maid service", "loft cleaning", "studio cleaning"],
        description: "Efficient and thorough apartment and condo cleaning. Maximize your space with our detailed cleaning that leaves every corner spotless.",
        image: "/images/apartment-cleaning.jpg",
    },
    {
        name: "Turnover Cleaning",
        slug: "turnover-cleaning",
        keywords: ["property turnover cleaning", "unit turnover cleaners", "rental turnover cleaning", "apartment turnover service"],
        description: "Fast, checklist-driven turnover cleaning for rentals and managed properties. Ready for the next tenant or guest with photo-verified results.",
        image: "/images/turnover-cleaning.jpg",
    },
    {
        name: "Move-Out Cleaning",
        slug: "move-out-cleaning",
        keywords: ["move out cleaning", "end of tenancy clean", "empty house cleaning", "deposit recovery cleaning"],
        description: "Stress-free move-out cleaning that helps protect deposits and impress landlords. Every cabinet, appliance, and baseboard gets attention.",
        image: "/images/move-out-cleaning.jpg",
    },
    {
        name: "Post-Construction Cleaning",
        slug: "post-construction-cleaning",
        keywords: ["construction cleanup", "builder dust cleaning", "renovation cleaning", "post remodel cleaning"],
        description: "Specialized post-construction cleaning that removes fine drywall dust, debris, and residue so your newly finished space is truly livable.",
        image: "/images/post-construction-cleaning.jpg",
    },
    {
        name: "Airbnb Cleaning",
        slug: "airbnb-cleaning",
        keywords: ["vacation rental turnover", "vrbo cleaning", "short term rental cleaner", "turnaround cleaning"],
        description: "Reliable Airbnb and vacation rental cleaning. Ensure 5-star reviews with our meticulous turnover services, complete with restocking and staging.",
        image: "/images/airbnb-cleaning.jpg",
    },
    {
        name: "Commercial Cleaning",
        slug: "commercial-cleaning",
        keywords: ["business cleaners", "janitorial services", "workspace cleaning", "commercial janitorial Florida"],
        description: "Professional commercial cleaning for retail and business spaces. Create a hygienic, welcoming environment for clients and staff.",
        image: "/images/commercial-cleaning.jpg",
    },
    {
        name: "Office Cleaning",
        slug: "office-cleaning",
        keywords: ["office cleaning", "office janitorial", "workspace sanitation", "after hours office cleaners"],
        description: "Discreet after-hours office cleaning that keeps desks, restrooms, and shared spaces productive and professional every morning.",
        image: "/images/office-cleaning.jpg",
    },
    {
        name: "Restaurant & Cafe Cleaning",
        slug: "restaurant-cafe-cleaning",
        keywords: ["restaurant cleaning", "cafe cleaning", "kitchen deep clean", "dining room sanitation"],
        description: "FOH and BOH restaurant and cafe cleaning aligned with busy service schedules—dining rooms, restrooms, and kitchen-adjacent zones.",
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

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
        description: "Top-rated cleaning services in Orlando. We keep your home or exact vacation rental sparkling clean year-round.",
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
    }
];

export const services: Service[] = [
    {
        name: "House Cleaning",
        slug: "house-cleaning",
        keywords: ["residential cleaning", "maid service", "home cleaners", "professional house cleaning", "local house cleaners"],
        description: "Comprehensive house cleaning services tailored to your family's needs. We sanitize, dust, vacuum, and mop to create a healthy, joyful living space.",
    },
    {
        name: "Apartment Cleaning",
        slug: "apartment-cleaning",
        keywords: ["condo cleaning", "apartment maid service", "loft cleaning", "studio cleaning"],
        description: "Efficient and thorough apartment and condo cleaning. Maximize your space with our detailed cleaning that leaves every corner spotless.",
    },
    {
        name: "Airbnb Cleaning",
        slug: "airbnb-cleaning",
        keywords: ["vacation rental turnover", "vrbo cleaning", "short term rental cleaner", "turnaround cleaning"],
        description: "Reliable Airbnb and vacation rental cleaning. Ensure 5-star reviews with our meticulous turnover services, complete with restocking and staging.",
    },
    {
        name: "Commercial Cleaning",
        slug: "commercial-cleaning",
        keywords: ["office cleaning", "business cleaners", "janitorial services", "workspace cleaning"],
        description: "Professional commercial and office cleaning. Create a productive, hygienic environment for your employees and a welcoming space for your clients.",
    },
    {
        name: "Pressure Washing",
        slug: "pressure-washing",
        keywords: ["power washing", "driveway cleaning", "exterior house washing", "patio cleaning"],
        description: "Transform your home's exterior with our professional pressure washing. We safely remove grime, mold, and dirt from driveways, patios, and siding.",
    },
    {
        name: "Carpet Cleaning",
        slug: "carpet-cleaning",
        keywords: ["rug cleaning", "stain removal", "steam cleaning", "deep carpet wash"],
        description: "Revitalize your floors with our deep carpet cleaning services. We remove tough stains and allergens, extending the life of your carpets.",
    },
    {
        name: "Maintenance Cleaning",
        slug: "maintenance-cleaning",
        keywords: ["recurring cleaning", "weekly cleaning", "bi-weekly maid service", "regular house cleaning"],
        description: "Keep your home consistently beautiful with our recurring maintenance cleaning. Choose weekly, bi-weekly, or monthly schedules to suit your lifestyle.",
    },
    {
        name: "Deep Cleaning",
        slug: "deep-cleaning",
        keywords: ["spring cleaning", "heavy duty cleaning", "detailed cleaning", "one time deep clean"],
        description: "Our intensive deep cleaning reaches the hidden dirt and grime. Perfect for spring cleaning, preparing for events, or an annual refresh.",
    },
    {
        name: "Move-In/Move-Out Cleaning",
        slug: "move-in-move-out",
        keywords: ["move out cleaning", "move in cleaning", "end of tenancy clean", "empty house cleaning"],
        description: "Stress-free moving with our comprehensive move-in and move-out cleaning. We ensure the property is immaculate for the next occupants or your arrival.",
    }
];

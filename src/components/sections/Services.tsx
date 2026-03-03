
import Link from "next/link";
import { Home, Briefcase, Truck, Sparkles, ArrowRight } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Residential Cleaning",
            description: "Meticulous housekeeping to keep your home fresh and inviting. Choose weekly, bi-weekly, or monthly intervals.",
            icon: Home,
            href: "/services/residential",
            color: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-blue-500"
        },
        {
            title: "Deep Cleaning",
            description: "An intensive top-to-bottom clean. Reaches the hidden dirt and grime perfect for an annual refresh.",
            icon: Sparkles,
            href: "/services/deep-cleaning",
            color: "from-secondary/20 to-orange-500/20",
            iconColor: "text-secondary"
        },
        {
            title: "Move-In / Move-Out",
            description: "Ensure a flawless start or a pristine handover with our comprehensive turnover cleaning services.",
            icon: Truck,
            href: "/services/moving",
            color: "from-emerald-500/20 to-teal-500/20",
            iconColor: "text-emerald-500"
        },
        {
            title: "Commercial Spaces",
            description: "Cultivate a professional, hygienic environment for your business with our discreet office solutions.",
            icon: Briefcase,
            href: "/services/commercial",
            color: "from-primary/20 to-indigo-500/20",
            iconColor: "text-primary"
        },
    ];

    return (
        <section className="py-24 bg-white relative">
            {/* Soft grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container relative mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-SM font-bold tracking-widest text-primary uppercase">Our Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        Tailored Cleaning Solutions
                    </h3>
                    <p className="text-xl text-slate-600">
                        From a quick touch-up to an intensive deep scrub, experience unparalleled cleanliness customized to your exact needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div key={service.title} className="group relative">
                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                            <Link
                                href={service.href}
                                className="relative flex flex-col h-full p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
                            >
                                {/* Decorative Gradient Blob */}
                                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-in-out`}></div>

                                <div className={`relative z-10 h-14 w-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mb-6`}>
                                    <service.icon className={`h-7 w-7 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                                </div>
                                <h4 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h4>
                                <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">Learn More</span>
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

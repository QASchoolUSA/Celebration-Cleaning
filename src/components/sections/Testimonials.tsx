
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Homeowner",
        content: "They showed up on time, worked through the checklist we agreed on, and the kitchen and baths actually looked done—not just wiped. I've kept them on biweekly.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Business Owner",
        content: "They clean our office after we leave. Desks, restrooms, kitchen—it's ready when we open. We don't have to chase anyone for a reschedule.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Busy Mom",
        content: "I stopped spending Saturdays scrubbing bathrooms. Same crew most weeks, they know where the pets go, and I can text if something needs extra attention.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What customers tell us</h2>
                    <p className="text-lg text-muted-foreground">
                        A few notes from homeowners and offices we clean regularly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-secondary/20 hover:border-secondary/40 transition-colors space-y-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Star className="h-24 w-24 text-secondary fill-secondary transform rotate-12 translate-x-8 -translate-y-8" />
                            </div>
                            <div className="flex gap-1 relative z-10">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic relative z-10">"{testimonial.content}"</p>
                            <div className="pt-4 border-t border-secondary/10 relative z-10">
                                <p className="font-bold text-primary">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

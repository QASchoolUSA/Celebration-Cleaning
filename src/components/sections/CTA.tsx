
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready for a Sparkling Home?</h2>
                <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                    Book your first cleaning today and get 20% off! Experience the difference professional care makes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Button asChild size="lg" variant="secondary" className="text-lg px-8 h-12 rounded-full font-bold">
                        <Link href="/contact">Book Now</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-lg px-8 h-12 rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

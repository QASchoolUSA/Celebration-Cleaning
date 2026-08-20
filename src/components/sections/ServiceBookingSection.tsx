import BookingForm from "@/components/BookingForm";

export default function ServiceBookingSection() {
  return (
    <section id="booking" className="border-t bg-muted/30 py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Book online
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Get your instant quote
          </h2>
          <p className="mt-3 text-muted-foreground">
            No payment required now — pay only after your cleaning is complete.
          </p>
        </div>
        <div className="mt-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

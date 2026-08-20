import BookingWidgetLoader from "./BookingWidgetLoader";
import { getPricingConfig } from "@/lib/pricing-config";

export default async function BookingForm({ className }: { className?: string }) {
  const config = await getPricingConfig();

  return (
    <div className={className}>
      <BookingWidgetLoader config={config} />
    </div>
  );
}

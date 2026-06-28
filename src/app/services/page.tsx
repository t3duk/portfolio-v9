import { ServicesPage } from "@/components/services/services-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "ted.ac Services — bespoke development, consultancy, hosting, and terms of service.",
  path: "/services",
});

export default function Page() {
  return <ServicesPage />;
}
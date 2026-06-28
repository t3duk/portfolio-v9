import { PgpPage } from "@/components/pgp/pgp-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "PGP",
  description:
    "Ted Brine's PGP public key and fingerprint for encrypted communication and signature verification.",
  path: "/pgp",
});

export default function Page() {
  return <PgpPage />;
}
import { Loader2, TriangleAlert } from "lucide-react";
import { Suspense } from "react";
import { CodeBlock } from "@/components/content/prose";

const FINGERPRINT_URL =
  "https://openpgpkey.ted.ac/.well-known/openpgpkey/ted.ac/hu/aeii9rmagouy1owpp7e5ftpxjof7h41n.fingerprint";

const FingerprintContent = async () => {
  const res = await fetch(FINGERPRINT_URL, {
    next: { revalidate: 60 * 60 },
  });

  if (!res.ok) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <TriangleAlert className="size-4" />
        <span>Error downloading fingerprint</span>
      </div>
    );
  }

  const data = await res.text();

  return <CodeBlock>{data}</CodeBlock>;
};

const FingerprintFallback = () => {
  return (
    <div className="flex items-center gap-2 text-muted-foreground text-sm">
      <Loader2 className="size-4 animate-spin" />
      <span>Downloading fingerprint…</span>
    </div>
  );
};

export const PgpFingerprint = () => {
  return (
    <Suspense fallback={<FingerprintFallback />}>
      <FingerprintContent />
    </Suspense>
  );
};
"use client";

import { Loader2, TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { CodeBlock } from "@/components/content/prose";

const PGP_KEY_URL =
  "https://openpgpkey.ted.ac/.well-known/openpgpkey/ted.ac/hu/aeii9rmagouy1owpp7e5ftpxjof7h41n";

export const PgpKey = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(PGP_KEY_URL);
        if (!res.ok) throw new Error("Failed to fetch PGP key");
        const text = await res.text();
        if (!cancelled) {
          setData(text);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-32 items-center justify-center rounded-md border border-foreground/7 bg-foreground/5 px-4 py-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Loader2 className="size-4 animate-spin" />
          <span>Downloading public key…</span>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-32 items-center justify-center rounded-md border border-foreground/7 bg-foreground/5 px-4 py-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <TriangleAlert className="size-4" />
          <span>Something went wrong downloading the PGP key.</span>
        </div>
      </div>
    );
  }

  return (
    <CodeBlock className="max-h-64 whitespace-pre-wrap">{data}</CodeBlock>
  );
};
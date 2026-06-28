import Link from "next/link";
import { CodeBlock, Prose } from "@/components/content/prose";
import { PgpFingerprint } from "@/components/pgp/pgp-fingerprint";
import { PgpKey } from "@/components/pgp/pgp-key";
import { Signature } from "@/components/landing/signature";
import { ContentBox, PageShell } from "@/components/layout/shell";

export const PgpPage = () => {
  return (
    <PageShell>
      <ContentBox position="first" className="h-12 sm:h-16 md:h-24" />
      <ContentBox
        position="last"
        className="flex flex-col gap-6 px-6 py-6 sm:px-10 sm:py-8"
      >
        <Prose>
          <h1>PGP</h1>
          <p>
            My PGP Public Key can be used to send me encrypted messages or verify
            my signatures — either from emails, files or commits. My PGP Public
            Key has been generated from my YubiKey, and the subkeys within this
            &quot;master&quot; key are used for either encryption, signing or
            authentication. Please make sure that you use the correct subkey.
          </p>
          <p>
            You can automatically download my PGP Public Key by running this
            command:
          </p>
        </Prose>

        <CodeBlock>gpg --locate-keys hi@ted.ac</CodeBlock>

        <PgpKey />

        <Prose>
          <p>
            This assumes that your network is trusted and that nobody has
            tampered with your connection. You can also check the fingerprint of
            my PGP Public Key to verify its authenticity:
          </p>
        </Prose>

        <PgpFingerprint />

        <Prose>
          <p>
            For security disclosures, see{" "}
            <Link href="/security.txt">security.txt</Link>.
          </p>
        </Prose>
      </ContentBox>
      <Signature />
    </PageShell>
  );
};
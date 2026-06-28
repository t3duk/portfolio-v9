import { site } from "@/lib/site";

export const Signature = () => {
  return (
    // biome-ignore lint/performance/noImgElement: decorative signature image
    <img
      src={site.assets.signature}
      className="mx-auto my-16 w-20"
      alt="Signature"
      width={128}
      height={128}
    />
  );
};

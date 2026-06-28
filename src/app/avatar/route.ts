import { NextResponse } from "next/server";

export const GET = async () => {
  const image = await fetch("https://galileo.ted.ac/avatar.png", {
    next: {
      revalidate: 60 * 60 * 24 * 7,
      tags: ["avatar", "all"],
    },
  });

  const imageBlob = new Blob([new Uint8Array(await image.arrayBuffer())], {
    type: "image/png",
  });

  return new NextResponse(imageBlob, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
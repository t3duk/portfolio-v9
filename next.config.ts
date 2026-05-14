import { withGTConfig } from "gt-next/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.17.9.113"],

  reactCompiler: true,
};

export default withGTConfig(nextConfig);

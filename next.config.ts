import type { NextConfig } from "next";

const pdfConvertDisabledOnVercel =
  process.env.VERCEL === "1" && process.env.ENABLE_PDF_CONVERT_SERVER !== "1";

const nextConfig: NextConfig = {
  serverExternalPackages: ['canvas'],
  env: {
    NEXT_PUBLIC_PDF_CONVERT_DISABLED: pdfConvertDisabledOnVercel ? "1" : "",
  },
};

export default nextConfig;
